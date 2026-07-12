import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Contact",
  description: "Contact Ayinachiso Nweze for full-stack development, frontend design, backend systems, and interactive web projects.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Project intake"
      title="Tell me what you want to build."
      intro="The MVP will store validated submissions in D1, show them in admin, rate-limit spam, and provide a direct email fallback."
    >
      <form className="grid max-w-3xl gap-4 rounded-[1rem] border-2 border-ink bg-paper p-5 shadow-ink-soft sm:p-7">
        {["Name", "Email", "Project type", "Budget range", "Timeline"].map((label) => (
          <label key={label} className="grid gap-2 font-black">
            {label}
            <input className="min-h-12 rounded-[0.5rem] border-2 border-ink bg-surface px-3" placeholder="Placeholder field" />
          </label>
        ))}
        <label className="grid gap-2 font-black">
          Message
          <textarea className="min-h-36 rounded-[0.5rem] border-2 border-ink bg-surface p-3" placeholder="What should we make?" />
        </label>
        <button type="button" className="min-h-12 rounded-full border-2 border-ink bg-primary px-5 py-3 font-black text-white shadow-ink">
          Store contact form wiring in backend phase
        </button>
      </form>
    </PageShell>
  );
}
