import app from './app';

// This file is specifically for Phusion Passenger
// Do NOT call app.listen() here, as Passenger will handle that

// Initialize the app
(async () => {
  try {
    await app.initializeApp();
    console.log('Express app initialized for Passenger');
  } catch (error) {
    console.error('Failed to initialize Express app for Passenger:', error);
  }
})();

// Export the Express app for Passenger
module.exports = app;