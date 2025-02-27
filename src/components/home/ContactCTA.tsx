
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20">
      <div className="full-width-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90" />
          
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-no-repeat bg-cover opacity-20 mix-blend-overlay" />
          </div>
          
          <div className="relative py-16 px-8 md:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Get in touch with our experts today for a free consultation and discover 
                how Server Clinic can help optimize your technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
