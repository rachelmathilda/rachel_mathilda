"use client"

import { useState } from "react"

interface Props {
  title: string
  image?: string
  className?: string
}

const palettes = [
  ["#6c7bd9", "#c3a6ff"],
  ["#4f8f9e", "#9ee0c8"],
  ["#d9826c", "#ffc4a3"],
  ["#8a6cd9", "#e0a6ff"],
  ["#5a7bb5", "#a6d0ff"],
  ["#b56c8a", "#ffa6c8"],
]

function hash(text: string) {
  let h = 0
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0
  return Math.abs(h)
}

export default function ProjectCover({ title, image, className = "" }: Props) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  const [a, b] = palettes[hash(title) % palettes.length]

  return (
    <div
      className={`relative grid h-full w-full place-items-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
    >
      <span
        className="absolute -right-6 -top-10 h-40 w-40 rounded-full opacity-30"
        style={{ background: "#fff" }}
      />
      <span
        className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full opacity-20"
        style={{ background: "#000" }}
      />
      <span className="relative font-display text-6xl font-bold text-white/90 drop-shadow">
        {title.trim().charAt(0).toUpperCase() || "?"}
      </span>
    </div>
  )
}
