import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: FeatureItem[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors shadow-lg hover:shadow-primary/10"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            {feature.icon}
          </div>
          <h3 className="text-xl font-orbitron font-semibold mb-3">{feature.title}</h3>
          <p className="text-foreground/70">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceFeatures;