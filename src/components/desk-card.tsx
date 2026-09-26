import Link from "next/link";
import type { Route } from "next";
import type { LucideIcon } from "lucide-react";

export function DeskCard({
  href,
  label,
  note,
  icon: Icon,
  tone = "surface",
}: {
  href: Route;
  label: string;
  note: string;
  icon: LucideIcon;
  tone?: "surface" | "sky" | "accent" | "lilac" | "secondary";
}) {
  const toneClass = {
    surface: "bg-surface",
    sky: "bg-sky/75",
    accent: "bg-accent",
    lilac: "bg-lilac/80",
    secondary: "bg-secondary text-white",
  }[tone];

  return (
    <Link
      href={href}
      className={`group relative flex min-h-32 flex-col justify-between rounded-[0.75rem] border-2 border-ink p-4 shadow-ink-soft transition hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-ink ${toneClass}`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs font-black uppercase tracking-[0.14em]">Open file</span>
        <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-paper text-ink">
          <Icon aria-hidden size={19} />
        </span>
      </span>
      <span>
        <span className="block font-display text-2xl font-black leading-none">{label}</span>
        <span className="mt-2 block max-w-52 text-sm font-semibold leading-snug">{note}</span>
      </span>
      <span className="absolute -bottom-3 left-5 rotate-[-2deg] border-2 border-ink bg-paper px-2 py-1 font-mono text-[0.65rem] font-black uppercase tracking-[0.12em] opacity-0 shadow-ink-soft transition group-hover:opacity-100">
        click / tap
      </span>
    </Link>
  );
}
