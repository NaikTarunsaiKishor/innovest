
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, ExternalLink } from 'lucide-react';

const SuccessStories = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-muted-foreground">
              Discover how InnoVest has helped transform innovative ideas into thriving businesses
            </p>
          </div>
          
          <Tabs defaultValue="featured" className="w-full mb-16">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-auto">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="latest">Latest</TabsTrigger>
              <TabsTrigger value="highest-funded">Highest Funded</TabsTrigger>
            </TabsList>
            
            <div className="mt-12">
              <TabsContent value="featured" className="space-y-16 animate-in fade-in duration-300">
                <FeaturedStory 
                  title="EcoCharge"
                  description="Sustainable wireless charging technology that harvests ambient energy"
                  image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  founder="Aditya Gupta"
                  founderRole="Founder & CEO"
                  founderImage="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  funding="₹45 Crore"
                  quote="InnoVest connected us with investors who not only provided capital but also strategic partnerships that helped us scale our technology across three continents."
                  stats={[
                    { label: "Funding Rounds", value: "3" },
                    { label: "Current Valuation", value: "₹220 Cr" },
                    { label: "Team Size", value: "42" }
                  ]}
                />
                
                <FeaturedStory 
                  title="MediTrack"
                  description="AI-powered supply chain solution for pharmaceutical distribution"
                  image="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  founder="Priya Sharma"
                  founderRole="Co-founder & CTO"
                  founderImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  funding="₹33 Crore"
                  quote="From our first pitch on InnoVest to our Series A, the platform guided us every step of the way. The mentorship program was particularly transformative for our business model."
                  stats={[
                    { label: "Hospitals Served", value: "350+" },
                    { label: "Countries", value: "5" },
                    { label: "Mentor Hours", value: "500+" }
                  ]}
                  reverse
                />
                
                <FeaturedStory 
                  title="AgroTech Solutions"
                  description="Smart farming technology empowering small-scale farmers"
                  image="https://images.unsplash.com/photo-1628352081566-4747d6e1841c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  founder="Rajiv Kumar"
                  founderRole="Founder & CEO"
                  founderImage="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  funding="₹28 Crore"
                  quote="Our mission to revolutionize agriculture in rural India found perfect alignment with InnoVest's vision. Their platform connected us with impact investors who understood our long-term goals."
                  stats={[
                    { label: "Farmers Impacted", value: "25,000+" },
                    { label: "Yield Increase", value: "32%" },
                    { label: "Districts Covered", value: "45" }
                  ]}
                />
              </TabsContent>
              
              <TabsContent value="latest" className="animate-in fade-in duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "NutriPlate",
                      description: "Personalized nutrition planning platform using AI",
                      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Meera Joshi",
                      funding: "₹12 Crore",
                      date: "March 2025"
                    },
                    {
                      name: "SmartCommute",
                      description: "Electric vehicle sharing for corporate campuses",
                      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Vikram Reddy",
                      funding: "₹18 Crore",
                      date: "February 2025"
                    },
                    {
                      name: "LearnPlay",
                      description: "Gamified education platform for primary schools",
                      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Ananya Desai",
                      funding: "₹8 Crore",
                      date: "February 2025"
                    },
                    {
                      name: "HomeAssist",
                      description: "IoT home management solution for elderly care",
                      image: "https://images.unsplash.com/photo-1585503418537-4bb1284ceae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Rohan Kapoor",
                      funding: "₹15 Crore",
                      date: "January 2025"
                    },
                    {
                      name: "FashTech",
                      description: "Sustainable fashion marketplace with blockchain traceability",
                      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Sanya Malhotra",
                      funding: "₹20 Crore",
                      date: "December 2024"
                    },
                    {
                      name: "CyberShield",
                      description: "AI-powered cybersecurity for small businesses",
                      image: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Arjun Nair",
                      funding: "₹22 Crore",
                      date: "November 2024"
                    }
                  ].map((story, index) => (
                    <Card key={index}>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={story.image}
                          alt={story.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                        <p className="text-muted-foreground mb-4">{story.description}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">Founder: {story.founder}</p>
                            <p className="text-sm text-muted-foreground">Funded: {story.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-primary">{story.funding}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="highest-funded" className="animate-in fade-in duration-300">
                <div className="space-y-6">
                  {[
                    {
                      rank: 1,
                      name: "RenewPower",
                      description: "Decentralized renewable energy generation and distribution",
                      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Aryan Mehta",
                      funding: "₹85 Crore",
                      year: "2023"
                    },
                    {
                      rank: 2,
                      name: "HealthLink",
                      description: "AI-driven diagnostics platform for rural healthcare",
                      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Dr. Neha Sharma",
                      funding: "₹72 Crore",
                      year: "2022"
                    },
                    {
                      rank: 3,
                      name: "EcoCharge",
                      description: "Sustainable wireless charging technology that harvests ambient energy",
                      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Aditya Gupta",
                      funding: "₹45 Crore",
                      year: "2024"
                    },
                    {
                      rank: 4,
                      name: "UrbanFarm",
                      description: "Vertical farming solutions for urban spaces",
                      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Kavita Singh",
                      funding: "₹38 Crore",
                      year: "2023"
                    },
                    {
                      rank: 5,
                      name: "MediTrack",
                      description: "AI-powered supply chain solution for pharmaceutical distribution",
                      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                      founder: "Priya Sharma",
                      funding: "₹33 Crore",
                      year: "2022"
                    }
                  ].map((company, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-lg border">
                      <div className="shrink-0">
                        <div className="w-full md:w-40 h-40 rounded-md overflow-hidden">
                          <img 
                            src={company.image} 
                            alt={company.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold flex items-center gap-2">
                            <span className="w-6 h-6 bg-primary/10 text-primary rounded flex items-center justify-center text-sm font-bold">
                              {company.rank}
                            </span>
                            {company.name}
                          </h3>
                          <p className="font-bold text-primary text-lg md:text-right">{company.funding}</p>
                        </div>
                        <p className="text-muted-foreground mb-4">{company.description}</p>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Founded by {company.founder}</p>
                            <p className="text-sm text-muted-foreground">Funded in {company.year}</p>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2 md:mt-0">
                            <Link to="#" className="flex items-center gap-1">
                              View Details 
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
          
          <div className="bg-card rounded-lg border p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-primary/10 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-primary/20 animate-pulse animation-delay-200"></div>
                  </div>
                  <div className="absolute inset-8 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-primary/30 flex items-center justify-center">
                      <Star className="w-24 h-24 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Become Our Next Success Story</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're an innovator with the next big idea or an investor looking for promising opportunities, 
                  InnoVest provides the platform, connections, and resources you need to succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg">
                    <Link to="/signup" className="flex items-center gap-2">
                      Join InnoVest Today
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/how-it-works">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Featured Story Component
const FeaturedStory = ({ 
  title, 
  description,
  image,
  founder,
  founderRole,
  founderImage,
  funding,
  quote,
  stats,
  reverse = false
}: {
  title: string;
  description: string;
  image: string;
  founder: string;
  founderRole: string;
  founderImage: string;
  funding: string;
  quote: string;
  stats: { label: string; value: string }[];
  reverse?: boolean;
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="md:w-1/2">
        <div className="rounded-xl overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="md:w-1/2 space-y-6">
        <div>
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={founderImage}
              alt={founder}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{founder}</p>
            <p className="text-sm text-muted-foreground">{founderRole}</p>
          </div>
        </div>
        
        <div className="relative bg-muted/50 rounded-lg p-6">
          <Quote className="absolute top-3 left-3 w-6 h-6 text-primary/30" />
          <p className="text-lg italic pl-4">{quote}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-muted/30 rounded-md">
              <p className="font-bold text-xl text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div>
          <p className="text-lg font-bold">Total Funding: <span className="text-primary">{funding}</span></p>
        </div>
        
        <Button asChild>
          <Link to="#" className="flex items-center gap-2">
            Read Full Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessStories;
