import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Leaf, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-md border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-button-gradient rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">CPIN</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Circular Plastic Intelligence Nexus - Join the fight against plastic pollution through education and awareness.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Quizzes', path: '/quizzes' },
                { name: 'News', path: '/news' },
                { name: 'Blogs', path: '/blogs' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/quizzes" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Take the Quiz
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground text-sm cursor-pointer hover:text-primary transition-colors">
                  Donate to Causes
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm cursor-pointer hover:text-primary transition-colors">
                  Volunteer
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm cursor-pointer hover:text-primary transition-colors">
                  Spread Awareness
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Github, label: 'Github' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 CPIN. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500" /> for our planet.
            </p>
            <div className="flex space-x-6">
              <span className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;