"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-line transition hover:rotate-12 hover:bg-accent-soft"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Moon size={17} className="hidden dark:block" />
      <Sun size={17} className="dark:hidden" />
    </button>
  )
}
