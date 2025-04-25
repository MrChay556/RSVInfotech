import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description?: string;
}

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="inline-block font-orbitron text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
      {description && (
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
