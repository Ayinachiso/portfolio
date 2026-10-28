"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { motion, useReducedMotion } from "motion/react";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./portfolio-motion.module.css";

const toolTracks = [
  [
    ["react", "React"], ["nextjs", "Next.js"], ["javascript", "JavaScript"],
    ["typescript", "TypeScript"], ["python", "Python"],
  ],
  [
    ["fastapi", "FastAPI"], ["flutter", "Flutter"], ["dotnet", ".NET"],
    ["postgresql", "PostgreSQL"], ["supabase", "Supabase"],
  ],
  [
    ["tailwindcss", "Tailwind CSS"], ["git", "Git"], ["github", "GitHub"], ["html5", "HTML5"],
  ],
] as const;
const MotionLink = motion.create(Link);

export function PageMotion({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FolderMotion({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} whileHover={reduceMotion ? undefined : { y: -3, rotate: -0.15 }} whileTap={reduceMotion ? undefined : { scale: 0.995 }} transition={{ type: "spring", stiffness: 320, damping: 24 }}>{children}</motion.div>;
}

export function MotionProjectLink({
  children,
  href,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  href: Route;
  className?: string;
  ariaLabel: string;
}) {
  const reduceMotion = useReducedMotion();
  return <MotionLink href={href} className={className} aria-label={ariaLabel} whileHover={reduceMotion ? undefined : { y: -2, rotate: 0.4 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ type: "spring", stiffness: 360, damping: 23 }}>{children}</MotionLink>;
}

export function TechMarquee() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={`${styles.toolsWindow} ${reduceMotion ? styles.staticTools : ""}`} aria-label="Technology logos">
      <p className={styles.srOnly}>My tools and technologies. Scroll vertically to see the full list.</p>
      {toolTracks.map((track, trackIndex) => {
        const repeated = [...track, ...track];
        return (
          <motion.div
            key={trackIndex}
            className={styles.toolTrack}
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={reduceMotion ? undefined : { duration: 25 + trackIndex * 4, ease: "linear", repeat: Infinity }}
          >
            {repeated.map(([file, name], index) => (
              <motion.span
                className={styles.toolMark}
                key={`${trackIndex}-${index}`}
                title={name}
                role="img"
                aria-label={index < track.length ? name : undefined}
                aria-hidden={index >= track.length ? true : undefined}
                whileHover={reduceMotion ? undefined : { y: -3, rotate: [0, -5, 5, -2, 0] }}
                whileTap={reduceMotion ? undefined : { scale: 0.88, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={`/images/tools/${file}.svg`} alt="" width={36} height={36} />
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </section>
  );
}

const values = [
  "Built around real people", "Careful about access", "Reliable under the hood",
  "Clear from the first click", "Useful before clever", "A little joy in the details",
  "Ideas made workable", "Thoughtful all the way through",
];

export function ValuesMarquee() {
  const reduceMotion = useReducedMotion();
  const items = [...values, ...values];
  return (
    <div className={styles.valuesTicker}>
      <p className={styles.srOnly}>{values.join(" · ")}</p>
      <motion.div
        className={styles.valuesTrack}
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reduceMotion ? undefined : { duration: 34, ease: "linear", repeat: Infinity }}
      >
        {items.map((value, index) => <span className={styles.value} key={`${value}-${index}`}>{value}<i className={styles.divider} aria-hidden="true" /></span>)}
      </motion.div>
    </div>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/Ayinachiso", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayinachisonweze", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/_ayinachi/", Icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/2348143128523", Icon: MessageCircle },
  { label: "Email", href: "mailto:ayinachisonweze@gmail.com", Icon: Mail },
];

export function SiteFooter() {
  const reduceMotion = useReducedMotion();
  return (
    <footer className={styles.siteFooter}>
      <nav className={styles.socialLinks} aria-label="Social links">
        {socials.map(({ label, href, Icon }, index) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className={styles.socialLink}
            style={{ "--social-tilt": `${[-4, 2.5, -2, 3, -3][index]}deg` } as CSSProperties}
            whileHover={reduceMotion ? undefined : { y: -4, rotate: [0, -7, 6, -3, 0], scale: 1.08 }}
            whileTap={reduceMotion ? undefined : { scale: 0.91 }}
            transition={{ duration: 0.28 }}
          >
            <Icon size={21} strokeWidth={2.2} aria-hidden="true" />
          </motion.a>
        ))}
      </nav>
      <p className={styles.copyright}>© 2026 Ayinachiso Nweze</p>
    </footer>
  );
}
