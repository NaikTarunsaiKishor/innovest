
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LightbulbIcon, TrendingUp, UserCheck, Target, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('innovator');
  
  const tabs = [
    {
      id: 'innovator',
      label: 'For Innovators',
      title: 'Turn Your Ideas Into Reality',
      description: 'Access funding, mentorship, and resources to bring your innovative concepts to life.',
      icon: <LightbulbIcon className="w-12 h-12 text-primary" />,
      cta: 'Pitch Your Idea',
      link: '/signup?role=innovator'
    },
    {
      id: 'investor',
      label: 'For Investors',
      title: "Discover Tomorrow's Success Stories",
      description: 'Explore vetted opportunities with high growth potential and make meaningful investments.',
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      cta: 'Find Opportunities',
      link: '/signup?role=investor'
    },
    {
      id: 'mentor',
      label: 'For Mentors',
      title: 'Share Your Expertise',
      description: 'Guide the next generation of entrepreneurs and help shape innovative ventures.',
      icon: <UserCheck className="w-12 h-12 text-primary" />,
      cta: 'Become a Mentor',
      link: '/signup?role=mentor'
    }
  ];
  
  const activeContent = tabs.find(tab => tab.id === activeTab);
  
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/0 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      </div>
      
      <div className="container relative z-20 mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              <span className="ml-2">Connecting Vision With Resources</span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Where <span className="text-primary">Innovation</span> Meets <span className="text-accent">Investment</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              InnoVest bridges the gap between groundbreaking ideas and the resources needed to bring them to life. Find partners, funding, and mentorship all in one place.
            </p>
            
            <div className="grid grid-cols-3 gap-2 max-w-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {activeContent && (
              <div className="bg-card rounded-lg p-6 border shadow-sm max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-4">{activeContent.icon}</div>
                <h3 className="text-xl font-bold mb-2">{activeContent.title}</h3>
                <p className="text-muted-foreground mb-4">{activeContent.description}</p>
                <Button asChild size="lg">
                  <Link to={activeContent.link} className="flex items-center gap-2">
                    {activeContent.cta}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex-1 hidden md:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-lg bg-primary/20 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Innovation meeting"
                className="rounded-lg border shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg bg-accent/20 animate-float"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card rounded-md border p-3 shadow-lg flex items-center gap-2">
                <Target className="text-primary w-5 h-5" />
                <span className="font-medium">3200+ Projects Funded</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl text-primary">₹120Cr+</p>
            <p className="text-muted-foreground">Funding Raised</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl text-primary">1,500+</p>
            <p className="text-muted-foreground">Innovators</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl text-primary">500+</p>
            <p className="text-muted-foreground">Investors</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl text-primary">300+</p>
            <p className="text-muted-foreground">Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
};
