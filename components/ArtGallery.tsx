"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import Reveal from "@/components/Reveal"

interface Props {
  images: string[]
}

export default function ArtGallery({ images }: Props) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  )
  const prev = useCallback(
    () =>
      setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [active, close, next, prev])

  return (
    <>
      <div className="columns-4 gap-6 max-xl:columns-3 max-md:columns-2 max-sm:columns-1">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 4) * 70} className="mb-6 break-inside-avoid">
            <button
              onClick={() => setActive(i)}
              className="card-neo group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`Open artwork ${i + 1}`}
            >
              <img
                src={src}
                alt={`Artwork ${i + 1}`}
                loading="lazy"
                className="block w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#14151a]">
                  <Maximize2 size={14} />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            key={images[active]}
            src={images[active]}
            alt={`Artwork ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="pop-in max-h-[88vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl"
          />

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-xs text-white">
            {active + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}
