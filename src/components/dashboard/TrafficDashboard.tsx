
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  RefreshCw, 
  Users, 
  Compass, 
  Clock, 
  BarChart, 
  PieChart as PieChartIcon, 
  Database 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import TrafficOverview from './TrafficOverview';
import TrafficCharts from './TrafficCharts';
import TrafficTable from './TrafficTable';
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
  
  const dailyData = React.useMemo(() => getDailyPageViews(timeRange), [data, timeRange]);
  const pathData = React.useMemo(() => getPageViewsByPath(timeRange), [data, timeRange]);
  const referrerData = React.useMemo(() => getReferrerData(timeRange), [data, timeRange]);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Traffic Overview</h2>
          <p className="text-muted-foreground">Monitor your website traffic and visitor analytics</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center shadow-sm border border-border rounded-md">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-r-none ${timeRange === 7 ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setTimeRange(7)}
            >
              7 days
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-none ${timeRange === 14 ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setTimeRange(14)}
            >
              14 days
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-l-none ${timeRange === 30 ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setTimeRange(30)}
            >
              30 days
            </Button>
          </div>
          
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </Button>
          
          <Button variant="secondary" size="sm" onClick={generateData}>
            <Database size={16} className="mr-2" />
            Generate Demo Data
          </Button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="grid place-items-center py-20">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin">
              <RefreshCw size={24} />
            </div>
            <p>Loading traffic data...</p>
          </div>
        </div>
      ) : error ? (
        <Card className="p-6 text-center text-destructive">
          <p>Error loading traffic data. Please try again.</p>
        </Card>
      ) : (
        <>
          <TrafficOverview 
            totalViews={data?.pageViews.length || 0} 
            dailyData={dailyData}
            timeRange={timeRange}
          />
          
          <Tabs defaultValue="charts" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto">
              <TabsTrigger value="charts" className="flex items-center gap-2 py-2">
                <BarChart size={16} />
                <span className="hidden sm:inline">Charts</span>
              </TabsTrigger>
              <TabsTrigger value="table" className="flex items-center gap-2 py-2">
                <Clock size={16} />
                <span className="hidden sm:inline">Recent Activity</span>
              </TabsTrigger>
              <TabsTrigger value="sources" className="flex items-center gap-2 py-2">
                <Compass size={16} />
                <span className="hidden sm:inline">Traffic Sources</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="charts" className="mt-6">
              <TrafficCharts 
                dailyData={dailyData} 
                pathData={pathData}
                referrerData={referrerData}
              />
            </TabsContent>
            
            <TabsContent value="table" className="mt-6">
              <TrafficTable data={data?.pageViews || []} />
            </TabsContent>
            
            <TabsContent value="sources" className="mt-6">
              <Card className="p-4 md:p-6">
                <div className="space-y-1 mb-4">
                  <h3 className="font-semibold text-lg">Traffic Sources</h3>
                  <p className="text-sm text-muted-foreground">Where your visitors are coming from</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex justify-center items-center h-[300px]">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={referrerData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {referrerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#00D1FF', '#0056B3'][index % 7]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(16, 18, 26, 0.9)', 
                            borderColor: '#333',
                            color: '#fff'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Top Referrers</h4>
                    <div className="space-y-3">
                      {referrerData.map((source, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="font-medium">{source.name}</span>
                          </div>
                          <span className="font-mono text-muted-foreground">{source.value} views</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default TrafficDashboard;
