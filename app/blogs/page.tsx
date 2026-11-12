import { PenLine } from "lucide-react"
import data from "@/data/blogs.json"
import BlogCard, { type Post } from "@/components/BlogCard"
import Reveal from "@/components/Reveal"

export const metadata = {
  title: "Blogs | Rachel Mathilda",
}

export default function BlogsPage() {
  const posts = (data.posts as Post[])
    .filter((p) => p.visible !== false)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main className="mx-auto max-w-6xl px-6 pb-10 pt-16">
      <Reveal className="mb-12 text-center">
        <p className="font-display text-sm tracking-widest text-accent">BLOGS</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Notes &amp; writing
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Thoughts on AI, software development, and things I learn along the way.
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <Reveal className="mx-auto max-w-md">
          <div className="card-neo spot rounded-[2rem] p-10 text-center">
            <div className="float-a mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-accent text-accent-fg">
              <PenLine size={28} />
            </div>
            <h2 className="font-display text-2xl font-bold">Coming soon</h2>
            <p className="mt-3 text-sm opacity-85">
              The first post is still being written. Check back later.
            </p>
          </div>
        </Reveal>
      ) : (
        <section className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </section>
      )}
    </main>
  )
}
