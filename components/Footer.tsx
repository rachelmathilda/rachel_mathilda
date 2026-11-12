import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-line px-6 py-8 text-sm text-muted sm:flex-row">
      <p>© {new Date().getFullYear()} Rachel Mathilda</p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rachelmathilda10@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 transition hover:text-foreground"
      >
        <Mail size={15} />
        rachelmathilda10@gmail.com
      </a>
    </footer>
  )
}
