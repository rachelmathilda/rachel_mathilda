import Reveal from "@/components/Reveal"
import { L } from "@/lib/i18n"
import type { Localized } from "@/lib/dict"

interface Props {
  index: string
  title: Localized
}

export default function SectionTitle({ index, title }: Props) {
  return (
    <Reveal className="mb-8 flex items-center gap-4">
      <span className="font-display text-sm tracking-widest text-accent2-ink">
        {index}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <L v={title} />
      </h2>
      <span className="h-px flex-1 bg-line" />
    </Reveal>
  )
}
