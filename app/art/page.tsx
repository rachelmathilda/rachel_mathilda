"use client"

import { useState } from "react"

export default function ArtPage() {
  const images = Array.from({ length: 8 }, (_, i) => `/${i + 1}.jpeg`)
  const [activeImg, setActiveImg] = useState<string | null>(null)

  return (
    <main className="min-h-screen px-12 pt-24 pb-24">
      <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {images.map((src, i) => (
          <ArtCard key={i} src={src} onClick={() => setActiveImg(src)} />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {activeImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setActiveImg(null)}
        >
          <img
            src={activeImg}
            alt="art"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </main>
  )
}

function ArtCard({ src, onClick }: { src: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-[#61646D] shadow hover:scale-[1.02] transition"
    >
      <img
        src={src}
        alt="art"
        className="w-full h-64 object-cover"
      />
    </div>
  )
}
