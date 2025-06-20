const axios = require('axios');
const nodemailer = require('nodemailer');

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

// Send email function
async function sendContactEmail(data) {
  try {
    const transporter = nodemailer.createTransporter(smtpConfig);
    
    const mailOptions = {
      from: `"${data.name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject: `New AI Chat Contact from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3366cc; border-bottom: 1px solid #eee; padding-bottom: 10px;">New AI Chat Contact</h2>
  
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
    <p>This contact was initiated through the AI chat on your website.</p>
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

exports.handler = async (event, context) => {
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
    const { message, action, contactData } = JSON.parse(event.body);
    
    // Handle contact form submission
    if (action === 'submit_contact') {
      const { name, email, phone, message: contactMessage } = contactData;
      
      // Validate required fields
      if (!name || !email || !contactMessage) {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            success: false,
            message: "Please provide your name, email, and message." 
          }),
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
          body: JSON.stringify({ 
            success: false,
            message: "Please provide a valid email address." 
          }),
        };
      }
      
      // Send email
      const emailSent = await sendContactEmail({ name, email, phone, message: contactMessage });
      
      if (!emailSent) {
        return {
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            success: false,
            message: "I'm having trouble sending your message. Please try again or contact us directly at connectme@myrsv.com." 
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
          message: "Thank you! Your message has been sent successfully. Our team will get back to you soon.",
          action: 'contact_sent'
        }),
      };
    }

    // Handle regular AI chat
    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Message is required' }),
      };
    }

    // Check if OpenAI API key is available
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: false,
          message: "AI service is not configured. Please contact support."
        }),
      };
    }

    // Call OpenAI API with updated system prompt
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are RSV Infotech's AI assistant. You can ONLY provide information that is available on the RSV Infotech website. 

COMPANY INFORMATION:
- Company Name: RSV Infotech
- Website: myrsv.com
- Contact Email: connectme@myrsv.com (from the website)
- Experience: 20+ years of delivering exceptional IT solutions
- Clients: 100+ happy clients across Singapore and beyond
- Support: 24/7 round-the-clock technical support and monitoring

SERVICES OFFERED (from the website):
1. Managed IT Services - 24/7 monitoring, proactive maintenance, help desk
2. Cloud Computing & Hosting - Public/private/hybrid cloud, IaaS/PaaS/SaaS, migration
3. VoIP / IP Telephony - Business phone systems, video conferencing, unified communications
4. IT Security - Network security, endpoint protection, security audits
5. Data Backup & Recovery - Automated backup, business continuity, disaster recovery
6. Custom Software Development - Web/mobile apps, Windows desktop, SaaS platforms
7. AI-powered Business Automation - Workflow automation, machine learning, predictive analytics
8. Firewall & VPN Solutions - Next-gen firewall, secure remote access, network monitoring

IMPORTANT RULES:
- When customers want to contact you, collect their details instead of just giving contact info
- Ask for: Name, Email, Phone (optional), and their message
- Tell them you'll send their information to the team
- DO NOT make up phone numbers, addresses, or other contact details
- DO NOT provide pricing information - direct customers to contact the team
- ONLY reference services that are actually listed on the website
- Be professional, helpful, and concise
- Be friendly and welcoming in your responses
- If asked about anything not on the website, suggest contacting the team directly`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const aiResponse = response.data.choices[0].message.content;
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true,
        message: aiResponse,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error("Error in AI chat:", error);
    
    // Handle OpenAI API errors
    if (error.response) {
      console.error("OpenAI API Error:", error.response.data);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          success: false,
          message: "I'm having trouble connecting to the AI service. Please try again in a moment."
        }),
      };
    }
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: false,
        message: "Sorry, I'm having trouble processing your request. Please try again."
      }),
    };
  }
}; 