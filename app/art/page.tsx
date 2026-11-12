import ArtGallery from "@/components/ArtGallery"
import Reveal from "@/components/Reveal"
import { T } from "@/lib/i18n"

export default function ArtPage() {
  const images = Array.from({ length: 8 }, (_, i) => `/${i + 1}.jpeg`)

  return (
    <main className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      <Reveal className="mb-12 text-center">
        <p className="font-display text-sm tracking-widest text-accent-ink">
          <T k="art.kicker" />
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          <T k="art.title" />
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          <T k="art.sub" />
        </p>
      </Reveal>

      <ArtGallery images={images} />
    </main>
  )
}
