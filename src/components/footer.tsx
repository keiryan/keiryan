import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-wide py-12">
        <p className="text-center font-display text-lg italic text-muted-foreground">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <Link key={l.href} to={l.href} className="link-underline hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="hover:text-foreground">
              <Mail className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.github} aria-label="GitHub" className="hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
