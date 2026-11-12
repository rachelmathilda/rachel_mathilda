import { skillGroups } from "@/data/profile"
import Reveal from "@/components/Reveal"
import { L } from "@/lib/i18n"

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {skillGroups.map((group, i) => (
        <Reveal key={typeof group.title === "string" ? group.title : group.title.en} delay={(i % 3) * 80}>
          <div className="card-neo spot h-full rounded-3xl p-6">
            <h3 className="font-display text-base font-semibold">
              <L v={group.title} />
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-[#14151a] shadow-sm transition hover:-translate-y-0.5"
                >
                  <img
                    src={`/tools/${skill.icon}.svg`}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
