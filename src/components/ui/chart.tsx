
import React from 'react';
import { PieChart as RechartsPC, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#00D1FF', '#0056B3'];

interface PieChartProps {
  width: number;
  height: number;
  data: { name: string; value: number }[];
  nameKey: string;
  dataKey: string;
}

export const PieChart = ({
  width,
  height,
  data,
  nameKey,
  dataKey
}: PieChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsPC width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
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
  );
};
