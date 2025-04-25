import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { achievements } from "@/data/achievements";
import { Zap, Scale, Shield } from "lucide-react";

const WhyChooseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const achievements = [
    {
      value: "20+",
      label: "Years Experience",
      description: "Two decades of delivering exceptional IT solutions to businesses of all sizes."
    },
    {
      value: "100+",
      label: "Happy Clients",
      description: "Trusted by over a hundred businesses across Singapore and beyond."
    },
    {
      value: "24/7",
      label: "Support",
      description: "Round-the-clock technical support and monitoring for your peace of mind."
    }
  ];

  const features = [
    {
      icon: <Zap className="h-16 w-16 text-primary" />,
      title: "Cutting-edge Technology",
      description: "Leveraging the latest innovations including AI, cloud, and advanced security."
    },
    {
      icon: <Scale className="h-16 w-16 text-primary" />,
      title: "Tailored Solutions",
      description: "Customized IT services designed specifically for your business needs."
    },
    {
      icon: <Shield className="h-16 w-16 text-primary" />,
      title: "Proven Track Record",
      description: "Established history of successful implementations and satisfied clients."
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted neural-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Choose Us?" 
          description="Partner with RSV Infotech for technology solutions that drive real business results."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center bg-background/60 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
              variants={itemVariants}
            >
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse-glow"></div>
                <div className="relative flex items-center justify-center w-full h-full">
                  <span className="font-orbitron text-4xl font-bold gradient-text">{item.value}</span>
                </div>
              </div>
              <h3 className="font-orbitron font-semibold text-xl mb-3">{item.label}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
          
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center bg-background/60 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
              variants={itemVariants}
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-orbitron font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
