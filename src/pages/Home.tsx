import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  Recycle, 
  Globe, 
  Heart, 
  BookOpen, 
  Brain, 
  Users, 
  Leaf,
  AlertTriangle,
  Waves,
  Fish,
  HelpCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Test Your Knowledge",
      description: "Challenge yourself with our interactive quizzes about plastic pollution and environmental sustainability.",
      link: "/quizzes"
    },
    {
      icon: BookOpen,
      title: "Read Latest News",
      description: "Stay updated with the latest developments in environmental science and plastic pollution research.",
      link: "/news"
    },
    {
      icon: Users,
      title: "Learn from Experts",
      description: "Read insightful blogs from environmental experts and sustainability advocates worldwide.",
      link: "/blogs"
    }
  ];

  const stats = [
    {
      icon: Waves,
      title: "8 Million Tons",
      description: "Plastic enters our oceans every year"
    },
    {
      icon: Fish,
      title: "700+ Species",
      description: "Marine animals affected by plastic pollution"
    },
    {
      icon: AlertTriangle,
      title: "450 Years",
      description: "Time for plastic bottles to decompose"
    },
    {
      icon: Globe,
      title: "99% of Seabirds",
      description: "Will have plastic in their stomachs by 2050"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-float">
            <div className="w-24 h-24 bg-button-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-card">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Join the Fight Against{' '}
            <span className="bg-button-gradient bg-clip-text text-transparent">
              Plastic Pollution
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Welcome to CPIN - Circular Plastic Intelligence Nexus. Learn about the environmental impact of plastic pollution, 
            test your knowledge, and become part of the solution for a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quizzes">Start the Pollution Quiz!</Link>
            </Button>
            <Button variant="cta" size="xl" asChild>
              <Link to="/explore">Explore Advanced Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is CPIN Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What is CPIN?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CPIN (Circular Plastic Intelligence Nexus) is a comprehensive platform dedicated to educating people 
              about plastic pollution and its global consequences. Our mission is to raise awareness, provide valuable 
              insights, and empower individuals to make informed decisions for environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card-gradient shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6">
                    {feature.description}
                  </CardDescription>
                  <Button variant="default" asChild>
                    <Link to={feature.link}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why is Plastic Pollution Dangerous?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The numbers are staggering. Plastic pollution affects every corner of our planet, 
              from the deepest oceans to the highest mountains. Here are some critical facts that 
              highlight the urgency of this global crisis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card-gradient shadow-card border-0">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about CPIN and plastic pollution solutions.
            </p>
          </div>

          <div className="bg-card-gradient rounded-2xl p-8 shadow-card">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">What is CPIN and how does it work?</AccordionTrigger>
                <AccordionContent>
                  CPIN (Circular Plastic Intelligence Nexus) is a comprehensive educational platform that combines artificial intelligence with environmental science to tackle plastic pollution. We provide interactive quizzes, expert blogs, and real-time news to help individuals understand the plastic crisis and take meaningful action. Our platform uses data-driven insights to promote circular economy principles and sustainable alternatives.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">How can I reduce plastic pollution on an individual level?</AccordionTrigger>
                <AccordionContent>
                  There are many ways to reduce your plastic footprint: Use reusable bags, bottles, and containers; Choose products with minimal packaging; Support companies with sustainable practices; Properly recycle and dispose of plastics; Participate in local cleanup events; Educate others about the plastic crisis; Choose biodegradable alternatives when possible; and reduce single-use items like straws, cutlery, and takeaway containers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">What are the best eco-friendly alternatives to common plastic items?</AccordionTrigger>
                <AccordionContent>
                  Here are sustainable swaps: Glass or stainless steel water bottles instead of plastic bottles; Bamboo or metal straws instead of plastic straws; Beeswax wraps instead of plastic wrap; Canvas or jute bags instead of plastic bags; Wooden or bamboo toothbrushes instead of plastic ones; Soap bars instead of liquid soap in plastic bottles; Refillable containers for bulk items; and biodegradable cleaning products in glass containers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Why is plastic pollution particularly dangerous for marine life?</AccordionTrigger>
                <AccordionContent>
                  Marine animals often mistake plastic debris for food, leading to malnutrition, internal injuries, and death. Microplastics enter the food chain, affecting entire ecosystems. Plastic pollution creates dead zones in oceans, disrupts breeding patterns, and causes entanglement injuries. Chemical pollutants from plastics can cause hormonal disruption and reproductive issues in marine species, ultimately threatening biodiversity and ecosystem balance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">How long does it take for different types of plastic to decompose?</AccordionTrigger>
                <AccordionContent>
                  Plastic decomposition times vary significantly: Plastic bags take 10-20 years; Disposable diapers take 250-500 years; Plastic bottles take 450+ years; Styrofoam containers take 500+ years; Fishing lines take 600+ years; and some plastics may never fully decompose, instead breaking down into harmful microplastics that persist in the environment indefinitely, continuing to impact wildlife and human health.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card-gradient rounded-2xl p-8 md:p-12 shadow-card">
            <Recycle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to test your knowledge about pollution and learn how you can contribute to solving this global crisis? 
              Take our comprehensive quiz and discover actionable steps you can take today.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/quizzes">Test Your Knowledge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
