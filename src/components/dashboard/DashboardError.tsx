
import React from 'react';
import { Card } from '@/components/ui/card';

const DashboardError: React.FC = () => {
  return (
    <Card className="p-6 text-center text-destructive">
      <p>Error loading traffic data. Please try again.</p>
    </Card>
  );
};

export default DashboardError;
