
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Filter, 
  Users, 
  Building, 
  Briefcase, 
  MapPin, 
  Award,
  MessageSquare,
  Bookmark,
  UserPlus,
  ExternalLink,
  X
} from 'lucide-react';
import { toast } from 'sonner';

interface Person {
  id: number;
  name: string;
  avatar: string;
  role: string;
  company: string;
  location: string;
  bio: string;
  expertise: string[];
  connections: number;
  joined: string;
  linkedin: string;
  twitter: string;
  achievements: string[];
  education: string;
  experience: string[];
}

const NetworkPage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    // Simulate fetching network data
    const fetchNetworkData = () => {
      setLoading(true);
      // This would be replaced with an actual API call
      const dummyData: Person[] = Array.from({ length: 120 }, (_, i) => {
        const roles = ["Investor", "Mentor", "Founder", "Co-founder", "CEO", "CTO", "Advisor"];
        const companies = ["TechStart Ventures", "Innova Capital", "BlueChip Investments", "GrowthLabs", "NextGen Fund"];
        const locations = ["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Pune", "Chennai"];
        const expertiseList = [
          "AI/ML", "SaaS", "Fintech", "Healthcare", "E-commerce", "Product Development", 
          "Marketing", "UX Design", "Business Strategy", "Fundraising", "Supply Chain"
        ];
        const joinedDates = ["Jan 2023", "Mar 2023", "Apr 2023", "Jun 2023", "Aug 2023", "Oct 2023", "Dec 2023"];
        const achievements = [
          "Built 3 successful startups",
          "Raised ₹50Cr in funding",
          "Published author in Business Today",
          "TEDx Speaker",
          "Angel investor in 12+ startups",
          "Industry mentor at IIT Bombay",
          "20+ years industry experience"
        ];
        const educations = [
          "MBA, IIM Ahmedabad",
          "B.Tech, IIT Delhi",
          "MS Computer Science, Stanford",
          "Ph.D. in Economics, Delhi University",
          "B.Com, St. Xavier's College"
        ];
        const experiences = [
          "VP Product at GrowthTech (2018-Present)",
          "Senior Product Manager at FlipIndia (2014-2018)",
          "Co-founder at TechFirst (2010-2014)",
          "Investment Analyst at Future Capital (2006-2010)"
        ];
        
        // Create 3-5 expertise areas per person
        const personExpertise = [];
        const numExpertise = 3 + Math.floor(Math.random() * 3);
        for (let j = 0; j < numExpertise; j++) {
          const exp = expertiseList[(i + j) % expertiseList.length];
          if (!personExpertise.includes(exp)) {
            personExpertise.push(exp);
          }
        }
        
        // Create 2-3 achievements per person
        const personAchievements = [];
        const numAchievements = 2 + Math.floor(Math.random() * 2);
        for (let j = 0; j < numAchievements; j++) {
          const ach = achievements[(i + j) % achievements.length];
          if (!personAchievements.includes(ach)) {
            personAchievements.push(ach);
          }
        }
        
        // Create 2-3 experiences per person
        const personExperiences = [];
        const numExperiences = 2 + Math.floor(Math.random() * 2);
        for (let j = 0; j < numExperiences; j++) {
          const exp = experiences[(i + j) % experiences.length];
          if (!personExperiences.includes(exp)) {
            personExperiences.push(exp);
          }
        }
        
        return {
          id: i + 1,
          name: `Person ${i+1}`,
          avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
          role: roles[i % roles.length],
          company: companies[i % companies.length],
          location: locations[i % locations.length],
          bio: `Experienced professional with expertise in ${personExpertise.slice(0, 2).join(" and ")}. Passionate about supporting innovative startups.`,
          expertise: personExpertise,
          connections: 10 + Math.floor(Math.random() * 490),
          joined: joinedDates[i % joinedDates.length],
          linkedin: "https://linkedin.com/in/username",
          twitter: "https://twitter.com/username",
          achievements: personAchievements,
          education: educations[i % educations.length],
          experience: personExperiences
        };
      });
      
      setTimeout(() => {
        setPeople(dummyData);
        setLoading(false);
      }, 1200);
    };
    
    fetchNetworkData();
  }, []);

  const filteredPeople = people.filter(person => {
    const matchesTab = activeTab === "all" || 
                      (activeTab === "investors" && person.role.includes("Investor")) || 
                      (activeTab === "mentors" && person.role.includes("Mentor")) || 
                      (activeTab === "founders" && (person.role.includes("Founder") || person.role.includes("CEO") || person.role.includes("CTO")));
                      
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          person.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
                          
    return matchesTab && matchesSearch;
  });

  const handleConnect = (personId: number) => {
    const person = people.find(p => p.id === personId);
    toast.success(`Connection request sent to ${person?.name}`, {
      description: "You'll be notified when they respond to your request."
    });
  };

  const handleMessage = (personId: number) => {
    const person = people.find(p => p.id === personId);
    toast.success(`Message thread opened with ${person?.name}`);
    // This would redirect to messaging page in a full implementation
  };

  const openPersonProfile = (person: Person) => {
    setSelectedPerson(person);
  };

  const closePersonProfile = () => {
    setSelectedPerson(null);
  };

  return (
    <Layout showSidebar={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Network</h1>
            <p className="text-muted-foreground">Connect with investors, mentors and fellow entrepreneurs</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite
            </Button>
          </div>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search by name, role, expertise or company..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              All
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              Investors
            </TabsTrigger>
            <TabsTrigger value="mentors" className="flex items-center">
              <Award className="mr-2 h-4 w-4" />
              Mentors
            </TabsTrigger>
            <TabsTrigger value="founders" className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Entrepreneurs
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-6 animate-pulse space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-12 w-12"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-md w-24"></div>
                    <div className="h-3 bg-muted rounded-md w-32"></div>
                  </div>
                </div>
                <div className="h-12 bg-muted rounded-md"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-muted rounded-full w-16"></div>
                  <div className="h-6 bg-muted rounded-full w-16"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 bg-muted rounded-md flex-1"></div>
                  <div className="h-8 bg-muted rounded-md flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="mb-4 text-muted-foreground">
              Showing {filteredPeople.length} people in your network
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPeople.slice(0, 24).map((person) => (
                <div 
                  key={person.id} 
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openPersonProfile(person)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback>{person.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role} at {person.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{person.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {person.expertise.slice(0, 3).map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{person.location}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <Users className="h-3 w-3 mr-1" />
                    <span>{person.connections} connections</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMessage(person.id);
                      }}
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleConnect(person.id);
                      }}
                    >
                      <UserPlus className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPeople.length > 24 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More People</Button>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Person Profile Dialog */}
      <Dialog open={!!selectedPerson} onOpenChange={(open) => !open && closePersonProfile()}>
        {selectedPerson && (
          <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <DialogTitle className="text-2xl">{selectedPerson.name}</DialogTitle>
                  <DialogDescription className="text-base font-medium">
                    {selectedPerson.role} at {selectedPerson.company}
                  </DialogDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={closePersonProfile} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-1 space-y-6">
                <div className="text-center">
                  <Avatar className="h-32 w-32 mx-auto">
                    <AvatarImage src={selectedPerson.avatar} alt={selectedPerson.name} />
                    <AvatarFallback className="text-2xl">{selectedPerson.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-center text-sm">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{selectedPerson.location}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{selectedPerson.connections} connections</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Joined {selectedPerson.joined}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-center">
                  <Button className="flex-1">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                </div>
                
                <div className="flex justify-center gap-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={selectedPerson.linkedin} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={selectedPerson.twitter} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p>{selectedPerson.bio}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.expertise.map((skill, i) => (
                      <Badge key={i}>{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <div className="flex items-start gap-3">
                    <div className="bg-muted rounded-md p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                    </div>
                    <div>
                      <p className="font-medium">{selectedPerson.education}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experience</h3>
                  {selectedPerson.experience.map((exp, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4">
                      <div className="bg-muted rounded-md p-2">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{exp}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                  <div className="space-y-3">
                    {selectedPerson.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-muted rounded-md p-2">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p>{achievement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Layout>
  );
};

export default NetworkPage;
