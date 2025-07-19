import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Rocket, Construction, Heart, Camera, Upload, Loader2, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Explore = () => {
  const navigate = useNavigate();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<any>(null);

  const handleAuth = () => {
    if (username === 'admin@cpin' && password === 'admin@cpin') {
      setIsAuthenticated(true);
      setIsAuthDialogOpen(false);
      toast.success('Authentication successful!');
    } else {
      toast.error('Invalid credentials. Please use correct username and password.');
    }
  };

 const plasticTypes = [
    { class: 'Class-1.Battery', description: 'Plastic components related to power storage devices.' },
    { class: 'Class-2.Keyboard', description: 'Plastic parts of a computer keyboard.' },
    { class: 'Class-3.Microwave', description: 'Plastic elements in microwave ovens.' },
    { class: 'Class-4.Mobile', description: 'Plastic parts of a mobile phone.' },
    { class: 'Class-5.Mouse', description: 'Plastic casing of a computer mouse.' },
    { class: 'Class-6.Others', description: 'Miscellaneous plastic items that don\'t fit the other categories.' },
    { class: 'Class-7.PC', description: 'Plastic components of a personal computer.' },
    { class: 'Class-8.PCB', description: 'Plastic parts or casings of printed circuit boards.' },
    { class: 'Class-9.PE', description: 'Polyethylene, a common plastic used in various products.' },
    { class: 'Class-10.PET', description: 'Polyethylene terephthalate, a widely used plastic in bottles and packaging.' },
    { class: 'Class-11.PP', description: 'Polypropylene, a plastic commonly used in packaging and containers.' },
    { class: 'Class-12.PS', description: 'Polystyrene, used in disposable plastic products.' },
    { class: 'Class-13.Player', description: 'Plastic casing of electronic media players (e.g., MP3 players).' },
    { class: 'Class-14.Printer', description: 'Plastic parts of a printer.' },
    { class: 'Class-15.Television', description: 'Plastic housing or components of a television.' },
    { class: 'Class-16.Washing Machine', description: 'Plastic parts in washing machines.' }
];


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-24 h-24 bg-button-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-card animate-float">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Try Advanced Features
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working hard to bring you exciting new features that will enhance your
            experience with CPIN and help make an even bigger impact in the fight against plastic pollution.
          </p>
        </div>

        {/* Advanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Plastic Recognition Feature */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-heading text-2xl">Try Our Plastic Recognition AI</CardTitle>
              <p className="text-muted-foreground">
                {isAuthenticated
                  ? 'You can now explore the advanced model for plastic recognition.'
                  : 'Upload an image and let our AI identify plastic materials and pollution types.'}
              </p>
            </CardHeader>
            <CardContent>
              {isAuthenticated ? (
                <div>
                  <a
                    href="https://dgjdxuzikyergbowsie-model139.hf.space/predict/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-md text-sm font-heading text-white bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 transition-all duration-200 ease-in-out"
                  >
                    Check The Waste Type Here
                  </a>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold">Plastic Types:</h3>
                    <ul className="list-disc pl-6 text-left text-muted-foreground">
                      {plasticTypes.map((item, index) => (
                        <li key={index}>
                          <strong>{item.class}</strong>: {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        setIsAuthDialogOpen(true);
                      }}
                    >
                      <Camera className="w-5 h-5 mr-2" />
                      Sign In to Continue
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Sign In Required</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleAuth} className="w-full">
                        Sign In
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </CardContent>
          </Card>

          {/* Pyrolysis Dashboard Feature */}
          <Card className="bg-card-gradient shadow-card border-0">
            <CardHeader>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-heading text-2xl">See Pyrolysis Dashboard</CardTitle>
              <p className="text-muted-foreground">
                Monitor real-time data from our pyrolyser model converting thermoplastics into fuels
              </p>
            </CardHeader>
            <CardContent>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => navigate('/dashboard')}
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </CardContent>
          </Card>
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
