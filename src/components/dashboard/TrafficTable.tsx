
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PageView } from '@/lib/analytics';

interface TrafficTableProps {
  data: PageView[];
}

const TrafficTable: React.FC<TrafficTableProps> = ({ data }) => {
  // Sort data by timestamp (most recent first)
  const sortedData = [...data].sort((a, b) => b.timestamp - a.timestamp);
  
  // Get only the most recent 20 entries
  const recentData = sortedData.slice(0, 20);
  
  return (
    <Card className="p-4 md:p-6">
      <div className="space-y-1 mb-4">
        <h3 className="font-semibold text-lg">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Recent page views and sources</p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentData.length > 0 ? (
              recentData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.path}</TableCell>
                  <TableCell>{item.referrer}</TableCell>
                  <TableCell className="text-right">
                    {new Date(item.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-6 text-muted-foreground">
                  No recent activity found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TrafficTable;
