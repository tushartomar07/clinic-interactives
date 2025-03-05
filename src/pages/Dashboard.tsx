
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import TrafficDashboard from '@/components/dashboard/TrafficDashboard';
import { trackPageView } from '@/lib/analytics';

const Dashboard = () => {
  useEffect(() => {
    // Track page view when component mounts
    trackPageView('/dashboard');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 min-h-screen"
    >
      <Helmet>
        <title>Traffic Dashboard | ByteSpher</title>
        <meta name="description" content="View and analyze traffic metrics for your website." />
      </Helmet>
      
      <div className="full-width-container">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Traffic Monitoring Dashboard</h1>
        <p className="text-muted-foreground mb-10 max-w-3xl">
          Track and analyze your website traffic with real-time metrics and visualizations.
        </p>
        
        <TrafficDashboard />
      </div>
    </motion.div>
  );
};

export default Dashboard;
