"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getRouteNeighbors, primaryRoutes } from "@/lib/routes";
import { ThemeToggle } from "@/components/theme-toggle";

const interactiveSelector = "input, textarea, select, button, a, [contenteditable='true']";

export function StickerNav() {
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <nav
          className="no-scrollbar flex min-h-14 flex-1 items-center gap-2 overflow-x-auto rounded-[1.15rem] border-2 border-ink bg-paper/92 p-2 shadow-ink-soft backdrop-blur"
          aria-label="Primary pages"
        >
          {primaryRoutes.map((route, index) => {
            const active = pathname === route.href;
            const Icon = route.icon;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={`relative inline-flex min-h-10 shrink-0 rotate-[var(--tilt)] items-center gap-2 rounded-stamp border-2 border-ink px-3 py-2 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-ink-soft ${
                  active ? "bg-primary text-white shadow-ink" : "bg-surface"
                }`}
                style={{ "--tilt": `${index % 2 === 0 ? -1 : 1}deg` } as React.CSSProperties}
                aria-current={active ? "page" : undefined}
              >
                <Icon aria-hidden size={16} strokeWidth={2.6} />
                <span>{route.shortLabel}</span>
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
      <div className="pointer-events-none mx-auto mt-2 flex max-w-7xl justify-between px-1 text-xs font-black uppercase tracking-[0.16em] text-muted">
        <span>{previous ? `← ${previous.label}` : "Start"}</span>
        <span>{next ? `${next.label} →` : "End"}</span>
      </div>
      <div className="sr-only" aria-live="polite">
        Swipe or use arrow keys to move between primary pages.
      </div>
      <PageStepControls previous={previous} next={next} />
    </header>
  );
}

function PageStepControls({
  previous,
  next,
}: {
  previous: ReturnType<typeof getRouteNeighbors>["previous"];
  next: ReturnType<typeof getRouteNeighbors>["next"];
}) {
  return (
    <>
      {previous ? (
        <Link
          href={previous.href}
          className="fixed left-3 top-1/2 z-40 hidden size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-paper shadow-ink-soft transition hover:-translate-x-0.5 lg:grid"
          aria-label={`Go to ${previous.label}`}
        >
          <ChevronLeft aria-hidden size={22} />
        </Link>
      ) : null}
      {next ? (
        <Link
          href={next.href}
          className="fixed right-3 top-1/2 z-40 hidden size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-paper shadow-ink-soft transition hover:translate-x-0.5 lg:grid"
          aria-label={`Go to ${next.label}`}
        >
          <ChevronRight aria-hidden size={22} />
        </Link>
      ) : null}
    </>
  );
}
