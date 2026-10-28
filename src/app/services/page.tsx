import Link from "next/link";
import { ArrowUpRight, Blocks, Braces, BriefcaseBusiness, Bug, Mail, PanelsTopLeft, Puzzle, ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import styles from "./services.module.css";

export const metadata = {
  title: "Services",
  description: "Ways Ayinachiso can help you shape and build your next web project.",
};

const services = [
  { title: "Full-stack web apps", text: "From the screens people touch to the systems that keep the whole thing running.", icon: Blocks, tone: "sun", doodle: "THE WHOLE THING" },
  { title: "Frontend that feels right", text: "Responsive, accessible interfaces with enough polish to feel like yours.", icon: PanelsTopLeft, tone: "sky", doodle: "LOOKS GOOD. WORKS WELL." },
  { title: "Backend & APIs", text: "Thoughtful data models, useful endpoints, and sturdy foundations for your product.", icon: Braces, tone: "lilac", doodle: "UNDER THE HOOD" },
  { title: "Business websites", text: "A clear, credible home for your business and the people you serve.", icon: BriefcaseBusiness, tone: "mint", doodle: "YOUR CORNER OF THE WEB" },
  { title: "Ecommerce builds", text: "A smoother path from browsing your products to placing an order.", icon: ShoppingBag, tone: "peach", doodle: "GOOD THINGS INSIDE" },
  { title: "Accessibility tune-up", text: "A closer look at the barriers that make a site harder to use.", icon: Bug, tone: "lemon", doodle: "ROOM FOR EVERYONE" },
  { title: "Product prototypes", text: "A clickable first draft to help make the next product decision clearer.", icon: Puzzle, tone: "coral", doodle: "TRY IT BEFORE YOU BUILD IT" },
  { title: "HTML email design", text: "Carefully built emails that stay readable across screens and inboxes.", icon: Mail, tone: "blue", doodle: "STRAIGHT TO THE INBOX" },
];

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Hire menu"
      title="Confused about what to build next? Let me give you a hand"
      intro="Bring the half-formed idea, the messy process, or the thing you know could work better. We can figure out the shape of it together."
      heroAside={(
        <div className="w-[min(57vw,21rem)] -rotate-3" aria-hidden="true">
          <svg className="h-auto w-full overflow-visible" viewBox="0 0 230 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 73C47 36 72 15 112 15C155 15 181 39 181 76C181 110 157 128 132 147C111 163 105 179 105 203" stroke="#211B16" strokeWidth="65" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 7)" />
            <path d="M49 73C47 36 72 15 112 15C155 15 181 39 181 76C181 110 157 128 132 147C111 163 105 179 105 203" stroke="#211B16" strokeWidth="59" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M49 73C47 36 72 15 112 15C155 15 181 39 181 76C181 110 157 128 132 147C111 163 105 179 105 203" stroke="#F7C64B" strokeWidth="45" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="103" cy="257" r="25" fill="#211B16" />
            <circle cx="103" cy="257" r="18" fill="#F7C64B" />
          </svg>
        </div>
      )}
    >
      <div className={styles.servicesGrid}>
        {services.map(({ title, text, icon: Icon, tone, doodle }, index) => (
          <article key={title} className={`${styles.service} ${styles[tone]}`} style={{ "--tilt": `${index % 2 ? 1.3 : -1.1}deg` } as React.CSSProperties}>
            <span className={styles.doodle}>{doodle}</span>
            <span className={styles.icon}><Icon size={28} strokeWidth={1.9} aria-hidden="true" /></span>
            <h2>{title}</h2>
            <p>{text}</p>
            <span className={styles.cardNumber}>0{index + 1}</span>
          </article>
        ))}
      </div>
      <div className={styles.signoff}><p>Alright then, let’s talk</p><Link href="/contact" aria-label="Talk with me"><span>Talk</span><ArrowUpRight size={23} aria-hidden="true" /></Link></div>
    </PageShell>
  );
}
