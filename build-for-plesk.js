import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create .htaccess file
const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;

console.log('Creating temporary build directory...');
if (!fs.existsSync('build-temp')) {
  fs.mkdirSync('build-temp');
}

try {
  console.log('Building client application...');
  execSync('npx vite build --outDir ../build-temp', { 
    cwd: path.join(process.cwd(), 'client'),
    stdio: 'inherit' 
  });
  
  console.log('Creating .htaccess file...');
  fs.writeFileSync(path.join(process.cwd(), 'build-temp', '.htaccess'), htaccessContent);
  
  console.log('Build complete! Upload the contents of build-temp/ to your Plesk server.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}