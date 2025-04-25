import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import { Monitor, Server, Shield } from 'lucide-react';

const ITServicesPage = () => {
  return (
    <ServiceLayout 
      title="IT Services" 
      subtitle="Comprehensive IT management and support solutions for your business"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Enterprise IT Services</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Our IT services provide end-to-end solutions for businesses of all sizes. From daily IT operations to strategic technology planning, we ensure your systems run efficiently while aligning with your business goals.
            </p>
            <p>
              With RSV Infotech as your IT partner, you gain access to expert technical support, proactive system monitoring, and strategic guidance to help your business leverage technology effectively.
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
            <Monitor className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">IT Infrastructure Management</h3>
          <p className="text-foreground/70">Comprehensive management and monitoring of your entire IT infrastructure to ensure optimal performance and reliability.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Server className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Technical Support</h3>
          <p className="text-foreground/70">Responsive helpdesk and on-site support to resolve IT issues quickly and minimize disruption to your business operations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Strategic IT Planning</h3>
          <p className="text-foreground/70">Align your IT strategy with business objectives through expert consultation and planning for technology investments.</p>
        </motion.div>
      </div>

      <div className="text-center mb-16">
        <p className="text-xl text-foreground/70 italic">
          More detailed information about our IT services will be available soon.
        </p>
      </div>

      <CTASection 
        title="Need IT Services for Your Business?" 
        description="Contact our team today to discuss how our IT services can support your business operations and help you achieve your goals."
        buttonText="Get in Touch"
      />
    </ServiceLayout>
  );
};

export default ITServicesPage;