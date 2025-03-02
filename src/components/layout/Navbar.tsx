
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMenuOpen(false);
    
    // Prevent scrolling when menu is open on mobile
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [location, isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-secondary/10"
          : "py-4 md:py-6 bg-transparent"
      )}
    >
      <div className="full-width-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="font-display text-xl sm:text-2xl font-bold">
            <span className="text-white">Byte</span>
            <span className="text-secondary glow-text">Spher</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                location.pathname === item.path
                  ? "text-secondary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button size="sm" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
            Login
          </Button>
          <Button size="sm" className="cyber-button">
            Free Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-secondary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden transition-all duration-300 ease-in-out mobile-menu-container overflow-auto",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%] pointer-events-none"
        )}
      >
        <div className="pt-20 px-6 pb-8 h-full flex flex-col">
          <nav className="flex flex-col space-y-6 flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg font-medium py-3 border-b border-secondary/20 flex items-center",
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 mt-auto pt-6">
              <Button variant="outline" size="lg" className="w-full border-secondary/50 text-secondary hover:bg-secondary/10">
                Login
              </Button>
              <Button size="lg" className="w-full cyber-button">
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
