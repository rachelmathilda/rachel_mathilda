import InfoCard from "@/components/InfoCard"
import ExperienceCard from "@/components/ExperienceCard"
import ToolsStrip from "@/components/ToolsStrip"

export default function Home() {
  return (
    <>

      <ToolsStrip>
        <ToolIcon src="/tools/figma.png" />
        <ToolIcon src="/tools/python.png" />
        <ToolIcon src="/tools/java.png" />
        <ToolIcon src="/tools/flutter.png" />
        <ToolIcon src="/tools/django.png" />
        <ToolIcon src="/tools/docker.png" />
        <ToolIcon src="/tools/vscode.png" />
        <ToolIcon src="/tools/intellij.png" />
      </ToolsStrip>

      <main className="min-h-screen px-12 pt-24 pb-24 space-y-24">
        <section className="grid grid-cols-4 gap-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
          <InfoCard title="About">
            My main focus are AI and software development.
            In the meantime, I enjoy doing visual arts
            (watercolor and digital).
          </InfoCard>

          <InfoCard title="Education">
            <p>University Of Indonesia</p>
            <p>Computer Science</p>
            <p className="mt-2">2022 - 2026</p>
          </InfoCard>

          <InfoCard title="Languages">
            <div className="flex justify-between">
              <span>Bahasa Indonesia</span>
              <span>Native</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>English</span>
              <span>EPT 500</span>
            </div>
          </InfoCard>

          <InfoCard title="Contact">
            <p className="text-gray-200">email</p>
            <p className="mt-1">rachelmathilda10@gmail.com</p>
          </InfoCard>

          <h2 className="col-span-4 max-xl:col-span-2 max-sm:col-span-1 text-lg font-semibold">
            Experience
          </h2>

          <ExperienceCard
            title="Autonomous Marine Vehicle"
            subtitle="Staff of AI"
            date="January 2023 - August 2024"
            description="Augmented detection of ROV using object detection, ROS, and YOLO."
          />

          <ExperienceCard
            title="Teaching Assistant"
            subtitle="Introduction to Programming Foundation 1"
            date="January 2024 - May 2024"
            description="Helped make lab sessions and graded homework using Java language."
          />

          <ExperienceCard
            title="Teaching Assistant"
            subtitle="Introduction to Programming Foundation 1"
            date="August 2023 - December 2023"
            description="Helped make questions, assisted tutorial, and graded homework using Python."
          />

          <ExperienceCard
            title="Compfest 2023"
            subtitle="Software Engineering Liaison Officer"
            date="March 2023 - September 2023"
            description="Communicate with mentor about the event timeline schedule for team weekly meeting."
          />
        </section>
      </main>


    </>
  )
}

function ToolIcon({ src }: { src: string }) {
  return (
    <div className="bg-white rounded-md p-2 shadow">
      <img src={src} alt="" className="w-7 h-7" />
    </div>
  )
}
