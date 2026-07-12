import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Playground",
  description: "Experiments, UI concepts, HTML email designs, doodles, and small web interactions.",
};

export default function PlaygroundPage() {
  return (
    <PageShell
      eyebrow="Loose parts"
      title="Small experiments, useful sparks, and unfinished ideas worth showing."
      intro="A more exploratory shelf for UI concepts, email designs, doodles, screenshots, and little motion tests."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["UI concept", "Email design", "Motion test", "Personal web"].map((item) => (
          <section key={item} className="aspect-square rounded-[0.9rem] border-2 border-ink bg-surface p-4 shadow-ink-soft">
            <h2 className="font-display text-2xl font-black">{item}</h2>
            <p className="mt-2 font-mono text-xs font-black uppercase tracking-[0.12em] text-muted">
              Admin-managed placeholder
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
