import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderClosed, Mail, Settings, UserRound } from "lucide-react";
import { StickerNav } from "@/components/sticker-nav";
import styles from "./home-desk.module.css";
import { GrowingPlants } from "@/components/growing-plants";
import { PageMotion, SiteFooter, TechMarquee, ValuesMarquee } from "@/components/portfolio-motion";

const pages = [
  { href: "/work", label: "Work", note: "Case files for apps, systems, and client sites.", icon: FolderClosed, tone: "yellow" },
  { href: "/about", label: "About", note: "The person behind the desk and how I build.", icon: UserRound, tone: "blue" },
  { href: "/services", label: "Services", note: "Ways I can help with serious builds and ideas.", icon: Settings, tone: "green" },
  { href: "/contact", label: "Contact", note: "A compact project intake and direct email.", icon: Mail, tone: "peach" },
] as const;

export function HomeDesk() {
  return (
    <div className={styles.desk}>
      <StickerNav />
      <PageMotion className={styles.motionContent}>
      <main id="main" className={styles.main}>
        <div className={styles.portrait}>
          <span className={styles.tape} aria-hidden="true" />
          <Image src="/images/IMG_1066%203.avif" alt="Ayinachiso Nweze" width={4281} height={4403} priority sizes="(max-width: 700px) 85vw, (max-width: 1100px) 38vw, 31vw" />
        </div>
        <section className={styles.intro} aria-labelledby="desk-title">
          <p className={styles.role}>Full-stack developer</p>
          <h1 id="desk-title" className={styles.name}>Ayinachiso <span>Nweze</span></h1>
          <h2 className={styles.headline}>I make useful software<br className={styles.desktopBreak} /> feel a little more human.</h2>
          <p className={styles.description}>Thoughtful interfaces. Dependable systems.<br className={styles.desktopBreak} /> A little personality in every detail.</p>
          <TechMarquee />
          <div className={styles.actions}>
            <Link href="/work" className={styles.primary}>See selected work <ArrowRight aria-hidden="true" size={24} /></Link>
            <Link href="/contact" className={styles.secondary}>Start a project <Mail aria-hidden="true" size={23} /></Link>
          </div>
        </section>
        <nav className={styles.pages} aria-label="Explore the portfolio">
          {pages.map(({ href, label, note, icon: Icon, tone }) => (
            <Link href={href} key={href} className={`${styles.page} ${styles[tone]}`}>
              <Icon className={styles.pageIcon} size={34} strokeWidth={1.8} aria-hidden="true" />
              <div><span className={styles.pageTitle}>{label}</span><p>{note}</p></div>
              <ArrowRight className={styles.pageArrow} size={21} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </main>
      </PageMotion>
      <ValuesMarquee />
      <SiteFooter />
      <GrowingPlants />
    </div>
  );
}
