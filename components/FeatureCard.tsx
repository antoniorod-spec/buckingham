import {
  BookOpen,
  Brain,
  Globe,
  GraduationCap,
  Heart,
  LucideIcon,
  MessageCircleHeart,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  globe: Globe,
  users: Users,
  sparkles: Sparkles,
  brain: Brain,
  graduation: GraduationCap,
  shield: ShieldCheck,
  'message-circle': MessageCircleHeart,
  book: BookOpen,
  palette: Palette,
}

interface FeatureCardProps {
  title: string
  description: string
  icon?: keyof typeof iconMap
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon = 'heart',
  className,
}: FeatureCardProps) {
  const Icon = iconMap[icon] ?? Heart

  return (
    <div
      className={cn(
        'group rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/20 transition-all duration-300 hover:shadow-md hover:ring-primary/40',
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary/30">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug text-secondary sm:text-[1.15rem]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary/70">{description}</p>
    </div>
  )
}
