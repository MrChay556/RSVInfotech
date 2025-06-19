import nodemailer from 'nodemailer';
import axios from 'axios';

// Email configuration
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
};

// reCAPTCHA verification function
async function verifyRecaptcha(token, expectedAction = 'submit_contact', minScore = 0.4) {
  if (!token) {
    console.warn('No reCAPTCHA token provided');
    return { isValid: false };
  }

  try {
    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY || '',
      response: token
    });

    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const data = response.data;
    
    if (!data.success) {
      console.warn('reCAPTCHA verification failed:', data['error-codes']);
      return { isValid: false };
    }

    if (typeof data.score === 'number' && data.score < minScore) {
      console.warn(`reCAPTCHA score too low: ${data.score} (threshold: ${minScore})`);
      return { isValid: false, score: data.score };
    }

    if (expectedAction && data.action !== expectedAction) {
      console.warn(`reCAPTCHA action mismatch: expected '${expectedAction}', got '${data.action}'`);
      return { isValid: false, score: data.score };
    }

    return { 
      isValid: true, 
      score: data.score
    };
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return { isValid: false };
  }
}

// Send email function
async function sendContactEmail(data) {
  try {
    const transporter = nodemailer.createTransporter(smtpConfig);
    
    const mailOptions = {
      from: `"${data.name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3366cc; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <div style="margin: 20px 0;">
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
  </div>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <h3 style="margin-top: 0; color: #333;">Message:</h3>
    <p style="white-space: pre-line;">${data.message}</p>
  </div>
  
  <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
    <p>This email was sent from the contact form on your website.</p>
  </div>
</div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export const handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, message, recaptchaToken } = JSON.parse(event.body);
    
    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: "Invalid email format" }),
      };
    }
    
    // Verify reCAPTCHA token if provided
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, 'submit_contact', 0.4);
      
      if (!recaptchaResult.isValid) {
        console.warn(`Suspicious form submission from ${email} - reCAPTCHA score: ${recaptchaResult.score}`);
        
        if (recaptchaResult.score !== undefined && recaptchaResult.score < 0.2) {
          return {
            statusCode: 403,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              success: false, 
              message: "Bot activity detected. Please try again later."
            }),
          };
        }
      }
    }
    
    // Send email
    const emailSent = await sendContactEmail({ name, email, phone, message });
    
    if (!emailSent) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: false, 
          message: "Failed to send email. Please try again later." 
        }),
      };
    }
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully." 
      }),
    };
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: "Server error while processing your request" 
      }),
    };
  }
}; 