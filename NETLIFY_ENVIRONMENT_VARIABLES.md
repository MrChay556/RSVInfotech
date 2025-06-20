# Netlify Environment Variables Setup

This guide explains how to set up the required environment variables for your RSV Infotech website deployment on Netlify.

## Required Environment Variables

### 1. Email Configuration (for Contact Form and AI Chat)
These variables are used by both the contact form and AI chat to send emails to your team.

```
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=connectme@myrsv.com
```

**Explanation:**
- `SMTP_HOST`: Your SMTP server hostname (e.g., smtp.gmail.com, smtp.office365.com)
- `SMTP_PORT`: SMTP port (usually 587 for TLS or 465 for SSL)
- `SMTP_USER`: Your SMTP username/email
- `SMTP_PASS`: Your SMTP password or app password
- `EMAIL_FROM`: The "from" email address (should match your SMTP user)
- `EMAIL_TO`: Where contact form submissions and AI chat contacts will be sent (connectme@myrsv.com)

### 2. AI Chat Configuration
```
OPENAI_API_KEY=your-openai-api-key
```

**Explanation:**
- `OPENAI_API_KEY`: Your OpenAI API key for the AI chat functionality

### 3. reCAPTCHA Configuration (Optional but Recommended)
```
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

**Explanation:**
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA secret key for spam protection

## How to Set Environment Variables in Netlify

### Method 1: Netlify Dashboard
1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add each variable with its corresponding value
6. Click **Save**

### Method 2: Netlify CLI
```bash
# Install Netlify CLI if you haven't already
npm install -g netlify-cli

# Login to Netlify
netlify login

# Set environment variables
netlify env:set SMTP_HOST your-smtp-host.com
netlify env:set SMTP_PORT 587
netlify env:set SMTP_USER your-smtp-username
netlify env:set SMTP_PASS your-smtp-password
netlify env:set EMAIL_FROM noreply@yourdomain.com
netlify env:set EMAIL_TO connectme@myrsv.com
netlify env:set OPENAI_API_KEY your-openai-api-key
netlify env:set RECAPTCHA_SECRET_KEY your-recaptcha-secret-key
```

## Email Service Setup Examples

### Gmail Setup
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=connectme@myrsv.com
```

**Note:** For Gmail, you need to use an App Password, not your regular password.

### Office 365 Setup
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
EMAIL_FROM=your-email@yourdomain.com
EMAIL_TO=connectme@myrsv.com
```

### Custom SMTP Setup
```
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=connectme@myrsv.com
```

## AI Chat Features

The AI chat now includes the following features:

1. **Intelligent Responses**: Uses OpenAI API to provide accurate information about RSV Infotech services
2. **Contact Collection**: When visitors want to get in touch, the AI collects their details:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Message (required)
3. **Email Sending**: Automatically sends collected contact information to connectme@myrsv.com
4. **Website-Accurate Information**: Only provides information that exists on the RSV Infotech website

## Testing Your Setup

After setting up the environment variables:

1. **Test Contact Form**: Go to the contact section and submit a test message
2. **Test AI Chat**: Open the chat and ask questions about services
3. **Test Contact Collection**: Ask the AI about contacting the team - it should collect your details

## Troubleshooting

### Email Not Sending
- Check SMTP credentials
- Verify SMTP host and port
- Ensure EMAIL_FROM matches SMTP_USER
- Check Netlify function logs for errors

### AI Chat Not Working
- Verify OPENAI_API_KEY is set correctly
- Check Netlify function logs for API errors
- Ensure the function is deployed properly

### reCAPTCHA Issues
- Verify RECAPTCHA_SECRET_KEY is correct
- Check that the site key is properly configured in the frontend

## Security Notes

- Never commit environment variables to your repository
- Use strong, unique passwords for SMTP accounts
- Consider using app passwords for Gmail/Google accounts
- Regularly rotate API keys and passwords
- Monitor Netlify function logs for suspicious activity

## Support

If you encounter issues:
1. Check Netlify function logs in the dashboard
2. Verify all environment variables are set correctly
3. Test with a simple email service first (like Gmail)
4. Contact support if problems persist 