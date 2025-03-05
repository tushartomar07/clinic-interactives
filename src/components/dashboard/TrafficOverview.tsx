
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, BarChart, Clock, TrendingUp } from 'lucide-react';

interface TrafficOverviewProps {
  totalViews: number;
  dailyData: { name: string; value: number }[];
  timeRange: number;
}

const TrafficOverview: React.FC<TrafficOverviewProps> = ({ totalViews, dailyData, timeRange }) => {
  // Calculate average daily views
  const avgViews = totalViews > 0 ? Math.round(totalViews / timeRange) : 0;
  
  // Calculate highest traffic day
  const highestTraffic = dailyData.length > 0 
    ? dailyData.reduce((max, day) => day.value > max.value ? day : max, dailyData[0])
    : { name: '-', value: 0 };
  
  // Calculate growth percentage
  const calculateGrowth = () => {
    if (dailyData.length < 2) return 0;
    
    // Get first half and second half data
    const half = Math.floor(dailyData.length / 2);
    const firstHalf = dailyData.slice(0, half);
    const secondHalf = dailyData.slice(half);
    
    // Calculate total views for each half
    const firstHalfViews = firstHalf.reduce((sum, day) => sum + day.value, 0);
    const secondHalfViews = secondHalf.reduce((sum, day) => sum + day.value, 0);
    
    if (firstHalfViews === 0) return 100;
    
    return Math.round(((secondHalfViews - firstHalfViews) / firstHalfViews) * 100);
  };
  
  const growthPercent = calculateGrowth();
  
  const statCards = [
    {
      title: 'Total Page Views',
      value: totalViews,
      icon: BarChart,
      color: 'text-secondary',
      growth: null,
    },
    {
      title: 'Average Daily Views',
      value: avgViews,
      icon: Users,
      color: 'text-primary',
      growth: null,
    },
    {
      title: 'Highest Traffic',
      value: highestTraffic.value,
      icon: TrendingUp,
      color: 'text-cyan-400',
      growth: null,
      subtitle: highestTraffic.name,
    },
    {
      title: 'Growth Rate',
      value: `${growthPercent}%`,
      icon: Clock,
      color: growthPercent >= 0 ? 'text-green-500' : 'text-red-500',
      growth: growthPercent,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((card, index) => (
        <Card key={index} className="p-4 md:p-6 hover-card">
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-medium">{card.title}</p>
              <div className="flex items-end gap-2">
                <h3 className="text-2xl font-bold">{card.value}</h3>
                {card.subtitle && (
                  <span className="text-xs text-muted-foreground pb-1">{card.subtitle}</span>
                )}
              </div>
              {card.growth !== null && (
                <div className={`text-xs font-medium flex items-center ${card.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {card.growth >= 0 ? '↑' : '↓'} {Math.abs(card.growth)}% from previous period
                </div>
              )}
            </div>
            <div className={`${card.color} p-2 rounded-md bg-secondary/10`}>
              <card.icon size={20} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TrafficOverview;
