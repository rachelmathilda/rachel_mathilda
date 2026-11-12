import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import RoleRotator from "@/components/RoleRotator"
import { T } from "@/lib/i18n"

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-14 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent2" />
          <T k="hero.badge" />
        </span>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          <T k="hero.hi" />
          <br />
          <span className="text-shimmer">Rachel Mathilda</span>
        </h1>

        <p className="mt-6 text-xl font-medium sm:text-2xl">
          <T k="hero.ido" />{" "}
          <RoleRotator
            words={{
              en: ["AI engineering", "software development", "watercolor art", "digital art"],
              id: ["AI engineering", "pengembangan perangkat lunak", "seni cat air", "seni digital"],
            }}
          />
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          <T k="hero.desc" />
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/code"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <T k="hero.cta.code" />
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/art"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-accent-soft"
          >
            <T k="hero.cta.art" />
          </Link>
          <a
            href="mailto:rachelmathilda10@gmail.com"
            className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-muted transition hover:text-foreground"
          >
            <Mail size={16} />
            <T k="hero.cta.hi" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto h-[440px] w-full max-w-sm sm:h-[500px]">
        <div
          className="card-neo float-b absolute left-0 top-2 z-10 hidden w-36 overflow-hidden rounded-2xl p-1.5 sm:block"
          style={{ ["--r" as string]: "-8deg", transform: "rotate(-8deg)" }}
        >
          <img
            src="/1.jpeg"
            alt="Artwork"
            className="h-40 w-full rounded-xl object-cover"
          />
        </div>

        <div
          className="card-neo float-a absolute right-0 bottom-2 z-10 hidden w-40 overflow-hidden rounded-2xl p-1.5 sm:block"
          style={{ ["--r" as string]: "7deg", transform: "rotate(7deg)" }}
        >
          <img
            src="/2.jpeg"
            alt="Artwork"
            className="h-44 w-full rounded-xl object-cover"
          />
        </div>

        <div className="card-neo absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] p-2.5 hover:!-translate-x-1/2 hover:!-translate-y-[52%] sm:w-72">
          <img
            src="/profile.jpg"
            alt="Rachel Mathilda"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
