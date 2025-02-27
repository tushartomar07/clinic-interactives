
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Server, Code, Database, Shield, Cloud, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Server,
    title: "Networking Solutions",
    description:
      "Enterprise-grade networking infrastructure with active/passive setups, structured cabling, and switch configurations.",
    link: "/services#networking",
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
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Advanced threat protection, vulnerability assessments, and security compliance for your infrastructure.",
    link: "/services#security",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Seamless cloud migration, hybrid cloud solutions, and multi-cloud management platforms.",
    link: "/services#cloud",
  },
  {
    icon: Cpu,
    title: "Managed IT Services",
    description:
      "End-to-end IT infrastructure management with 24/7 monitoring and support services.",
    link: "/services#managed",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="full-width-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end technology solutions designed to optimize performance,
            enhance security, and drive innovation for your business.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-xl p-6 hover-card glass-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
