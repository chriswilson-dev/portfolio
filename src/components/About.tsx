import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Zap, GraduationCap } from "lucide-react";

const About = () => {
  const workValues = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead of technology trends and implementing cutting-edge solutions",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "30+", label: "Technologies Worked" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Building transformative solutions that create real impact.
          </p>
          
          {/* Education Badge */}
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-foreground">MS in Artificial Intelligence</div>
              <div className="text-xs text-muted-foreground">Worcester Polytechnic Institute • GPA 3.7/4.0</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - My Journey */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 2+ years of experience in full-stack development and upskilling myself in the AI/ML tech space, I've had the privilege of working with vibrant teams across enterprise companies, building everything from scratch to large-scale applications serving millions of users.
              </p>
              
              <p>
                My journey has defined itself as it creates meaningful impact through technology. From research to hackathons, I consistently focus on building solutions that genuinely improve people's lives. Whether I work on accessibility tools, healthcare applications, or wellness applications, I am driven by the belief that technology should be both powerful and purposeful.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring and gathering knowledge about fighter planes, as planes are one of my interests. Not only this, but I like to know what is happening around the world geopolitically and play video games. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </div>

          {/* Right Column - How I Work */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">How I Work</h3>
            <div className="grid grid-cols-2 gap-4">
              {workValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-4 bg-card border-border hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <div className={`inline-flex p-2 rounded-lg ${value.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why You Should Hire Me */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Why You Should Hire Me?</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Delivered Measurable Business Results</h4>
                <p className="text-muted-foreground leading-relaxed">
                  At Volkswagen, I reduced production errors by 50% and improved system stability by 40% for a dealer management system serving 100+ dealers. I optimized report generation speed by 30% and automated multilingual support for 250+ text labels across international markets. These outcomes demonstrate my ability to translate technical work into tangible business value that directly impacts operations and customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Continuously Sharpening Skills Through Hackathons</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I actively participate in online and offline hackathons to increase my abilities, demonstrate credibility, and stay current with emerging technologies. This continuous learning approach has helped me to adapt new technologies and apply them to solve real problems quickly.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Strong Collaborator Who Drives Team Success</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I coordinated production rollouts with a 3-person team at Volkswagen, significantly reducing deployment downtime through proactive communication and debugging. As a Graduate Teaching Assistant, I support 35 students in data mining coursework, developing the ability to explain complex concepts clearly. My experience working across engineering teams and resolving 100+ critical bugs has taught me how to collaborate effectively and contribute to shared goals without ego or friction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-card border border-border/50 rounded-2xl mb-4">
                <span className="text-3xl font-bold gradient-text">{stat.number}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
