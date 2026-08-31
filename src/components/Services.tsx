import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Database, Link, Rocket, Code, Upload, Bot } from "lucide-react";

const Services = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const words = ["Reliable", "Scalable", "Efficient", "Robust"];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Letter by letter animation - faster
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 50); // Type each letter every 50ms (faster)
        return () => clearTimeout(timeout);
      } else {
        // Word fully typed, wait briefly then start fade out
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 600); // Wait 0.6 seconds before fading out
        return () => clearTimeout(timeout);
      }
    } else {
      // Fast fade out and move to next word
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 200); // Quick fade out (200ms)
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, displayedText, isTyping, words]);

  const services = [
    {
      icon: Layout,
      title: "Front-End Development",
      description: "Craft intuitive and responsive user interfaces using modern frameworks to deliver a seamless user experience across all devices.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Database,
      title: "Back-End Development",
      description: "Build robust and scalable server-side solutions with secure data handling and efficient processing to support your business needs.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Link,
      title: "API Integration",
      description: "Seamlessly connect your application with third-party services to enhance functionality and improve user experience.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Design and manage efficient databases to ensure fast and reliable data storage and retrieval.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Improve your website's speed and performance with strategic code enhancements and caching techniques.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Deliver complete end-to-end solutions by integrating frontend and backend systems for a cohesive and powerful application.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Bot,
      title: "AI Engineering",
      description: "Design and implement advanced AI/ML solutions including LLMs, RAG systems, and intelligent automation to transform your business processes.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Integrate AI models into your applications to enhance functionality and improve user experience.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Upload,
      title: "Deployment & Maintenance",
      description: "Ensure smooth deployment and ongoing maintenance with regular updates and performance monitoring.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Animated Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Create{" "}
            <span 
              className="gradient-text inline-block align-middle relative"
              style={{ 
                width: '240px', 
                height: '1.2em',
                verticalAlign: 'middle',
                opacity: isTyping ? 1 : 0,
                transform: isTyping ? 'scale(1)' : 'scale(1.2)',
                transition: 'opacity 200ms ease-in-out, transform 200ms ease-in-out'
              }}
            >
              {displayedText}
            </span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Solutions for your Business</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into powerful digital experiences with cutting-edge technology and innovative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-purple-500/50 hover:bg-card/80 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-full ${service.color} group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300`}>
                      <IconComponent className="h-6 w-6 group-hover:text-purple-400" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact Me Button */}
        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

