"use client"

import { useState } from "react"

interface Props {
  title: string
  image?: string
  className?: string
}

const palettes = [
  ["#f7a8c4", "#ffd9e6"],
  ["#8fdcb4", "#d6f6e4"],
  ["#f9b3cc", "#b9edd1"],
  ["#b9edd1", "#ffd1e1"],
  ["#ffc2d6", "#c9f2dc"],
  ["#9fe3c0", "#f8c0d6"],
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
        className={`h-full w-full object-cover object-top ${className}`}
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
        className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full opacity-25"
        style={{ background: "#fff" }}
      />
      <span className="relative font-display text-6xl font-bold text-[#3b1d2a]/70">
        {title.trim().charAt(0).toUpperCase() || "?"}
      </span>
    </div>
  )
}
