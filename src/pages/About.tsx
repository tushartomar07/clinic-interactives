import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CheckCircle2, Award, Users, Briefcase } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";

const team = [
  {
    name: "John Anderson",
    position: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "With over 20 years of experience in enterprise IT, John founded ByteSpher to provide businesses with high-quality networking and software solutions."
  },
  {
    name: "Sarah Martinez",
    position: "CTO",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    bio: "Sarah leads our technical strategy and oversees all technology implementations, bringing her extensive background in cloud architecture and cybersecurity."
  },
  {
    name: "David Chen",
    position: "VP of Software Development",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    bio: "David manages our software development team, focusing on creating innovative solutions that drive business value for our clients."
  },
  {
    name: "Emily Johnson",
    position: "Head of Network Engineering",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Emily specializes in designing and implementing complex network infrastructure for enterprises across various industries."
  }
];

const values = [
  {
    icon: CheckCircle2,
    title: "Technical Excellence",
    description: "We maintain the highest standards in every solution we deliver, ensuring optimal performance and reliability."
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We build trust through honest communication and ethical business practices with our clients and partners."
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "We prioritize understanding our clients' needs and delivering solutions that exceed their expectations."
  },
  {
    icon: Briefcase,
    title: "Innovation",
    description: "We continuously explore emerging technologies to bring the most advanced solutions to our clients."
  }
];

const certifications = [
  {
    name: "Cisco Certified Network Professional",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1280px-Cisco_logo.svg.png"
  },
  {
    name: "Microsoft Gold Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
  },
  {
    name: "AWS Solutions Architect",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
  },
  {
    name: "CompTIA Security+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CompTIA_logo.svg/1280px-CompTIA_logo.svg.png"
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us - ByteSpher</title>
        <meta name="description" content="Learn about ByteSpher, our mission, values, and the team behind our enterprise IT solutions and services." />
      </Helmet>

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent z-[-1]" />
        <div className="full-width-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Story & Vision
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate IT professionals dedicated to delivering innovative
              technology solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="full-width-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold">
                Empowering Businesses Through Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2010, ByteSpher was established with a clear mission: to provide 
                businesses with enterprise-grade IT solutions that drive growth and innovation. 
                What started as a small consulting firm has grown into a comprehensive IT 
                services provider serving clients across multiple industries.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team brings together decades of experience in networking, software 
                development, cybersecurity, and cloud solutions. We leverage this expertise 
                to deliver tailored solutions that address the unique challenges our clients face.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, ByteSpher continues to evolve and expand our service offerings to 
                meet the changing technology landscape, always with a focus on quality, 
                reliability, and exceptional customer service.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-lg aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="full-width-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide our work and define our approach to client partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="full-width-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our experienced team brings together decades of expertise across networking,
              software development, and IT management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl overflow-hidden hover-card"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary/70 text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="full-width-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">
              Certifications & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              We maintain the highest industry standards through our certifications and
              strategic partnerships with leading technology providers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 flex flex-col items-center justify-center aspect-square hover-card"
              >
                <img 
                  src={cert.logo} 
                  alt={cert.name} 
                  className="h-16 object-contain mb-4 opacity-80"
                />
                <p className="text-center font-medium text-sm">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </motion.div>
  );
};

export default About;
