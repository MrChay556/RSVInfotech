import { Button } from "@/components/ui/button";
import { useParticles } from "@/hooks/use-particles";
import { motion } from "framer-motion";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  const { particlesInit, particlesLoaded } = useParticles();

  return (
    <section id="home" className="relative min-h-screen flex items-center py-16 overflow-hidden">
      <div 
        id="hero-particles" 
        className="absolute inset-0 z-0"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Businesses with <span className="gradient-text">Cutting-Edge IT</span> Solutions and <span className="gradient-text">AI Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl">
              RSV Infotech Pte Ltd — Managed IT Services, Custom Software, Cloud, Networking, Cybersecurity & AI-Powered Solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToElement("services")}
                className="px-8 py-7 rounded-md bg-gradient-to-r from-primary to-secondary glow-button text-white font-medium text-base md:text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Explore Our Solutions
              </Button>
              <Button 
                onClick={() => scrollToElement("contact")}
                variant="outline" 
                className="px-8 py-7 rounded-md border border-primary text-primary font-medium text-base md:text-lg hover:bg-primary/10 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1673187876321-3deece129afb?w=600&auto=format&fit=crop&q=80" 
                alt="AI Technology Visualization" 
                className="rounded-2xl shadow-2xl shadow-secondary/20 w-full max-w-lg mx-auto" 
              />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
