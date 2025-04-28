# RSV Infotech Website - Plesk Deployment Guide

This folder contains everything you need to deploy the RSV Infotech website to Plesk.

## Option 1: Static Website Deployment (Recommended)

1. **Prepare for Upload**
   - Copy all files from the `public` folder in this package

2. **Upload to Plesk**
   - Login to your Plesk control panel
   - Go to **Websites & Domains**
   - Click on your domain (e.g., crm.myrsv.com)
   - Click on **File Manager**
   - Navigate to your document root (e.g., `/var/www/vhosts/myrsv.com/crm.myrsv.com/httpdocs`)
   - Upload all the files from the `public` folder to this location

3. **Configure Document Root**
   - Go back to **Websites & Domains**
   - Click on your domain
   - Click on **Hosting Settings**
   - Ensure the **Document root** points to the folder where you uploaded the files
   - Click **OK** to save

4. **Disable Node.js (If Applicable)**
   - If Node.js is currently enabled for this domain:
   - Go to **Websites & Domains** → your domain → **Node.js**
   - Click on **Disable Node.js**

5. **Set Correct File Permissions**
   - Using Plesk's File Manager:
     - Select all files and folders
     - Right-click and choose "Change Permissions"
     - Set directories to 755 and files to 644

## Option 2: Node.js Application Deployment

1. **Upload to Plesk**
   - Login to your Plesk control panel
   - Go to **Websites & Domains**
   - Click on your domain (e.g., crm.myrsv.com)
   - Click on **File Manager**
   - Navigate to your domain's root directory
   - Upload the entire content of this package (including the `public` folder, `server.js`, and `package.json`)

2. **Configure Node.js**
   - Go to **Websites & Domains**
   - Click on your domain
   - Click on **Node.js**
   - Configure the following settings:
     - **Application mode**: Production
     - **Document root**: Set to your uploaded directory
     - **Application startup file**: `server.js`
     - **Application URL**: Your domain URL (e.g., http://crm.myrsv.com)
   - Click **OK** to save

3. **Install Dependencies & Start Application**
   - Go to **Websites & Domains**
   - Click on your domain
   - Click on **Node.js**
   - Click on **Run Node.js commands**
   - Execute: `npm install`
   - Return to the Node.js management page
   - Click **Restart App**

## Troubleshooting

If you encounter issues:

1. **Check error logs**
   - In Plesk, go to **Websites & Domains** → your domain → **Logs**
   - Review Apache/nginx error logs or Node.js application logs

2. **Verify index.html**
   - Make sure the `index.html` file is in the root of your web directory
   - For Node.js deployment, ensure it's in the `public` folder

3. **Test basic file access**
   - Try accessing a simple file, like `/test.html`, to verify basic file serving

4. **Check .htaccess (for Apache)**
   - Ensure the `.htaccess` file is correctly uploaded and has proper permissions

5. **Clear browser cache**
   - Use incognito/private mode or clear browser cache to test with fresh requests