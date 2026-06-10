import { type ReactNode, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { siteConfig } from "@/lib/data";

export function Layout({ children, title }: { children: ReactNode; title?: string }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = title ? `${title} · ${siteConfig.name}` : siteConfig.name;
  }, [title]);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <motion.main
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
