import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import ServiceFeatures, { FeatureItem } from '../../components/services/service-features';
import TestimonialSection, { Testimonial } from '../../components/services/testimonial-section';
import CTASection from '../../components/services/cta-section';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  GitBranch 
} from 'lucide-react';

const softwareFeatures: FeatureItem[] = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your unique business challenges and requirements."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with the latest technologies to ensure performance and scalability."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver outstanding user experiences."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database Solutions",
    description: "Robust database architecture and management to ensure data integrity, security, and performance."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "API Development & Integration",
    description: "Seamless integration of third-party applications and services with your existing systems."
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "DevOps Solutions",
    description: "Streamlined development processes, continuous integration, and deployment pipelines for faster time-to-market."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Application Security",
    description: "Comprehensive security testing and hardening to protect your applications and data from threats."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Analytics & Reporting",
    description: "Custom dashboards and reporting tools to transform your data into actionable business intelligence."
  }
];

const testimonials: Testimonial[] = [
  {
    content: "RSV Infotech delivered a custom ERP solution that transformed our operations. Their team's expertise and commitment to quality made all the difference in our digital transformation journey.",
    author: "Sarah Chen",
    position: "CTO",
    company: "PacificTrade Group"
  },
  {
    content: "The e-commerce platform RSV developed for us has significantly increased our conversion rates and streamlined order processing. Their attention to detail and user experience expertise is exceptional.",
    author: "Michael Wong",
    position: "Director of Digital",
    company: "SG Retail Solutions"
  },
  {
    content: "Working with RSV on our custom CRM implementation was seamless. Their developers understood our complex requirements and delivered a solution that has improved our customer relationships and sales process.",
    author: "David Lim",
    position: "Head of Sales",
    company: "Meridian Partners"
  }
];

const SoftwareDevelopmentPage = () => {
  return (
    <ServiceLayout 
      title="Software Development" 
      subtitle="Custom solutions designed to solve your unique business challenges"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Accelerate Your Digital Transformation</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              In today's rapidly evolving digital landscape, bespoke software solutions can give your business the competitive edge it needs. At RSV Infotech, we combine technical expertise with industry knowledge to deliver software that not only meets your current needs but is also built to scale with your business.
            </p>
            <p>
              Our expert development team follows industry best practices and employs the latest technologies to create robust, scalable, and secure software solutions. From requirement analysis and system architecture to development, testing, and deployment—we handle the entire software development lifecycle with precision and care.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-orbitron font-bold mb-6 text-center">Our Software Development Services</h2>
        <div className="w-24 h-1 bg-primary/50 mx-auto mb-12"></div>
        <ServiceFeatures features={softwareFeatures} />
      </div>

      <div className="bg-card border border-white/10 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-orbitron font-bold mb-6">Our Development Process</h2>
        <ol className="space-y-6">
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Requirements Analysis</h3>
              <p className="text-foreground/70">We work closely with you to understand your business processes, challenges, and objectives to define clear project requirements.</p>
            </div>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Planning & System Architecture</h3>
              <p className="text-foreground/70">Our architects design a robust system architecture that ensures scalability, security, and optimal performance.</p>
            </div>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
              <p className="text-foreground/70">We follow agile methodologies with regular sprints and client reviews to ensure transparency and allow for adjustments during the development process.</p>
            </div>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance & Testing</h3>
              <p className="text-foreground/70">Our rigorous testing processes ensure your software is reliable, secure, and performs optimally across all intended platforms.</p>
            </div>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Deployment & Integration</h3>
              <p className="text-foreground/70">We handle the deployment process and ensure seamless integration with your existing systems and workflows.</p>
            </div>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">6</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p className="text-foreground/70">Our relationship doesn't end at deployment. We provide ongoing support, maintenance, and updates to keep your software performing at its best.</p>
            </div>
          </motion.li>
        </ol>
      </div>

      <TestimonialSection testimonials={testimonials} />

      <CTASection 
        title="Ready to Transform Your Business with Custom Software?" 
        description="Contact our team today to discuss how our software development services can help you achieve your business goals and drive innovation."
        buttonText="Get a Free Consultation"
      />
    </ServiceLayout>
  );
};

export default SoftwareDevelopmentPage;