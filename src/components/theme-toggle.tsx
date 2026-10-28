"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle({
  variant = "default",
}: {
  variant?: "default" | "desk";
}) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Match the server on the first render, then read the pre-paint script's theme.
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      localStorage.setItem("builddesk-theme", nextTheme);
    } catch {
      // The toggle should still work when browser storage is unavailable.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        variant === "desk"
          ? "desk-theme-toggle"
          : "group inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-2 text-sm font-black shadow-ink-soft transition hover:-translate-y-0.5 hover:shadow-ink focus-visible:shadow-none"
      }
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-accent text-[#241b16]">
        {isDark ? (
          <Sun aria-hidden size={17} />
        ) : (
          <Moon aria-hidden size={17} />
        )}
      </span>
      <span className={variant === "desk" ? "" : "hidden sm:inline"}>
        {variant === "desk"
          ? isDark
            ? "Night lamp"
            : "Day light"
          : isDark
            ? "Day lamp"
            : "Night lamp"}
      </span>
    </button>
  );
}
