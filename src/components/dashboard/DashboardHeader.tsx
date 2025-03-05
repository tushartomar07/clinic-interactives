
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Database } from 'lucide-react';
import TimeRangeSelector from './TimeRangeSelector';

interface DashboardHeaderProps {
  timeRange: number;
  onTimeRangeChange: (days: number) => void;
  onRefresh: () => void;
  onGenerateData: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  timeRange, 
  onTimeRangeChange, 
  onRefresh, 
  onGenerateData 
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Traffic Overview</h2>
        <p className="text-muted-foreground">Monitor your website traffic and visitor analytics</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-3">
        <TimeRangeSelector 
          timeRange={timeRange} 
          onTimeRangeChange={onTimeRangeChange} 
        />
        
        <Button variant="outline" size="sm" onClick={onRefresh}>
          <RefreshCw size={16} className="mr-2" />
          Refresh
        </Button>
        
        <Button variant="secondary" size="sm" onClick={onGenerateData}>
          <Database size={16} className="mr-2" />
          Generate Demo Data
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
