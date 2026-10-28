import { ArrowUpRight, Download, FileText } from "lucide-react";
import styles from "./cv-card.module.css";

export function CvCard() {
  return (
    <aside className={styles.card} aria-labelledby="cv-title">
      <span className={styles.scribble} aria-hidden="true">A quick read</span>
      <span className={styles.icon}><FileText size={38} strokeWidth={1.8} aria-hidden="true" /></span>
      <p className={styles.eyebrow}>The short version</p>
      <h2 id="cv-title">My CV, in one tidy file.</h2>
      <p className={styles.copy}>A little more about what I’ve built, what I work with, and the path that brought me here.</p>
      <div className={styles.actions}>
        <a href="/ayinachiso-nweze-cv.pdf" target="_blank" rel="noreferrer">View CV <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a href="/ayinachiso-nweze-cv.pdf" download>Download <Download size={17} aria-hidden="true" /></a>
      </div>
    </aside>
  );
}
