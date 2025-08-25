
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  BarChart,
  LineChart,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Line,
  Pie,
  Area,
  ComposedChart,
} from 'recharts';
import {
  TrendingUp,
  Download,
  Calendar,
  Eye,
  ThumbsUp,
  MessageSquare,
  Users,
  Activity,
  BarChart2,
  Clock,
  CircleDollarSign,
  Target
} from 'lucide-react';

// Dummy data generation functions
const generateMonthlyData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    name: month,
    'Pitch Views': Math.floor(Math.random() * 500) + 100,
    'Investor Connections': Math.floor(Math.random() * 50) + 10,
    'Mentor Meetings': Math.floor(Math.random() * 20) + 5,
    Revenue: Math.floor(Math.random() * 50000) + 10000,
  }));
};

const generatePitchData = () => {
  const categories = ['Tech', 'Finance', 'Healthcare', 'Education', 'E-commerce', 'Sustainability'];
  return categories.map(category => ({
    name: category,
    value: Math.floor(Math.random() * 35) + 5,
  }));
};

const generatePerformanceData = () => {
  return [
    { name: 'Pitch Quality', score: Math.floor(Math.random() * 40) + 60 },
    { name: 'Business Model', score: Math.floor(Math.random() * 40) + 60 },
    { name: 'Market Fit', score: Math.floor(Math.random() * 40) + 60 },
    { name: 'Team', score: Math.floor(Math.random() * 40) + 60 },
    { name: 'Traction', score: Math.floor(Math.random() * 40) + 60 },
    { name: 'Financials', score: Math.floor(Math.random() * 40) + 60 },
  ];
};

const generateTrafficSourceData = () => {
  return [
    { name: 'Direct', value: Math.floor(Math.random() * 30) + 20 },
    { name: 'Search', value: Math.floor(Math.random() * 25) + 15 },
    { name: 'Social', value: Math.floor(Math.random() * 20) + 10 },
    { name: 'Referral', value: Math.floor(Math.random() * 15) + 5 },
    { name: 'Email', value: Math.floor(Math.random() * 10) + 5 },
  ];
};

