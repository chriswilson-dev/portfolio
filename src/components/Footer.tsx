import { Github, Linkedin, Mail } from "lucide-react";
import { personal, links, contact, footer } from "@/config/content";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Section - Photo, blurb, socials */}
          <div className="text-center md:text-left md:col-span-6">
            <div className="mb-4">
              <a href="#" className="inline-block">
                <img src={personal.footerImage} alt={personal.name} className="w-16 h-16 rounded-full object-cover mx-auto md:-ml-1 hover:scale-105 transition-transform cursor-pointer" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{footer.blurb}</p>
            <div className="flex gap-3 justify-center md:justify-start mt-4">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"><Github className="h-4 w-4" /></a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"><Linkedin className="h-4 w-4" /></a>
              <a href={`mailto:${contact.email}`} aria-label="Email" className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"><Mail className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="md:text-left md:col-span-3 md:-ml-4">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3 min-w-[140px]">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.label}</a>
                </li>
              ))}
              <li>
                <a href={personal.resumeFile} download className="text-muted-foreground hover:text-primary transition-colors text-sm">Resume ↗</a>
              </li>
            </ul>
          </div>

          {/* Right Section - Get In Touch */}
          <div className="md:text-left md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">Ready to work together?</p>
              <a href={`mailto:${contact.email}`} className="text-primary hover:text-primary/80 transition-colors text-sm font-medium block break-all">{contact.email}</a>
              <p className="text-muted-foreground text-sm">{contact.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} {personal.name}</p>
          <p className="text-muted-foreground text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;