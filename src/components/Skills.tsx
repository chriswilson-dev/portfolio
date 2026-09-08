import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { skillCategories, summaryStats } from "@/config/content";
import {
  FlaskLight, FlaskDark,
  ExpressJsLight, ExpressJsDark,
  GitHubLight, GitHubDark,
} from "developer-icons";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Some brand icons ship separate light/dark variants. content.ts marks these
  // with a string tag so it doesn't need to know about the current theme.
  const resolveIcon = (icon: unknown) => {
    if (icon === "flask") return isDark ? FlaskLight : FlaskDark;
    if (icon === "express") return isDark ? ExpressJsLight : ExpressJsDark;
    if (icon === "github") return isDark ? GitHubLight : GitHubDark;
    return icon;
  };

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
                    const SkillIcon = resolveIcon(skill.icon) as
                      | string
                      | React.ComponentType<{ className?: string }>;

                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {typeof SkillIcon === "string" ? (
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