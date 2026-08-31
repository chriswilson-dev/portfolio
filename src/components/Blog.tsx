import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPost = {
    title: "My Journey",
    excerpt: "Before I begin, thanks for taking out time and reading this article. I am Vivek Choudhary, a student and a software engineer. Here I begin my journey sharing experiences, challenges, and insights from my path in technology and software development.",
    publishedDate: "October 18, 2025",
    readTime: "9 min read",
    url: "https://medium.com/@iamvivekchoudhary77",
    tags: ["Personal", "Journey", "Software Engineering", "Student Life"]
  };

  return (
    <section id="blog" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blogs </span> and <span className="gradient-text">Writing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and insights from my journey as a software engineer and student. 
            Read about challenges, learnings, ai engineering stuff, and the exciting world of technology.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Centered Blog Content */}
          <div className="max-w-2xl w-full">
            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPost.publishedDate}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {blogPost.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {blogPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button className="glow-effect" asChild>
                  <a 
                    href="https://medium.com/@iamvivekchoudhary77/my-journey-1e5f7c970617"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Full Article
                  </a>
                </Button>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
