import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout";
import { Markdown } from "@/components/markdown";
import { posts } from "@/lib/data";
import { formatDate, readingTime } from "@/lib/utils";
import NotFound from "./NotFound";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout title={post.title}>
      <article className="py-16">
        <header className="container-prose">
          <Link to="/writing" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Back to Writing
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{readingTime(post.content)} min read</span>
            <span className="rounded-full border border-border bg-card px-2 py-0.5 text-[10px] uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg italic text-muted-foreground">by Keiryan Wilson</p>
        </header>

        {post.image && (
          <figure className="container-wide mt-12">
            <img
              src={post.image.src}
              alt={post.image.alt}
              className="aspect-[4/3] w-full rounded-lg border border-border object-cover shadow-sm"
            />
            {post.image.caption && (
              <figcaption className="mt-3 text-center font-mono text-xs leading-relaxed text-muted-foreground">
                {post.image.caption}
              </figcaption>
            )}
          </figure>
        )}

        <div className="container-prose mt-12">
          <Markdown source={post.content} />
        </div>

        <footer className="container-prose mt-20 border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">More posts</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/writing/${p.slug}`}
                className="group rounded-lg border border-border bg-card/40 p-5 transition-colors hover:bg-card"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </Layout>
  );
};

export default Post;
