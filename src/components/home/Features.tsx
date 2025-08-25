
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, Search, Users, FileSpreadsheet, VideoIcon, ShieldCheck, 
  BarChart3, Briefcase, GraduationCap, Award
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "AI Pitch Deck Generator",
      description: "Transform your idea into a professional pitch deck with our AI-assisted template builder."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Investor Matching",
      description: "Our algorithm connects you with investors who are interested in your specific domain and stage."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Mentor Network",
      description: "Connect with industry experts who can guide you through challenges and help refine your ideas."
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      title: "Smart NDA Flow",
      description: "Protect your intellectual property with our secure, digital NDA system for investors and partners."
    },
    {
      icon: <VideoIcon className="h-8 w-8 text-primary" />,
      title: "Video Pitch Platform",
      description: "Record or upload your pitch videos and receive structured feedback from investors and mentors."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Progress Analytics",
      description: "Track your startup's growth with detailed metrics on pitch views, investor interest, and more."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Learning Hub",
      description: "Access a comprehensive library of resources, templates, and courses to accelerate your startup journey."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Verified Profiles",
      description: "Both innovators and investors undergo verification to ensure a trusted ecosystem for collaboration."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Micro-Investments",
      description: "Enable small ticket investments starting from ₹5,000 to democratize access to funding."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Social Impact Badge",
      description: "Get recognized for creating solutions that address important social or environmental challenges."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to Accelerate Your Success
          </h2>
          <p className="text-muted-foreground text-lg">
            InnoVest provides all the tools you need to take your idea from concept to funded venture,
            connecting with the right people along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-4 p-2 bg-primary/10 rounded-md inline-block">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
