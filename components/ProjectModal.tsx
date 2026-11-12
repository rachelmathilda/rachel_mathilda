"use client"

import { useEffect } from "react"
import { ExternalLink, Github, Wrench, X } from "lucide-react"
import ProjectCover from "@/components/ProjectCover"
import type { Project } from "@/components/CodeExplorer"
import { dict, type DictKey } from "@/lib/dict"
import { tr, useLang } from "@/lib/i18n"

interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { lang } = useLang()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  const links = project.links ?? {}

  return (
    <div
      className="fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="pop-in card-neo max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl hover:!translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] w-full">
          <ProjectCover
            title={project.title}
            image={project.image}
            position={project.imagePosition}
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
            aria-label={dict["modal.close"][lang]}
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="chip rounded-full px-3 py-1 font-medium">
              {dict[`cat.${project.category}` as DictKey]?.[lang] ?? project.category}
            </span>
            {project.year && (
              <span className="chip rounded-full px-3 py-1">{project.year}</span>
            )}
            {project.status === "ongoing" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent2 px-3 py-1 font-semibold text-accent2-fg">
                <Wrench size={12} />
                {dict["code.ongoing"][lang]}
              </span>
            )}
            {project.role && (
              <span className="chip rounded-full px-3 py-1">{project.role}</span>
            )}
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed opacity-90">
            {tr(project.description, lang) || tr(project.summary, lang)}
          </p>

          {project.status === "ongoing" && (
            <p className="mt-4 rounded-2xl border border-line bg-accent2/15 px-4 py-3 text-sm">
              {tr(project.statusNote, lang) || dict["modal.ongoing"][lang]}
            </p>
          )}

          {project.tags?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="chip-border rounded-full px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-6 space-y-4">
              {project.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={project.title}
                  loading="lazy"
                  className="mx-auto h-auto max-w-full rounded-2xl bg-white"
                />
              ))}
            </div>
          )}

          {(links.github || links.demo || links.extra?.length) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  <Github size={16} />
                  {dict["modal.source"][lang]}
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="chip-border inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} />
                  {dict["modal.demo"][lang]}
                </a>
              )}
              {links.extra?.filter((l) => l.url).map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="chip-border inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                  <Github size={16} />
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
