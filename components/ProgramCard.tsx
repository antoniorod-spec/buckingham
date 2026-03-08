import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProgramCardProps {
  title: string
  ages: string
  description: string
  image: string
  href: string
  className?: string
}

export function ProgramCard({
  title,
  ages,
  description,
  image,
  href,
  className,
}: ProgramCardProps) {
  return (
    <article className={cn('card-elevated group overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1', className)}>
      <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem]">
        <Image
          src={image}
          alt={`${title} - Instituto Buckingham`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          {ages}
        </div>
      </div>
      <div className="px-2 pb-2 pt-6">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <Button asChild variant="ghost" className="mt-5 h-auto px-0 text-foreground hover:bg-transparent hover:text-primary">
          <Link href={href}>
            Explorar nivel
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </article>
  )
}
