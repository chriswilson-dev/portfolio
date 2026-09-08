import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects, projectsSection } from "@/config/content";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {projectsSection.subheading}
        </p>

        {/* Two centered cards: max-w-4xl + mx-auto keeps the pair in the middle */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col card-hover bg-card border-border">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View live site" aria-label="View live site" className="text-primary hover:text-primary/70 transition-colors"><ExternalLink className="h-5 w-5" /></a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View source" aria-label="View source" className="text-primary hover:text-primary/70 transition-colors"><Github className="h-5 w-5" /></a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.period}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <ul className="space-y-1 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs border-primary/20 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;