# Deploying to Plesk with Phusion Passenger

This guide explains how to deploy the RSV Infotech website to a Plesk server using Phusion Passenger.

## Prerequisites

- A Plesk server with Node.js support
- Phusion Passenger installed on the server
- SSH or FTP access to the server
- Node.js 20.x or higher

## Build for Deployment

Before uploading to Plesk, you need to build the application:

```bash
# Install dependencies if not already installed
npm install

# Build for production
node build-for-passenger.js
```

This will create a `dist` folder with all the necessary files for deployment.

## Upload to Plesk

1. Upload the contents of the `dist` folder to your hosting space on the Plesk server
2. Make sure to preserve the directory structure

## Configure in Plesk Panel

1. Log in to your Plesk control panel
2. Go to Domains > yourdomain.com > Node.js
3. Click "Add Node.js Application"
4. Configure the application:
   - **Application mode**: Production
   - **Document root**: `/public` (or the directory containing your static files)
   - **Application root**: The directory containing `passenger.js`
   - **Application startup file**: `passenger.js`
   - **Node.js version**: Select 20.x or higher
   - **Application URL**: Your domain or subdomain URL
   - **Environment variables**: Add all your environment variables from your .env file

5. Click "OK" to save your settings

## Environment Variables

Create a `.env` file in the application root with these variables:

```
# Email SMTP configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=your-smtp-port
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=your-from-email
EMAIL_TO=your-to-email

# reCAPTCHA configuration
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

## Debugging Deployment Issues

If your application doesn't start properly:

1. Check the Node.js application logs in Plesk
2. Verify all environment variables are set correctly
3. Make sure `passenger.js` exists in the application root
4. Check that the Node.js version is 20.x or higher
5. Ensure Phusion Passenger is correctly installed and configured

## Restarting the Application

After making changes to environment variables or application files:

1. Go to Domains > yourdomain.com > Node.js
2. Find your application in the list
3. Click the "Restart" button

## Troubleshooting

### Common Issues:

1. **Application shows "Application Error"**:
   - Check if all required environment variables are set
   - Verify the application logs for specific errors
   - Make sure `passenger.js` is properly built and exists in the application root

2. **Static files not loading**:
   - Ensure the document root is correctly set to the directory containing your static files
   - Check if static files have the correct permissions

3. **API requests failing**:
   - Verify that your SMTP and reCAPTCHA environment variables are set correctly
   - Check the application logs for specific API errors

4. **Changes not reflecting on the site**:
   - Remember to restart the application after making changes
   - Clear your browser cache to see the latest changes

For further assistance, contact your development team or hosting provider.