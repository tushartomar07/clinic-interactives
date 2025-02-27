
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Network Infrastructure",
    items: [
      "High-performance routing & switching",
      "Wireless network solutions",
      "Structured cabling systems",
      "Network security implementation"
    ]
  },
  {
    title: "Software Development",
    items: [
      "Custom enterprise applications",
      "Cloud-native solutions",
      "Web & mobile app development",
      "Legacy system modernization"
    ]
  },
  {
    title: "Cybersecurity",
    items: [
      "Vulnerability assessments",
      "Penetration testing",
      "Security monitoring",
      "Compliance management"
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="full-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Technology Solutions That <span className="text-gradient">Transform</span> Your Business
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver comprehensive IT solutions that help businesses optimize performance, 
              enhance security, and drive innovation. Our expert team ensures seamless 
              implementation and ongoing support.
            </p>
            
            <div className="pt-6 space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] glass-card rounded-2xl overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
              
              <div className="absolute w-full h-full">
                <div className="w-[600px] h-[600px] absolute -bottom-64 -right-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="w-[600px] h-[600px] absolute -top-64 -left-64 rounded-full bg-primary/5 blur-3xl" />
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Server rack in data center" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-70 mix-blend-overlay"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Solutions</h3>
                  <p className="text-muted-foreground">
                    Our solutions are built to enterprise standards, ensuring reliability, 
                    scalability, and security for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
