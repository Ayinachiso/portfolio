import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { StickerNav } from "@/components/sticker-nav";
import { projects } from "@/lib/projects";
import { FolderMotion, MotionProjectLink, PageMotion, SiteFooter } from "@/components/portfolio-motion";
import type { Route } from "next";
import navStyles from "@/components/desk-nav.module.css";
import styles from "./work.module.css";

export const metadata = {
  title: "Work",
  description: "Selected full-stack, frontend, accessibility, ecommerce, CRM, payments, and email projects.",
};

const files = [
  { title: "Products & systems", description: "Useful tools, thoughtful interfaces, and the systems behind them.", tone: "yellow", slugs: ["deafly", "siwes-recommender", "swings-crm", "utilipay", "iswis-dilemma-platform", "swingsxstore-mobile-app"] },
  { title: "Websites & experiences", description: "Business homes, online stores, and a little something personal.", tone: "green", slugs: ["superted-innovators", "swingsxstore-website", "personalised-celebration-website", "candlecave", "6figure-club"] },
  { title: "Email design", description: "Visual stories shaped for the inbox.", tone: "lilac", slugs: ["in-your-early-twenties-email"] },
] as const;

export default function WorkPage() {
  return (
    <div className={`${navStyles.pageShell} ${styles.work}`}>
      <StickerNav />
      <PageMotion>
      <main id="main" className={styles.main}>
        <nav className={styles.neighbors} aria-label="Adjacent pages">
          <Link href="/"><ArrowLeft size={19} aria-hidden="true" /> Desk</Link>
          <Link href="/about">About <ArrowRight size={19} aria-hidden="true" /></Link>
        </nav>
        <section className={styles.hero} aria-labelledby="work-title">
          <p className={styles.stamp}>Case files</p>
          <h1 id="work-title" className={styles.title}><span>Dig into my work</span></h1>
          <p className={styles.intro}>A working file of products, websites, and experiments. <strong>Pick a folder and see what spills out.</strong></p>
          <p className={styles.total}>
            <span className={styles.calendarCount} role="img" aria-label={`${projects.length} projects`}>
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M15 8v8M49 8v8" />
                <rect x="8" y="12" width="48" height="45" rx="8" />
                <path d="M9 25h46" />
                <text x="32" y="49" textAnchor="middle">{String(projects.length).padStart(2, "0")}</text>
              </svg>
            </span>
            Projects across three files
          </p>
        </section>
        <section className={styles.folders} aria-label="Project files">
          {files.map(file => {
            const entries = file.slugs.map(slug => projects.find(project => project.slug === slug)!);
            return (
              <FolderMotion key={file.title} className={styles.folderMotion}>
              <details className={`${styles.folder} ${styles[file.tone]}`}>
                <summary className={styles.cover}>
                  <span className={styles.papers} aria-hidden="true"><i /><i /><i /></span>
                  <span className={styles.tab} aria-hidden="true" />
                  <span className={styles.front}>
                    <span className={styles.count} aria-label={`${entries.length} projects`}>{String(entries.length).padStart(2, "0")}</span>
                    <span className={styles.folderMeta}><span>Project file</span><span className={styles.openLabel}><span className={styles.closedText}>Open folder</span><span className={styles.openText}>Close folder</span><ChevronRight size={24} aria-hidden="true" /></span></span>
                    <h2>{file.title}</h2>
                    <span className={styles.folderDescription}>{file.description}</span>
                  </span>
                </summary>
                <div className={styles.contents}>
                  {entries.map(project => (
                    <MotionProjectLink key={project.slug} href={`/work/${project.slug}` as Route} className={styles.project} ariaLabel={`${project.title}: ${project.summary}`}>
                      <span className={styles.logoStage}>
                        {/* Project identity artwork is supplied from public/images/logos. */}
                        <Image className={styles.projectLogo} src={project.logo} alt="" width={640} height={400} sizes="(max-width: 600px) 40vw, (max-width: 900px) 25vw, 16vw" />
                        <span className={styles.projectReveal}>
                          <span className={styles.projectHeading}><strong>{project.title}</strong><ArrowUpRight size={19} aria-hidden="true" /></span>
                          <span className={styles.projectSummary}>{project.summary}</span>
                          <span className={styles.stack}>{project.category}</span>
                        </span>
                      </span>
                    </MotionProjectLink>
                  ))}
                </div>
              </details>
              </FolderMotion>
            );
          })}
        </section>
        <footer className={styles.footer}><p>Have something in mind?</p><Link href="/contact">Let’s make something useful. <ArrowUpRight size={22} aria-hidden="true" /></Link></footer>
      </main>
      </PageMotion>
      <SiteFooter />
    </div>
  );
}
