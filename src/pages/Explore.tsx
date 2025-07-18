import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';

const Explore = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isImageOpen, setImageOpen] = useState(false);
  const [auth, setAuth] = useState({ user: '', pass: '' });
  const [authenticated, setAuthenticated] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAuth = () => {
    if (auth.user === 'admin@cpin' && auth.pass === 'admin@cpin') {
      setAuthenticated(true);
      setAuthOpen(false);
      setImageOpen(true);
      toast.success('Authenticated!');
    } else toast.error('Invalid credentials.');
  };

  const handlePredict = async () => {
    if (!file) return toast.error('Select image first.');
    setLoading(true);
    try {
      const form = new FormData();
      form.append('image', file);
      const res = await fetch('https://dgjdxuzikyergbowsie-model139.hf.space/predict', {
        method: 'POST',
        body: form
      });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      setResult(json);
      toast.success('Analysis complete!');
    } catch {
      toast.error('Failed to analyze image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-20 flex justify-center">
      <Dialog open={isAuthOpen} onOpenChange={setAuthOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => authenticated ? setImageOpen(true) : setAuthOpen(true)}>
            Upload Image
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label>Username</Label>
            <Input value={auth.user} onChange={e => setAuth({ ...auth, user: e.target.value })} />
            <Label>Password</Label>
            <Input type="password" value={auth.pass} onChange={e => setAuth({ ...auth, pass: e.target.value })} />
            <Button onClick={handleAuth}>Sign In</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isImageOpen} onOpenChange={setImageOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Plastic Recognition AI</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label>Select Image</Label>
            <Input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0])} />
            <Button onClick={handlePredict} disabled={!file || loading}>
              {loading ? <Loader2 className="animate-spin" /> : <Upload />}
              {loading ? 'Analyzing...' : 'Analyze Image'}
            </Button>
            {result && (
              <pre className="mt-4">{JSON.stringify(result, null, 2)}</pre>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Explore;
