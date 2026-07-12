import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { blogLinks } from "@/lib/blog-links";

export const metadata = {
  title: "Notes",
  description: "Selected Substack writing curated on Ayinachiso Nweze's portfolio.",
};

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Substack shelf"
      title="Selected notes, kept where the work lives."
      intro="The portfolio curates chosen Substack posts instead of duplicating the whole blog. Admin controls will decide what appears here."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {blogLinks.map((post) => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[0.9rem] border-2 border-ink bg-paper p-5 shadow-ink-soft transition hover:-translate-y-1 hover:shadow-ink"
          >
            <div className="mb-5 aspect-[16/8] rounded-[0.75rem] border-2 border-dashed border-ink bg-surface p-5 font-mono text-xs font-black uppercase tracking-[0.12em] text-muted">
              Substack cover placeholder
            </div>
            <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-muted">
              {post.category} · {post.publishedAt} · {post.source}
            </span>
            <h2 className="mt-2 font-display text-3xl font-black">{post.title}</h2>
            <p className="mt-2 font-semibold leading-snug text-muted">{post.summary}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-black">
              Read on Substack <ExternalLink aria-hidden size={17} />
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
