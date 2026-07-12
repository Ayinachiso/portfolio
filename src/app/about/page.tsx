import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "About",
  description: "About Ayinachiso Nweze, a full-stack developer with a strong eye for frontend design.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Maker note"
      title="I like interfaces with a pulse and systems with a spine."
      intro="I work across frontend polish and backend structure, building products that feel considered on the surface and dependable underneath."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {["Frontend design", "Backend systems", "Product sense"].map((item) => (
          <section key={item} className="rounded-[0.9rem] border-2 border-ink bg-paper p-5 shadow-ink-soft">
            <h2 className="font-display text-3xl font-black">{item}</h2>
            <p className="mt-3 font-semibold text-muted">
              Placeholder copy to refine with your voice, process, and approved portrait assets.
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
