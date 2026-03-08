import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  ChevronRight,
  Eye,
  Globe,
  Heart,
  Target,
  Users,
} from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { FeatureCard } from '@/components/FeatureCard'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Misión y Visión | Instituto Buckingham',
  description:
    'Conoce la misión, visión y filosofía educativa de Instituto Buckingham: una propuesta bilingüe, cercana y académicamente sólida.',
}

const proofItems = [
  {
    title: 'Excelencia académica',
    description: 'Rigor con claridad y acompañamiento real.',
    icon: BookOpen,
  },
  {
    title: 'Atención cercana',
    description: 'La familia es parte activa del proceso.',
    icon: Users,
  },
  {
    title: 'Visión global',
    description: 'Bilingüismo y apertura al mundo actual.',
    icon: Globe,
  },
  {
    title: 'Formación integral',
    description: 'Desarrollo académico, emocional y humano.',
    icon: Heart,
  },
]

const pillars = [
  {
    title: 'Calidez con estructura',
    description:
      'La experiencia educativa combina cercanía con orden para que cada alumno se sienta seguro, acompañado y retado de manera adecuada.',
    icon: 'heart' as const,
  },
  {
    title: 'Aprendizaje con propósito',
    description:
      'Cada etapa busca construir hábitos, autonomía y pensamiento crítico con una propuesta clara para las familias.',
    icon: 'book' as const,
  },
  {
    title: 'Bilingüismo natural',
    description:
      'El inglés se integra de forma progresiva y cotidiana para desarrollar confianza lingüística con continuidad.',
    icon: 'globe' as const,
  },
]

export default function MisionVisionPage() {
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
            <span className="font-medium text-foreground">Misión y Visión</span>
          </nav>
        </div>
      </div>

      <PageHero
        eyebrow="Nuestra filosofía"
        title="Misión, visión y una manera clara de educar con propósito"
        description="En Buckingham, la formación bilingüe se construye con atención personalizada, valores sólidos y una relación cercana con cada familia."
        image={images.home.hero}
        imageAlt="Filosofía educativa de Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Educación bilingüe', 'Atención personalizada', 'Comunidad cercana']}
        imageBadge={{
          value: 'Integral',
          label: 'Formación académica y humana',
          detail: 'Una propuesta que mira al alumno completo.',
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
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.75rem] border border-primary/18 bg-white p-8 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <span className="eyebrow border-primary/15 bg-primary/8 text-primary">Misión</span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-secondary">
                Formar alumnos íntegros, seguros y bien acompañados
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Nuestra misión es ofrecer una educación bilingüe de calidad que combine rigor académico, formación en valores y atención personalizada en un ambiente cálido y estructurado.
                </p>
                <p>
                  Buscamos que cada alumno desarrolle hábitos, autonomía, pensamiento crítico y confianza, mientras vive una experiencia escolar cercana y coherente con su etapa de desarrollo.
                </p>
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-primary/18 bg-[linear-gradient(180deg,rgba(246,240,228,0.82),rgba(255,255,255,0.95))] p-8 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Eye className="h-5 w-5" />
                </div>
                <span className="eyebrow border-primary/15 bg-primary/8 text-primary">Visión</span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-secondary">
                Ser una referencia confiable para las familias de San Luis Potosí
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Aspiramos a consolidar una comunidad educativa reconocida por su calidad académica, su enfoque bilingüe y la cercanía con la que acompaña a cada familia.
                </p>
                <p>
                  Queremos que nuestros alumnos avancen con bases sólidas, valores firmes y una mirada abierta al mundo, preparados para continuar su formación con seguridad y proyección.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pilares"
            title="Principios que sostienen la experiencia Buckingham"
            description="La filosofía institucional se vuelve visible en decisiones concretas de acompañamiento, metodología y relación con las familias."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <FeatureCard
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="card-elevated grid gap-6 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Dirección institucional</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">
                Una propuesta que combina propósito, cercanía y visión de futuro
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                La misión y la visión no viven aisladas del día a día. Se reflejan en la forma de enseñar, en la atención a las familias, en el cuidado del ambiente escolar y en la continuidad entre etapas.
              </p>
              <p>
                Por eso Buckingham no se presenta solo como un colegio, sino como una comunidad educativa que acompaña con claridad y constancia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Si esta filosofía conecta con tu familia, el siguiente paso es conocernos"
        description="Podemos mostrarte cómo esta visión se traduce en experiencia diaria, comunicación cercana y una propuesta educativa ordenada para cada etapa."
        primaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        secondaryCta={{ label: 'Ver valores', href: '/nosotros/valores' }}
      />
    </div>
  )
}
