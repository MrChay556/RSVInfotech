import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./mail";
import { verifyRecaptcha } from "./recaptcha";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message, recaptchaToken } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // Verify reCAPTCHA token if provided
      if (recaptchaToken) {
        const recaptchaResult = await verifyRecaptcha(recaptchaToken, 'submit_contact', 0.4);
        
        if (!recaptchaResult.isValid) {
          // Log the suspicious activity but don't block it completely
          console.warn(`Suspicious form submission from ${email} - reCAPTCHA score: ${recaptchaResult.score}`);
          
          // If score is very low, reject the submission
          if (recaptchaResult.score !== undefined && recaptchaResult.score < 0.2) {
            return res.status(403).json({ 
              success: false, 
              message: "Bot activity detected. Please try again later."
            });
          }
          // For scores that are not very low but still below threshold, we'll continue but log it
        }
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
