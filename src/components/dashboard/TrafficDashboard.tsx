
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DashboardHeader from './DashboardHeader';
import DashboardLoading from './DashboardLoading';
import DashboardError from './DashboardError';
import TrafficOverview from './TrafficOverview';
import DashboardTabs from './DashboardTabs';
import { 
  getAnalyticsData, 
  getDailyPageViews, 
  getPageViewsByPath, 
  getReferrerData, 
  generateMockData 
} from '@/lib/analytics';
import { useToast } from '@/hooks/use-toast';

const TrafficDashboard = () => {
  const [timeRange, setTimeRange] = useState(7);
  const { toast } = useToast();
  
  // Fetch traffic data
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['trafficData', timeRange],
    queryFn: () => {
      const analyticsData = getAnalyticsData();
      if (analyticsData.pageViews.length === 0) {
        // If no data, generate mock data for demo
        return generateMockData(timeRange);
      }
      return analyticsData;
    },
  });
  
  const generateData = () => {
    generateMockData(timeRange);
    refetch();
    toast({
      title: 'Generated Demo Data',
      description: `Created sample traffic data for the past ${timeRange} days`,
    });
  };
  
  const handleRefresh = () => {
    refetch();
    toast({
      title: 'Data Refreshed',
      description: 'Traffic data has been updated',
    });
  };
  
  const handleTimeRangeChange = (days: number) => {
    setTimeRange(days);
  };
  
  const dailyData = React.useMemo(() => getDailyPageViews(timeRange), [data, timeRange]);
  const pathData = React.useMemo(() => getPageViewsByPath(timeRange), [data, timeRange]);
  const referrerData = React.useMemo(() => getReferrerData(timeRange), [data, timeRange]);
  
  return (
    <div className="space-y-6">
      <DashboardHeader 
        timeRange={timeRange}
        onTimeRangeChange={handleTimeRangeChange}
        onRefresh={handleRefresh}
        onGenerateData={generateData}
      />
      
      {isLoading ? (
        <DashboardLoading />
      ) : error ? (
        <DashboardError />
      ) : (
        <>
          <TrafficOverview 
            totalViews={data?.pageViews.length || 0} 
            dailyData={dailyData}
            timeRange={timeRange}
          />
          
          <DashboardTabs 
            dailyData={dailyData}
            pathData={pathData}
            referrerData={referrerData}
            pageViews={data?.pageViews || []}
          />
        </>
      )}
    </div>
  );
};

export default TrafficDashboard;
