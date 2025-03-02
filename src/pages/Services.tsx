
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, Server, Code, Database, Shield, Cloud, Cpu, ArrowRight } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";

const serviceCategories = [
  {
    id: "networking",
    icon: Server,
    title: "Networking Solutions",
    description:
      "Enterprise-grade networking infrastructure designed for reliability, performance, and security.",
    features: [
      "Network design & architecture",
      "Structured cabling systems",
      "Switch & router configuration",
      "Wireless networks (WiFi)",
      "VPN & remote access solutions",
      "Network security implementation",
      "Performance monitoring & optimization",
      "Scalable network infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions that automate processes and drive innovation for your business.",
    features: [
      "Enterprise application development",
      "Web & mobile application development",
      "UI/UX design & implementation",
      "API development & integration",
      "Database design & optimization",
      "Legacy system modernization",
      "DevOps & CI/CD implementation",
      "Agile development methodology"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "servers",
    icon: Database,
    title: "Server Solutions",
    description:
      "Comprehensive server management services from installation to performance optimization.",
    features: [
      "Server installation & configuration",
      "Virtualization solutions",
      "Server clustering & load balancing",
      "High-availability environments",
      "Backup & disaster recovery",
      "Performance monitoring & tuning",
      "Server maintenance & updates",
      "Hardware lifecycle management"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Robust security solutions to protect your data, systems, and networks from threats.",
    features: [
      "Security assessments & audits",
      "Vulnerability management",
      "Penetration testing",
      "Endpoint protection",
      "Firewall implementation & management",
      "Intrusion detection & prevention",
      "Security monitoring & incident response",
      "Compliance management (GDPR, HIPAA, PCI)"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Strategic cloud solutions for improved scalability, flexibility, and cost-efficiency.",
    features: [
      "Cloud migration & strategy",
      "Multi-cloud & hybrid cloud solutions",
      "Cloud infrastructure management",
      "AWS, Azure & Google Cloud expertise",
      "Cloud security & compliance",
      "Serverless architecture implementation",
      "Cloud cost optimization",
      "Managed cloud services"
    ],
    image: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "managed",
    icon: Cpu,
    title: "Managed IT Services",
    description:
      "Comprehensive IT management to ensure your systems run smoothly and efficiently.",
    features: [
      "24/7 monitoring & support",
      "Help desk services",
      "Patch management & updates",
      "IT infrastructure management",
      "Preventive maintenance",
      "Technology consulting",
      "IT roadmap development",
      "Vendor management"
    ],
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Services - ByteSpher</title>
        <meta name="description" content="Explore our comprehensive IT services including networking solutions, software development, server management, cybersecurity, cloud services, and managed IT." />
      </Helmet>

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent z-[-1]" />
        <div className="full-width-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comprehensive IT & Network Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              We deliver tailored technology solutions to help businesses optimize performance,
              enhance security, and drive innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="full-width-container">
          <div className="space-y-20">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-display font-bold">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                    
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                      <Button>
                        Request a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        Download Brochure
                        <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                
                {index < serviceCategories.length - 1 && (
                  <div className="h-px w-full bg-border/50 my-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </motion.div>
  );
};

export default Services;
