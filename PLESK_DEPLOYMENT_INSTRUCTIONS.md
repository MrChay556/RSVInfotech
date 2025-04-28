# Plesk Deployment Instructions for RSV Infotech Website

## Option 1: Static Website Deployment (Simplest)

1. **Prepare your files**
   - Create a folder named `public_html` on your local machine
   - Copy the entire contents of the `dist` folder from your development environment into this folder
   - Add a `.htaccess` file to the `public_html` folder with the following content:
     ```
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

2. **Upload to Plesk**
   - Login to your Plesk control panel
   - Go to **Websites & Domains**
   - Click on your domain (e.g., crm.myrsv.com)
   - Click on **File Manager**
   - Navigate to your document root (usually `/var/www/vhosts/myrsv.com/crm.myrsv.com`)
   - Upload the entire contents of your `public_html` folder to this location

3. **Configure Document Root**
   - Go back to **Websites & Domains**
   - Click on your domain
   - Click on **Hosting Settings**
   - Set the **Document root** to point to the folder where you uploaded the files
   - Click **OK** to save

4. **Disable Node.js (Important)**
   - If Node.js is currently enabled for this domain:
   - Go to **Websites & Domains**
   - Click on your domain
   - Click on **Node.js**
   - Click on **Disable Node.js**
   - Confirm when prompted

5. **Set Correct File Permissions**
   - Using Plesk's File Manager:
     - Select all files and folders
     - Right-click and choose "Change Permissions"
     - Set directories to 755 and files to 644

## Option 2: Node.js Application Deployment

1. **Prepare your files**
   - Copy `server.js` and `deploy-package.json` (rename to `package.json`) to your local machine
   - Create a folder named `public` on your local machine
   - Copy the entire contents of the `dist` folder from your development environment into this folder

2. **Upload to Plesk**
   - Login to your Plesk control panel
   - Go to **Websites & Domains**
   - Click on your domain (e.g., crm.myrsv.com)
   - Click on **File Manager**
   - Navigate to your application root (usually `/var/www/vhosts/myrsv.com/crm.myrsv.com`)
   - Upload `server.js`, `package.json`, and the `public` folder to this location

3. **Configure Node.js**
   - Go to **Websites & Domains**
   - Click on your domain
   - Click on **Node.js**
   - Configure the following settings:
     - **Application mode**: Production
     - **Document root**: Set to the directory containing your `server.js` file
     - **Application startup file**: `server.js`
     - **Application URL**: Your domain URL (e.g., http://crm.myrsv.com)
   - Click **OK** to save

4. **Install Dependencies & Start Application**
   - Go to **Websites & Domains**
   - Click on your domain
   - Click on **Node.js**
   - Click on **Run Node.js commands**
   - Execute: `npm install`
   - Go back and click on **Node.js**
   - Click **Restart App**

## Troubleshooting

If you encounter issues:

1. **Check error logs**
   - In Plesk, go to **Websites & Domains** → your domain → **Logs**
   - Look at the **Error log** and **Node.js application log** (if applicable)

2. **Test basic static file serving**
   - Create a file named `test.html` with basic content
   - Upload it to your document root
   - Try accessing it at yourdomain.com/test.html

3. **Check file permissions**
   - Make sure your files are readable by the web server
   - Typical permissions are 755 for directories and 644 for files

4. **Clear browser cache**
   - Try accessing the site in an incognito/private window