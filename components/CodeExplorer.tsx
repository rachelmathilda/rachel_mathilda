"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Search, Star, Wrench } from "lucide-react"
import data from "@/data/projects.json"
import ProjectCover from "@/components/ProjectCover"
import ProjectModal from "@/components/ProjectModal"
import Reveal from "@/components/Reveal"
import { dict, type DictKey, type Localized } from "@/lib/dict"
import { tr, useLang } from "@/lib/i18n"

export interface Project {
  id: string
  visible?: boolean
  featured?: boolean
  status?: "ongoing" | "done"
  statusNote?: Localized
  title: string
  summary: Localized
  description?: Localized
  category: string
  year?: string
  role?: string
  tags: string[]
  image?: string
  imagePosition?: string
  gallery?: string[]
  links?: {
    github?: string
    demo?: string
    extra?: { label: string; url: string }[]
  }
}

const categories = ["All", ...(data.categories as string[])]

function catLabel(name: string, lang: "en" | "id") {
  if (name === "All") return dict["code.all"][lang]
  const key = `cat.${name}` as DictKey
  return dict[key]?.[lang] ?? name
}
const allProjects = (data.projects as unknown as Project[]).filter(
  (p) => p.visible !== false
)

export default function CodeExplorer() {
  const { lang } = useLang()
  const [active, setActive] = useState("All")
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<Project | null>(null)

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: allProjects.length }
    for (const p of allProjects) map[p.category] = (map[p.category] ?? 0) + 1
    return map
  }, [])

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allProjects
      .filter((p) => active === "All" || p.category === active)
      .filter(
        (p) =>
          !q ||
          p.title.toLowerCase().includes(q) ||
          tr(p.summary, lang).toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
      .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  }, [active, query, lang])

  return (
    <>
      <div className="space-y-5">
        <div className="relative mx-auto max-w-md">
          <Search
            size={16}
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={dict["code.search"][lang]}
            className="w-full rounded-full border border-line bg-transparent py-3 pl-12 pr-5 text-sm outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0">
          <div className="flex gap-2 sm:flex-wrap sm:justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                  active === c
                    ? "border-accent bg-accent font-semibold text-accent-fg"
                    : "border-line hover:bg-accent-soft"
                }`}
              >
                {catLabel(c, lang)}
                <span
                  className={`rounded-full px-1.5 text-[11px] ${
                    active === c ? "bg-black/20" : "bg-accent-soft"
                  }`}
                >
                  {counts[c] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="mt-20 text-center text-muted">
          <p className="font-display text-xl font-semibold text-foreground">
            {dict["code.empty.title"][lang]}
          </p>
          <p className="mt-2 text-sm">
            {dict["code.empty.desc"][lang]}
          </p>
        </div>
      ) : (
        <section className="mt-12 grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <button
                onClick={() => setSelected(p)}
                className="card-neo spot group flex h-full w-full flex-col items-stretch justify-start overflow-hidden rounded-3xl text-left"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                    <ProjectCover
                      title={p.title}
                      image={p.image}
                      position={p.imagePosition}
                    />
                  </div>
                  {p.featured && (
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      <Star size={11} className="fill-current" />
                      {dict["code.featured"][lang]}
                    </span>
                  )}
                  {p.status === "ongoing" && (
                    <span
                      className={`absolute left-3 flex items-center gap-1 rounded-full bg-accent2 px-2.5 py-1 text-[11px] font-semibold text-accent2-fg ${
                        p.featured ? "top-11" : "top-3"
                      }`}
                    >
                      <Wrench size={11} />
                      {dict["code.ongoing"][lang]}
                    </span>
                  )}
                  <span className="absolute right-3 top-3 grid h-8 w-8 translate-y-1 place-items-center rounded-full bg-white text-[#14151a] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider opacity-75">
                    <span>{catLabel(p.category, lang)}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm opacity-85">
                    {tr(p.summary, lang)}
                  </p>

                  {p.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="chip rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </section>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
