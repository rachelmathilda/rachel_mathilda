"use client"

import { useEffect, useState } from "react"

interface Props {
  words: string[]
}

export default function RoleRotator({ words }: Props) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let delay = deleting ? 40 : 85

    if (!deleting && count === word.length) delay = 1600
    if (deleting && count === 0) delay = 350

    const t = setTimeout(() => {
      if (!deleting && count === word.length) {
        setDeleting(true)
      } else if (deleting && count === 0) {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        setCount(count + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [count, deleting, index, words])

  return (
    <span className="caret text-accent">{words[index].slice(0, count)}</span>
  )
}
