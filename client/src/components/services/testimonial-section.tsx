import React from 'react';
import { motion } from 'framer-motion';

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
}

const TestimonialSection = ({ testimonials, title = "What Our Clients Say" }: TestimonialSectionProps) => {
  return (
    <section className="py-12 mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-orbitron font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-primary/50 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-lg relative border border-white/10"
          >
            <div className="text-primary/20 absolute top-6 left-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                stroke="none"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-foreground/80 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;