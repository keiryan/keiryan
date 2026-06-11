import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { posts } from "@/lib/data";
import { formatDate, readingTime, cn } from "@/lib/utils";

const categories = ["All", "Tech", "Ops", "Life", "Reflections"] as const;

const Writing = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const list = useMemo(() => {
    const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
    return filter === "All" ? sorted : sorted.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Layout title="Writing">
      <section className="container-prose py-20">
        <h1 className="font-display text-5xl font-bold">Writing</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Things I'm thinking about, working through, or just wanted to say.
        </p>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors",
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {list.map((p) => (
            <li key={p.slug}>
              <Link to={`/writing/${p.slug}`} className="group block py-7">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                  <time>{formatDate(p.date)}</time>
                  <span>·</span>
                  <span>{readingTime(p.content)} min read</span>
                  <span>·</span>
                  <span className="uppercase tracking-wider">{p.category}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Writing;
