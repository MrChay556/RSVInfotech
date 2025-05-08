import { initializeApp } from './app';
import { setupVite, log } from "./vite";

// Self-executing async function to start the server
(async () => {
  try {
    // Initialize the app and get the server instance
    const { app, server } = await initializeApp();

    // Setup Vite in development only
    if (process.env.NODE_ENV === "development") {
      await setupVite(app, server);
    }

    // Start the server on the specified port
    const port = process.env.PORT || 5000;
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();
