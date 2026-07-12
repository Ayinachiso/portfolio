import { LockKeyhole } from "lucide-react";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main id="main" className="grid min-h-[100svh] place-items-center px-4">
      <section className="max-w-xl rounded-[1rem] border-2 border-ink bg-paper p-6 text-center shadow-ink">
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full border-2 border-ink bg-accent">
          <LockKeyhole aria-hidden />
        </div>
        <h1 className="font-display text-4xl font-black">BuildDesk Admin</h1>
        <p className="mt-3 font-semibold text-muted">
          Secure single-admin email/password authentication, D1 content management, R2 media uploads, and contact submission review will be implemented after the homepage visual approval phase.
        </p>
      </section>
    </main>
  );
}
