import { Calendar, Globe, GraduationCap, Heart, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  globe: Globe,
  graduation: GraduationCap,
  heart: Heart,
}

interface TrustChipProps {
  label: string
  icon?: keyof typeof iconMap
  className?: string
}

export function TrustChip({ label, icon = 'calendar', className }: TrustChipProps) {
  const Icon = iconMap[icon] ?? Calendar

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-sm ring-1 ring-border',
        className
      )}
    >
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </div>
  )
}
