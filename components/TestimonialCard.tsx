import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  className?: string
}

export function TestimonialCard({ quote, author, role, className }: TestimonialCardProps) {
  return (
    <figure className={cn('card-soft relative p-7', className)}>
      <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
      <blockquote className="pr-8 text-base leading-relaxed text-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border/70 pt-5">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="mt-1 text-sm text-muted-foreground">{role}</p>
      </figcaption>
    </figure>
  )
}
