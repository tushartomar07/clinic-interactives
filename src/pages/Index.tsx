
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ArrowRight, Server, Shield, Code, Cloud, Database, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const heroBackground = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>ByteSpher - Empowering IT Infrastructure</title>
        <meta name="description" content="ByteSpher provides enterprise-grade networking solutions, cloud services, cybersecurity, and software development for businesses of all sizes." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"></div>
          <img 
            src={heroBackground} 
            alt="Server room" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 tech-pattern opacity-30 z-10"></div>
        
        <div className="full-width-container relative z-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary mb-2 backdrop-blur-md border border-secondary/20">
                Next-Generation IT Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight glow-text">
                Empowering <span className="text-gradient">IT</span> Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Cutting-edge networking, cloud services, cybersecurity, and software 
                development to transform your business technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group cyber-button">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                  Explore Services
                </Button>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 max-w-md">
                <div className="text-center glass-card py-3 rounded-lg">
                  <div className="font-display font-bold text-3xl text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center glass-card py-3 rounded-lg">
                  <div className="font-display font-bold text-3xl text-secondary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center glass-card py-3 rounded-lg">
                  <div className="font-display font-bold text-3xl text-secondary">200+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square md:aspect-auto md:h-[540px] glass-card p-6 rounded-2xl overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center gap-8">
                  <motion.div 
                    className="flex items-center justify-center w-32 h-32 rounded-2xl shadow-glow bg-background/80 backdrop-blur-lg border border-secondary/30"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  >
                    <Server size={48} className="text-secondary" />
                  </motion.div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <motion.div 
                      className="flex items-center justify-center w-32 h-32 rounded-2xl shadow-glow bg-background/80 backdrop-blur-lg border border-secondary/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    >
                      <Code size={48} className="text-secondary" />
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-center w-32 h-32 rounded-2xl shadow-glow bg-background/80 backdrop-blur-lg border border-secondary/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                    >
                      <Shield size={48} className="text-secondary" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-background/50 backdrop-blur-md">
        <div className="full-width-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary mb-4 border border-secondary/20">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 glow-text">
              Comprehensive IT Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide end-to-end technology solutions designed to optimize performance,
              enhance security, and drive innovation for your business.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Server,
                title: "Networking Solutions",
                description:
                  "Enterprise-grade networking infrastructure with active/passive setups, structured cabling, and switch configurations.",
                link: "/services#networking",
              },
              {
                icon: Cloud,
                title: "Cloud Services",
                description:
                  "Seamless cloud migration, hybrid cloud solutions, and multi-cloud management platforms for optimal performance.",
                link: "/services#cloud",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description:
                  "Advanced threat protection, vulnerability assessments, and security compliance for your infrastructure.",
                link: "/services#security",
              },
              {
                icon: Code,
                title: "Software Development",
                description:
                  "Custom applications, cloud solutions, AI automation, and enterprise web & mobile applications.",
                link: "/services#software",
              },
              {
                icon: Database,
                title: "Server Solutions",
                description:
                  "Server installation, optimization, security hardening, and comprehensive performance monitoring.",
                link: "/services#servers",
              },
              {
                icon: Cpu,
                title: "Managed IT Services",
                description:
                  "End-to-end IT infrastructure management with 24/7 monitoring and support services.",
                link: "/services#managed",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="glass-card p-6 rounded-xl hover-card futuristic-border"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 border border-secondary/30">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-secondary font-medium hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="cyber-button">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features (Why Choose Us) */}
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
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary mb-2 border border-secondary/20">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold glow-text">
                Technology Solutions That <span className="text-gradient">Transform</span> Your Business
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver comprehensive IT solutions that help businesses optimize performance, 
                enhance security, and drive innovation. Our expert team ensures seamless 
                implementation and ongoing support.
              </p>
              
              <div className="pt-6 space-y-8">
                {[
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
                    title: "Cloud Services",
                    items: [
                      "Public & private cloud deployments",
                      "Cloud migration strategies",
                      "Hybrid cloud architectures",
                      "Cloud security & compliance"
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
                ].map((feature, index) => (
                  <div key={index} className="glass-card p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-secondary">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
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
              <div className="aspect-square md:aspect-[4/5] glass-card rounded-2xl overflow-hidden relative shadow-glow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
                
                <div className="absolute w-full h-full">
                  <div className="w-[600px] h-[600px] absolute -bottom-64 -right-64 rounded-full bg-secondary/5 blur-3xl" />
                  <div className="w-[600px] h-[600px] absolute -top-64 -left-64 rounded-full bg-primary/5 blur-3xl" />
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Data center with glowing servers" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-50 mix-blend-overlay"
                />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="glass-card rounded-xl p-6 border border-secondary/30">
                    <h3 className="text-xl font-semibold mb-2 text-secondary">Enterprise-Grade Solutions</h3>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-background/50 backdrop-blur-md">
        {/* This will be rendered from TestimonialsSection.tsx */}
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="full-width-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70" />
            
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-no-repeat bg-cover opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 tech-pattern opacity-20"></div>
            </div>
            
            <div className="relative py-16 px-8 md:p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 glow-text">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Get in touch with our experts today for a free consultation and discover 
                  how ByteSpher can help optimize your technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-background hover:bg-white/90">
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
    </motion.div>
  );
};

export default Index;
