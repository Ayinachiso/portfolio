import {
  BookOpen,
  BriefcaseBusiness,
  Home,
  Mail,
  Paintbrush,
  Sparkles,
  UserRound,
} from "lucide-react";

export const primaryRoutes = [
  { href: "/", label: "Desk", shortLabel: "Desk", icon: Home },
  { href: "/work", label: "Work", shortLabel: "Work", icon: BriefcaseBusiness },
  { href: "/about", label: "About", shortLabel: "About", icon: UserRound },
  { href: "/blog", label: "Notes", shortLabel: "Blog", icon: BookOpen },
  { href: "/playground", label: "Playground", shortLabel: "Play", icon: Paintbrush },
  { href: "/services", label: "Services", shortLabel: "Hire", icon: Sparkles },
  { href: "/contact", label: "Contact", shortLabel: "Talk", icon: Mail },
] as const;

export type PrimaryRoute = (typeof primaryRoutes)[number];

export function getRouteNeighbors(pathname: string) {
  const index = primaryRoutes.findIndex((route) => route.href === pathname);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: primaryRoutes[index - 1] ?? null,
    next: primaryRoutes[index + 1] ?? null,
  };
}
