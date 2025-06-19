# Deployment Checklist

## ✅ Pre-Deployment Checklist

### Frontend (Netlify)
- [ ] Code is pushed to Git repository
- [ ] `netlify.toml` file is in root directory
- [ ] `netlify/functions/api-proxy.js` is created
- [ ] `netlify/functions/package.json` is created
- [ ] Local build works: `npm run build`
- [ ] All environment variables are documented

### Backend (Railway/Render/Heroku)
- [ ] Backend code is ready for deployment
- [ ] Environment variables are documented
- [ ] Database is set up and accessible
- [ ] CORS is configured for Netlify domain

## 🚀 Deployment Steps

### Step 1: Deploy Backend
1. [ ] Choose a backend platform (Railway recommended)
2. [ ] Connect your Git repository
3. [ ] Set build command: `npm run build`
4. [ ] Set start command: `npm start`
5. [ ] Add environment variables:
   - [ ] `NODE_ENV=production`
   - [ ] `DATABASE_URL=your_database_url`
   - [ ] `SESSION_SECRET=your_session_secret`
   - [ ] `SENDGRID_API_KEY=your_sendgrid_key`
   - [ ] `RECAPTCHA_SECRET_KEY=your_recaptcha_secret`
6. [ ] Deploy and get the backend URL

### Step 2: Deploy Frontend to Netlify
1. [ ] Go to [netlify.com](https://netlify.com)
2. [ ] Click "New site from Git"
3. [ ] Connect your Git repository
4. [ ] Configure build settings:
   - [ ] Build command: `npm run build`
   - [ ] Publish directory: `dist/public`
5. [ ] Add environment variables:
   - [ ] `BACKEND_URL=https://your-backend-url.com`
   - [ ] `VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key`
6. [ ] Deploy the site

### Step 3: Configure Backend CORS
1. [ ] Update backend CORS settings to allow your Netlify domain
2. [ ] Redeploy backend if needed

### Step 4: Test Everything
1. [ ] Test the frontend loads correctly
2. [ ] Test the contact form submission
3. [ ] Test all pages and navigation
4. [ ] Test on mobile devices
5. [ ] Check browser console for errors

## 🔧 Environment Variables Reference

### Frontend (Netlify)
```
BACKEND_URL=https://your-backend-url.com
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### Backend (Railway/Render/Heroku)
```
NODE_ENV=production
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
SENDGRID_API_KEY=your_sendgrid_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
```

## 🐛 Troubleshooting

### Common Issues:
- [ ] **Build fails**: Check build logs, ensure all dependencies are installed
- [ ] **API calls fail**: Verify `BACKEND_URL` is set correctly
- [ ] **CORS errors**: Update backend CORS configuration
- [ ] **Database connection**: Check database URL and credentials
- [ ] **Environment variables**: Ensure all required variables are set

### Testing Commands:
```bash
# Test local build
npm run build

# Test backend locally
npm run dev

# Check if dist/public exists after build
ls dist/public
```

## 📞 Support Resources
- [Netlify Documentation](https://docs.netlify.com)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Heroku Documentation](https://devcenter.heroku.com)

## 🎉 Success Indicators
- [ ] Frontend loads without errors
- [ ] Contact form submits successfully
- [ ] All pages are accessible
- [ ] No console errors
- [ ] Mobile responsiveness works
- [ ] Performance is acceptable 