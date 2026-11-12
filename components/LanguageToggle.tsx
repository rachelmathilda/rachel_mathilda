"use client"

import { useLang } from "@/lib/i18n"
import { dict } from "@/lib/dict"

export default function LanguageToggle() {
  const { lang, setLang } = useLang()
  const next = lang === "en" ? "id" : "en"

  return (
    <button
      onClick={() => setLang(next)}
      className="relative flex h-9 w-[72px] shrink-0 items-center rounded-full border border-line text-xs font-bold tracking-wide transition hover:shadow-[0_0_0_3px_var(--accent-soft)]"
      aria-label={dict["lang.switch"][lang]}
      title={dict["lang.switch"][lang]}
    >
      <span
        className="absolute left-[3px] top-[3px] h-[28px] w-[32px] rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.68,-0.3,0.27,1.3)]"
        style={{ transform: lang === "id" ? "translateX(34px)" : "translateX(0)" }}
      />
      <span
        className={`relative z-10 w-1/2 text-center transition-colors duration-300 ${
          lang === "en" ? "text-accent-fg" : "text-muted"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 w-1/2 text-center transition-colors duration-300 ${
          lang === "id" ? "text-accent-fg" : "text-muted"
        }`}
      >
        ID
      </span>
    </button>
  )
}
