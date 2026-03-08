import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'default' | 'dark'
  className?: string
}

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'default',
  className,
}: CTASectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={cn('section-space', isDark ? 'bg-secondary text-secondary-foreground' : 'section-warm', className)}>
      <div className="container-shell">
        <div className={cn('card-elevated overflow-hidden px-6 py-8 md:px-8 md:py-10 lg:px-12', isDark ? 'border-secondary/10 bg-background text-foreground' : 'bg-white')}>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className={cn('eyebrow', isDark && 'border-secondary/12 bg-secondary/6 text-secondary')}>Siguiente paso</span>
              <h2 className={cn('mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl', isDark && 'text-secondary')}>{title}</h2>
              {description ? (
                <p className={cn('mt-4 max-w-2xl text-base leading-relaxed sm:text-lg', isDark ? 'text-muted-foreground' : 'text-muted-foreground')}>
                  {description}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              {primaryCta ? (
                <Button asChild size="lg">
                  {isExternalHref(primaryCta.href) ? (
                    <a href={primaryCta.href}>{primaryCta.label}</a>
                  ) : (
                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                  )}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild size="lg" variant="outline" className={cn(isDark && 'border-secondary/15 bg-white text-secondary hover:bg-accent')}>
                  {isExternalHref(secondaryCta.href) ? (
                    <a href={secondaryCta.href}>{secondaryCta.label}</a>
                  ) : (
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  )}
                </Button>
              ) : null}
            </div>
          </div>

          <div className={cn('mt-8 flex items-center gap-3 text-sm', isDark ? 'text-muted-foreground' : 'text-muted-foreground')}>
            <ArrowRight className="h-4 w-4 text-primary" />
            Atención cercana, proceso claro y respuesta rápida para cada familia.
          </div>
        </div>
      </div>
    </section>
  )
}
