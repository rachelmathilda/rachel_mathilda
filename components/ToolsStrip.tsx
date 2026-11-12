import { skillGroups } from "@/data/profile"

const all = skillGroups.flatMap((g) => g.items)
const half = Math.ceil(all.length / 2)
const rows = [all.slice(0, half), all.slice(half)]

function Row({ items, reverse }: { items: typeof all; reverse?: boolean }) {
  const loop = [...items, ...items]

  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow transition hover:-translate-y-1"
            aria-hidden={i >= items.length}
          >
            <img
              src={`/tools/${skill.icon}.svg`}
              alt=""
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ToolsStrip() {
  return (
    <div className="w-full space-y-3 bg-strip py-5 text-[#14151a]">
      <Row items={rows[0]} />
      <Row items={rows[1]} reverse />
    </div>
  )
}
