# Backend Deployment Guide

Since your application has both frontend and backend components, you'll need to deploy the backend separately. Here are the recommended options:

## Option 1: Railway (Recommended)

Railway is a modern platform that's great for Node.js applications.

### Steps:
1. **Sign up** at [railway.app](https://railway.app)
2. **Connect your GitHub repository**
3. **Configure the deployment:**
   - Set the root directory to `/` (or wherever your server code is)
   - Set the build command: `npm run build`
   - Set the start command: `npm start`
4. **Add environment variables:**
   - Copy your `.env` variables to Railway's environment variables
   - Make sure to set `NODE_ENV=production`
5. **Deploy**

### Environment Variables to Set:
```
NODE_ENV=production
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
SENDGRID_API_KEY=your_sendgrid_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
```

## Option 2: Render

Render is another excellent option for Node.js applications.

### Steps:
1. **Sign up** at [render.com](https://render.com)
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure:**
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. **Add environment variables** (same as above)
6. **Deploy**

## Option 3: Heroku

### Steps:
1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create app**: `heroku create your-app-name`
4. **Set environment variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set DATABASE_URL=your_database_url
   # ... other variables
   ```
5. **Deploy**: `git push heroku main`

## Option 4: DigitalOcean App Platform

### Steps:
1. **Sign up** at [digitalocean.com](https://digitalocean.com)
2. **Create a new App**
3. **Connect your GitHub repository**
4. **Configure the build and run commands**
5. **Add environment variables**
6. **Deploy**

## After Backend Deployment

1. **Get your backend URL** (e.g., `https://your-app.railway.app`)
2. **Update Netlify environment variables:**
   - Go to your Netlify site settings
   - Add environment variable: `BACKEND_URL=https://your-app.railway.app`
3. **Redeploy your Netlify site** to pick up the new environment variable

## Database Setup

If you're using a database, you'll need to set it up:

### Option 1: Railway Database
- Railway provides PostgreSQL databases
- Create a new database in your Railway project
- Use the provided connection string

### Option 2: Neon (PostgreSQL)
- Sign up at [neon.tech](https://neon.tech)
- Create a new project
- Use the connection string provided

### Option 3: Supabase
- Sign up at [supabase.com](https://supabase.com)
- Create a new project
- Use the connection string from your project settings

## Testing Your Deployment

1. **Test the backend directly:**
   ```bash
   curl https://your-backend-url.com/api/health
   ```

2. **Test from the frontend:**
   - Deploy your frontend to Netlify
   - Try submitting the contact form
   - Check if the API calls work

## Troubleshooting

### Common Issues:
1. **CORS errors**: Make sure your backend allows requests from your Netlify domain
2. **Environment variables**: Double-check all environment variables are set correctly
3. **Database connection**: Ensure your database is accessible from your deployment platform
4. **Build errors**: Check the build logs for any missing dependencies

### CORS Configuration
Make sure your backend allows requests from your Netlify domain. In your Express app, you might need to update CORS settings:

```javascript
app.use(cors({
  origin: ['https://your-netlify-site.netlify.app', 'http://localhost:3000'],
  credentials: true
}));
``` 