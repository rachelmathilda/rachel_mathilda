"use client"

import { ArrowUpRight, Clock } from "lucide-react"
import { tr, useLang } from "@/lib/i18n"
import type { Lang, Localized } from "@/lib/dict"

export interface Post {
  id: string
  visible?: boolean
  title: Localized
  summary: Localized
  date: string
  readTime?: Localized
  tags?: string[]
  url?: string
}

function formatDate(date: string, lang: Lang) {
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

export default function BlogCard({ post }: { post: Post }) {
  const { lang } = useLang()

  const body = (
    <>
      <div className="flex items-center justify-between text-xs opacity-80">
        <span>{formatDate(post.date, lang)}</span>
        {post.readTime && (
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {tr(post.readTime, lang)}
          </span>
        )}
      </div>

      <h2 className="mt-4 font-display text-xl font-semibold leading-snug">
        {tr(post.title, lang)}
      </h2>
      <p className="mt-2 text-sm leading-relaxed opacity-85">
        {tr(post.summary, lang)}
      </p>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {post.tags?.map((t) => (
            <span
              key={t}
              className="chip rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        {post.url && (
          <span className="btn-solid grid h-9 w-9 shrink-0 place-items-center rounded-full transition group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
    </>
  )

  const cls = "card-neo spot group block h-full rounded-3xl p-6"

  return post.url ? (
    <a href={post.url} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}
