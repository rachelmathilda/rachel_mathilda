import Reveal from "@/components/Reveal"

interface Props {
  title: string
  subtitle: string
  date: string
  bullets: string[]
  tags?: string[]
  index?: number
}

export default function ExperienceCard({
  title,
  subtitle,
  date,
  bullets,
  tags = [],
  index = 0,
}: Props) {
  return (
    <Reveal delay={(index % 3) * 90} className="relative pl-10 sm:pl-14">
      <span className="absolute left-[7px] top-7 h-3.5 w-3.5 rounded-full border-[3px] border-background bg-accent ring-2 ring-accent/40 sm:left-[15px]" />
      <div className="card-neo spot rounded-3xl p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-0.5 text-sm opacity-85">{subtitle}</p>
          </div>
          <span className="chip rounded-full px-3 py-1 text-xs font-medium">
            {date}
          </span>
        </div>

        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed opacity-90">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="chip-border rounded-full px-2.5 py-0.5 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  )
}
