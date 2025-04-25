import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import ServiceFeatures, { FeatureItem } from '../../components/services/service-features';
import { ServerCog, Clock, Shield } from 'lucide-react';

const ITServicesPage = () => {
  const features: FeatureItem[] = [
    {
      icon: <ServerCog className="h-6 w-6" />,
      title: "Proactive Management",
      description: "We monitor your IT infrastructure 24/7, identifying and resolving issues before they impact your business operations."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rapid Response Support",
      description: "Our technical support team is available whenever you need assistance, ensuring minimal downtime for your business."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "System Security",
      description: "Comprehensive security measures to protect your data and systems from threats, including regular updates and patch management."
    }
  ];

  return (
    <ServiceLayout 
      title="Managed IT Services" 
      subtitle="Comprehensive technology management for your business"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Enterprise IT Solutions</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Our managed IT services provide comprehensive technology support for your business, allowing you to focus on core operations while we handle your IT infrastructure. We offer proactive monitoring, maintenance, and support to ensure your systems are always running optimally.
            </p>
            <p>
              With RSV Infotech as your managed services provider, you gain a team of experienced IT professionals dedicated to maximizing your technology investments and minimizing costly downtime.
            </p>
          </div>
        </motion.div>
      </div>

      <ServiceFeatures features={features} />

      <div className="max-w-4xl mx-auto my-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-orbitron font-bold mb-6">Our IT Service Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Preventative Maintenance</h3>
              <p className="text-foreground/70">Regular system health checks, updates, and optimization to prevent issues before they occur and extend the life of your technology investments.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Technology Consulting</h3>
              <p className="text-foreground/70">Strategic guidance on technology decisions, helping you select and implement solutions that align with your business goals and budget.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Helpdesk Support</h3>
              <p className="text-foreground/70">Responsive technical assistance for your team, available through multiple channels to quickly resolve day-to-day technology challenges.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Data Protection</h3>
              <p className="text-foreground/70">Comprehensive backup and recovery solutions to safeguard your business data against loss, with regular testing to ensure recoverability.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <CTASection 
        title="Ready to Optimize Your IT Operations?" 
        description="Contact our team today to discuss how our managed IT services can support your business needs and improve your technology experience."
        buttonText="Get Started"
      />
    </ServiceLayout>
  );
};

export default ITServicesPage;