import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Award,
  Building2,
  CalendarDays,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Nuestra Historia | Instituto Buckingham',
  description:
    'Conoce la historia de Instituto Buckingham y su trayectoria de más de 30 años formando familias en San Luis Potosí.',
}

const timelineEvents = [
  {
    year: '1993',
    title: 'Fundación',
    description:
      'Instituto Buckingham abre sus puertas en San Luis Potosí con una propuesta educativa bilingüe centrada en cercanía, formación integral y atención personalizada.',
    icon: Building2,
  },
  {
    year: '1998',
    title: 'Crecimiento de Preescolar',
    description:
      'La comunidad escolar crece y se fortalecen espacios, rutinas y experiencias para acompañar mejor a las familias en los primeros años.',
    icon: Users,
  },
  {
    year: '2005',
    title: 'Impulso al inglés',
    description:
      'Se consolida el enfoque bilingüe con metodologías y certificaciones que elevan el estándar académico del colegio.',
    icon: Award,
  },
  {
    year: '2015',
    title: 'Apertura de Maternal',
    description:
      'El proyecto se extiende para atender con sensibilidad y estructura a la primera infancia, desde una etapa más temprana.',
    icon: ShieldCheck,
  },
  {
    year: '2023',
    title: 'Más de 30 años de trayectoria',
    description:
      'Tres décadas después, Buckingham mantiene la misma promesa: excelencia académica, calidez humana y continuidad educativa por etapas.',
    icon: GraduationCap,
  },
]

const proofItems = [
  {
    title: 'Desde 1993',
    description: 'Más de 30 años acompañando familias.',
    icon: CalendarDays,
  },
  {
    title: 'Proyecto bilingüe',
    description: 'Una propuesta sólida con continuidad académica.',
    icon: Award,
  },
  {
    title: 'Comunidad cercana',
    description: 'Relación escuela-familia construida con confianza.',
    icon: Users,
  },
  {
    title: 'Visión de futuro',
    description: 'Formación integral para cada etapa del desarrollo.',
    icon: GraduationCap,
  },
]

export default function HistoriaPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border/70 bg-white/90">
        <div className="container-shell py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/nosotros" className="transition-colors hover:text-primary">
              Nosotros
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">Historia</span>
          </nav>
        </div>
      </div>

      <PageHero
        eyebrow="Desde 1993"
        title="Una historia construida con cercanía, excelencia y confianza"
        description="Buckingham ha acompañado a familias de San Luis Potosí durante más de tres décadas con una propuesta educativa bilingüe, cálida y académicamente sólida."
        image={images.home.hero}
        imageAlt="Comunidad de Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Más de 30 años', 'Educación bilingüe', 'Continuidad por etapas']}
        imageBadge={{
          value: '1993',
          label: 'Inicio de nuestra trayectoria',
          detail: 'Una comunidad que ha crecido sin perder cercanía.',
        }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {proofItems.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-secondary">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Trayectoria"
                title="Una tradición educativa que se ha fortalecido con el tiempo"
                description="Nuestra historia no se mide solo en años, sino en relaciones duraderas, generaciones acompañadas y una forma de educar que mantiene calidez y estructura."
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Instituto Buckingham nació con la convicción de que la calidad académica debía convivir con una atención humana y cercana. Desde el inicio, el proyecto buscó ofrecer una experiencia escolar ordenada, bilingüe y confiable para las familias.
                </p>
                <p>
                  Con el paso de los años, la comunidad creció y también lo hicieron sus espacios, programas y metodologías. Sin embargo, la esencia se mantuvo: acompañar cada etapa del desarrollo con claridad, seguimiento y una relación sólida entre escuela y familia.
                </p>
                <p>
                  Hoy, la historia de Buckingham sigue avanzando con la misma intención de origen: formar alumnos seguros, preparados y bien acompañados desde Maternal hasta Primaria.
                </p>
              </div>
            </div>

            <div className="card-elevated relative overflow-hidden border-primary/12 p-3">
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.home.hero}
                  alt="Historia de Instituto Buckingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-secondary/35 via-secondary/5 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 hidden rounded-[1.2rem] border border-primary/15 bg-white/94 p-4 shadow-[0_20px_40px_-28px_rgba(12,29,55,0.28)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Legado Buckingham</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Más de tres décadas formando una comunidad basada en confianza, bilingüismo y continuidad educativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Línea de tiempo"
            title="Momentos que explican cómo ha crecido la institución"
            description="Cada etapa de la historia refuerza la identidad actual del colegio: una propuesta estable, cercana y pensada para el largo plazo."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timelineEvents.map((event) => {
              const Icon = event.icon

              return (
                <article
                  key={event.year}
                  className="rounded-[1.65rem] border border-primary/18 bg-white p-6 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        {event.year}
                      </p>
                      <h3 className="text-lg font-semibold text-secondary">{event.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Conoce de cerca la comunidad que ha dado forma a esta historia"
        description="La mejor manera de entender Buckingham es vivir su ambiente, recorrer sus espacios y conocer cómo se acompaña a cada familia desde el primer contacto."
        primaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        secondaryCta={{ label: 'Ver admisiones', href: '/admisiones' }}
      />
    </div>
  )
}
