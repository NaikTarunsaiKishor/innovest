
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { Menu, X, LogIn, Info, HelpCircle, Award } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="w-full bg-background border-b py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-innovest-teal to-innovest-orange"></div>
          <span className="font-poppins font-bold text-xl">InnoVest</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/about" 
            className={`text-foreground hover:text-primary transition-colors flex items-center gap-1.5 ${
              location.pathname === '/about' ? 'text-primary font-medium' : ''
            }`}
          >
            <Info className="w-4 h-4" />
            About
          </Link>
          <Link 
            to="/how-it-works" 
            className={`text-foreground hover:text-primary transition-colors flex items-center gap-1.5 ${
              location.pathname === '/how-it-works' ? 'text-primary font-medium' : ''
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            How It Works
          </Link>
          <Link 
            to="/success-stories" 
            className={`text-foreground hover:text-primary transition-colors flex items-center gap-1.5 ${
              location.pathname === '/success-stories' ? 'text-primary font-medium' : ''
            }`}
          >
            <Award className="w-4 h-4" />
            Success Stories
          </Link>
          <Link 
            to="/login" 
            className={`text-foreground hover:text-primary transition-colors ${
              location.pathname === '/login' ? 'text-primary font-medium' : ''
            }`}
          >
            Login
          </Link>
          <Button asChild>
            <Link to="/signup" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b shadow-lg">
          <div className="container mx-auto px-4 py-2 space-y-1">
            <Link 
              to="/about"
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground ${
                location.pathname === '/about' ? 'bg-primary/10' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Info className="w-4 h-4" />
              About
            </Link>
            <Link 
              to="/how-it-works"
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground ${
                location.pathname === '/how-it-works' ? 'bg-primary/10' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle className="w-4 h-4" />
              How It Works
            </Link>
            <Link 
              to="/success-stories"
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground ${
                location.pathname === '/success-stories' ? 'bg-primary/10' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Award className="w-4 h-4" />
              Success Stories
            </Link>
            <Link 
              to="/login"
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary hover:text-primary-foreground ${
                location.pathname === '/login' ? 'bg-primary/10' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="block px-3 py-2 rounded-md bg-primary text-primary-foreground text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
