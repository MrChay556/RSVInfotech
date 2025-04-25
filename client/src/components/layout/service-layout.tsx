import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const ServiceLayout = ({ children, title, subtitle }: ServiceLayoutProps) => {
  // Initialize particles for service pages with the same config as home page for consistency
  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadSlim(tsParticles);
        
        await tsParticles.load("service-particles", {
          fps_limit: 60,
          interactivity: {
            detect_on: "window",
            events: {
              onclick: {
                enable: true,
                mode: "push"
              },
              onhover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.4
                }
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: ["#00F5FF", "#A020F0"]
            },
            line_linked: {
              color: "#00F5FF",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 0.6,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              random: true,
              value: 3
            }
          },
          detectRetina: true
        });
      } catch (error) {
        console.error("Failed to load particles:", error);
      }
    };
    
    initParticles();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Page Header - with interactive modern design */}
      <div className="bg-gradient-to-r from-primary/90 to-secondary/90 py-20 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Particles Background - using unique ID for service pages */}
        <div 
          id="service-particles" 
          className="absolute inset-0 z-50 pointer-events-none"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        
        {/* Animated gradient shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-[5%] right-[10%] w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-[40%] right-[15%] w-60 h-60 bg-primary/40 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        {/* Decorative grid pattern - more subtle */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjE1MyAwIDIuMTIzLjQgMi45NDcgMS4yLjgyMy44IDEuMjM0IDEuNzY3IDEuMjM0IDIuOSAwIDEuMTMzLS40MSAyLjEtMS4yMzQgMi45LS44MjQuOC0xLjc5NCAxLjItMi45NDcgMS4yaC0xMmMtMS4xNTMgMC0yLjEyMy0uNC0yLjk0Ny0xLjItLjgyMy0uOC0xLjIzNC0xLjc2Ny0xLjIzNC0yLjkgMC0xLjEzMy40MTEtMi4xIDEuMjM0LTIuOS44MjQtLjggMS43OTQtMS4yIDIuOTQ3LTEuMmgxMnoiLz48cGF0aCBkPSJNNTcuODAzIDYuNDI4YzEuOTk1LjAwMiAzLjYwNiAxLjYxMyAzLjYwOCAzLjYwOCAwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4aC0zLjYxYy0xLjk5NS0uMDAyLTMuNjA2LTEuNjEzLTMuNjA4LTMuNjA4IDAtMS45OTUgMS42MTMtMy42MDggMy42MDgtMy42MDhoMy42MXoiLz48cGF0aCBkPSJNMzkuMDYzIDU3LjgwM2MwLTEuOTk2IDEuNjEzLTMuNjA3IDMuNjA4LTMuNjA3IDEuOTk1IDAgMy42MDggMS42MTMgMy42MDggMy42MDd2My42MWMwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4LTEuOTk1IDAtMy42MDgtMS42MTMtMy42MDgtMy42MDh2LTMuNjF6TTU3LjgwMyAyMS4zOTJjMS45OTUgMCAzLjYwOCAxLjYxMyAzLjYwOCAzLjYwOHMtMS42MTMgMy42MDgtMy42MDggMy42MDhoLTMuNjFjLTEuOTk1IDAtMy42MDgtMS42MTMtMy42MDgtMy42MDhzMS42MTMtMy42MDggMy42MDgtMy42MDhoMy42MXpNNTcuODAzIDM5LjA2M2MxLjk5NSAwIDMuNjA4IDEuNjEzIDMuNjA4IDMuNjA4IDAgMS45OTUtMS42MTMgMy42MDctMy42MDggMy42MDdoLTMuNjFjLTEuOTk1IDAtMy42MDgtMS42MTMtMy42MDgtMy42MDcgMC0xLjk5NSAxLjYxMy0zLjYwOCAzLjYwOC0zLjYwOGgzLjYxek0yMS4zOTIgNTcuODAzYzAtMS45OTQgMS42MTMtMy42MDcgMy42MDgtMy42MDdzMy42MDggMS42MTMgMy42MDggMy42MDd2My42MWMwIDEuOTk1LTEuNjEzIDMuNjA4LTMuNjA4IDMuNjA4cy0zLjYwOC0xLjYxMy0zLjYwOC0zLjYwOHYtMy42MXoiLz48cGF0aCBkPSJNNjEuNDAzIDYuNDI4YzEuNzA4LjA2IDMuMDcgMS40NSAzLjA3IDMuMTggMCAxLjczMi0xLjM2MiAzLjEyLTMuMDcgMy4xOEwuNjAzIDEyLjc5Yy0xLjcwOS0uMDYtMy4wNy0xLjQ1LTMuMDctMy4xOCAwLTEuNzMgMS4zNjEtMy4xMiAzLjA3LTMuMThsNjAuOC4wMDR6TTMuMzMgNTcuOGMtMS44MzYgMC0zLjMzLTEuNDQ1LTMuMzMtMy4yMjUgMC0xLjc4IDEuNDk0LTMuMjI1IDMuMzMtMy4yMjVoNTMuMzRjMS44MzYgMCAzLjMzIDEuNDQ2IDMuMzMgMy4yMjUgMCAxLjc4LTEuNDk0IDMuMjI1LTMuMzMgMy4yMjVIMy4zM3pNMTIuNzg5IDQ2LjI1NmMtLjA2LTIuMjM1IDEuNjktNC4wODIgMy45MjUtNC4xNDJzNC4wODMgMS42OSA0LjE0MyAzLjkyNWwuNjE4IDIzLjM0N2MuMDYgMi4yMzYtMS42OSA0LjA4My0zLjkyNSA0LjE0My0yLjIzNS4wNi00LjA4My0xLjY5LTQuMTQzLTMuOTI1bC0uNjE4LTIzLjM0N3pNMS41NyAxMi43ODhjLjA2LTIuMjM1IDEuOTA5LTMuOTg1IDQuMTQ0LTMuOTI1IDIuMjM1LjA2IDMuOTg1IDEuOTA4IDMuOTI1IDQuMTQzbC0uNjE3IDIzLjM0OGMtLjA2IDIuMjM1LTEuOTA5IDMuOTg1LTQuMTQzIDMuOTI1LTIuMjM2LS4wNi0zLjk4NS0xLjkwOC0zLjkyNi00LjE0M2wuNjE3LTIzLjM0OHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        {/* Modern tech circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#A020F0" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,0 L200,100 L300,50 L400,150 L500,100 L600,200 L700,100 L800,150 L900,50 L1000,100 L1200,0 L1200,800 L0,800 Z" 
                  fill="none" stroke="url(#circuit-gradient)" strokeWidth="1" 
                  strokeDasharray="10,15" strokeDashoffset="0">
              <animate attributeName="stroke-dashoffset" from="0" to="25" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M100,200 L200,300 L300,250 L400,350 L500,300 L600,400 L700,300 L800,350 L900,250 L1000,300 L1100,200" 
                  fill="none" stroke="url(#circuit-gradient)" strokeWidth="1" 
                  strokeDasharray="5,10" strokeDashoffset="0">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="6s" repeatCount="indefinite" />
            </path>
            <path d="M0,400 L100,450 L200,400 L300,450 L400,400 L500,450 L600,400 L700,450 L800,400 L900,450 L1000,400 L1200,450" 
                  fill="none" stroke="url(#circuit-gradient)" strokeWidth="1" 
                  strokeDasharray="15,15" strokeDashoffset="0">
              <animate attributeName="stroke-dashoffset" from="0" to="30" dur="4s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text content with improved animations */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-white"
            >
              <div className="inline-block mb-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm font-medium text-white/90 flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
                  RSV Infotech Solutions
                </motion.span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-orbitron font-bold mb-4"
              >
                {title}
              </motion.h1>
              
              {subtitle && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl max-w-xl opacity-90 leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-white/70">Cutting-edge solutions for your business</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Abstract visual element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block relative"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-sm mx-auto">
                <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-5 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary/70"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                    <div className="text-xs text-white/70">RSV Technology</div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="h-2 bg-white/10 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="h-2 bg-white/10 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 bg-white/10 rounded w-4/6 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="h-20 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center border border-primary/20">
                      <svg className="w-8 h-8 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div className="h-20 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center border border-secondary/20">
                      <svg className="w-8 h-8 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-white/10 rounded"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ServiceLayout;