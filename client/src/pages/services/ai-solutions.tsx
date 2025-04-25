import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../components/layout/service-layout';
import ServiceFeatures, { FeatureItem } from '../../components/services/service-features';
import TestimonialSection, { Testimonial } from '../../components/services/testimonial-section';
import CTASection from '../../components/services/cta-section';
import { 
  Brain, 
  PieChart, 
  Bot, 
  Microscope, 
  LineChart, 
  Speech, 
  Camera, 
  Eye
} from 'lucide-react';

const aiFeatures: FeatureItem[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Machine Learning Solutions",
    description: "Custom ML models that learn from your data to make predictions, identify patterns, and provide actionable insights."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Predictive Analytics",
    description: "Advanced analytics solutions that forecast trends, customer behavior, and business outcomes to drive strategic decision-making."
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Intelligent Chatbots",
    description: "Conversational AI assistants that enhance customer service, automate support, and improve user engagement."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Computer Vision",
    description: "Image and video analysis solutions for object detection, facial recognition, and visual inspection automation."
  },
  {
    icon: <Speech className="w-6 h-6" />,
    title: "Natural Language Processing",
    description: "Text analysis solutions that understand sentiment, classify content, and extract valuable information from unstructured data."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "AI for Process Automation",
    description: "Intelligent process automation that reduces manual tasks, minimizes errors, and increases operational efficiency."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "AI-Powered Recommendations",
    description: "Recommendation engines that suggest relevant products, content, or actions to enhance user experience and increase conversions."
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "AI Research & Development",
    description: "Collaborative AI research to explore innovative applications of artificial intelligence for your specific industry challenges."
  }
];

const testimonials: Testimonial[] = [
  {
    content: "RSV Infotech's predictive analytics solution has transformed our inventory management. We've reduced stockouts by 32% and improved cash flow significantly since implementation.",
    author: "Jennifer Tan",
    position: "Supply Chain Director",
    company: "EastWest Logistics"
  },
  {
    content: "The custom recommendation engine that RSV built for our e-commerce platform has increased our average order value by 24%. Their AI expertise delivered real business results.",
    author: "Raymond Ng",
    position: "Digital Strategy Head",
    company: "TechMart Asia"
  },
  {
    content: "RSV developed an intelligent document processing system that reduced our manual data entry by 85%. Their team's deep understanding of AI/ML technologies and our business needs was impressive.",
    author: "Priya Kumar",
    position: "Operations Manager",
    company: "FinServices Group"
  }
];

const AIServicesPage = () => {
  return (
    <ServiceLayout 
      title="AI Solutions" 
      subtitle="Harness the power of artificial intelligence to transform your business"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-6">Unlock Business Value with AI</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Artificial Intelligence is no longer just a futuristic concept—it's a powerful tool that's transforming businesses across every industry. At RSV Infotech, we develop practical AI solutions that solve real business challenges, automate processes, and deliver measurable ROI.
            </p>
            <p>
              Our team of AI specialists, data scientists, and engineers work together to design and implement AI systems that are not only technologically advanced but also aligned with your specific business objectives. We focus on creating solutions that are explainable, ethical, and effective.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-orbitron font-bold mb-6 text-center">Our AI Services</h2>
        <div className="w-24 h-1 bg-primary/50 mx-auto mb-12"></div>
        <ServiceFeatures features={aiFeatures} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-orbitron font-bold mb-4">Why Choose AI Solutions?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="text-primary mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Make faster, data-driven decisions with predictive analytics</span>
            </li>
            <li className="flex items-start">
              <div className="text-primary mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Automate repetitive tasks and free up human resources</span>
            </li>
            <li className="flex items-start">
              <div className="text-primary mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Personalize customer experiences at scale</span>
            </li>
            <li className="flex items-start">
              <div className="text-primary mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Extract insights from unstructured data (text, images, etc.)</span>
            </li>
            <li className="flex items-start">
              <div className="text-primary mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Gain competitive advantage through innovation</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-orbitron font-bold mb-4">Our AI Approach</h3>
          <p className="mb-4 text-foreground/70">
            We follow a proven methodology to ensure your AI initiative delivers tangible business value:
          </p>
          <ol className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mr-3">1</div>
              <span><strong>Business Understanding:</strong> We start by defining clear business objectives and KPIs.</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mr-3">2</div>
              <span><strong>Data Assessment:</strong> We evaluate available data sources and quality requirements.</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mr-3">3</div>
              <span><strong>Solution Design:</strong> We architect a solution that balances sophistication with practicality.</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mr-3">4</div>
              <span><strong>Model Development:</strong> We develop and train AI models using your data.</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mr-3">5</div>
              <span><strong>Integration & Deployment:</strong> We seamlessly integrate AI capabilities into your systems.</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mr-3">6</div>
              <span><strong>Monitoring & Optimization:</strong> We continuously improve the AI system based on real-world performance.</span>
            </li>
          </ol>
        </motion.div>
      </div>

      <TestimonialSection testimonials={testimonials} />

      <CTASection 
        title="Ready to Leverage AI for Your Business?" 
        description="Contact our AI experts today to discuss how intelligent solutions can drive growth, efficiency, and innovation for your organization."
        buttonText="Schedule a Discovery Call"
      />
    </ServiceLayout>
  );
};

export default AIServicesPage;