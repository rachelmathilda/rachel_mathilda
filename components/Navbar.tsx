"use client"

import Link from "next/link"
import { Moon, Sun, User, Code, Palette, Briefcase } from "lucide-react"
import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/useMounted"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <nav
      className="
        sticky top-0 z-50
        w-full px-8 py-4 flex items-center justify-between
        border-b backdrop-blur
      "
      style={{
        borderColor: isDark ? "#717A91" : "#BCC2D3",
        color: isDark ? "#FFFFFF" : "#000000",
        backgroundColor: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
      }}
    >
      <h1 className="text-lg font-semibold">
        Rachel Mathilda
      </h1>

      <div className="flex items-center gap-8 text-sm">
        <NavItem href="/" icon={<User size={16} />} label="profile" />
        <NavItem href="/code" icon={<Code size={16} />} label="code" />
        <NavItem href="/art" icon={<Palette size={16} />} label="art" />
        <NavItem href="/commission" icon={<Briefcase size={16} />} label="commission" />

        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="ml-4 transition"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  )
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 cursor-pointer hover:opacity-90"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
