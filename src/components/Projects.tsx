import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Jerai",
    description: "Developed an automated bug-fixing system using Cerebras, Llama 3.3, and Docker MCP that analyzes code issues, generates patches, and runs tests in 10-15 seconds",
    achievements: [
      "Integrated RAG with ChromaDB vector database to retrieve relevant code context and similar bug patterns",
      "Improved patch generation accuracy with semantic code search and pattern matching"
    ],
    technologies: ["Flask", "Python", "Docker", "MCP", "Cerebras", "Llama 3.3", "Railway", "Vercel", "TypeScript", "RAG", "ChromaDB"],
    github: "https://github.com/VivekChoudhary77/Jerai",
    period: "Oct 2025"
  },
  {
    title: "CampusCashControl",
    description: "Built a Django/Vue.js application that automates spreadsheet uploads and generates Tableau dashboards, accelerating campus budget reconciliation by 25% and data processing by 70%",
    achievements: [
      "Implemented role-based access control using Vue.js and JWT authentication to secure sensitive financial data",
      "Created PostgreSQL stored procedures for optimized data processing"
    ],
    technologies: ["Django", "Vue.js", "Python", "Tableau", "JWT", "PostgreSQL"],
    github: "https://github.com/VivekChoudhary77/CS-542-CampusCashControl",
    period: "Feb 2025 – May 2025"
  },
  {
    title: "Textify",
    description: "Developed an NLP application using Flask, NLTK, and GPT-2 (PyTorch) that summarizes articles and generates text through a web interface in under 10 seconds",
    achievements: [
      "Integrated PyTorch for GPT-2 text generation with optimized inference",
      "Built responsive web interface with AJAX for real-time processing"
    ],
    technologies: ["Flask", "Python", "HuggingFace", "Machine Learning", "NLP", "NLTK", "PyTorch", "JavaScript"],
    github: "https://github.com/VivekChoudhary77/Textify-text-Preprocessing",
    period: "April 2021 – June 2021"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Full-stack applications and ML solutions that solve real-world problems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col card-hover bg-card border-border">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
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
