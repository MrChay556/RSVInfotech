# Netlify Environment Variables Setup

This guide will help you set up all the necessary environment variables in Netlify for your RSV Infotech website.

## 🔧 Required Environment Variables

### Email Configuration (for Contact Form)
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
EMAIL_FROM=your_from_email@domain.com
EMAIL_TO=your_to_email@domain.com
```

### reCAPTCHA Configuration
```
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 📧 Email Service Options

### Option 1: Gmail SMTP
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
EMAIL_TO=contact@myrsv.com
```

### Option 2: SendGrid SMTP
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
EMAIL_FROM=noreply@myrsv.com
EMAIL_TO=contact@myrsv.com
```

### Option 3: Outlook/Hotmail SMTP
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your_email@outlook.com
SMTP_PASS=your_password
EMAIL_FROM=your_email@outlook.com
EMAIL_TO=contact@myrsv.com
```

## 🔐 reCAPTCHA Setup

1. **Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)**
2. **Create a new site**
3. **Choose reCAPTCHA v3**
4. **Add your domains:**
   - `your-site.netlify.app`
   - `myrsv.com` (if you have a custom domain)
5. **Get your keys:**
   - **Site Key**: Use for `VITE_RECAPTCHA_SITE_KEY`
   - **Secret Key**: Use for `RECAPTCHA_SECRET_KEY`

## 🚀 How to Set Environment Variables in Netlify

### Method 1: Netlify Dashboard
1. Go to your site in [Netlify Dashboard](https://app.netlify.com)
2. Click on **Site settings**
3. Go to **Environment variables**
4. Click **Add a variable**
5. Add each variable one by one

### Method 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Set environment variables
netlify env:set SMTP_HOST smtp.gmail.com
netlify env:set SMTP_PORT 587
netlify env:set SMTP_USER your_email@gmail.com
netlify env:set SMTP_PASS your_app_password
netlify env:set EMAIL_FROM your_email@gmail.com
netlify env:set EMAIL_TO contact@myrsv.com
netlify env:set RECAPTCHA_SECRET_KEY your_secret_key
netlify env:set VITE_RECAPTCHA_SITE_KEY your_site_key
```

## 🔍 Testing Your Setup

### Test Contact Form
1. Deploy your site to Netlify
2. Go to the contact form
3. Fill out the form and submit
4. Check if you receive the email
5. Check Netlify function logs for any errors

### Check Function Logs
1. Go to your Netlify dashboard
2. Click on **Functions**
3. Click on the **contact** function
4. Check the **Logs** tab for any errors

## 🛠️ Troubleshooting

### Common Issues:

1. **Email not sending:**
   - Check SMTP credentials
   - Verify SMTP host and port
   - Check if your email provider allows SMTP access

2. **reCAPTCHA not working:**
   - Verify site key and secret key
   - Check domain configuration in reCAPTCHA admin
   - Ensure keys are correctly set in environment variables

3. **Function errors:**
   - Check Netlify function logs
   - Verify all environment variables are set
   - Check if dependencies are properly installed

### Gmail App Password Setup
If using Gmail, you need to create an App Password:
1. Go to Google Account settings
2. Enable 2-factor authentication
3. Go to Security → App passwords
4. Generate a new app password
5. Use this password in `SMTP_PASS`

## 📝 Example Configuration

Here's a complete example for Gmail:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
EMAIL_FROM=your_email@gmail.com
EMAIL_TO=contact@myrsv.com

# reCAPTCHA Configuration
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 🔒 Security Notes

- Never commit environment variables to Git
- Use strong, unique passwords for SMTP
- Regularly rotate your reCAPTCHA keys
- Monitor function logs for suspicious activity
- Consider using environment-specific configurations

## 📞 Support

If you encounter issues:
1. Check the Netlify function logs
2. Verify all environment variables are set correctly
3. Test your SMTP configuration locally
4. Check the reCAPTCHA configuration
5. Review the troubleshooting section above 