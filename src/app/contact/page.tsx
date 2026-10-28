import { PageShell } from "@/components/page-shell";
import { CallBooking } from "@/components/call-booking";
import { ProjectNoteForm } from "@/components/project-note-form";
import { CvCard } from "@/components/cv-card";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Ayinachiso Nweze to talk about your next project or request a call.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Project intake"
      title="Get in touch, Let's talk!"
      intro="Have a project in mind, a question, or a knotty idea to untangle? I’d love to hear about it."
    >
      <CallBooking email="ayinachisonweze@gmail.com" />
      <div className={styles.contactGrid}>
        <ProjectNoteForm email="ayinachisonweze@gmail.com" />
        <CvCard />
      </div>
    </PageShell>
  );
}
