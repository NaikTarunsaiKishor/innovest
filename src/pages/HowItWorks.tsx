
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  LightbulbIcon, TrendingUp, UserCheck, ArrowRight, 
  Search, FileText, PresentationIcon, MessageSquareText,
  CheckSquare, Handshake
} from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("innovator");

  return (
    <Layout>
      <section className="pt-16 md:pt-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How InnoVest Works</h1>
            <p className="text-xl text-muted-foreground">
              A simple, transparent process designed to connect innovation with opportunity
            </p>
          </div>

          <Tabs defaultValue="innovator" onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="innovator" className="flex items-center gap-2">
                <LightbulbIcon className="w-4 h-4" />
                <span>For Innovators</span>
              </TabsTrigger>
              <TabsTrigger value="investor" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>For Investors</span>
              </TabsTrigger>
              <TabsTrigger value="mentor" className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                <span>For Mentors</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="innovator" className="space-y-16 animate-in fade-in duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Bring Your Vision to Life</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    As an innovator on InnoVest, you'll have access to everything you need to take your 
                    idea from concept to reality. Our platform connects you with investors, mentors, and 
                    resources tailored to your specific needs.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/signup?role=innovator" className="flex items-center gap-2">
                      Get Started as an Innovator
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Startup team working together" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">The Innovator Journey</h3>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                  <div className="space-y-12 relative">
                    {[
                      {
                        icon: FileText,
                        title: "Create Your Profile",
                        description: "Sign up and build your innovator profile, highlighting your team, vision, and needs."
                      },
                      {
                        icon: PresentationIcon,
                        title: "Craft Your Pitch",
                        description: "Develop a compelling pitch that showcases your idea, market potential, and funding requirements."
                      },
                      {
                        icon: Search,
                        title: "Get Discovered",
                        description: "Our algorithm matches your project with relevant investors and mentors based on industry and needs."
                      },
                      {
                        icon: MessageSquareText,
                        title: "Connect & Communicate",
                        description: "Engage with interested investors through our secure messaging platform."
                      },
                      {
                        icon: Handshake,
                        title: "Secure Funding",
                        description: "Finalize funding agreements and receive investments through our platform."
                      },
                      {
                        icon: CheckSquare,
                        title: "Track Progress",
                        description: "Update investors on milestones and development while accessing tools to grow your venture."
                      }
                    ].map((step, index) => (
                      <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                          <div className="bg-card rounded-lg p-6 border shadow-sm">
                            <step.icon className="h-10 w-10 text-primary mb-4" />
                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold relative z-10">
                          {index + 1}
                        </div>
                        <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="investor" className="space-y-16 animate-in fade-in duration-300">
              {/* Similar structure as the innovator tab, but with investor-specific content */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Investors analyzing data" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">Discover Tomorrow's Success Stories</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    As an investor on InnoVest, you'll gain access to a curated selection of high-potential startups
                    across industries. Our platform helps you find, evaluate, and invest in opportunities aligned with your interests.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/signup?role=investor" className="flex items-center gap-2">
                      Get Started as an Investor
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">The Investor Journey</h3>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                  <div className="space-y-12 relative">
                    {[
                      {
                        icon: FileText,
                        title: "Create Your Profile",
                        description: "Sign up and define your investment preferences, industries of interest, and funding capacity."
                      },
                      {
                        icon: Search,
                        title: "Discover Opportunities",
                        description: "Browse vetted startup opportunities matched to your investment criteria."
                      },
                      {
                        icon: PresentationIcon,
                        title: "Evaluate Startups",
                        description: "Access comprehensive pitch decks, business plans, and financial projections."
                      },
                      {
                        icon: MessageSquareText,
                        title: "Connect With Teams",
                        description: "Engage directly with founding teams to ask questions and evaluate their potential."
                      },
                      {
                        icon: Handshake,
                        title: "Invest Securely",
                        description: "Complete investment transactions through our secure platform with transparent documentation."
                      },
                      {
                        icon: CheckSquare,
                        title: "Monitor Progress",
                        description: "Track the progress of your investments and receive regular updates from the founding teams."
                      }
                    ].map((step, index) => (
                      <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                          <div className="bg-card rounded-lg p-6 border shadow-sm">
                            <step.icon className="h-10 w-10 text-primary mb-4" />
                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold relative z-10">
                          {index + 1}
                        </div>
                        <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mentor" className="space-y-16 animate-in fade-in duration-300">
              {/* Similar structure as the other tabs, but with mentor-specific content */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Share Your Expertise</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    As a mentor on InnoVest, you'll have the opportunity to guide the next generation of innovators,
                    sharing your knowledge and experience to help shape successful ventures.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/signup?role=mentor" className="flex items-center gap-2">
                      Get Started as a Mentor
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Mentorship session" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">The Mentor Journey</h3>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                  <div className="space-y-12 relative">
                    {[
                      {
                        icon: FileText,
                        title: "Create Your Profile",
                        description: "Highlight your expertise, experience, and areas where you can provide valuable guidance."
                      },
                      {
                        icon: Search,
                        title: "Find Startups to Mentor",
                        description: "Browse startups seeking mentorship in your areas of expertise."
                      },
                      {
                        icon: MessageSquareText,
                        title: "Connect With Founders",
                        description: "Build relationships with innovators who can benefit from your knowledge and experience."
                      },
                      {
                        icon: PresentationIcon,
                        title: "Provide Guidance",
                        description: "Offer feedback on business models, go-to-market strategies, and operational challenges."
                      },
                      {
                        icon: Handshake,
                        title: "Formalize Mentorship",
                        description: "Establish mentorship agreements with equity options if desired."
                      },
                      {
                        icon: CheckSquare,
                        title: "Track Your Impact",
                        description: "Monitor the progress of startups you've mentored and see your influence on their success."
                      }
                    ].map((step, index) => (
                      <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                          <div className="bg-card rounded-lg p-6 border shadow-sm">
                            <step.icon className="h-10 w-10 text-primary mb-4" />
                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold relative z-10">
                          {index + 1}
                        </div>
                        <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/signup">Join InnoVest Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/success-stories">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
