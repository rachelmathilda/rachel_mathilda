"use client"

import { flushSync } from "react-dom"
import { useTheme } from "next-themes"
import { useT } from "@/lib/i18n"

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const t = useT()

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    const root = document.documentElement

    const apply = () => {
      setTheme(next)
      root.classList.remove("light", "dark")
      root.classList.add(next)
      root.style.colorScheme = next
    }

    const doc = document as ViewTransitionDoc
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!doc.startViewTransition || reduced) {
      apply()
      return
    }

    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => {
      flushSync(apply)
    })

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 800,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label={t("theme.toggle")}
      title={t("theme.toggle")}
    >
      <span className="tt-sky tt-day" />
      <span className="tt-sky tt-night" />
      <span className="tt-star s1" />
      <span className="tt-star s2" />
      <span className="tt-star s3" />
      <span className="tt-star s4" />
      <span className="tt-cloud c1" />
      <span className="tt-cloud c2" />
      <span className="tt-cloud c3" />
      <span className="tt-knob">
        <span className="tt-crater k1" />
        <span className="tt-crater k2" />
        <span className="tt-crater k3" />
      </span>
    </button>
  )
}
