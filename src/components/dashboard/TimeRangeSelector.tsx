
import React from 'react';
import { Button } from '@/components/ui/button';

interface TimeRangeSelectorProps {
  timeRange: number;
  onTimeRangeChange: (days: number) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ timeRange, onTimeRangeChange }) => {
  return (
    <div className="flex items-center shadow-sm border border-border rounded-md">
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-r-none ${timeRange === 7 ? 'bg-primary/10 text-primary' : ''}`}
        onClick={() => onTimeRangeChange(7)}
      >
        7 days
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-none ${timeRange === 14 ? 'bg-primary/10 text-primary' : ''}`}
        onClick={() => onTimeRangeChange(14)}
      >
        14 days
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-l-none ${timeRange === 30 ? 'bg-primary/10 text-primary' : ''}`}
        onClick={() => onTimeRangeChange(30)}
      >
        30 days
      </Button>
    </div>
  );
};

export default TimeRangeSelector;
