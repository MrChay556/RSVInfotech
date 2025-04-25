import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import { Shield, Lock, FileWarning, CheckCircle, AlertTriangle, Eye, Code } from 'lucide-react';
import { tsParticles } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import securityShieldImg from '@/assets/images/security-shield.jpg';
import cyberSecurityImg from '@/assets/images/cybersecurity.jpg';
import dataSecurityImg from '@/assets/images/data-security.jpg';

const ITSecurityPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statValues, setStatValues] = useState({ attacks: 0, clients: 0, success: 0, years: 0 });
  
  // Initialize particles
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      await tsParticles.load("tsparticles-security", {
        particles: {
          number: { value: 20, density: { enable: true, value_area: 800 } },
          color: { value: "#5046e5" },
          shape: { type: "circle" },
          opacity: { value: 0.2, random: true },
          size: { value: 5, random: true },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
          },
          links: {
            enable: true,
            distance: 150,
            color: "#5046e5",
            opacity: 0.1,
            width: 1
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        retina_detect: true
      });
    };
    
    initParticles();
    
    // No cleanup for now to avoid version compatibility issues
  }, []);

  // Animate stats when they come into view
  useEffect(() => {
    if (statsInView) {
      const interval = setInterval(() => {
        setStatValues(prev => {
          const newAttacks = Math.min(prev.attacks + 11, 5000);
          const newClients = Math.min(prev.clients + 1, 250);
          const newSuccess = Math.min(prev.success + 1, 99);
          const newYears = Math.min(prev.years + 0.3, 15);
          
          if (newAttacks === 5000 && newClients === 250 && newSuccess === 99 && newYears >= 15) {
            clearInterval(interval);
          }
          
          return {
            attacks: newAttacks,
            clients: newClients,
            success: newSuccess,
            years: Math.round(newYears * 10) / 10
          };
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [statsInView]);

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  const threatTypes = [
    { icon: <AlertTriangle className="w-5 h-5" />, title: "Ransomware" },
    { icon: <Eye className="w-5 h-5" />, title: "Phishing" },
    { icon: <Code className="w-5 h-5" />, title: "Zero-day Exploits" },
    { icon: <CheckCircle className="w-5 h-5 opacity-50" />, title: "DDoS Attacks" }
  ];

  return (
    <ServiceLayout 
      title="IT Security" 
      subtitle="Protect your business with comprehensive cybersecurity solutions"
    >
      {/* Particles Background */}
      <div id="tsparticles-security" className="absolute inset-0 -z-10 opacity-70"></div>
      
      <div className="max-w-5xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-6">Enterprise Security Solutions</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                In today's digital landscape, cybersecurity is not optional. Our IT security services provide comprehensive protection for your business against evolving cyber threats, ensuring your data, systems, and reputation remain secure.
              </p>
              <p>
                With RSV Infotech as your security partner, you gain access to advanced threat protection, proactive monitoring, and rapid incident response to safeguard your business assets.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src={cyberSecurityImg} 
              alt="Advanced cybersecurity protection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl font-semibold">Advanced Threat Protection</h3>
              <p className="text-white/80 text-sm">Enterprise-grade security for modern businesses</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div 
        ref={statsRef} 
        className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">{statValues.attacks.toLocaleString()}+</h3>
            <p className="text-sm uppercase tracking-wide">Threats Blocked Monthly</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">{statValues.clients}+</h3>
            <p className="text-sm uppercase tracking-wide">Protected Businesses</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">{statValues.success}%</h3>
            <p className="text-sm uppercase tracking-wide">Success Rate</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-orbitron font-bold text-primary mb-2">{statValues.years}</h3>
            <p className="text-sm uppercase tracking-wide">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Key service features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={ref}>
        <motion.div
          custom={0}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Network Security</h3>
          <p className="text-foreground/70 mb-4">Comprehensive protection for your network infrastructure, including firewalls, intrusion detection, and secure access controls.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Advanced firewall protection
            </li>
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Intrusion detection systems
            </li>
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              24/7 network monitoring
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Data Protection</h3>
          <p className="text-foreground/70 mb-4">Advanced solutions to secure your sensitive data, including encryption, access controls, and data loss prevention measures.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              End-to-end data encryption
            </li>
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Secure access management
            </li>
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Data loss prevention
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <FileWarning className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Threat Management</h3>
          <p className="text-foreground/70 mb-4">Proactive monitoring and rapid response to security incidents, keeping your business protected against emerging threats.</p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Real-time threat monitoring
            </li>
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Incident response planning
            </li>
            <li className="flex items-center text-sm text-foreground/60">
              <CheckCircle className="w-4 h-4 mr-2 text-primary/70" />
              Vulnerability assessments
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Additional Image Section */}
      <div className="py-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden h-64 shadow-lg"
          >
            <img 
              src={dataSecurityImg} 
              alt="Data security" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg font-semibold">Data Encryption</h3>
              <p className="text-white/80 text-sm">Protecting your sensitive information</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden h-64 shadow-lg"
          >
            <img 
              src={securityShieldImg} 
              alt="Security shield" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg font-semibold">Active Protection</h3>
              <p className="text-white/80 text-sm">Real-time monitoring and defense</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden h-64 shadow-lg md:col-span-2 lg:col-span-1"
          >
            <img 
              src={cyberSecurityImg} 
              alt="Cyber security" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg font-semibold">Compliance & Auditing</h3>
              <p className="text-white/80 text-sm">Meeting industry regulations and standards</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Common Threats Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-orbitron font-bold mb-8 text-center">Common Threats We Protect Against</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {threatTypes.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-card/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/10 flex items-center space-x-2"
            >
              <span className="text-primary">{threat.icon}</span>
              <span>{threat.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <CTASection 
          title="Ready to Secure Your Business?" 
          description="Contact our security experts today to discuss how we can help protect your business from cybersecurity threats."
          buttonText="Speak to Security Experts"
        />
      </motion.div>
    </ServiceLayout>
  );
};

export default ITSecurityPage;