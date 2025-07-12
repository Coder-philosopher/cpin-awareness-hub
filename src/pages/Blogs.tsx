import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  if (selectedBlog !== null) {
    const blog = blogPosts.find(b => b.id === selectedBlog);
    if (!blog) return <div>Blog not found</div>;

    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => setSelectedBlog(null)}
            className="mb-6"
          >
            ← Back to Blogs
          </Button>
          
          <article className="bg-card-gradient rounded-lg shadow-card p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{blog.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
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
            Expert Insights & Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover in-depth articles from environmental experts, sustainability advocates, 
            and researchers working to solve the plastic pollution crisis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((blog) => (
            <Card key={blog.id} className="bg-card-gradient shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="font-heading text-xl line-clamp-2">{blog.title}</CardTitle>
                <CardDescription className="line-clamp-3">{blog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <User className="w-3 h-3" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{blog.readTime}</Badge>
                </div>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => setSelectedBlog(blog.id)}
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;