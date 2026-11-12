import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk, Figtree } from "next/font/google"
import { Providers } from "./providers"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CursorGlow from "@/components/CursorGlow"

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--ff-display",
  display: "swap",
})

const body = Figtree({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rachel Mathilda",
  description:
    "Portfolio of Rachel Mathilda. AI, software development, and visual arts.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <Providers>
          <div className="aurora" aria-hidden>
            <span />
            <span />
          </div>
          <div className="cursor-glow" aria-hidden />
          <CursorGlow />
          <Navbar />
          <div className="min-h-[calc(100vh-4rem)]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
