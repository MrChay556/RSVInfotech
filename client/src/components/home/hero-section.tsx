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
              <div className="rounded-2xl shadow-2xl shadow-secondary/20 w-full max-w-lg mx-auto overflow-hidden bg-background/50 backdrop-blur-sm p-8">
                {/* RSV Infotech Logo - Matching the provided image */}
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center">
                        <span className="font-orbitron font-bold text-4xl tracking-wider">RSV</span>
                        <span className="text-primary text-4xl mx-1">.</span>
                        <span className="font-orbitron font-bold text-4xl tracking-wider">INFOTECH</span>
                        <span className="bg-primary/90 text-sm font-bold text-white ml-2 px-1 rounded">AI</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-foreground/20"></div>
                  </div>
                </div>
                
                {/* Meaningful Visualization of IT & AI Services */}
                <div className="relative z-10 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-white/10 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 3V5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 18.75V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.63599 5.63599L7.16999 7.16999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16.83 16.83L18.364 18.364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 12H5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.75 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.63599 18.364L7.16999 16.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16.83 7.16999L18.364 5.63599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-orbitron text-sm font-bold">AI-Powered Innovation</h4>
                        <div className="w-full bg-background/50 h-1.5 rounded-full mt-1">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-5/6 animate-pulse-glow"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-2 rounded-lg bg-background/50 flex flex-col items-center justify-center">
                        <svg className="w-6 h-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <span className="text-xs">Cloud</span>
                      </div>
                      <div className="p-2 rounded-lg bg-background/50 flex flex-col items-center justify-center">
                        <svg className="w-6 h-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                        <span className="text-xs">Security</span>
                      </div>
                      <div className="p-2 rounded-lg bg-background/50 flex flex-col items-center justify-center">
                        <svg className="w-6 h-6 text-primary mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="text-xs">VoIP</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-white/10">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-orbitron text-sm font-bold">IT Infrastructure</h4>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg p-2 bg-background/50 flex items-center">
                        <svg className="w-6 h-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 004.5 4.5m11.25-4.5H21m-3.75 0h3.75m-3.75 0a3 3 0 01-3 3m0 0h-3m3 0a3 3 0 100 6h-3m3-6h-3" />
                        </svg>
                        <span className="text-xs">Networking</span>
                      </div>
                      <div className="rounded-lg p-2 bg-background/50 flex items-center">
                        <svg className="w-6 h-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                        <span className="text-xs">Software</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
