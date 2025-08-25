
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Filter, 
  Search, 
  MapPin, 
  Users, 
  TrendingUp,
  ThumbsUp,
  Star
} from 'lucide-react';
import { toast } from "sonner";

const CATEGORIES = [
  "All", "Fintech", "Healthtech", "Edtech", "AI", "Sustainability", 
  "AgriTech", "E-commerce", "SaaS", "Blockchain", "Consumer"
];

interface Startup {
  id: number;
  name: string;
  logo: string;
  description: string;
  location: string;
  category: string;
  fundingStage: string;
  teamSize: number;
  founded: number;
  traction: string;
  rating: number;
}

const StartupsPage = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching startups data
    const fetchStartups = () => {
      setLoading(true);
      // This would be replaced with an actual API call
      const dummyStartups: Startup[] = Array.from({ length: 150 }, (_, i) => {
        const categories = ["Fintech", "Healthtech", "Edtech", "AI", "Sustainability", 
                          "AgriTech", "E-commerce", "SaaS", "Blockchain", "Consumer"];
        const stages = ["Pre-seed", "Seed", "Series A", "Series B", "Growth"];
        const locations = ["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Pune", "Chennai"];
        const teamSizes = [2, 5, 8, 12, 20, 35, 50];
        const tractions = [
          "₹1.2Cr ARR, 18% MoM growth", 
          "25,000 users, ₹80L GMV", 
          "100+ enterprise clients", 
          "500% YoY growth, ₹3.5Cr revenue",
          "7 patents filed, 120% QoQ growth"
        ];
        
        return {
          id: i + 1,
          name: `Startup${i+1}`,
          logo: `https://source.unsplash.com/random/100x100?startup&sig=${i}`,
          description: `Innovative ${categories[i % categories.length].toLowerCase()} startup solving real-world problems with cutting-edge technology.`,
          location: locations[i % locations.length],
          category: categories[i % categories.length],
          fundingStage: stages[i % stages.length],
          teamSize: teamSizes[i % teamSizes.length],
          founded: 2018 + (i % 5),
          traction: tractions[i % tractions.length],
          rating: 3 + (i % 3)
        };
      });
      
      setTimeout(() => {
        setStartups(dummyStartups);
        setLoading(false);
      }, 1000);
    };
    
    fetchStartups();
  }, []);

  const filteredStartups = startups.filter(startup => {
    const matchesCategory = activeCategory === "All" || startup.category === activeCategory;
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         startup.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApply = (startupId: number) => {
    toast.success("Application submitted", {
      description: `Your interest in connecting with Startup${startupId} has been recorded.`
    });
  };

  return (
    <Layout showSidebar={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Explore Startups</h1>
            <p className="text-muted-foreground">Discover innovative ventures seeking investment and mentorship</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </div>
        
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search startups by name, description or technology..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-none">
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="h-32 bg-muted"></CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="h-4 bg-muted rounded-md"></div>
                  <div className="h-12 bg-muted rounded-md"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 w-16 bg-muted rounded-full"></div>
                    <div className="h-6 w-16 bg-muted rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <p className="mb-4 text-muted-foreground">Showing {filteredStartups.length} startups</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStartups.slice(0, 30).map((startup) => (
                <Card key={startup.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="p-0 h-40 overflow-hidden">
                    <img 
                      src={startup.logo} 
                      alt={startup.name} 
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{startup.name}</CardTitle>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < startup.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <CardDescription className="mb-4">{startup.description}</CardDescription>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {startup.location}
                      </Badge>
                      <Badge>{startup.category}</Badge>
                      <Badge variant="secondary">{startup.fundingStage}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {startup.teamSize} team members
                      </div>
                      <div>Founded {startup.founded}</div>
                    </div>
                    
                    <div className="bg-muted p-2 rounded-md flex items-center text-xs mb-4">
                      <TrendingUp className="h-3 w-3 mr-2 text-green-500" />
                      <span>{startup.traction}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => window.location.href = `/startups/${startup.id}`}>
                      View Details
                    </Button>
                    <Button size="sm" onClick={() => handleApply(startup.id)}>
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredStartups.length > 30 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Startups</Button>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default StartupsPage;
