"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BriefcaseBusiness, Home, Mail, Menu, Sparkles, UserRound, X } from "lucide-react";
import { getRouteNeighbors, primaryRoutes } from "@/lib/routes";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "./desk-nav.module.css";

const interactiveSelector = "input, textarea, select, button, a, [contenteditable='true']";

export function StickerNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const { previous, next } = getRouteNeighbors(pathname);

  useEffect(() => {
    function isEditing(target: EventTarget | null) {
      return target instanceof HTMLElement && Boolean(target.closest(interactiveSelector));
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || isEditing(event.target)) return;
      if (event.key === "ArrowLeft" && previous) {
        router.push(previous.href);
      }
      if (event.key === "ArrowRight" && next) {
        router.push(next.href);
      }
    }

    function onTouchStart(event: TouchEvent) {
      if (isEditing(event.target) || event.touches.length !== 1) return;
      touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }

    function onTouchEnd(event: TouchEvent) {
      if (!touchStart.current || event.changedTouches.length !== 1) return;
      const end = event.changedTouches[0];
      const deltaX = end.clientX - touchStart.current.x;
      const deltaY = end.clientY - touchStart.current.y;
      touchStart.current = null;

      if (Math.abs(deltaX) < 72 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;
      if (deltaX > 0 && previous) router.push(previous.href);
      if (deltaX < 0 && next) router.push(next.href);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, previous, router]);

    const icons = [Home, BriefcaseBusiness, UserRound, Sparkles, Mail];
    return (
      <header className={styles.header}>
        <button type="button" className={styles.menuButton} aria-expanded={menuOpen} aria-controls="desk-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}<span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <nav id="desk-navigation" aria-label="Primary pages" className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          {primaryRoutes.map((route, index) => {
            const Icon = icons[index];
            return <Link key={route.href} href={route.href} aria-label={route.shortLabel} aria-current={pathname === route.href || (route.href !== "/" && pathname.startsWith(`${route.href}/`)) ? "page" : undefined} onClick={() => setMenuOpen(false)}><Icon size={24} strokeWidth={1.9} aria-hidden="true" /><span>{route.shortLabel}</span></Link>;
          })}
        </nav>
        <div className={styles.theme}><ThemeToggle variant="desk" /></div>
      </header>
    );
  }
