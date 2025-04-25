import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import { Phone, Smartphone, Globe } from 'lucide-react';

const VoIPServicesPage = () => {
  return (
    <ServiceLayout 
      title="VoIP Services" 
      subtitle="Modern voice communication solutions for your business"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Enterprise VoIP Solutions</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Our VoIP services provide modern voice communication solutions that enhance collaboration while reducing costs. We design and implement flexible phone systems that adapt to your business needs while offering advanced features traditional systems can't match.
            </p>
            <p>
              With RSV Infotech as your VoIP partner, you gain reliable, feature-rich communication tools that integrate seamlessly with your business operations and support remote work capabilities.
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
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">IP Phone Systems</h3>
          <p className="text-foreground/70">Complete VoIP phone system solutions with advanced features like auto-attendant, call routing, voicemail-to-email, and more.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Unified Communications</h3>
          <p className="text-foreground/70">Integrated solutions that combine voice, video, messaging, and presence for seamless communication across your organization.</p>
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
          <h3 className="text-xl font-orbitron font-semibold mb-3">SIP Trunking</h3>
          <p className="text-foreground/70">Connect your existing phone system to the internet with SIP trunking services, reducing costs while adding flexibility.</p>
        </motion.div>
      </div>

      <div className="text-center mb-16">
        <p className="text-xl text-foreground/70 italic">
          More detailed information about our VoIP services will be available soon.
        </p>
      </div>

      <CTASection 
        title="Ready to Modernize Your Business Communications?" 
        description="Contact our VoIP experts today to discuss how we can help your business implement modern voice communication solutions."
        buttonText="Discuss VoIP Solutions"
      />
    </ServiceLayout>
  );
};

export default VoIPServicesPage;