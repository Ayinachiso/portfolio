import { ArrowRight, BookOpen, BriefcaseBusiness, Mail, Paintbrush, Sparkles, UserRound } from "lucide-react";
import Link from "next/link";
import { DeskCard } from "@/components/desk-card";
import { StickerNav } from "@/components/sticker-nav";

const skills = ["React", "Next.js", "TypeScript", "Tailwind", "Python", "FastAPI", "D1/R2", "REST APIs"];

export function HomeDesk() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden px-4 pb-5 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <StickerNav />
      <main id="main" className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-5 lg:grid-cols-[1fr_0.95fr]">
        <section className="relative rounded-[1.4rem] border-2 border-ink bg-paper/90 p-4 shadow-ink sm:p-6 lg:min-h-[33rem]">
          <div className="absolute -right-4 -top-5 rotate-6 border-2 border-ink bg-accent px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] shadow-ink-soft">
            BuildDesk
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1fr]">
            <PortraitPlaceholder />
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex w-fit rotate-[-1deg] rounded-full border-2 border-ink bg-secondary px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-white shadow-ink-soft">
                Full-stack developer
              </p>
              <h1 className="font-display text-[clamp(3.1rem,8vw,7.2rem)] font-black leading-[0.86]">
                Ayinachiso <span className="scribble-underline">Nweze</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-snug text-muted sm:text-xl">
                I build polished interfaces and dependable backend systems for SaaS, fintech, accessibility tools,
                ecommerce, business sites, and unusual little web experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-ink bg-surface px-3 py-1.5 font-mono text-xs font-black shadow-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-ink bg-primary px-5 py-3 font-black text-white shadow-ink transition hover:-translate-y-0.5"
                >
                  See the work <ArrowRight aria-hidden size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-3 font-black shadow-ink-soft transition hover:-translate-y-0.5"
                >
                  Start a project <Mail aria-hidden size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Portfolio routes" className="grid gap-3 sm:grid-cols-2 lg:gap-4">
          <DeskCard href="/work" label="Work" note="Case files for apps, systems, and client sites." icon={BriefcaseBusiness} tone="accent" />
          <DeskCard href="/about" label="About" note="The person behind the desk and how I build." icon={UserRound} tone="sky" />
          <DeskCard href="/blog" label="Notes" note="Selected writing from Substack, curated here." icon={BookOpen} tone="lilac" />
          <DeskCard href="/playground" label="Playground" note="Experiments, doodles, email designs, and UI sparks." icon={Paintbrush} />
          <DeskCard href="/services" label="Services" note="Ways I can help with serious builds and odd ideas." icon={Sparkles} tone="secondary" />
          <DeskCard href="/contact" label="Contact" note="A compact project intake card and direct email fallback." icon={Mail} />
        </section>
      </main>
      <Marquee />
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] rotate-[-2deg] rounded-[1rem] border-2 border-ink bg-surface p-3 shadow-ink">
      <div className="absolute -left-4 top-8 z-10 rotate-[-9deg] border-2 border-ink bg-primary px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.12em] text-white shadow-ink-soft">
        portrait slot
      </div>
      <div className="relative grid h-full place-items-center overflow-hidden rounded-[0.65rem] border-2 border-ink bg-[linear-gradient(135deg,rgb(var(--sky)/0.45),rgb(var(--accent)/0.55))]">
        <div className="absolute inset-x-8 top-12 h-28 rounded-full border-2 border-ink bg-paper/70" />
        <div className="absolute bottom-0 h-52 w-48 rounded-t-[5rem] border-2 border-b-0 border-ink bg-secondary/85" />
        <div className="relative z-10 max-w-40 text-center font-mono text-xs font-black uppercase tracking-[0.14em] text-ink">
          approved headshot drops here
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-3 overflow-hidden border-y-2 border-ink bg-paper/80 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-muted">
      <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-8 motion-reduce:animate-none">
        {Array.from({ length: 2 }).map((_, index) => (
          <span key={index} className="flex gap-8">
            <span>interfaces with character</span>
            <span>backend with receipts</span>
            <span>accessible by design</span>
            <span>substack notes curated here</span>
            <span>swipe sideways for pages</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
