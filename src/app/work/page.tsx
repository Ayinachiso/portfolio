import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work",
  description: "Selected full-stack, frontend, accessibility, ecommerce, CRM, payments, and email projects.",
};

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="Case files"
      title="Work that can be opened, inspected, and improved."
      intro="A curated desk of public projects and review-ready placeholders. Uncertain details are marked before publishing."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex min-h-72 flex-col justify-between rounded-[0.9rem] border-2 border-ink bg-paper p-5 shadow-ink-soft transition hover:-translate-y-1 hover:shadow-ink"
          >
            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border-2 border-ink bg-surface px-3 py-1 font-mono text-xs font-black uppercase">
                  {project.type}
                </span>
                <ArrowUpRight aria-hidden className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h2 className="font-display text-3xl font-black leading-none">{project.title}</h2>
              <p className="mt-3 font-semibold leading-snug text-muted">{project.summary}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((item) => (
                <span key={item} className="border border-ink/40 bg-surface px-2 py-1 text-xs font-bold">
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
