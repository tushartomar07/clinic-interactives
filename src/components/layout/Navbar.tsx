
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
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-lg border-b border-secondary/10"
          : "py-6 bg-transparent"
      )}
    >
      <div className="full-width-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="font-display text-2xl font-bold">
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
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 pt-20 px-4 lg:hidden transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xl font-medium py-2 border-b border-secondary/20",
                location.pathname === item.path
                  ? "text-secondary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 pt-4">
            <Button variant="outline" size="lg" className="border-secondary/50 text-secondary hover:bg-secondary/10">
              Login
            </Button>
            <Button size="lg" className="cyber-button">
              Free Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
