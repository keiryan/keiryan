import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Layout } from "@/components/layout";
import { siteConfig } from "@/lib/data";

const Contact = () => {
  return (
    <Layout title="Contact">
      <section className="container-prose py-24">
        <h1 className="font-display text-5xl font-bold md:text-6xl">Say hello.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Whether it's about a role, a project, or just something you wanted to say, I'm reachable.
        </p>

        <ul className="mt-12 space-y-4">
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:bg-card"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-display text-lg font-semibold">{siteConfig.email}</p>
              </div>
            </a>
          </li>
          <li className="flex items-center gap-4 rounded-lg border border-border bg-card/40 p-5">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Location</p>
              <p className="font-display text-lg font-semibold">{siteConfig.location}</p>
            </div>
          </li>
        </ul>

        <div className="mt-12 flex items-center gap-3">
          <a
            href={siteConfig.social.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
