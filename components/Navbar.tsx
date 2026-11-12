"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { User, Code, Palette, PenLine, Menu, X } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle"
import LanguageToggle from "@/components/LanguageToggle"
import { T } from "@/lib/i18n"
import type { DictKey } from "@/lib/dict"

const items: { href: string; icon: typeof User; label: DictKey }[] = [
  { href: "/", icon: User, label: "nav.profile" },
  { href: "/code", icon: Code, label: "nav.code" },
  { href: "/art", icon: Palette, label: "nav.art" },
  { href: "/blogs", icon: PenLine, label: "nav.blogs" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-line px-4 pl-6 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ backgroundColor: "var(--nav-bg)" }}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-7 w-7 place-items-center rounded-full bg-accent text-[13px] font-bold text-accent-fg transition-transform group-hover:rotate-[360deg] duration-700">
            R
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Rachel Mathilda
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map(({ href, icon: Icon, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-accent text-accent-fg font-medium"
                    : "hover:bg-accent-soft"
                }`}
              >
                <Icon size={15} />
                <span>
                  <T k={label} />
                </span>
              </Link>
            )
          })}
          <div className="ml-2 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="pop-in mx-auto mt-2 max-w-6xl rounded-3xl border border-line p-2 backdrop-blur-xl md:hidden"
          style={{ backgroundColor: "var(--nav-bg)" }}
        >
          {items.map(({ href, icon: Icon, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
                  active ? "bg-accent text-accent-fg font-medium" : ""
                }`}
              >
                <Icon size={16} />
                <T k={label} />
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
