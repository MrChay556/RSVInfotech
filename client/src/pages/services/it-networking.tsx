import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import { Network, Wifi, Globe } from 'lucide-react';

const ITNetworkingPage = () => {
  return (
    <ServiceLayout 
      title="IT Networking" 
      subtitle="Build reliable, scalable and secure network infrastructure for your business"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Enterprise Networking Solutions</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Our networking services provide end-to-end solutions for designing, implementing, and managing robust network infrastructure. We ensure your network is fast, reliable, and secure while supporting your business operations.
            </p>
            <p>
              With RSV Infotech as your networking partner, you gain access to expert network engineers, proactive monitoring, and strategic guidance to help your business maintain optimal connectivity.
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
            <Network className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Network Design & Implementation</h3>
          <p className="text-foreground/70">Custom network design and implementation services tailored to your business needs, ensuring optimal performance and scalability.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Wifi className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Wireless Networking</h3>
          <p className="text-foreground/70">Enterprise-grade wireless solutions providing reliable, secure connectivity across your entire organization.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">WAN Solutions</h3>
          <p className="text-foreground/70">Wide Area Network solutions that connect your multiple offices or locations with reliable, secure links.</p>
        </motion.div>
      </div>

      <div className="text-center mb-16">
        <p className="text-xl text-foreground/70 italic">
          More detailed information about our IT networking services will be available soon.
        </p>
      </div>

      <CTASection 
        title="Need Network Solutions for Your Business?" 
        description="Contact our networking experts today to discuss how we can help build and maintain a robust networking infrastructure for your organization."
        buttonText="Contact Our Network Team"
      />
    </ServiceLayout>
  );
};

export default ITNetworkingPage;