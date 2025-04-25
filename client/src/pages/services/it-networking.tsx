import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import CTASection from '../../components/services/cta-section';
import ServiceFeatures, { FeatureItem } from '../../components/services/service-features';
import { Network, Wifi, Settings, ArrowLeftRight } from 'lucide-react';

const ITNetworkingPage = () => {
  const features: FeatureItem[] = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Infrastructure",
      description: "Design and implementation of reliable network infrastructure tailored to your business requirements and future growth plans."
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Wireless Solutions",
      description: "Secure, high-performance wireless networks with complete coverage for your facility and support for modern devices."
    },
    {
      icon: <ArrowLeftRight className="h-6 w-6" />,
      title: "Firewall & VPN",
      description: "Advanced security solutions to protect your network perimeter and enable secure remote access for your team."
    }
  ];

  return (
    <ServiceLayout 
      title="IT Networking" 
      subtitle="Robust connectivity solutions for your business"
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
              Our IT networking services provide the foundation for your business technology, ensuring reliable connectivity, optimal performance, and robust security for your data and applications.
            </p>
            <p>
              With RSV Infotech as your networking partner, you gain access to certified network engineers with extensive experience designing, implementing, and managing enterprise-grade networks for businesses of all sizes.
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
          <h2 className="text-2xl font-orbitron font-bold mb-6">Our Networking Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Network Assessment</h3>
              <p className="text-foreground/70">Comprehensive evaluation of your existing network infrastructure to identify performance bottlenecks, security vulnerabilities, and opportunities for improvement.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Network Monitoring</h3>
              <p className="text-foreground/70">Proactive 24/7 monitoring of your network infrastructure to ensure optimal performance, early problem detection, and rapid resolution of issues.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">SD-WAN Implementation</h3>
              <p className="text-foreground/70">Modern software-defined wide area network solutions that improve performance, enhance security, and reduce costs for multi-location businesses.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3">Network Security</h3>
              <p className="text-foreground/70">Advanced security measures including next-generation firewalls, intrusion detection, and prevention systems to protect your network from threats.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <CTASection 
        title="Ready to Upgrade Your Network?" 
        description="Contact our networking experts today to discuss how we can help improve your connectivity, security, and performance."
        buttonText="Get Network Assessment"
      />
    </ServiceLayout>
  );
};

export default ITNetworkingPage;