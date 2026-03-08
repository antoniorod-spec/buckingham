import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/content'
import { cn } from '@/lib/utils'

interface ContactCardProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function ContactCard({ variant = 'default', className }: ContactCardProps) {
  return (
    <div className={cn('card-soft p-6', variant === 'compact' && 'p-5', className)}>
      <h3 className="text-lg font-semibold tracking-tight text-foreground">Información de contacto</h3>
      <ul className="mt-5 space-y-4">
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span className="text-sm leading-relaxed text-muted-foreground">{siteConfig.address}</span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0 text-primary" />
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {siteConfig.phone}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0 text-primary" />
          <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {siteConfig.email}
          </a>
        </li>
      </ul>
    </div>
  )
}
