import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Quizzes', path: '/quizzes' },
    { name: 'News', path: '/news' },
    { name: 'Blogs', path: '/blogs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/90 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl text-foreground tracking-wider">CPIN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium font-heading transition-all duration-200 ease-in-out transform ${
                    isActive(item.path)
                      ? 'text-primary bg-accent/80 shadow-lg'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent/50 hover:scale-105'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" asChild>
                <Link to="/explore" className="inline-block px-4 py-2 rounded-md text-sm font-heading text-white bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 ease-in-out">
                  Explore Advanced Features
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:bg-accent/50 transition-all duration-200 ease-in-out"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-md text-base font-medium font-heading transition-all duration-200 ease-in-out ${
                  isActive(item.path)
                    ? 'text-primary bg-accent/80 shadow-lg'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent/50 hover:scale-105'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/explore" onClick={() => setIsOpen(false)} className="inline-block px-4 py-2 rounded-md text-sm font-heading text-white bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 ease-in-out">
                  Explore Advanced Features
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
