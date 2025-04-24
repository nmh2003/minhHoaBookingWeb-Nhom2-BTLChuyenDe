
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { BedDouble, Search, Menu, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-hotel-300">
          <BedDouble size={28} />
          <span className="text-xl font-bold">ComfyStay</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-hotel-300 transition-colors">
            Home
          </Link>
          <Link to="/hotels" className="text-gray-700 hover:text-hotel-300 transition-colors">
            Hotels
          </Link>
          <Link to="/destinations" className="text-gray-700 hover:text-hotel-300 transition-colors">
            Destinations
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-hotel-300 transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex gap-1">
            <User size={16} />
            <span>Sign In</span>
          </Button>
          <Button className="hidden md:flex gap-1">Book Now</Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-hotel-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/hotels" 
              className="text-gray-700 hover:text-hotel-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link 
              to="/destinations" 
              className="text-gray-700 hover:text-hotel-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-hotel-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="outline" className="mt-2 w-full justify-center gap-1">
              <User size={16} />
              <span>Sign In</span>
            </Button>
            <Button className="w-full justify-center">Book Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
