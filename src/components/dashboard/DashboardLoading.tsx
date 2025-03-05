
import React from 'react';
import { RefreshCw } from 'lucide-react';

const DashboardLoading: React.FC = () => {
  return (
    <div className="grid place-items-center py-20">
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin">
          <RefreshCw size={24} />
        </div>
        <p>Loading traffic data...</p>
      </div>
    </div>
  );
};

export default DashboardLoading;
