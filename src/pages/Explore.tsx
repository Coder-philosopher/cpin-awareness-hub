import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Rocket, Construction, Heart } from 'lucide-react';

const Explore = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-24 h-24 bg-button-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-card animate-float">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Advanced Features Coming Soon!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working hard to bring you exciting new features that will enhance your 
            experience with CPIN and help make an even bigger impact in the fight against plastic pollution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-heading">In Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Interactive pollution tracking maps</li>
                <li>• AI-powered waste sorting guide</li>
                <li>• Community challenge platform</li>
                <li>• Carbon footprint calculator</li>
                <li>• Educational AR experiences</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-heading">Community Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• User profiles and achievements</li>
                <li>• Local cleanup event organizer</li>
                <li>• Expert Q&A sessions</li>
                <li>• Progress tracking dashboard</li>
                <li>• Sustainable product marketplace</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card-gradient rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-6">
            Want to be notified when these features launch? Join our community and be the first to know 
            about new tools, features, and opportunities to make a difference.
          </p>
          <p className="text-sm text-muted-foreground">
            In the meantime, explore our current features: take the quiz, read the latest news, 
            and discover expert insights in our blog section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;