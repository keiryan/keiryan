import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-wide py-12">
        <p className="text-center font-display text-lg italic text-muted-foreground">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-foreground">
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
