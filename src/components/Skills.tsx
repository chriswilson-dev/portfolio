import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Cloud, Wrench, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Import developer icons
import {
  Python,
  JavaScript,
  TypeScript,
  Java,
  CSharp,
  MySQL,
  PyTorch,
  HTML5,
  CSS3,
  React,
  VueJs,
  Spring,
  Django,
  FastAPI,
  PostgreSQL,
  MongoDB,
  Git,
  AWS,
  Azure,
  Linux,
  Docker,
  Postman,
  VisualStudioCode,
  FlaskLight,
  FlaskDark,
  NumPy,
  HuggingFace
} from "developer-icons";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    skills: [
      { name: "Python", icon: Python, experience: "2y+", description: "AI/ML, automation, APIs" },
      { name: "JavaScript", icon: JavaScript, experience: "3y+", description: "Full-stack, React, Vue.js" },
      { name: "TypeScript", icon: TypeScript, experience: "2y+", description: "Enterprise React/Next.js" },
      { name: "Java", icon: Java, experience: "1y+", description: "Spring Boot, enterprise" },
      { name: "C#", icon: CSharp, experience: "2y+", description: "Systems, algorithms" },
      { name: "SQL", icon: MySQL, experience: "2y+", description: "Database design, queries" }
    ]
  },
  {
    title: "AI/ML Technologies",
    icon: Brain,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      { name: "PyTorch", icon: PyTorch, experience: "1y+", description: "Deep learning, neural networks" },
      { name: "Scikit-learn", icon: "🧠", experience: "2y+", description: "Machine learning algorithms" },
      { name: "Pandas", icon: "🐼", experience: "3y+", description: "Data manipulation, analysis" },
      { name: "NumPy", icon: NumPy, experience: "3y+", description: "Numerical computing" },
      { name: "HuggingFace", icon: HuggingFace, experience: "1y+", description: "Transformers, NLP models" },
      { name: "LangChain", icon: "🦜", experience: "Current", description: "RAG systems, AI agents" }
    ]
  },
  {
    title: "Web Technologies & Frameworks",
    icon: Monitor,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      { name: "React.js", icon: React, experience: "3y+", description: "SPAs, component libraries" },
      { name: "Vue.js", icon: VueJs, experience: "2y+", description: "Progressive web apps" },
      { name: "Spring Boot", icon: Spring, experience: "1y+", description: "Enterprise Java apps" },
      { name: "Django", icon: Django, experience: "1y+", description: "Web apps, admin panels" },
      { name: "Flask", icon: "flask", experience: "2y+", description: "Lightweight APIs" },
      { name: "FastAPI", icon: FastAPI, experience: "Current", description: "High-performance APIs" },
      { name: "HTML/CSS", icon: HTML5, experience: "4y+", description: "Responsive design" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    skills: [
      { name: "PostgreSQL", icon: PostgreSQL, experience: "2y+", description: "Relational databases" },
      { name: "MySQL", icon: MySQL, experience: "2y+", description: "Database management" },
      { name: "MongoDB", icon: MongoDB, experience: "1y+", description: "NoSQL databases" },
      { name: "pgvector", icon: "🔍", experience: "Current", description: "Vector similarity search" },
      { name: "ChromaDB", icon: "🎨", experience: "Current", description: "Vector database" }
    ]
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    skills: [
      { name: "Git", icon: Git, experience: "4y+", description: "Version control" },
      { name: "AWS", icon: AWS, experience: "1y+", description: "Cloud services" },
      { name: "Azure DevOps", icon: Azure, experience: "2y+", description: "DevOps, Agile, Deployment" },
      { name: "Docker", icon: Docker, experience: "2y+", description: "Containerization" },
      { name: "Linux", icon: Linux, experience: "2y+", description: "Terminal commands, system administration" },
      { name: "Postman", icon: Postman, experience: "3y+", description: "API testing" }
    ]
  },
  {
    title: "Development Environments",
    icon: Wrench,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    skills: [
      { name: "VS Code", icon: VisualStudioCode, experience: "4y+", description: "Primary editor" },
      { name: "Visual Studio", icon: "🔷", experience: "2y+", description: ".NET development" },
      { name: "PyCharm", icon: "🐍", experience: "2y+", description: "Python development" },
      { name: "IntelliJ", icon: "💡", experience: "1y+", description: "Java development" }
    ]
  }
];

const summaryStats = [
  { icon: Code, count: "6+", label: "Languages" },
  { icon: Brain, count: "6+", label: "AI/ML Tools" },
  { icon: Database, count: "9+", label: "Dev Frameworks" },
  { icon: Cloud, count: "6+", label: "Cloud Tech" }
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Technologies I've worked with in real-world projects and professional environments
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 card-hover bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => {
                    // Special handling for Flask icon based on theme
                    let SkillIcon = skill.icon;
                    if (skill.icon === "flask") {
                      SkillIcon = theme === "dark" ? FlaskLight : FlaskDark;
                    }

                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {typeof SkillIcon === 'string' ? (
                            <span className="text-lg">{SkillIcon}</span>
                          ) : (
                            <SkillIcon className="h-5 w-5 text-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className={`text-xs ${category.color}`}>
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {summaryStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-card border-border">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
