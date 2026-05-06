import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.social.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            <Mail className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-background md:hidden"
          >
            <nav className="flex flex-col items-start gap-4 p-8">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={l.href} className="font-display text-4xl font-semibold">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
