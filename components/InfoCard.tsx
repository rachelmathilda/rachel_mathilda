"use client"

import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/useMounted"

interface Props {
  title: string
  children: React.ReactNode
}

export default function InfoCard({ title, children }: Props) {
  const { theme } = useTheme()
  const mounted = useMounted()
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div
      className="rounded-3xl p-6 w-[260px]"
      style={{
        backgroundColor: isDark ? "#61646D" : "#FFFFFF",
        color: isDark ? "#FFFFFF" : "#000000",
        boxShadow: isDark
          ? "0 6px 0 rgba(255,255,255,0.6)"
          : "0 6px 12px rgba(0,0,0,0.15)",
      }}
    >
      <h2 className="text-xl font-semibold mb-3">
        {title}
      </h2>
      <div className="text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}
