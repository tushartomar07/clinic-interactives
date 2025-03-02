
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Send, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="full-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold">
              Byte<span className="opacity-80">Spher</span>
            </div>
            <p className="text-primary-foreground/80 max-w-xs">
              Enterprise-grade networking solutions and software development services for businesses of all sizes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Careers</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  1234 Tech Avenue, Silicon Valley, CA 94024
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@bytespher.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-primary-foreground/80">
              Subscribe to our newsletter to receive updates and tech insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none bg-primary-foreground/10 border-primary-foreground/20 focus-visible:ring-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button size="icon" className="rounded-l-none">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              &copy; {new Date().getFullYear()} ByteSpher. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
