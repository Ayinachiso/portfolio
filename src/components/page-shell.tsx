import type { ReactNode } from "react";
import { StickerNav } from "@/components/sticker-nav";
import { PageMotion, SiteFooter } from "@/components/portfolio-motion";
import styles from "./desk-nav.module.css";

export function PageShell({
  eyebrow,
  title,
  intro,
  heroAside,
  topAction,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroAside?: ReactNode;
  topAction?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.pageShell}>
      <StickerNav />
      <PageMotion>
      <main id="main" className="mx-auto mt-10 max-w-7xl">
        <section className={heroAside ? "mb-8 grid items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.48fr)]" : topAction ? "mb-8" : "mb-8 max-w-3xl"}>
          <div className={heroAside ? "min-w-0 max-w-3xl" : undefined}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="mb-0 inline-flex min-w-0 rotate-[-1deg] border-2 border-ink bg-accent px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] shadow-ink-soft">
                {eyebrow}
              </p>
              {topAction ? <div className="shrink-0">{topAction}</div> : null}
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.9]">{title}</h1>
            <p className="mt-4 text-lg font-semibold leading-snug text-muted sm:text-xl">{intro}</p>
          </div>
          {heroAside ? <div className="flex justify-end">{heroAside}</div> : null}
        </section>
        {children}
      </main>
      </PageMotion>
      <SiteFooter />
    </div>
  );
}
