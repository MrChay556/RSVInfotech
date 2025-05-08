// Build script for Phusion Passenger compatibility

import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

const buildDir = path.resolve('dist');

// Run commands one after another
async function runCommands() {
  try {
    console.log('🚀 Starting build process for Plesk/Passenger deployment...');
    
    // Step 1: Build the client using Vite
    console.log('\n📦 Building client with Vite...');
    await execPromise('vite build');
    
    // Step 2: Build the server entry points with esbuild
    console.log('\n🔧 Building server entry points...');
    await execPromise('esbuild server/index.ts server/passenger.ts --platform=node --packages=external --bundle --format=esm --outdir=dist');
    
    // Step 3: Create a .env.example file for Plesk
    console.log('\n📄 Creating .env.example file...');
    const envExample = 
`# Environment Configuration
NODE_ENV=production

# Email SMTP configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
EMAIL_FROM=no-reply@example.com
EMAIL_TO=recipient@example.com

# reCAPTCHA configuration
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
`;
    
    await fs.writeFile(path.join(buildDir, '.env.example'), envExample);
    
    // Step 4: Create a README for Plesk deployment
    console.log('\n📝 Creating deployment README...');
    const readmeContent = 
`# Deployment Instructions for Plesk

This application is configured to run under Phusion Passenger on Plesk.

## Configuration Steps

1. Upload the contents of this folder to your hosting space
2. In Plesk, go to Domains > example.com > Node.js
3. Create a new Node.js application with these settings:
   - Document root: Should point to the public directory
   - Application root: Should point to the directory containing passenger.js
   - Application startup file: passenger.js
   - Application mode: production
   - Node.js version: 20.x or later

4. Create a .env file based on the .env.example template
5. Restart the application after all settings are configured

## Troubleshooting

- Check the application logs in Plesk if the site doesn't load properly
- Ensure all required environment variables are set
- Check that the Passenger configuration is pointing to passenger.js

For support, contact your development team.
`;
    
    await fs.writeFile(path.join(buildDir, 'README.md'), readmeContent);
    
    console.log('\n✅ Build completed successfully!');
    console.log('\nFiles ready for Plesk deployment in the ./dist directory');
    
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Promise wrapper for exec
function execPromise(command) {
  return new Promise((resolve, reject) => {
    console.log(`> ${command}`);
    
    const childProcess = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Command failed: ${error.message}`);
        reject(error);
        return;
      }
      
      if (stderr) {
        console.error(`Command stderr: ${stderr}`);
      }
      
      resolve(stdout);
    });
    
    // Stream output to console
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
  });
}

// Run the build process
runCommands();