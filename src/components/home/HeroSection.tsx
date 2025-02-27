
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Server, Code, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent z-[-1]" />
      
      <div className="full-width-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
              Enterprise Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="text-gradient">Networking</span> &{" "}
              <span className="text-gradient">Software</span> Excellence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Cutting-edge server solutions, network infrastructure, and custom software 
              development to drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center">
                <div className="font-display font-bold text-3xl">500+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-3xl">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-3xl">200+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-auto md:h-[540px] glass-card p-6 rounded-2xl overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center gap-8">
                <motion.div 
                  className="flex items-center justify-center w-32 h-32 rounded-2xl shadow-lg bg-white"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  <Server size={48} className="text-primary" />
                </motion.div>
                
                <div className="grid grid-cols-2 gap-8">
                  <motion.div 
                    className="flex items-center justify-center w-32 h-32 rounded-2xl shadow-lg bg-white"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  >
                    <Code size={48} className="text-primary" />
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-center w-32 h-32 rounded-2xl shadow-lg bg-white"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                  >
                    <Shield size={48} className="text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
