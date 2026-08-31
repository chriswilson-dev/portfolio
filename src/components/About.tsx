import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { about } from "@/config/content";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {about.tagline}
          </p>

          {/* Education Badge */}
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-foreground">
                {about.education.degree}
              </div>
              <div className="text-xs text-muted-foreground">
                {about.education.institution} • {about.education.detail}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - My Journey */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {about.journey.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - How I Work */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">How I Work</h3>
            <div className="grid grid-cols-2 gap-4">
              {about.workValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 bg-card border-border hover:shadow-md transition-shadow"
                  >
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
        {about.whyHireMe.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Why You Should Hire Me?
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {about.whyHireMe.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8">
          {about.stats.map((stat, index) => (
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