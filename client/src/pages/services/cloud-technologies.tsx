import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import { Cloud, Database, BarChart } from 'lucide-react';

const CloudTechnologiesPage = () => {
  return (
    <ServiceLayout 
      title="Cloud Technologies" 
      subtitle="Leverage the power of cloud computing for scalability and flexibility"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Enterprise Cloud Solutions</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Our cloud technology services help businesses leverage the power, scalability, and flexibility of cloud computing. We design and implement cloud solutions that transform how your business operates, improving efficiency and reducing costs.
            </p>
            <p>
              With RSV Infotech as your cloud partner, you gain access to certified cloud experts who can guide your digital transformation journey from assessment and planning to migration and ongoing management.
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
            <Cloud className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Cloud Migration</h3>
          <p className="text-foreground/70">Seamless migration of your applications, data, and infrastructure to the cloud with minimal disruption to your business operations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Cloud Infrastructure</h3>
          <p className="text-foreground/70">Design and management of scalable, secure cloud infrastructure tailored to your specific business requirements.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <BarChart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">Cloud Optimization</h3>
          <p className="text-foreground/70">Continuous monitoring and optimization of your cloud environment to maximize performance while controlling costs.</p>
        </motion.div>
      </div>

      <div className="text-center mb-16">
        <p className="text-xl text-foreground/70 italic">
          More detailed information about our cloud technology services will be available soon.
        </p>
      </div>

      <CTASection 
        title="Ready to Move to the Cloud?" 
        description="Contact our cloud experts today to discuss how we can help your business leverage the benefits of cloud computing."
        buttonText="Discuss Cloud Solutions"
      />
    </ServiceLayout>
  );
};

export default CloudTechnologiesPage;