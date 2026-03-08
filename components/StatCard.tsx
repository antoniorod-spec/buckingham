import { cn } from '@/lib/utils'

interface StatCardProps {
  value: string
  label: string
  detail?: string
  className?: string
}

export function StatCard({ value, label, detail, className }: StatCardProps) {
  return (
    <div className={cn('card-soft min-h-[11.25rem] p-5 sm:p-6', className)}>
      <div className="text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.35rem]">
        {value}
      </div>
      <div className="mt-2 text-base font-medium text-foreground">{label}</div>
      {detail ? <p className="mt-3 text-[0.98rem] leading-8 text-muted-foreground">{detail}</p> : null}
    </div>
  )
}
