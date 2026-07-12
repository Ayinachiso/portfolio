import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Services",
  description: "Full-stack development, frontend implementation, backend systems, business websites, and HTML email development.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Hire menu"
      title="Useful builds for clients who care how things feel and how they work."
      intro="Focused services for polished interfaces, dependable backend systems, content-managed sites, and personalised web experiences."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          "Full-stack web apps",
          "Frontend implementation",
          "Business websites",
          "HTML email design",
        ].map((service) => (
          <section key={service} className="rounded-[0.9rem] border-2 border-ink bg-paper p-5 shadow-ink-soft">
            <h2 className="font-display text-3xl font-black">{service}</h2>
            <p className="mt-3 font-semibold text-muted">Concise service details and fit notes will be refined after homepage approval.</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
