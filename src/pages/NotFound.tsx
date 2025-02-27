
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg px-4"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-primary/10 mb-6">
          <span className="text-primary text-5xl font-display font-bold">404</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
