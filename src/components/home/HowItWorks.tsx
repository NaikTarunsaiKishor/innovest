
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ClipboardList, Upload, Users, MessageSquare, Lightbulb, 
  Search, HandshakeIcon, DollarSign, LineChart, Award
} from "lucide-react";

export const HowItWorks = () => {
  const roles = [
    {
      id: "innovator",
      title: "For Innovators",
      description: "Turn your groundbreaking idea into a funded venture",
      steps: [
        {
          icon: <ClipboardList className="w-8 h-8 text-primary" />,
          title: "Create Your Profile",
          description: "Sign up and complete your innovator profile with your skills and background."
        },
        {
          icon: <Lightbulb className="w-8 h-8 text-primary" />,
          title: "Submit Your Idea",
          description: "Describe your innovation using our guided form or AI assistant."
        },
        {
          icon: <Upload className="w-8 h-8 text-primary" />,
          title: "Upload Video Pitch",
          description: "Record or upload a short video explaining your concept and vision."
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-primary" />,
          title: "Get Feedback",
          description: "Receive structured feedback from mentors and potential investors."
        },
        {
          icon: <DollarSign className="w-8 h-8 text-primary" />,
          title: "Secure Funding",
          description: "Connect with interested investors and secure the resources you need."
        }
      ]
    },
    {
      id: "investor",
      title: "For Investors",
      description: "Discover and support the next generation of innovators",
      steps: [
        {
          icon: <ClipboardList className="w-8 h-8 text-primary" />,
          title: "Verification",
          description: "Complete your investor profile and verification process."
        },
        {
          icon: <Search className="w-8 h-8 text-primary" />,
          title: "Discover Opportunities",
          description: "Browse curated startup ideas based on your interests and investment criteria."
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-primary" />,
          title: "Provide Feedback",
          description: "Offer valuable insights to help founders refine their ideas."
        },
        {
          icon: <HandshakeIcon className="w-8 h-8 text-primary" />,
          title: "Connect and Invest",
          description: "Initiate discussions and make secure investments in promising ventures."
        },
        {
          icon: <LineChart className="w-8 h-8 text-primary" />,
          title: "Track Progress",
          description: "Monitor the growth and milestones of your portfolio companies."
        }
      ]
    },
    {
      id: "mentor",
      title: "For Mentors",
      description: "Share your expertise and help shape innovative ventures",
      steps: [
        {
          icon: <ClipboardList className="w-8 h-8 text-primary" />,
          title: "Expert Profile",
          description: "Create your profile highlighting your expertise and experience."
        },
        {
          icon: <Search className="w-8 h-8 text-primary" />,
          title: "Find Startups",
          description: "Discover startups in your domain that could benefit from your guidance."
        },
        {
          icon: <Users className="w-8 h-8 text-primary" />,
          title: "Connect with Founders",
          description: "Schedule mentorship calls and build relationships with innovators."
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-primary" />,
          title: "Provide Guidance",
          description: "Offer structured feedback and strategic advice to help startups grow."
        },
        {
          icon: <Award className="w-8 h-8 text-primary" />,
          title: "Earn Recognition",
          description: "Get recognized for your contributions to successful startups."
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How InnoVest Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process designed to connect ideas with resources 
            and help every stakeholder succeed.
          </p>
        </div>

        <Tabs defaultValue="innovator" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="innovator">For Innovators</TabsTrigger>
            <TabsTrigger value="investor">For Investors</TabsTrigger>
            <TabsTrigger value="mentor">For Mentors</TabsTrigger>
          </TabsList>
          
          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="animate-in fade-in-50 duration-300">
              <Card>
                <CardHeader className="text-center bg-muted rounded-t-lg">
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                  <CardDescription className="text-base">{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative">
                    {/* Connection line */}
                    <div className="absolute left-12 top-4 bottom-4 w-0.5 bg-primary/30 hidden md:block"></div>
                    
                    <div className="space-y-8">
                      {role.steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0 relative z-10">
                            {step.icon}
                          </div>
                          <div className="pt-2">
                            <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
