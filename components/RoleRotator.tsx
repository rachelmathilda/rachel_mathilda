"use client"

import { useEffect, useState } from "react"
import { useLang } from "@/lib/i18n"

interface Props {
  words: { en: string[]; id: string[] }
}

export default function RoleRotator({ words }: Props) {
  const { lang } = useLang()
  const list = words[lang]
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setIndex(0)
    setCount(0)
    setDeleting(false)
  }, [lang])

  useEffect(() => {
    const word = list[index % list.length]
    let delay = deleting ? 40 : 85

    if (!deleting && count === word.length) delay = 1600
    if (deleting && count === 0) delay = 350

    const t = setTimeout(() => {
      if (!deleting && count === word.length) {
        setDeleting(true)
      } else if (deleting && count === 0) {
        setDeleting(false)
        setIndex((index + 1) % list.length)
      } else {
        setCount(count + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [count, deleting, index, list])

  return (
    <span className="caret text-accent2-ink">
      {list[index % list.length].slice(0, count)}
    </span>
  )
}
