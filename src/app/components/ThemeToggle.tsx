"use client";

import { useEffect, useState } from "react";

const THEMES = ["pastel", "elena", "winter", "dark"] as const;
type Theme = typeof THEMES[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("pastel");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "pastel";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const cycle = () => {
    const idx = THEMES.indexOf(theme);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button onClick={cycle} className="btn btn-ghost gap-2" title="Theme wechseln">
      <span className="hidden sm:inline">Theme:</span>
      <span className="badge badge-outline">{theme}</span>
    </button>
  );
}
