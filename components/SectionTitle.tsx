import Reveal from "@/components/Reveal"

interface Props {
  index: string
  title: string
}

export default function SectionTitle({ index, title }: Props) {
  return (
    <Reveal className="mb-8 flex items-center gap-4">
      <span className="font-display text-sm tracking-widest text-accent">
        {index}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </Reveal>
  )
}
