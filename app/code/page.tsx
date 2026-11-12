import CodeExplorer from "@/components/CodeExplorer"
import Reveal from "@/components/Reveal"
import { T } from "@/lib/i18n"

export default function CodePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      <Reveal className="mb-12 text-center">
        <p className="font-display text-sm tracking-widest text-accent-ink">
          <T k="code.kicker" />
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          <T k="code.title" />
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          <T k="code.sub" />
        </p>
      </Reveal>

      <CodeExplorer />
    </main>
  )
}
