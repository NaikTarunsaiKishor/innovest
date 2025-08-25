
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

type Testimonial = {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      content: "InnoVest connected me with the perfect investors who not only provided capital but also strategic guidance. My startup went from idea to market in just 8 months!",
      author: "Priya Sharma",
      role: "Founder & CEO",
      company: "GreenTech Solutions",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      content: "The quality of startups on InnoVest is exceptional. The platform's verification process ensures I only see serious innovators with well-thought-out ideas worth investing in.",
      author: "Vikram Mehta",
      role: "Angel Investor",
      company: "Future Capital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      content: "Being a mentor on InnoVest has been incredibly rewarding. I've guided 12 startups so far, and seeing their growth journey gives me immense satisfaction.",
      author: "Dr. Ananya Reddy",
      role: "Technology Mentor",
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      content: "The AI pitch deck generator saved me weeks of work. The feedback system helped me refine my pitch until it was perfect, resulting in three investment offers!",
      author: "Rahul Kapoor",
      role: "Co-founder",
      company: "MediConnect",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      content: "InnoVest's micro-investment feature allowed me to diversify my portfolio across 15 promising startups. Their verification system gives me confidence in each investment.",
      author: "Neha Gupta",
      role: "Portfolio Investor",
      company: "Nexus Investments",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from innovators, investors, and mentors who have achieved remarkable results with InnoVest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary opacity-50 mb-4" />
                <p className="mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
