
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Globe, Users, Medal } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About InnoVest</h1>
            <p className="text-xl text-muted-foreground">
              Empowering innovation through strategic investments and meaningful connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                InnoVest was founded with a singular vision: to democratize access to funding and expertise 
                for innovative startups while providing investors with curated, high-potential opportunities.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that great ideas can come from anywhere, and our platform is designed to level 
                the playing field, making connections between visionary entrepreneurs and forward-thinking 
                investors seamless and effective.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Founded in 2020</h3>
                <p className="text-muted-foreground">
                  Started during the pandemic to help businesses find new opportunities and funding during challenging times.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Operating in 15+ countries, connecting innovators and investors across borders and cultures.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Growing Community</h3>
                <p className="text-muted-foreground">
                  Over 25,000 active users including entrepreneurs, investors, and mentors sharing knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Priya Sharma", role: "CEO & Co-founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { name: "Rajiv Mehta", role: "CTO & Co-founder", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { name: "Ananya Patel", role: "COO", image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                { name: "Vikram Singh", role: "Chief Investment Officer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're an innovator with a groundbreaking idea or an investor looking for the next big opportunity, 
              InnoVest is here to help you achieve your goals.
            </p>
            <Button asChild size="lg">
              <Link to="/signup" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
