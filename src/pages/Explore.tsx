import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Rocket, Construction, Heart, Camera, Upload, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Explore = () => {
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
      setIsImageDialogOpen(true);
      toast.success('Authentication successful!');
    } else {
      toast.error('Invalid credentials. Please use admin@cpin for both username and password.');
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPredictionResult(null);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      toast.error('Please select an image first');
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('data', selectedFile);

      const response = await fetch('https://dgjdxuzikyergbowsie-model139.hf.space/predict/', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Prediction failed');
      }

      const result = await response.json();
      setPredictionResult(result);
      toast.success('Plastic recognition completed!');
    } catch (error) {
      toast.error('Failed to analyze image. Please try again.');
      console.error('Prediction error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* Plastic Recognition Feature */}
        <div className="mb-12">
          <Card className="bg-card-gradient shadow-card border-0 max-w-2xl mx-auto">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="font-heading text-2xl">Try Our Plastic Recognition AI</CardTitle>
              <p className="text-muted-foreground">
                Upload an image and let our AI identify plastic materials and pollution types
              </p>
            </CardHeader>
            <CardContent>
              <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      if (isAuthenticated) {
                        setIsImageDialogOpen(true);
                      } else {
                        setIsAuthDialogOpen(true);
                      }
                    }}
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    {isAuthenticated ? 'Upload Image' : 'Sign In to Continue'}
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

              {/* Image Upload Dialog */}
              <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Plastic Recognition AI</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="image-upload">Select Image</Label>
                      <Input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="cursor-pointer"
                      />
                    </div>
                    
                    {selectedFile && (
                      <div className="text-sm text-muted-foreground">
                        Selected: {selectedFile.name}
                      </div>
                    )}

                    <Button 
                      onClick={handlePredict} 
                      disabled={!selectedFile || isLoading}
                      className="w-full"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Analyze Image
                        </>
                      )}
                    </Button>

                    {predictionResult && (
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-semibold mb-2">Analysis Result:</h4>
                        <pre className="text-sm whitespace-pre-wrap">
                          {JSON.stringify(predictionResult, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
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