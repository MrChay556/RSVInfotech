# RSV Infotech Website

A modern, responsive website for RSV Infotech built with React, Vite, and Express. This full-stack application showcases the company's IT services and solutions with a beautiful, AI-themed design.

## 🚀 Features

- Modern React-based frontend with Vite
- Express.js backend with API endpoints
- Beautiful UI with Tailwind CSS
- Responsive design for all devices
- Contact form with reCAPTCHA
- Interactive animations and transitions
- SEO optimized
- Performance optimized

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Query
- TypeScript

### Backend
- Express.js
- Node.js
- SendGrid for emails
- PostgreSQL (optional)
- TypeScript

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MrChay556/RSVInfotech.git
   cd RSVInfotech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment

This project is configured for deployment on:
- Frontend: Netlify
- Backend: Railway/Render/Heroku

See the following guides for deployment instructions:
- [Netlify Deployment Guide](NETLIFY_DEPLOYMENT.md)
- [Backend Deployment Guide](BACKEND_DEPLOYMENT.md)
- [Deployment Checklist](DEPLOYMENT_CHECKLIST.md)

## 🌟 Environment Variables

### Frontend
```env
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### Backend
```env
NODE_ENV=development
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
SENDGRID_API_KEY=your_sendgrid_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
```

## 📝 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Static assets
│   │   └── lib/          # Utility functions
├── server/                # Backend Express application
│   ├── routes/           # API routes
│   └── services/         # Business logic
├── shared/               # Shared types and utilities
└── deployment/           # Deployment configurations
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

RSV Infotech - [https://myrsv.com](https://myrsv.com)

Project Link: [https://github.com/MrChay556/RSVInfotech](https://github.com/MrChay556/RSVInfotech) 