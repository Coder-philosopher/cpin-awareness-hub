import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, ExternalLink } from 'lucide-react';
import { newsArticles } from '@/data/newsData';

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  if (selectedArticle !== null) {
    const article = newsArticles.find(a => a.id === selectedArticle);
    if (!article) return <div>Article not found</div>;

    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => setSelectedArticle(null)}
            className="mb-6"
          >
            ← Back to News
          </Button>
          
          <article className="bg-card-gradient rounded-lg shadow-card p-8">
            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Latest Environmental News
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest developments in plastic pollution research, 
            policy changes, and environmental innovations from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="bg-card-gradient shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="font-heading text-lg line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => setSelectedArticle(article.id)}
                  >
                    Read Full News <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;