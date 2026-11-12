"use client"

import { useEffect } from "react"

export default function CursorGlow() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return

    let raf = 0
    const root = document.documentElement

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--gx", `${e.clientX}px`)
        root.style.setProperty("--gy", `${e.clientY}px`)
        const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(".spot")
        if (el) {
          const r = el.getBoundingClientRect()
          el.style.setProperty("--mx", `${e.clientX - r.left}px`)
          el.style.setProperty("--my", `${e.clientY - r.top}px`)
        }
      })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return null
}