const generateInvestorInterestData = () => {
  return [
    {
      name: 'Week 1',
      Views: Math.floor(Math.random() * 100) + 50,
      Likes: Math.floor(Math.random() * 50) + 20,
      Messages: Math.floor(Math.random() * 20) + 5,
    },
    {
      name: 'Week 2',
      Views: Math.floor(Math.random() * 100) + 50,
      Likes: Math.floor(Math.random() * 50) + 20,
      Messages: Math.floor(Math.random() * 20) + 5,
    },
    {
      name: 'Week 3',
      Views: Math.floor(Math.random() * 100) + 50,
      Likes: Math.floor(Math.random() * 50) + 20,
      Messages: Math.floor(Math.random() * 20) + 5,
    },
    {
      name: 'Week 4',
      Views: Math.floor(Math.random() * 100) + 50,
      Likes: Math.floor(Math.random() * 50) + 20,
      Messages: Math.floor(Math.random() * 20) + 5,
    },
  ];
};

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('12m');
  const [chartData, setChartData] = useState(generateMonthlyData());
  const [pitchData, setPitchData] = useState(generatePitchData());
  const [performanceData, setPerformanceData] = useState(generatePerformanceData());
  const [trafficSourceData, setTrafficSourceData] = useState(generateTrafficSourceData());
  const [interestData, setInterestData] = useState(generateInvestorInterestData());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      setChartData(generateMonthlyData());
      setPitchData(generatePitchData());
      setPerformanceData(generatePerformanceData());
      setTrafficSourceData(generateTrafficSourceData());
      setInterestData(generateInvestorInterestData());
      setLoading(false);
    }, 1000);
  }, [timeRange]);

  const handleExport = () => {
    alert('Analytics data is being exported');
  };

  return (
    <Layout showSidebar={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track performance metrics and investor engagement</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="3m">Last 3 months</SelectItem>
                <SelectItem value="6m">Last 6 months</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pitch Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">3,427</div>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+12.5%</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">vs. previous period</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Investor Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">237</div>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+8.3%</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">vs. previous period</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Mentorship Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">42</div>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+5.2%</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">vs. previous period</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Potential Funding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">₹1.2Cr</div>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+15.7%</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Based on investor interest</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
              <CardDescription>Monthly trends across key metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {loading ? (
                  <div className="h-full w-full bg-muted/50 animate-pulse rounded-md flex items-center justify-center">
                    <Activity className="h-8 w-8 text-muted" />
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="Pitch Views" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Investor Connections" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Mentor Meetings" 
                        stroke="#ffc658" 
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investor Interest</CardTitle>
              <CardDescription>Weekly breakdown of investor engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {loading ? (
                  <div className="h-full w-full bg-muted/50 animate-pulse rounded-md flex items-center justify-center">
                    <BarChart2 className="h-8 w-8 text-muted" />
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={interestData}
                      margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Views" fill="#8884d8" barSize={20}>
                        {interestData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                      <Bar dataKey="Likes" fill="#82ca9d" barSize={20} />
                      <Line 
                        type="monotone" 
                        dataKey="Messages" 
                        stroke="#ff7300" 
                        strokeWidth={2}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Performance Overview
            </TabsTrigger>
            <TabsTrigger value="pitch" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Pitch Analytics
            </TabsTrigger>
            <TabsTrigger value="audience" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Audience Insights
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Performance Scores
                  </CardTitle>
                  <CardDescription>Evaluation across key startup metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    {loading ? (
                      <div className="h-full w-full bg-muted/50 animate-pulse rounded-md" />
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={performanceData}
                          layout="vertical"
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis type="category" dataKey="name" />
                          <Tooltip />
                          <Legend />
                          <Bar 
                            dataKey="score" 
                            fill="#8884d8" 
                            label={{ position: 'right', fill: '#666' }}
                            radius={[0, 4, 4, 0]}
                          >
                            {performanceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                    Revenue Projection
                  </CardTitle>
                  <CardDescription>Estimated monthly revenue growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    {loading ? (
                      <div className="h-full w-full bg-muted/50 animate-pulse rounded-md" />
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={chartData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']}
                          />
                          <Bar 
                            dataKey="Revenue" 
                            fill="#8884d8"
                            radius={[4, 4, 0, 0]}
                          >
                            {chartData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={`hsl(${210 + index * 10}, 70%, 50%)`} 
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="pitch">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pitch Performance by Category</CardTitle>
                  <CardDescription>Distribution of investor interest across sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    {loading ? (
                      <div className="h-full w-full bg-muted/50 animate-pulse rounded-md" />
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pitchData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {pitchData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Interest']} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Comparison of key pitch engagement metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {loading ? (
                    <div className="space-y-6">
                      <div className="h-8 bg-muted/50 animate-pulse rounded-md" />
                      <div className="h-8 bg-muted/50 animate-pulse rounded-md" />
                      <div className="h-8 bg-muted/50 animate-pulse rounded-md" />
                      <div className="h-8 bg-muted/50 animate-pulse rounded-md" />
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Eye className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Pitch View Rate</span>
                          </div>
                          <span className="text-sm font-bold">78%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Percentage of investors who viewed your full pitch</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-amber-500" />
                            <span className="text-sm font-medium">Avg. View Time</span>
                          </div>
                          <span className="text-sm font-bold">2m 48s</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Average time investors spend viewing your pitch</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ThumbsUp className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">Interest Rate</span>
                          </div>
                          <span className="text-sm font-bold">42%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Percentage of viewers who expressed interest</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">Contact Rate</span>
                          </div>
                          <span className="text-sm font-bold">18%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '18%' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Percentage of viewers who reached out</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="audience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Distribution by roles and interests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {loading ? (
                    <>
                      <div className="h-40 bg-muted/50 animate-pulse rounded-md" />
                      <div className="h-40 bg-muted/50 animate-pulse rounded-md" />
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="text-sm font-medium mb-2">By Role</h3>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Investors</span>
                              <span className="font-medium">62%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: '62%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Mentors</span>
                              <span className="font-medium">24%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-cyan-500 rounded-full" style={{ width: '24%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Other Founders</span>
                              <span className="font-medium">14%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-yellow-500 rounded-full" style={{ width: '14%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium mb-2">By Location</h3>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Mumbai</span>
                              <span className="font-medium">38%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-indigo-500 rounded-full" style={{ width: '38%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Bangalore</span>
                              <span className="font-medium">31%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-pink-500 rounded-full" style={{ width: '31%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Delhi NCR</span>
                              <span className="font-medium">18%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 rounded-full" style={{ width: '18%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Other</span>
                              <span className="font-medium">13%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-orange-500 rounded-full" style={{ width: '13%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>How viewers are finding your pitch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    {loading ? (
                      <div className="h-full w-full bg-muted/50 animate-pulse rounded-md" />
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={trafficSourceData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {trafficSourceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Traffic']} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AnalyticsPage;
