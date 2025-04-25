import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import ContactSection from "@/components/home/contact-section";

const Home = () => {
  useEffect(() => {
    document.title = "RSV Infotech Pte Ltd - AI-Powered IT Solutions";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;
