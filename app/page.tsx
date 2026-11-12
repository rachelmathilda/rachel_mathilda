import { Github, GraduationCap, Languages, Mail, Sparkles } from "lucide-react"
import Hero from "@/components/Hero"
import InfoCard from "@/components/InfoCard"
import ExperienceCard from "@/components/ExperienceCard"
import ToolsStrip from "@/components/ToolsStrip"
import SkillsSection from "@/components/SkillsSection"
import SectionTitle from "@/components/SectionTitle"
import Reveal from "@/components/Reveal"
import { experiences } from "@/data/profile"

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsStrip />

      <main className="mx-auto max-w-6xl space-y-24 px-6 pt-24">
        <section>
          <SectionTitle index="01" title="About me" />
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <Reveal className="col-span-2 max-sm:col-span-1">
              <InfoCard
                title="About"
                icon={<Sparkles size={18} />}
                className="h-full"
              >
                <p>
                  Computer Science undergraduate student at the University of
                  Indonesia. Highly interested in Artificial Intelligence and
                  Software Development. Experienced and capable of working in
                  a team through competitions and study groups.
                </p>
                <p className="mt-3">
                  In the meantime, I enjoy doing visual arts (watercolor and
                  digital).
                </p>
              </InfoCard>
            </Reveal>

            <Reveal delay={90}>
              <InfoCard
                title="Education"
                icon={<GraduationCap size={18} />}
                className="h-full"
              >
                <p className="font-medium">University Of Indonesia</p>
                <p>Bachelor of Computer Science</p>
                <p className="mt-2 opacity-80">2022 - 2027</p>
              </InfoCard>
            </Reveal>

            <Reveal delay={180}>
              <InfoCard
                title="Languages"
                icon={<Languages size={18} />}
                className="h-full"
              >
                <div className="flex items-center justify-between">
                  <span>Bahasa Indonesia</span>
                  <span className="chip rounded-full px-2.5 py-0.5 text-xs">
                    Native
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>English</span>
                  <span className="chip rounded-full px-2.5 py-0.5 text-xs">
                    EPT 500
                  </span>
                </div>
              </InfoCard>
            </Reveal>

            <Reveal
              delay={120}
              className="col-span-4 max-lg:col-span-2 max-sm:col-span-1"
            >
              <InfoCard title="Contact" icon={<Mail size={18} />}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="opacity-80">email</p>
                    <a
                      href="mailto:rachelmathilda10@gmail.com"
                      className="font-display text-xl font-semibold underline-offset-4 hover:underline sm:text-2xl"
                    >
                      rachelmathilda10@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/rachelmathilda/"
                      target="_blank"
                      rel="noreferrer"
                      className="chip-border inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href="mailto:rachelmathilda10@gmail.com"
                      className="btn-solid rounded-full px-5 py-2.5 text-sm font-semibold"
                    >
                      Send an email
                    </a>
                  </div>
                </div>
              </InfoCard>
            </Reveal>
          </div>
        </section>

        <section>
          <SectionTitle index="02" title="Skills" />
          <SkillsSection />
        </section>

        <section>
          <SectionTitle index="03" title="Experience" />
          <div className="relative space-y-6">
            <span className="absolute bottom-6 left-[13px] top-6 w-px bg-line sm:left-[21px]" />
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title + exp.date} index={i} {...exp} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
