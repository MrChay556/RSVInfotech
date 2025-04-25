import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import { Shield, Lock, FileWarning } from 'lucide-react';

const ITSecurityPage = () => {
  return (
    <ServiceLayout 
      title="IT Security" 
      subtitle="Protect your business with comprehensive cybersecurity solutions"
    >
      <div className="max-w-4xl mx-auto mb-16">
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
      </div>

      {/* Key service features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Network Security</h3>
          <p className="text-foreground/70">Comprehensive protection for your network infrastructure, including firewalls, intrusion detection, and secure access controls.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Data Protection</h3>
          <p className="text-foreground/70">Advanced solutions to secure your sensitive data, including encryption, access controls, and data loss prevention measures.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <FileWarning className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Threat Management</h3>
          <p className="text-foreground/70">Proactive monitoring and rapid response to security incidents, keeping your business protected against emerging threats.</p>
        </motion.div>
      </div>

      <div className="text-center mb-16">
        <p className="text-xl text-foreground/70 italic">
          More detailed information about our IT security services will be available soon.
        </p>
      </div>

      <CTASection 
        title="Ready to Secure Your Business?" 
        description="Contact our security experts today to discuss how we can help protect your business from cybersecurity threats."
        buttonText="Speak to Security Experts"
      />
    </ServiceLayout>
  );
};

export default ITSecurityPage;