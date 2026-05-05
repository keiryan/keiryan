// Lightweight markdown-ish renderer. Sufficient for short posts.
// Handles: ## h2, ### h3, > blockquote, lists (- ...), paragraphs, --- hr, `code`.
import { Fragment } from "react";

function renderInline(text: string) {
  // inline code only
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((p, i) =>
    p.startsWith("`") && p.endsWith("`") ? <code key={i}>{p.slice(1, -1)}</code> : <Fragment key={i}>{p}</Fragment>
  );
}

export function Markdown({ source }: { source: string }) {
  const lines = source.split("\n");
  const out: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (line.startsWith("## ")) {
      out.push(<h2 key={key++}>{line.slice(3)}</h2>);
      i++; continue;
    }
    if (line.startsWith("### ")) {
      out.push(<h3 key={key++}>{line.slice(4)}</h3>);
      i++; continue;
    }
    if (line.trim() === "---") {
      out.push(<hr key={key++} />);
      i++; continue;
    }
    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      out.push(<blockquote key={key++}>{renderInline(buf.join(" "))}</blockquote>);
      continue;
    }
    if (line.startsWith("- ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      out.push(
        <ul key={key++}>
          {buf.map((item, idx) => <li key={idx}>{renderInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    // paragraph: gather until blank line
    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("#") && !lines[i].startsWith(">") && !lines[i].startsWith("- ") && lines[i].trim() !== "---") {
      buf.push(lines[i]);
      i++;
    }
    out.push(<p key={key++}>{renderInline(buf.join(" "))}</p>);
  }

  return <div className="prose-article">{out}</div>;
}
