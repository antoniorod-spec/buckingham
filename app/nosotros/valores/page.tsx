import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight,
  HandHeart,
  Heart,
  Lightbulb,
  Shield,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Valores | Instituto Buckingham',
  description:
    'Descubre los valores que sostienen la formación integral en Instituto Buckingham: respeto, responsabilidad, honestidad, solidaridad y trabajo en equipo.',
}

const values = [
  {
    title: 'Respeto',
    description:
      'Promovemos relaciones basadas en dignidad, escucha y consideración hacia uno mismo, los demás y el entorno.',
    icon: Heart,
  },
  {
    title: 'Responsabilidad',
    description:
      'Acompañamos a los alumnos para que desarrollen hábitos, compromiso y conciencia sobre sus decisiones.',
    icon: Shield,
  },
  {
    title: 'Honestidad',
    description:
      'Valoramos la verdad, la coherencia y la integridad como base de la convivencia y del aprendizaje.',
    icon: Star,
  },
  {
    title: 'Solidaridad',
    description:
      'Formamos niños sensibles ante los demás, capaces de colaborar y de actuar con empatía en su comunidad.',
    icon: HandHeart,
  },
  {
    title: 'Trabajo en equipo',
    description:
      'El aula es también un espacio para construir juntos, valorar aportaciones distintas y aprender a colaborar.',
    icon: Users,
  },
  {
    title: 'Creatividad',
    description:
      'Impulsamos ideas originales, curiosidad y nuevas maneras de resolver problemas con confianza.',
    icon: Lightbulb,
  },
]

const howWeLiveValues = [
  'Los docentes modelan con su ejemplo la forma de relacionarse y resolver conflictos.',
  'Las rutinas escolares convierten los valores en hábitos visibles, no solo en discursos.',
  'La relación con familias refuerza la coherencia entre escuela y casa.',
  'Los proyectos y actividades grupales permiten practicar empatía, colaboración y responsabilidad.',
]

export default function ValoresPage() {
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
            <span className="font-medium text-foreground">Valores</span>
          </nav>
        </div>
      </div>

      <PageHero
        eyebrow="Formación integral"
        title="Valores que sostienen la experiencia académica y humana del colegio"
        description="En Buckingham, la formación va más allá de contenidos. Cada etapa busca desarrollar respeto, responsabilidad, empatía y seguridad para convivir y aprender mejor."
        image={images.home.hero}
        imageAlt="Valores de Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Respeto', 'Responsabilidad', 'Solidaridad', 'Trabajo en equipo']}
        imageBadge={{
          value: 'Valores',
          label: 'Visibles en la vida diaria',
          detail: 'La cultura escolar también educa.',
        }}
      />

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Principios"
            title="Valores que se viven con claridad en cada etapa"
            description="La propuesta formativa del colegio busca que los alumnos crezcan con bases humanas firmes, no solo con aprendizajes académicos."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <article
                  key={value.title}
                  className="rounded-[1.75rem] border border-primary/18 bg-white p-6 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[1.35rem] font-semibold tracking-tight text-secondary">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Vida escolar"
              title="Cómo se vuelven visibles en la experiencia diaria"
              description="Los valores se fortalecen cuando aparecen en la convivencia, en el lenguaje del colegio y en la forma de acompañar a cada alumno."
              align="left"
              className="mb-0"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {howWeLiveValues.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[1.55rem] border border-primary/18 bg-white p-5 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <div className="card-elevated p-8 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">
              Educar en valores también es construir una comunidad más clara, segura y humana
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cuando los valores se sostienen con consistencia, la experiencia escolar se vuelve más confiable para alumnos, familias y docentes.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Si buscas una educación con bases humanas firmes, vale la pena conocer Buckingham"
        description="Podemos mostrarte cómo estos valores se traducen en ambiente escolar, acompañamiento y una relación cercana con cada familia."
        primaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        secondaryCta={{ label: 'Conocer al equipo', href: '/nosotros/equipo' }}
      />
    </div>
  )
}
