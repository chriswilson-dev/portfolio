import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Section - Memoji and Description */}
          <div className="text-center md:text-left md:col-span-6">
            <div className="mb-4">
              <a href="#" className="inline-block">
                <img src="/IMG_3157.png" alt="Vivek Choudhary" className="w-16 h-16 rounded-full mx-auto md:-ml-1 hover:scale-105 transition-transform cursor-pointer" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Ready to collaborate on something extraordinary? I'm always excited to connect with fellow innovators, explore cutting-edge projects, and push the boundaries of what's possible with technology. Let's build the future together.
            </p>
            <div className="flex gap-3 justify-center md:justify-start mt-4">
            <a
              href="https://github.com/VivekChoudhary77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/vivek-choudhary-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:iamvivekchoudhary77@gmail.com"
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="md:text-left md:col-span-3 md:-ml-4">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3 min-w-[140px]">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Service
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/Vivek_Choudhary_Resume.pdf" download className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Get In Touch */}
          <div className="md:text-left md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">Ready to work together?</p>
              <a 
                href="mailto:iamvivekchoudhary77@gmail.com" 
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium block"
              >
                iamvivekchoudhary77@gmail.com
              </a>
              <p className="text-muted-foreground text-sm">Boston, Massachusetts, USA</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vivek Choudhary
          </p>
          <p className="text-muted-foreground text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
