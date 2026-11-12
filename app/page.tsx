import { Github, GraduationCap, Languages, Mail, Sparkles } from "lucide-react"
import Hero from "@/components/Hero"
import InfoCard from "@/components/InfoCard"
import ExperienceCard from "@/components/ExperienceCard"
import ToolsStrip from "@/components/ToolsStrip"
import SkillsSection from "@/components/SkillsSection"
import SectionTitle from "@/components/SectionTitle"
import Reveal from "@/components/Reveal"
import { T } from "@/lib/i18n"
import { dict } from "@/lib/dict"
import { experiences } from "@/data/profile"

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsStrip />

      <main className="mx-auto max-w-6xl space-y-24 px-6 pt-24">
        <section>
          <SectionTitle index="01" title={dict["sec.about"]} />
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <Reveal className="col-span-2 max-sm:col-span-1">
              <InfoCard
                title={dict["card.about"]}
                icon={<Sparkles size={18} />}
                className="h-full"
              >
                <p>
                  <T k="about.p1" />
                </p>
                <p className="mt-3">
                  <T k="about.p2" />
                </p>
              </InfoCard>
            </Reveal>

            <Reveal delay={90}>
              <InfoCard
                title={dict["card.education"]}
                icon={<GraduationCap size={18} />}
                className="h-full"
              >
                <p className="font-medium">
                  <T k="edu.univ" />
                </p>
                <p>
                  <T k="edu.degree" />
                </p>
                <p className="mt-2 opacity-80">2022 - 2027</p>
              </InfoCard>
            </Reveal>

            <Reveal delay={180}>
              <InfoCard
                title={dict["card.languages"]}
                icon={<Languages size={18} />}
                className="h-full"
              >
                <div className="flex items-center justify-between">
                  <span>
                    <T k="lang.name.id" />
                  </span>
                  <span className="chip rounded-full px-2.5 py-0.5 text-xs">
                    <T k="lang.native" />
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>
                    <T k="lang.name.en" />
                  </span>
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
              <InfoCard title={dict["card.contact"]} icon={<Mail size={18} />}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="opacity-80">
                      <T k="contact.email" />
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rachelmathilda10@gmail.com"
                      target="_blank"
                      rel="noreferrer"
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
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rachelmathilda10@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-solid rounded-full px-5 py-2.5 text-sm font-semibold"
                    >
                      <T k="contact.send" />
                    </a>
                  </div>
                </div>
              </InfoCard>
            </Reveal>
          </div>
        </section>

        <section>
          <SectionTitle index="02" title={dict["sec.skills"]} />
          <SkillsSection />
        </section>

        <section>
          <SectionTitle index="03" title={dict["sec.experience"]} />
          <div className="relative space-y-6">
            <span className="absolute bottom-6 left-[13px] top-6 w-px bg-line sm:left-[21px]" />
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={i}
                index={i}
                title={exp.title}
                subtitle={exp.subtitle}
                date={exp.date}
                bullets={exp.bullets}
                tags={exp.tags}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
