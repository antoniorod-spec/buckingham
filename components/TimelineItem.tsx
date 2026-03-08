import { Award, Building2, GraduationCap, LucideIcon, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  users: Users,
  graduation: GraduationCap,
  award: Award,
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  icon?: keyof typeof iconMap
  align?: 'left' | 'right'
  className?: string
}

export function TimelineItem({
  year,
  title,
  description,
  icon = 'building',
  align = 'left',
  className,
}: TimelineItemProps) {
  const Icon = iconMap[icon] ?? Building2

  return (
    <div className={cn('card-soft relative p-6', align === 'right' && 'lg:ml-auto', className)}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">{year}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
