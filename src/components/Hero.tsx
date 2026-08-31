import { Github, Linkedin, Mail, ArrowDown, FileText, BookOpen, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import MultilingualGreeting from "./MultilingualGreeting";
import { personal, links } from "@/config/content";

const Hero = () => {
  // Only render social icons that actually have a URL set in the config.
  const socials = [
    { href: links.github, icon: Github, label: "GitHub" },
    { href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: links.blog, icon: BookOpen, label: "Blog" },
    { href: links.instagram, icon: Instagram, label: "Instagram" },
  ].filter((s) => s.href);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center lg:justify-start">
              <MultilingualGreeting />
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-4 font-semibold">
              {personal.headline}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl lg:max-w-none mb-8 leading-relaxed">
              {personal.intro}
            </p>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        {/* CTA Buttons and Social Links - Centered below the grid */}
        <div className="text-center mt-12">
          <div className="flex gap-4 justify-center mb-8 flex-wrap animate-slide-up">
            <Button size="lg" className="glow-effect group" asChild>
              <a href={personal.resumeFile} download>
                <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12 animate-slide-up">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a href="#about" className="inline-block animate-float" aria-label="Scroll to About">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;