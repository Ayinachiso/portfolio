import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <PageShell eyebrow={project.type} title={project.title} intro={project.summary}>
      <div className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
        <article className="rounded-[1rem] border-2 border-ink bg-paper p-5 shadow-ink-soft sm:p-7">
          <div className="mb-6 aspect-[16/9] rounded-[0.8rem] border-2 border-dashed border-ink bg-surface p-6">
            <div className="grid h-full place-items-center text-center font-mono text-sm font-black uppercase tracking-[0.14em] text-muted">
              admin-managed screenshots and video placeholders
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Problem", "Detailed problem statement will be finalized from approved project notes."],
              ["Approach", "A concise build narrative will describe the design, frontend, backend, and product decisions without inventing metrics."],
              ["Selected features", "Feature lists will be reviewed against the live project or your supplied notes before publishing."],
              ["Outcome", "No results, testimonials, or metrics will be shown until you approve accurate evidence."],
            ].map(([heading, body]) => (
              <section key={heading} className="rounded-[0.7rem] border-2 border-ink bg-surface p-4">
                <h2 className="font-display text-2xl font-black">{heading}</h2>
                <p className="mt-2 font-semibold leading-snug text-muted">{body}</p>
              </section>
            ))}
          </div>
        </article>
        <aside className="h-fit rounded-[1rem] border-2 border-ink bg-surface p-5 shadow-ink-soft">
          <dl className="space-y-4">
            {[
              ["Role", project.role],
              ["Status", project.status],
              ["Year", project.year],
              ["Client", project.client],
              ["Privacy", project.privacy],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="font-mono text-xs font-black uppercase tracking-[0.14em] text-muted">{term}</dt>
                <dd className="mt-1 font-black">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-black">
                {item}
              </span>
            ))}
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-primary px-4 py-2 font-black text-white shadow-ink-soft"
            >
              Visit live project <ExternalLink aria-hidden size={17} />
            </a>
          ) : null}
          {project.reviewNotes?.length ? (
            <div className="mt-5 rounded-[0.6rem] border-2 border-ink bg-accent/75 p-3">
              <h2 className="font-mono text-xs font-black uppercase tracking-[0.14em]">Review before publishing</h2>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm font-bold">
                {project.reviewNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <Link href="/work" className="mt-5 inline-flex items-center gap-2 font-black">
            <ArrowLeft aria-hidden size={17} /> Back to work
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
