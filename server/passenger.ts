import { initializeApp } from './app';

// This file is specifically for Phusion Passenger
// Do NOT call app.listen() here, as Passenger will handle that

// Initialize the app
(async () => {
  try {
    const { app } = await initializeApp();
    console.log('Express app initialized for Passenger');
    
    // Export the Express app for Passenger
    module.exports = app;
  } catch (error) {
    console.error('Failed to initialize Express app for Passenger:', error);
    process.exit(1);
  }
})();