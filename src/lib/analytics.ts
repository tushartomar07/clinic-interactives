
// Types for analytics data
export interface PageView {
  path: string;
  timestamp: number;
  referrer: string;
}

export interface TrafficData {
  pageViews: PageView[];
}

// Local storage key
const ANALYTICS_STORAGE_KEY = 'bytespher_analytics';

// Initialize analytics data
const initializeAnalytics = (): TrafficData => {
  const storedData = localStorage.getItem(ANALYTICS_STORAGE_KEY);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return { pageViews: [] };
};

// Save analytics data to local storage
const saveAnalytics = (data: TrafficData) => {
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(data));
};

// Track a page view
export const trackPageView = (path: string) => {
  const data = initializeAnalytics();
  const newPageView: PageView = {
    path,
    timestamp: Date.now(),
    referrer: document.referrer || 'direct',
  };
  
  data.pageViews.push(newPageView);
  saveAnalytics(data);
};

// Get all analytics data
export const getAnalyticsData = (): TrafficData => {
  return initializeAnalytics();
};

// Get page views for a specific time range
export const getPageViews = (days: number = 7): PageView[] => {
  const data = initializeAnalytics();
  const now = Date.now();
  const timeThreshold = now - days * 24 * 60 * 60 * 1000;
  
  return data.pageViews.filter(view => view.timestamp >= timeThreshold);
};

// Get page views grouped by day
export const getDailyPageViews = (days: number = 7): { name: string; value: number }[] => {
  const pageViews = getPageViews(days);
  const dailyViews: Record<string, number> = {};
  
  pageViews.forEach(view => {
    const date = new Date(view.timestamp).toLocaleDateString();
    dailyViews[date] = (dailyViews[date] || 0) + 1;
  });
  
  return Object.entries(dailyViews).map(([date, count]) => ({
    name: date,
    value: count,
  }));
};

// Get page views grouped by path
export const getPageViewsByPath = (days: number = 7): { name: string; value: number }[] => {
  const pageViews = getPageViews(days);
  const pathViews: Record<string, number> = {};
  
  pageViews.forEach(view => {
    pathViews[view.path] = (pathViews[view.path] || 0) + 1;
  });
  
  return Object.entries(pathViews).map(([path, count]) => ({
    name: path,
    value: count,
  }));
};

// Get page views grouped by referrer
export const getReferrerData = (days: number = 7): { name: string; value: number }[] => {
  const pageViews = getPageViews(days);
  const referrerViews: Record<string, number> = {};
  
  pageViews.forEach(view => {
    referrerViews[view.referrer] = (referrerViews[view.referrer] || 0) + 1;
  });
  
  return Object.entries(referrerViews).map(([referrer, count]) => ({
    name: referrer,
    value: count,
  }));
};

// Simulate random traffic data for demo purposes
export const generateMockData = (days: number = 7) => {
  const data = initializeAnalytics();
  const paths = ['/', '/services', '/about', '/contact', '/dashboard'];
  const referrers = ['direct', 'google.com', 'facebook.com', 'twitter.com', 'linkedin.com'];
  
  // Clear existing data
  data.pageViews = [];
  
  // Generate random data for the past 'days'
  const now = Date.now();
  for (let i = 0; i < days; i++) {
    const day = now - i * 24 * 60 * 60 * 1000;
    
    // Random number of visits per day (5-20)
    const visitsPerDay = 5 + Math.floor(Math.random() * 15);
    
    for (let j = 0; j < visitsPerDay; j++) {
      const randomPath = paths[Math.floor(Math.random() * paths.length)];
      const randomReferrer = referrers[Math.floor(Math.random() * referrers.length)];
      
      data.pageViews.push({
        path: randomPath,
        timestamp: day - Math.floor(Math.random() * 24 * 60 * 60 * 1000),
        referrer: randomReferrer,
      });
    }
  }
  
  saveAnalytics(data);
  return data;
};
