"use client"

import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/useMounted"

interface Props {
  title: string
  subtitle: string
  date: string
  description: string
}

export default function ExperienceCard({
  title,
  subtitle,
  date,
  description,
}: Props) {
  const { theme } = useTheme()
  const mounted = useMounted()
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div
      className="rounded-2xl p-5 w-[260px]"
      style={{
        backgroundColor: isDark ? "#61646D" : "#FFFFFF",
        color: isDark ? "#FFFFFF" : "#000000",
        boxShadow: isDark
          ? "0 6px 0 rgba(255,255,255,0.6)"
          : "0 6px 12px rgba(0,0,0,0.15)",
      }}
    >
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs opacity-80 mt-1">{subtitle}</p>
      <p className="text-xs opacity-70 mt-1">{date}</p>

      <p className="text-xs leading-relaxed mt-3">
        {description}
      </p>
    </div>
  )
}
