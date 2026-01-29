import CodeFilterBar from "@/components/CodeFilterBar"

export default function CodePage() {
  return (
    <main className="min-h-screen px-12 pt-10 pb-10 space-y-16">
      <CodeFilterBar />

      <section className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
        <CodeCard />
        <CodeCard />
        <CodeCard />
        <CodeCard />
        <CodeCard />
        <CodeCard />
      </section>
    </main>
  )
}

function CodeCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/90 dark:bg-[#61646D] shadow">
      <div className="w-full aspect-[16/9] bg-[linear-gradient(45deg,#eee_25%,transparent_25%),linear-gradient(-45deg,#eee_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#eee_75%),linear-gradient(-45deg,transparent_75%,#eee_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]" />
      <div className="p-5">
        <h3 className="font-semibold text-black dark:text-white">
          Project Title
        </h3>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
          Short description goes here
        </p>
      </div>
    </div>
  )
}
