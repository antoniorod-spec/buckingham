import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, CalendarDays, MessageCircleMore } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/StatCard'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  trustBullets?: string[]
  stats?: { value: string; label: string; detail?: string }[]
  imageBadge?: { value: string; label: string; detail?: string }
  variant?: 'default' | 'compact' | 'dark'
  className?: string
}

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  primaryCta,
  secondaryCta,
  trustBullets,
  stats,
  imageBadge,
  variant = 'default',
  className,
}: PageHeroProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        variant === 'compact' ? 'section-space-sm' : 'section-space',
        isDark ? 'bg-secondary text-secondary-foreground' : 'bg-transparent',
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(19,41,75,0.12),transparent_34%),radial-gradient(circle_at_right,rgba(210,176,17,0.14),transparent_22%),linear-gradient(180deg,rgba(19,41,75,0.03),transparent_72%)]" />
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            {eyebrow ? (
              <span className={cn('eyebrow', isDark && 'border-white/15 bg-white/10 text-primary')}>
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-5 max-w-3xl text-[2.75rem] font-semibold leading-[1] tracking-tight text-balance text-secondary sm:text-[3.35rem] lg:text-[3.75rem]">
              {title}
            </h1>
            {description ? (
              <p className={cn('mt-6 max-w-xl text-base leading-relaxed sm:text-lg', isDark ? 'text-secondary-foreground/80' : 'text-muted-foreground')}>
                {description}
              </p>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {primaryCta ? (
                  <Button asChild size="lg" variant={isDark ? 'default' : 'secondary'} className="min-w-[11rem]">
                    {isExternalHref(primaryCta.href) ? (
                      <a href={primaryCta.href}>
                        <CalendarDays className="h-4 w-4" />
                        {primaryCta.label}
                      </a>
                    ) : (
                      <Link href={primaryCta.href}>
                        <CalendarDays className="h-4 w-4" />
                        {primaryCta.label}
                      </Link>
                    )}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className={cn(
                      'min-w-[11rem]',
                      isDark && 'border-white/20 bg-white/5 text-secondary-foreground hover:bg-white/10'
                    )}
                  >
                    {isExternalHref(secondaryCta.href) ? (
                      <a href={secondaryCta.href}>
                        <MessageCircleMore className="h-4 w-4" />
                        {secondaryCta.label}
                      </a>
                    ) : (
                      <Link href={secondaryCta.href}>
                        <MessageCircleMore className="h-4 w-4" />
                        {secondaryCta.label}
                      </Link>
                    )}
                  </Button>
                ) : null}
              </div>
            )}

            {trustBullets?.length ? (
              <ul className="mt-8 flex flex-wrap gap-3">
                {trustBullets.map((bullet) => (
                  <li key={bullet} className={cn('rounded-full px-4 py-2 text-sm font-medium', isDark ? 'bg-white/10 text-secondary-foreground' : 'border border-secondary/10 bg-white text-secondary shadow-[0_12px_26px_-22px_rgba(12,29,55,0.28)]')}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            {stats?.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {stats.map((stat) => (
                  <StatCard
                    key={`${stat.value}-${stat.label}`}
                    value={stat.value}
                    label={stat.label}
                    detail={stat.detail}
                    className={cn(!isDark && 'border-secondary/10', isDark && 'border-white/10 bg-white/[0.08] text-secondary-foreground')}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <div className={cn('card-elevated relative overflow-hidden border-secondary/10 p-3', isDark && 'border-white/10 bg-white/5')}>
              <div className="absolute right-6 top-6 z-10 hidden rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground md:inline-flex">
                Instituto Buckingham
              </div>
              {image ? (
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.35rem] sm:aspect-[4/3.8]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-secondary/75 via-secondary/12 to-transparent" />
                </div>
              ) : (
                <div className="flex aspect-[4/3.8] items-end rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(247,241,216,1),rgba(246,240,228,1))] p-8">
                  <div className="max-w-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Buckingham</p>
                    <p className="mt-3 text-lg font-medium leading-relaxed text-foreground">
                      Educación con una estética cálida, una operación clara y una comunidad cercana.
                    </p>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 hidden rounded-[1.25rem] border border-secondary/10 bg-white/94 p-4 shadow-xl backdrop-blur md:block">
                <div className="flex items-center justify-between gap-4">
                  {imageBadge ? (
                    <div>
                      <p className="text-[1.65rem] font-semibold leading-none tracking-tight text-secondary">
                        {imageBadge.value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-secondary">{imageBadge.label}</p>
                      {imageBadge.detail ? (
                        <p className="mt-1 text-xs text-muted-foreground">{imageBadge.detail}</p>
                      ) : null}
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Experiencia diaria</p>
                      <p className="mt-2 text-sm text-muted-foreground">Aulas con estructura, vínculos cercanos y atención sensible a cada etapa.</p>
                    </div>
                  )}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
