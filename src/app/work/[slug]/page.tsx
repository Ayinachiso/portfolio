import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound, permanentRedirect } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/projects";

const legacySlugs: Record<string, string> = {
  swingsxstore: "swingsxstore-website",
  "html-email-design-development": "in-your-early-twenties-email",
};

export function generateStaticParams() {
  return [...projects.map((project) => ({ slug: project.slug })), ...Object.keys(legacySlugs).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === (legacySlugs[slug] ?? slug));
  return { title: project?.title ?? "Project", description: project?.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (legacySlugs[slug]) permanentRedirect(`/work/${legacySlugs[slug]}`);
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <PageShell
      eyebrow={project.category}
      title={project.title}
      intro={project.summary}
      topAction={
        <Link href="/work" aria-label="Back to all project files" title="Back to all project files" className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper shadow-ink-soft transition-transform hover:-translate-y-1 hover:rotate-[-5deg]">
          <ArrowLeft aria-hidden size={24} />
        </Link>
      }
    >
      <div className="grid items-start gap-5">
        <section className="min-w-0 rounded-[1rem] border-2 border-ink bg-paper p-4 shadow-ink-soft sm:p-6" aria-labelledby="project-media-title">
          <h2 id="project-media-title" className="mb-5 font-display text-3xl font-black">Inside the project</h2>
          {project.media?.length ? (
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {project.media.map((item, index) => (
                <figure key={item.src} className="min-w-0 overflow-hidden rounded-[0.9rem] border-2 border-ink bg-surface shadow-ink-soft">
                  {item.kind === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width ?? 1280}
                      height={item.height ?? 720}
                      sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                      className="h-auto w-full"
                    />
                  ) : (
                    <div className="bg-[#201910]">
                      <video className="block max-h-[520px] w-full" controls playsInline preload="none" poster={item.poster} aria-label={item.alt}>
                        <source src={item.src} type="video/mp4" />
                        Your browser cannot play this video preview.
                      </video>
                      <a href={item.src} target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm font-bold text-white underline underline-offset-4">
                        Open or download video
                      </a>
                    </div>
                  )}
                  <figcaption className="border-t border-ink/20 px-4 py-3 text-sm font-bold leading-snug">{item.label}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="grid min-h-48 place-items-center rounded-[0.8rem] border-2 border-dashed border-ink bg-surface p-6 text-center">
              <p className="max-w-md font-semibold leading-snug text-muted">{project.emptyMediaNote ?? "Approved screenshots will appear here when available."}</p>
            </div>
          )}
        </section>

        <div className="grid items-start gap-5 md:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)]">
          <section className="rounded-[1rem] border-2 border-ink bg-surface p-5 shadow-ink-soft" aria-labelledby="project-status-title">
            <h2 id="project-status-title" className="font-display text-2xl font-black">Status</h2>
            <dl className="mt-4 grid gap-4">
              {[
                ["Role", project.role],
                ["Status", project.status],
                ["Visibility", project.visibility],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className="font-mono text-xs font-black uppercase tracking-[0.12em] text-muted">{term}</dt>
                  <dd className="mt-1 font-black leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-[1rem] border-2 border-ink bg-accent/75 p-5 shadow-ink-soft" aria-labelledby="project-details-title">
            <h2 id="project-details-title" className="font-display text-2xl font-black">A few details</h2>
            <p className="mt-3 font-semibold leading-relaxed">{project.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-black">{item}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.liveLinkLabel ? (
            project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-primary px-5 py-3 font-black text-white shadow-ink-soft">
              {project.liveLinkLabel ?? "Visit live project"}<ExternalLink aria-hidden size={17} />
            </a>
            ) : (
              <span aria-disabled="true" title="Add the project URL in src/lib/projects.ts to activate this button" className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full border-2 border-ink/50 bg-primary/60 px-5 py-3 font-black text-white/90 shadow-ink-soft">
                {project.liveLinkLabel}<ExternalLink aria-hidden size={17} />
              </span>
            )
          ) : null}
          {project.storeLinks?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.storeLinks.map((store) => (
                <a key={store.label} href={store.url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-ink bg-primary px-3 py-2 text-sm font-black text-white shadow-ink-soft">
                  Get it on {store.label}<ExternalLink aria-hidden size={15} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </PageShell>
  );
}
