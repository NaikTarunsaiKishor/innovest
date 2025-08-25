
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Lightbulb, 
  BadgeCheck, 
  Users, 
  TrendingUp, 
  Calendar 
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [stats, setStats] = useState({
    pitchViews: 0,
    connections: 0,
    meetings: 0,
    mentors: 0,
    readiness: 0,
    impact: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(68), 500);
    
    // Simulate loading real-time data
    const statsTimer = setTimeout(() => {
      setStats({
        pitchViews: 843,
        connections: 27,
        meetings: 12,
        mentors: 5,
        readiness: 68,
        impact: 82
      });
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(statsTimer);
    };
  }, []);

  const recentActivities = [
    { 
      title: 'Investor viewed your pitch', 
      time: '2 hours ago',
      user: 'Ravi Sharma'
    },
    { 
      title: 'New mentor connection', 
      time: '6 hours ago',
      user: 'Priya Patel'
    },
    { 
      title: 'Feedback on your pitch received', 
      time: '1 day ago',
      user: 'Ankit Singh'
    },
    { 
      title: 'Meeting scheduled', 
      time: '2 days ago',
      user: 'Meena Gupta'
    }
  ];

  return (
    <Layout showSidebar={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, innovator!</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">Pitch Analysis</button>
            <button className="bg-background text-foreground border px-4 py-2 rounded-md">Update Progress</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pitch Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.pitchViews}</div>
                <BarChart className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.connections}</div>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">+5 new this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Meetings Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stats.meetings}</div>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">3 upcoming this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Startup Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Investment Readiness</span>
                    </div>
                    <span className="text-sm font-medium">{stats.readiness}%</span>
                  </div>
                  <Progress value={stats.readiness} className="h-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Social Impact Score</span>
                    </div>
                    <span className="text-sm font-medium">{stats.impact}%</span>
                  </div>
                  <Progress value={stats.impact} className="h-2" />
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    AI-Powered Tips
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span>Consider adding financial projections to your pitch deck to strengthen investor appeal.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span>Connect with 3 mentors in your industry to improve your business model.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span>Update your pitch video to highlight the recent traction your startup has gained.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="border-b last:border-0 pb-3 last:pb-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
