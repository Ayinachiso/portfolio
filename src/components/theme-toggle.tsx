"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("builddesk-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-2 text-sm font-black shadow-ink-soft transition hover:-translate-y-0.5 hover:shadow-ink focus-visible:shadow-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="grid size-7 place-items-center rounded-full bg-accent text-[#241b16]">
        {isDark ? <Sun aria-hidden size={17} /> : <Moon aria-hidden size={17} />}
      </span>
      <span className="hidden sm:inline">{isDark ? "Day lamp" : "Night lamp"}</span>
    </button>
  );
}
