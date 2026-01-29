"use client"

import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/useMounted"

export default function ToolsStrip({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const mounted = useMounted()
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div
      className="w-full py-3 mt-10"
      style={{
        backgroundColor: isDark ? "#9EA7C2" : "#F1F4F8",
      }}
    >
      <div className="flex justify-center gap-3 flex-wrap">
        {children}
      </div>
    </div>
  )
}
