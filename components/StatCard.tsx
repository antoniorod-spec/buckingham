import { cn } from '@/lib/utils'

interface StatCardProps {
  value: string
  label: string
  detail?: string
  className?: string
}

export function StatCard({ value, label, detail, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'relative min-h-[10.75rem] overflow-hidden rounded-[1.65rem] border border-primary/18 bg-white p-5 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]',
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,rgba(210,176,17,0.95),rgba(210,176,17,0.2))]" />
      <div className="text-[1.9rem] font-semibold tracking-tight text-foreground sm:text-[2.15rem]">
        {value}
      </div>
      <div className="mt-2 text-[1.02rem] font-medium text-foreground">{label}</div>
      {detail ? <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">{detail}</p> : null}
    </div>
  )
}
