
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  BookOpen, 
  Clock, 
  Users, 
  Play, 
  Download,
  FileText,
  Star,
  Filter,
  PlayCircle,
  BookOpenCheck
} from 'lucide-react';
import { toast } from 'sonner';

interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrollments: number;
  rating: number;
  category: string;
  tags: string[];
  modules: number;
  completed?: number;
}

interface Resource {
  id: number;
  title: string;
  type: 'Template' | 'Guide' | 'Toolkit';
  description: string;
  thumbnail: string;
  downloadCount: number;
}

const LearningHub = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('courses');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Simulate fetching courses and resources
    const fetchData = () => {
      setLoading(true);
      
      // This would be replaced with actual API calls
      const dummyCourses: Course[] = Array.from({ length: 20 }, (_, i) => {
        const categories = ["Fundraising", "Business Development", "Marketing", "Financial Literacy", "Product Development", "Leadership"];
        const levels = ["Beginner", "Intermediate", "Advanced"];
        const tags = [
          "Startup 101", "Venture Capital", "Pitch Deck", "Business Model", 
          "Growth Strategy", "Market Analysis", "Customer Acquisition",
          "Financial Planning", "Team Building", "Product-Market Fit"
        ];
        
        // Select 2-4 random tags
        const courseTags = [];
        const numTags = 2 + Math.floor(Math.random() * 3);
        for (let j = 0; j < numTags; j++) {
          const tag = tags[(i + j) % tags.length];
          if (!courseTags.includes(tag)) {
            courseTags.push(tag);
          }
        }
        
        return {
          id: i + 1,
          title: `${categories[i % categories.length]} Masterclass ${Math.floor(i / categories.length) + 1}`,
          description: `Learn essential ${categories[i % categories.length].toLowerCase()} skills to accelerate your startup's growth and secure investment.`,
          thumbnail: `https://source.unsplash.com/random/300x200?${categories[i % categories.length].toLowerCase().replace(/\s+/g, '')}`,
          instructor: `Dr. Instructor ${i+1}`,
          duration: `${4 + Math.floor(Math.random() * 8)} hours`,
          level: levels[i % levels.length] as 'Beginner' | 'Intermediate' | 'Advanced',
          enrollments: 100 + Math.floor(Math.random() * 9900),
          rating: 3.5 + Math.random() * 1.5,
          category: categories[i % categories.length],
          tags: courseTags,
          modules: 5 + Math.floor(Math.random() * 11),
          completed: Math.random() > 0.7 ? Math.floor(Math.random() * 100) : undefined
        };
      });
      
      const dummyResources: Resource[] = Array.from({ length: 15 }, (_, i) => {
        const types = ["Template", "Guide", "Toolkit"];
        const resourceTitles = [
          "Pitch Deck Template",
          "Business Model Canvas",
          "Financial Projection Template",
          "Investor Meeting Preparation Guide",
          "Term Sheet Negotiation Guide",
          "Startup Valuation Calculator",
          "Marketing Strategy Toolkit",
          "Competitive Analysis Framework",
          "Product Roadmap Template",
          "Customer Interview Guide",
          "Fundraising Email Templates",
          "Board Meeting Agenda Template",
          "Cap Table Management Toolkit",
          "Brand Identity Guidelines",
          "Hiring Process Framework"
        ];
        
        return {
          id: i + 1,
          title: resourceTitles[i],
          type: types[i % types.length] as 'Template' | 'Guide' | 'Toolkit',
          description: `Essential ${types[i % types.length].toLowerCase()} for startups looking to ${i % 2 === 0 ? 'streamline their processes' : 'accelerate their growth'}.`,
          thumbnail: `https://source.unsplash.com/random/300x200?document${i}`,
          downloadCount: 50 + Math.floor(Math.random() * 950)
        };
      });
      
      setTimeout(() => {
        setCourses(dummyCourses);
        setResources(dummyResources);
        setLoading(false);
      }, 1000);
    };
    
    fetchData();
  }, []);

  const handleEnroll = (courseId: number) => {
    toast.success("Successfully enrolled", {
      description: "You can now access the course materials and track your progress."
    });
  };

  const handleDownload = (resourceId: number) => {
    const resource = resources.find(r => r.id === resourceId);
    toast.success(`Downloading ${resource?.title}`, {
      description: "Your download will begin shortly."
    });
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
                         
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'inProgress' && course.completed !== undefined && course.completed < 100) ||
                         (activeFilter === 'completed' && course.completed === 100) ||
                         (activeFilter === course.category.toLowerCase().replace(/\s+/g, ''));
                         
    return matchesSearch && matchesFilter;
  });

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.type.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesFilter = activeFilter === 'all' || activeFilter === resource.type.toLowerCase();
                         
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout showSidebar={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Learning Hub</h1>
            <p className="text-muted-foreground">Enhance your startup knowledge with courses and resources</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpenCheck className="h-4 w-4" />
              My Learning
            </Button>
            <Button>
              <PlayCircle className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search for courses, resources or topics..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Resources
              </TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <TabsContent value="courses" className="mt-6">
            <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-none mb-6">
              <Badge
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveFilter('all')}
              >
                All
              </Badge>
              <Badge
                variant={activeFilter === 'inProgress' ? 'default' : 'outline'}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveFilter('inProgress')}
              >
                In Progress
              </Badge>
              <Badge
                variant={activeFilter === 'completed' ? 'default' : 'outline'}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveFilter('completed')}
              >
                Completed
              </Badge>
              {Array.from(new Set(courses.map(c => c.category))).map(category => (
                <Badge
                  key={category}
                  variant={activeFilter === category.toLowerCase().replace(/\s+/g, '') ? 'default' : 'outline'}
                  className="cursor-pointer whitespace-nowrap"
                  onClick={() => setActiveFilter(category.toLowerCase().replace(/\s+/g, ''))}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-40 bg-muted rounded-t-lg"></div>
                    <CardContent className="p-4 space-y-4">
                      <div className="h-4 bg-muted rounded-md w-3/4"></div>
                      <div className="h-12 bg-muted rounded-md"></div>
                      <div className="h-4 bg-muted rounded-md w-1/2"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                {filteredCourses.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl font-medium">No courses match your search</p>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="relative h-40">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title} 
                            className="w-full h-full object-cover"
                          />
                          {course.completed !== undefined && (
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                              <div className="text-white text-xl font-bold">{course.completed}%</div>
                              <div className="text-white/70 text-sm">Completed</div>
                            </div>
                          )}
                          <Badge 
                            className="absolute top-2 right-2"
                            variant={course.level === 'Beginner' ? 'outline' : 
                                    course.level === 'Intermediate' ? 'secondary' : 'default'}
                          >
                            {course.level}
                          </Badge>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge variant="outline">{course.category}</Badge>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                              <span className="ml-1 text-sm">{course.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <CardTitle className="line-clamp-1 text-base">{course.title}</CardTitle>
                          <CardDescription className="line-clamp-2 h-10">{course.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pb-2">
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{course.duration}</span>
                            <span className="mx-2">•</span>
                            <Users className="h-4 w-4 mr-1" />
                            <span>{course.enrollments.toLocaleString()} enrolled</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-2">
                            {course.tags.slice(0, 2).map((tag, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                            ))}
                            {course.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">+{course.tags.length - 2} more</Badge>
                            )}
                          </div>
                          
                          {course.completed !== undefined && (
                            <div className="mb-4">
                              <div className="flex justify-between text-xs mb-1">
                                <span>{course.completed}% complete</span>
                                <span>{Math.floor(course.completed / 100 * course.modules)}/{course.modules} modules</span>
                              </div>
                              <Progress value={course.completed} className="h-1" />
                            </div>
                          )}
                        </CardContent>
                        
                        <CardFooter>
                          <Button 
                            className="w-full"
                            variant={course.completed !== undefined ? "secondary" : "default"}
                            onClick={() => course.completed === undefined ? handleEnroll(course.id) : window.location.href = `/learning-hub/courses/${course.id}`}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            {course.completed !== undefined ? 'Continue Learning' : 'Enroll Now'}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </TabsContent>
          
          <TabsContent value="resources" className="mt-6">
            <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-none mb-6">
              <Badge
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveFilter('all')}
              >
                All
              </Badge>
              {['Template', 'Guide', 'Toolkit'].map(type => (
                <Badge
                  key={type}
                  variant={activeFilter === type.toLowerCase() ? 'default' : 'outline'}
                  className="cursor-pointer whitespace-nowrap"
                  onClick={() => setActiveFilter(type.toLowerCase())}
                >
                  {type}s
                </Badge>
              ))}
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-40 bg-muted rounded-t-lg"></div>
                    <CardContent className="p-4 space-y-4">
                      <div className="h-4 bg-muted rounded-md w-3/4"></div>
                      <div className="h-12 bg-muted rounded-md"></div>
                      <div className="h-8 bg-muted rounded-md"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                {filteredResources.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-xl font-medium">No resources match your search</p>
                    <p className="text-muted-foreground">Try adjusting your search criteria</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        <div className="relative h-40">
                          <img 
                            src={resource.thumbnail} 
                            alt={resource.title} 
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-2 right-2">
                            {resource.type}
                          </Badge>
                        </div>
                        
                        <CardHeader className="pb-0">
                          <CardTitle className="text-base">{resource.title}</CardTitle>
                          <CardDescription className="line-clamp-2 h-10">{resource.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pb-0">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Download className="h-4 w-4 mr-1" />
                            <span>{resource.downloadCount.toLocaleString()} downloads</span>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="pt-4">
                          <Button 
                            className="w-full"
                            variant="outline"
                            onClick={() => handleDownload(resource.id)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LearningHub;
