"use client"

export default function ArtPage() {
  return (
    <main className="min-h-screen px-12 pt-24 pb-24">
      <div className="columns-4 gap-6 max-xl:columns-3 max-md:columns-2 max-sm:columns-1">
        <ArtCard h="h-[220px]" />
        <ArtCard h="h-[320px]" />
        <ArtCard h="h-[260px]" />
        <ArtCard h="h-[380px]" />
        <ArtCard h="h-[240px]" />
        <ArtCard h="h-[300px]" />
        <ArtCard h="h-[360px]" />
        <ArtCard h="h-[280px]" />
        <ArtCard h="h-[340px]" />
      </div>
    </main>
  )
}

function ArtCard({ h }: { h: string }) {
  return (
    <div className="mb-6 break-inside-avoid rounded-2xl overflow-hidden bg-white dark:bg-[#61646D] shadow">
      <div
        className={`w-full ${h} bg-[linear-gradient(45deg,#eee_25%,transparent_25%),linear-gradient(-45deg,#eee_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#eee_75%),linear-gradient(-45deg,transparent_75%,#eee_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]`}
      />
    </div>
  )
}
