
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Clock, Compass } from 'lucide-react';
import TrafficCharts from './TrafficCharts';
import TrafficTable from './TrafficTable';
import TrafficSources from './TrafficSources';

interface DashboardTabsProps {
  dailyData: { name: string; value: number }[];
  pathData: { name: string; value: number }[];
  referrerData: { name: string; value: number }[];
  pageViews: any[];
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ 
  dailyData, 
  pathData, 
  referrerData, 
  pageViews 
}) => {
  return (
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
        <TrafficTable data={pageViews} />
      </TabsContent>
      
      <TabsContent value="sources" className="mt-6">
        <TrafficSources referrerData={referrerData} />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
