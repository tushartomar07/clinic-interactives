
import React from 'react';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface TrafficSourcesProps {
  referrerData: { name: string; value: number }[];
}

const TrafficSources: React.FC<TrafficSourcesProps> = ({ referrerData }) => {
  return (
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
  );
};

export default TrafficSources;
