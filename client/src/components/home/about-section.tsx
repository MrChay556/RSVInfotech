import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Shield, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-muted neural-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Who We Are" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg text-foreground/80 mb-6">
              RSV Infotech Pte Ltd is a Singapore-based IT Solutions Provider with over 20 years of industry experience. We specialize in Managed IT Services, Cloud Computing, VoIP, Networking, IT Security, Data Backup & Recovery, Custom Software Development, and AI-powered automation.
            </p>
            <p className="text-lg text-foreground/80 mb-10">
              Our mission is to help businesses stay ahead of the curve through technology-driven strategies, leveraging innovation, and ensuring secure, reliable infrastructure.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
                variants={fadeIn}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-semibold text-xl mb-2">Trusted</h3>
                <p className="text-foreground/70">20+ years of industry expertise you can rely on</p>
              </motion.div>
              
              <motion.div 
                className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
                variants={fadeIn}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-semibold text-xl mb-2">Innovative</h3>
                <p className="text-foreground/70">Cutting-edge solutions that keep you ahead</p>
              </motion.div>
              
              <motion.div 
                className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
                variants={fadeIn}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-semibold text-xl mb-2">Client-Focused</h3>
                <p className="text-foreground/70">100+ satisfied clients across industries</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="rounded-2xl shadow-2xl relative shadow-secondary/20 w-full max-w-lg mx-auto overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 p-6 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-lg bg-background/70 flex items-center justify-center mr-4">
                    <span className="font-orbitron font-bold gradient-text text-2xl">RSV</span>
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold mb-1">RSV Infotech</h3>
                    <p className="text-sm text-foreground/70">Singapore • Since 2003</p>
                  </div>
                </div>
                <div className="bg-background/70 backdrop-blur-sm rounded-xl p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="font-bold text-primary">20</span>
                    </div>
                    <p className="text-sm">Years of Industry Experience</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <span className="font-bold text-secondary">100+</span>
                    </div>
                    <p className="text-sm">Satisfied Business Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-4 rounded-xl">
              <h3 className="font-orbitron text-lg mb-3 text-primary">Our Journey</h3>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                </div>
                <div>
                  <h4 className="font-semibold">2003</h4>
                  <p className="text-sm text-foreground/70">Founded in Singapore</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-secondary"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">2023</h4>
                  <p className="text-sm text-foreground/70">Expanded AI Solutions Division</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
