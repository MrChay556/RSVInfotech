import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useRef } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Copy, 
  Check, 
  User, 
  Building2, 
  MessageSquare, 
  CheckCircle2 
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  // Email address for inquiries
  const inquiryEmail = "connectme@myrsv.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll contact you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Hide the form and show the animation again
      setShowContactForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const formAnimation = {
    hidden: { 
      opacity: 0, 
      height: 0, 
      scale: 0.7, 
      y: 50,
      filter: "blur(15px)"
    },
    visible: { 
      opacity: 1, 
      height: "auto", 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15,
        opacity: { duration: 0.5 },
        filter: { duration: 0.8 },
        scale: { duration: 0.8 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      scale: 0.7,
      y: 50,
      filter: "blur(15px)",
      transition: { 
        duration: 0.5,
        filter: { duration: 0.5 },
        opacity: { duration: 0.3 } 
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Get in Touch" 
          description="Have questions or ready to transform your IT infrastructure? Contact us today."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            id="contact-form"
            className="bg-card/70 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-primary">Send Us a Message</h3>
            
            {!showContactForm ? (
              <div className="space-y-6">
                <div className="p-5 rounded-lg border border-white/10 bg-primary/5">
                  <h4 className="font-medium text-lg mb-2">Need assistance with your IT infrastructure?</h4>
                  <p className="text-foreground/70 mb-4">
                    Fill out our contact form and our team will respond to your inquiry promptly. 
                    We provide tailored IT solutions to help your business thrive in the digital landscape.
                  </p>
                  <Button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full px-8 py-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 glow-button"
                  >
                    Send Message
                  </Button>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[300px] relative overflow-hidden rounded-lg border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                  
                  {/* Message Exchange Animation - Circular Lifecycle */}
                  <div className="message-exchange-container">
                    <motion.div 
                      className="circle-container"
                      animate={{ 
                        boxShadow: [
                          "0 0 30px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(160, 32, 240, 0.1)",
                          "0 0 40px rgba(0, 245, 255, 0.4), inset 0 0 30px rgba(160, 32, 240, 0.2)",
                          "0 0 30px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(160, 32, 240, 0.1)"
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Circular track */}
                      <div className="circle-track"></div>
                      
                      {/* User at bottom */}
                      <div className="user-icon">
                        <div className="icon-circle">
                          <User className="user-avatar" size={24} />
                        </div>
                      </div>
                      
                      {/* Company at top */}
                      <div className="company-icon">
                        <div className="icon-circle">
                          <Building2 className="company-avatar" size={24} />
                        </div>
                      </div>
                      
                      {/* No messages, just keep the animated paths */}
                      
                      {/* Animated arrow trails */}
                      <svg className="arrows" width="220" height="220" viewBox="0 0 220 220" style={{ position: 'absolute', top: 0, left: 0 }}>
                        {/* Right side path - User to Company */}
                        <motion.path
                          d="M 110,200 Q 180,110 110,20"
                          fill="none"
                          stroke="rgba(0, 245, 255, 0.6)"
                          strokeWidth="2"
                          strokeDasharray="6,6"
                          initial={{ pathLength: 0, opacity: 0.3 }}
                          animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: "easeInOut" 
                          }}
                        />
                        
                        {/* Left side path - Company to User */}
                        <motion.path
                          d="M 110,20 Q 40,110 110,200"
                          fill="none"
                          stroke="rgba(160, 32, 240, 0.6)"
                          strokeWidth="2" 
                          strokeDasharray="6,6"
                          initial={{ pathLength: 0, opacity: 0.3 }}
                          animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatDelay: 1,
                            delay: 1.5,
                            ease: "easeInOut" 
                          }}
                        />
                      </svg>
                    </motion.div>
                    
                  </div>
                </motion.div>
              </div>
            ) : (
              <AnimatePresence>
                <motion.form
                  onSubmit={handleSubmit}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={formAnimation}
                  className="relative"
                  style={{
                    overflow: "hidden"
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.5, 0],
                      boxShadow: [
                        "0 0 0px rgba(0, 245, 255, 0)",
                        "0 0 30px rgba(0, 245, 255, 0.6)",
                        "0 0 0px rgba(0, 245, 255, 0)"
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                  ></motion.div>
                  <div className="mb-6">
                    <Label htmlFor="name" className="block text-foreground/80 mb-2 font-medium">Your Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-white/20 text-foreground focus:outline-none focus:border-primary transition-colors"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="email" className="block text-foreground/80 mb-2 font-medium">Email Address</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="your@email.com" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-white/20 text-foreground focus:outline-none focus:border-primary transition-colors"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="phone" className="block text-foreground/80 mb-2 font-medium">Phone Number (Optional)</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="+65 9123 4567" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-white/20 text-foreground focus:outline-none focus:border-primary transition-colors"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="block text-foreground/80 mb-2 font-medium">Your Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={5} 
                      placeholder="Tell us about your project or inquiry..." 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-white/20 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-7 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 glow-button"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      variant="outline"
                      className="px-6 py-7 rounded-lg border border-white/20 hover:bg-card/50"
                    >
                      Cancel
                    </Button>
                  </div>
                </motion.form>
              </AnimatePresence>
            )}
          </motion.div>
          
          <div>
            <motion.div 
              className="bg-card/70 backdrop-blur-sm p-8 rounded-xl border border-white/10 mb-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="font-orbitron text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Address</h4>
                    <p className="text-foreground/70">10 Ubi Crescent, #07-52, Ubi Tech Park Lobby C, Singapore 408564</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <button 
                        onClick={() => {
                          setShowContactForm(true);
                          // Smoothly scroll to the form
                          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        <span>Inquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <p className="text-foreground/70">+65 62297788 | +65 88602526</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                    <p className="text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-card/70 backdrop-blur-sm rounded-xl border border-white/10 h-80"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7651876561374!2d103.89120061475608!3d1.3296600990355705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da182ee1f7b47f%3A0x56f6aa895a6b7d35!2s10%20Ubi%20Crescent%2C%20Ubi%20Techpark%20Lobby%20C%2C%20Singapore%20408564!5e0!3m2!1sen!2ssg!4v1635308121067!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RSV Infotech Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
