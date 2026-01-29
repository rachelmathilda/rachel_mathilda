import "./globals.css"
import { Providers } from "./providers"
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-900 text-white dark:bg-neutral-900 dark:text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
