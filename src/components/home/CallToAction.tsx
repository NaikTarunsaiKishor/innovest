
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-xl border p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary opacity-10"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent opacity-10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your Vision Into Reality?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Join InnoVest today and connect with the resources, people, and tools you need to succeed.
              Whether you're an innovator, investor, or mentor, we have a place for you in our ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/signup" className="flex items-center gap-2">
                  Get Started 
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/success-stories">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
