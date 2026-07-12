import type { ReactNode } from "react";
import { StickerNav } from "@/components/sticker-nav";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-[100svh] px-4 pb-12 pt-28 sm:px-6 lg:px-8">
      <StickerNav />
      <main id="main" className="mx-auto max-w-7xl">
        <section className="mb-8 max-w-3xl">
          <p className="mb-3 inline-flex rotate-[-1deg] border-2 border-ink bg-accent px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] shadow-ink-soft">
            {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.9]">{title}</h1>
          <p className="mt-4 text-lg font-semibold leading-snug text-muted sm:text-xl">{intro}</p>
        </section>
        {children}
      </main>
    </div>
  );
}
