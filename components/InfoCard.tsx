interface Props {
  title: string
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export default function InfoCard({ title, icon, className = "", children }: Props) {
  return (
    <div className={`card-neo spot rounded-3xl p-6 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        {icon && (
          <span className="grid h-9 w-9 place-items-center rounded-xl chip">
            {icon}
          </span>
        )}
        <h2 className="font-display text-xl font-semibold">{title}</h2>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}
