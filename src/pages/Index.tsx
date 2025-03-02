
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTA from "@/components/home/ContactCTA";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>ByteSpher - Networking Solutions & Software Development</title>
        <meta name="description" content="ByteSpher provides enterprise-grade networking solutions, software development services, and managed IT services for businesses of all sizes." />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactCTA />
    </motion.div>
  );
};

export default Index;
