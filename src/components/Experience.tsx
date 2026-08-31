import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap, Code } from "lucide-react";

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "Worcester Polytechnic Institute",
    period: "Aug 2025 – Present",
    location: "Worcester, Massachusetts, USA",
    logo: "/WPI_logo.png",
    achievements: [
      "Support 35 graduate students in CS-548 Knowledge Discovery and Data Mining coursework through weekly office hours",
      "Guide students on classification, clustering, regression, and real-world data mining projects",
      "Assist with complex concepts in machine learning algorithms and practical implementations"
    ],
    technologies: ["Python", "Machine Learning", "Data Mining", "Teaching"]
  },
  {
    title: "Full Stack Engineer",
    company: "Volkswagen Digital Solutions India",
    period: "Aug 2022 – Nov 2024",
    location: "Gurgaon, India",
    logo: "/VW_logo.jpeg",
    achievements: [
      "Curtailed production runtime errors by 50% for a Taiwan-based dealer management system serving 100+ dealers by redesigning REST API integrations in Vue.js and React",
      "Resolved 100+ critical UI, backend, and database bugs through root cause analysis and end-to-end debugging, improving system stability by 40%",
      "Architected automated multi-language support using PostgreSQL, LINQ, and microservices to localize 250+ text labels",
      "Coordinated production rollouts for 100+ dealers with a 3-person team, reducing deployment downtime significantly",
      "Improved billing report generation speed by 30% using DevExpress and optimized database stored procedures"
    ],
    technologies: ["Vue.js", "React", "JavaScript", "PostgreSQL", ".NET Core", "Azure DevOps", "Visual Studio", "Git", "DevExpress", "LINQ"]
  },
  {
    title: "Software Engineer Intern",
    company: "Myridius x Aethereus",
    period: "Jan 2022 – Mar 2022",
    location: "Pune, India",
    logo: "/MxA.jpeg",
    achievements: [
      "Minimized manual CRM work by 20% and boosted system reliability by 30% by building 10+ Salesforce triggers and workflows",
      "Debugged complex Apex code alongside senior engineers to resolve critical system issues"
    ],
    technologies: ["Salesforce", "Apex Programming", "CRM", "Salesforce Workflows"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Professional</span> Journey
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Built scalable enterprise solutions and driving innovation through full-stack development and artificial intelligence
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <Card className="p-6 card-hover bg-card border-border shadow-lg">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-border"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary text-xs mt-1.5">●</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                        <Code className="w-3 h-3 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
