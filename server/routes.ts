import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Send email using the mail service
      const formData: ContactFormData = {
        name,
        email,
        phone,
        message
      };
      
      const emailSent = await sendContactEmail(formData);
      
      if (!emailSent) {
        return res.status(500).json({ 
          success: false, 
          message: "Failed to send email. Please try again later." 
        });
      }
      
      return res.status(200).json({ 
        success: true, 
        message: "Your message has been sent successfully." 
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      return res.status(500).json({ 
        message: "Server error while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
