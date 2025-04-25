import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tsParticles } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const ServiceLayout = ({ children, title, subtitle }: ServiceLayoutProps) => {
  // Initialize particles for the service pages header
  useEffect(() => {
    const initServiceParticles = async () => {
      try {
        await loadSlim(tsParticles);
        
        await tsParticles.load("service-header-particles", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffffff", "#f0f0f0"] },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out"
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: false },
              resize: true
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } }
            }
          },
          retina_detect: true
        });
      } catch (error) {
        console.error("Failed to load service header particles:", error);
      }
    };
    
    initServiceParticles();
    
    // No cleanup to avoid issues with different tsParticles versions
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header - Styled more like the home page */}
      <div className="relative min-h-[50vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Particles Background */}
        <div 
          id="service-header-particles" 
          className="absolute inset-0 z-0"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-[1] opacity-90"></div>
        
        {/* Decorative Elements similar to home page */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-[2]"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-[2]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[3]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 drop-shadow-md">{title}</h1>
            {subtitle && <p className="text-xl max-w-3xl mx-auto opacity-90 drop-shadow">{subtitle}</p>}
          </motion.div>
        </div>
      </div>
      
      {/* Main Content - Changed from bg-muted to match home page's background */}
      <main className="flex-grow py-16 bg-background relative">
        {/* Additional gradient decoration similar to home components */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ServiceLayout;