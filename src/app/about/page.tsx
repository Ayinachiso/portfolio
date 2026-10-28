import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { StickerNav } from "@/components/sticker-nav";
import navStyles from "@/components/desk-nav.module.css";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description:
    "Meet Ayinachiso Nweze, a full-stack developer who makes useful software feel a little more human.",
};

const socialItems = [
  {
    label: "GitHub",
    handle: "where the commits live",
    url: "https://github.com/Ayinachiso",
    icon: Github,
    tone: "green",
  },
  {
    label: "LinkedIn",
    handle: "the professional plot",
    url: "https://www.linkedin.com/in/ayinachisonweze",
    icon: Linkedin,
    tone: "blue",
  },
  {
    label: "Instagram",
    handle: "bits from off the screen",
    url: "https://www.instagram.com/_ayinachi/",
    icon: Instagram,
    tone: "peach",
  },
  {
    label: "WhatsApp",
    handle: "send a quick hello",
    url: "https://wa.me/2348143128523",
    icon: MessageCircle,
    tone: "lilac",
  },
  {
    label: "My CV",
    handle: "view or download the PDF",
    url: "/ayinachiso-nweze-cv.pdf",
    icon: FileText,
    tone: "sun",
  },
] as const;

export default function AboutPage() {
  return (
    <div className={`${navStyles.pageShell} ${styles.about}`}>
      <StickerNav />
      <main id="main" className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.copy}>
            <p className={styles.note}>A little introduction</p>
            <h1>
              Hey there!
              <br />I am Ayinachi
            </h1>
            <p>
              I’m a full-stack developer who enjoys making useful software feel
              a little more human. I care about thoughtful interfaces,
              dependable systems, and the small details that make a product feel
              like somebody cared.
            </p>
            <Link href="/work" className={styles.workLink}>
              A peek at what I make{" "}
              <ArrowDownRight size={21} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.portrait}>
            <span className={styles.tape} aria-hidden="true" />
            <Image
              src="/images/ayina.avif"
              alt="Ayinachiso Nweze"
              width={4281}
              height={4403}
              priority
              sizes="(max-width: 700px) 82vw, (max-width: 1050px) 43vw, 34vw"
            />
            <figcaption>
              Developer. Detail enthusiast. Person who adds one more tiny
              polish.
            </figcaption>
          </figure>
        </section>
        <section className={styles.socials} aria-labelledby="social-title">
          <div className={styles.socialIntro}>
            <p className={styles.note}>The internet has corners</p>
            <h2 id="social-title">Find me out there.</h2>
            <p>
              Follow the breadcrumbs. They mostly lead to code, ideas, and the
              occasional non-work thing.
            </p>
          </div>
          <div className={styles.socialGrid}>
            {socialItems.map(
              ({ label, handle, url, icon: Icon, tone }, index) => {
                const content = (
                  <>
                    <span className={styles.socialIcon}>
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{label}</strong>
                      <small>{url ? handle : "PDF to be added"}</small>
                    </span>
                    <span className={styles.socialArrow}>
                      {url ? (
                        <ArrowUpRight size={20} aria-hidden="true" />
                      ) : (
                        "Soon"
                      )}
                    </span>
                    <span className={styles.socialNumber}>0{index + 1}</span>
                  </>
                );
                return (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialCard} ${styles[tone]}`}
                  >
                    {content}
                  </a>
                );
              },
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
