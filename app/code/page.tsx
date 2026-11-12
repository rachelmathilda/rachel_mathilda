import CodeExplorer from "@/components/CodeExplorer"
import Reveal from "@/components/Reveal"

export default function CodePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      <Reveal className="mb-12 text-center">
        <p className="font-display text-sm tracking-widest text-accent">
          PROJECTS
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Things I&apos;ve built
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Mobile apps, websites, robots, and tools. Pick a card for the details.
        </p>
      </Reveal>

      <CodeExplorer />
    </main>
  )
}
