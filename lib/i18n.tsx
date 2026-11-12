"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { dict, type DictKey, type Lang, type Localized } from "@/lib/dict"

interface Ctx {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem("lang")
    } catch {}
    const initial: Lang =
      saved === "id" || saved === "en"
        ? saved
        : navigator.language.toLowerCase().startsWith("id")
          ? "id"
          : "en"
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem("lang", next)
    } catch {}
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

export function tr(value: Localized | undefined, lang: Lang): string {
  if (value === undefined) return ""
  if (typeof value === "string") return value
  return value[lang] || value.en
}

export function useT() {
  const { lang } = useLang()
  return useCallback((key: DictKey) => dict[key][lang], [lang])
}

export function useTr() {
  const { lang } = useLang()
  return useCallback((value: Localized | undefined) => tr(value, lang), [lang])
}

export function T({ k }: { k: DictKey }) {
  const { lang } = useLang()
  return <>{dict[k][lang]}</>
}

export function L({ v }: { v: Localized | undefined }) {
  const { lang } = useLang()
  return <>{tr(v, lang)}</>
}
