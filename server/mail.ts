import nodemailer from 'nodemailer';

// Email configuration
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use STARTTLS (secure: false) for port 587
  requireTLS: true, // Force using STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// Create transporter with TLS settings to fix certificate issues
const transporter = nodemailer.createTransport({
  ...smtpConfig,
  tls: {
    // Do not fail on invalid certificates
    rejectUnauthorized: false
  }
});

// Verify the connection
transporter.verify((error: any) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Interface for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Send email from contact form
 */
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Email content
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

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}