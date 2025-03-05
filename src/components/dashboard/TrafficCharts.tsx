
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart as RechartsPC,
  Pie,
  Cell
} from 'recharts';

interface TrafficChartsProps {
  dailyData: { name: string; value: number }[];
  pathData: { name: string; value: number }[];
  referrerData: { name: string; value: number }[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#00D1FF', '#0056B3'];

const TrafficCharts: React.FC<TrafficChartsProps> = ({ dailyData, pathData, referrerData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-4 md:p-6">
        <div className="space-y-1 mb-4">
          <h3 className="font-semibold text-lg">Daily Traffic</h3>
          <p className="text-sm text-muted-foreground">Page views over time</p>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dailyData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D1FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00D1FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: '#888', fontSize: 12 }} />
              <YAxis tick={{ fill: '#888', fontSize: 12 }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(16, 18, 26, 0.9)', 
                  borderColor: '#333',
                  color: '#fff'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#00D1FF" 
                fillOpacity={1} 
                fill="url(#colorViews)" 
                name="Page Views"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <Card className="p-4 md:p-6">
        <div className="space-y-1 mb-4">
          <h3 className="font-semibold text-lg">Page Popularity</h3>
          <p className="text-sm text-muted-foreground">Views by page</p>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={pathData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="name" tick={{ fill: '#888', fontSize: 12 }} />
              <YAxis tick={{ fill: '#888', fontSize: 12 }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(16, 18, 26, 0.9)', 
                  borderColor: '#333',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Bar 
                dataKey="value" 
                fill="#0056B3" 
                name="Views" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <Card className="p-4 md:p-6 lg:col-span-2">
        <div className="space-y-1 mb-4">
          <h3 className="font-semibold text-lg">Traffic Distribution</h3>
          <p className="text-sm text-muted-foreground">Percentage of views by pages and sources</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3 text-center">By Page</h4>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPC>
                  <Pie
                    data={pathData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pathData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(16, 18, 26, 0.9)', 
                      borderColor: '#333',
                      color: '#fff'
                    }} 
                  />
                </RechartsPC>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3 text-center">By Referrer</h4>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPC>
                  <Pie
                    data={referrerData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {referrerData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(16, 18, 26, 0.9)', 
                      borderColor: '#333',
                      color: '#fff'
                    }} 
                  />
                </RechartsPC>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TrafficCharts;
