import { BriefcaseBusiness, Home, Mail, Sparkles, UserRound } from "lucide-react";

export const primaryRoutes = [
  { href: "/", label: "Desk", shortLabel: "Desk", icon: Home },
  { href: "/work", label: "Work", shortLabel: "Work", icon: BriefcaseBusiness },
  { href: "/about", label: "About", shortLabel: "About", icon: UserRound },
  { href: "/services", label: "Services", shortLabel: "Hire", icon: Sparkles },
  { href: "/contact", label: "Contact", shortLabel: "Talk", icon: Mail },
] as const;

export type PrimaryRoute = (typeof primaryRoutes)[number];

export function getRouteNeighbors(pathname: string) {
  const index = primaryRoutes.findIndex((route) => route.href === pathname);
  if (index === -1) return { previous: null, next: null };
  return { previous: primaryRoutes[index - 1] ?? null, next: primaryRoutes[index + 1] ?? null };
}
