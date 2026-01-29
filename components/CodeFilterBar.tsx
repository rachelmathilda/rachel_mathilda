"use client"

import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/useMounted"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const filters = [
  "All",
  "Mobile App",
  "Website",
  "Robot",
  "Game",
  "Bioinformatics Tools",
  "Software",
]

export default function CodeFilterBar() {
  const { theme } = useTheme()
  const mounted = useMounted()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("All")

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[360px]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full px-5 py-3 rounded-full flex items-center justify-between text-sm"
          style={{
            border: `1px solid ${isDark ? "#717A91" : "#BCC2D3"}`,
            color: isDark ? "#FFFFFF" : "#000000",
            background: "transparent",
          }}
        >
          <span>{active}</span>
          <ChevronDown size={16} />
        </button>

        {open && (
          <div
            className="absolute mt-2 w-full rounded-xl overflow-hidden backdrop-blur-lg z-20"
            style={{
              border: `1px solid ${isDark ? "#717A91" : "#BCC2D3"}`,
              background: isDark ? "#0B0B0B" : "#FFFFFF",
            }}
          >
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item)
                  setOpen(false)
                }}
                className="w-full text-left px-5 py-2 text-sm hover:opacity-80"
                style={{
                  color: isDark ? "#FFFFFF" : "#000000",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
