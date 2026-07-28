import type { Metadata } from 'next'
import { BookOpen, Globe, GraduationCap, Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { CTASection } from '@/components/CTASection'
import { FAQAccordion } from '@/components/FAQAccordion'
import { FeatureCard } from '@/components/FeatureCard'
import { GalleryItem } from '@/components/GalleryItem'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { StatCard } from '@/components/StatCard'
import { homeFaq } from '@/lib/content'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Preescolar',
  description:
    'Explora la propuesta de Preescolar de Instituto Buckingham: juego intencional, bilingüismo natural y desarrollo integral.',
}

const preescolarPillars = [
  {
    title: 'Juego con intención',
    description: 'La interfaz comunica que jugar aquí también significa aprender, explorar y construir pensamiento.',
    icon: 'sparkles' as const,
  },
  {
    title: 'Lenguaje y expresión',
    description: 'Secciones pensadas para destacar comunicación, creatividad y curiosidad en un tono elegante.',
    icon: 'book' as const,
  },
  {
    title: 'Vida socioemocional',
    description: 'El contenido refuerza autoestima, convivencia y acompañamiento, sin recurrir a un estilo visual infantilizado.',
    icon: 'heart' as const,
  },
  {
    title: 'Bilingüismo cotidiano',
    description: 'El inglés aparece integrado a la rutina, al juego y a las experiencias del día a día.',
    icon: 'globe' as const,
  },
  {
    title: 'Creatividad',
    description: 'La propuesta visual da espacio a arte, música y proyectos sin verse saturada o genérica.',
    icon: 'palette' as const,
  },
  {
    title: 'Preparación para Primaria',
    description: 'La narrativa explica continuidad y estructura, ayudando a la familia a visualizar la siguiente etapa.',
    icon: 'graduation' as const,
  },
]

const preescolarHighlights = [
  {
    title: 'Juego intencional',
    description: 'Aprender explorando con estructura y propósito.',
    icon: Sparkles,
  },
  {
    title: 'Lenguaje y expresión',
    description: 'Comunicación, creatividad y confianza al participar.',
    icon: BookOpen,
  },
  {
    title: 'Vida socioemocional',
    description: 'Convivencia, seguridad y acompañamiento cercano.',
    icon: Heart,
  },
  {
    title: 'Bilingüismo cotidiano',
    description: 'El inglés forma parte natural de la rutina.',
    icon: Globe,
  },
  {
    title: 'Puente a Primaria',
    description: 'Hábitos y bases sólidas para la siguiente etapa.',
    icon: GraduationCap,
  },
]

const preescolarFaq = [
  ...homeFaq,
  {
    question: '¿Cómo se equilibra juego y estructura?',
    answer:
      'La propuesta parte del juego intencional, pero con objetivos claros y una experiencia de aula diseñada para desarrollar hábitos, lenguaje y autonomía.',
  },
]

export default function PreescolarPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Preescolar · 3 a 6 años"
        title="Descubrir, expresarse y aprender con alegría, estructura y confianza"
        description="Preescolar en Buckingham acompaña una etapa clave con juego intencional, bilingüismo natural y bases sólidas para seguir creciendo."
        image={images.preescolar.hero}
        imageAlt="Programa Preescolar en Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Conocer Maternal', href: '/maternal' }}
        trustBullets={['Juego intencional', 'Inglés cotidiano', 'Desarrollo socioemocional']}
        imageBadge={{ value: '3 a 6 años', label: 'Etapa clave de desarrollo', detail: 'Curiosidad, lenguaje, hábitos y aprendizaje con intención.' }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {preescolarHighlights.map((item) => {
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

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pilares"
            title="Movimiento, curiosidad y claridad pedagógica en la misma experiencia"
            description="Los bloques muestran habilidades, beneficios y metodología con una jerarquía clara y cálida."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {preescolarPillars.map((pillar) => (
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
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="card-elevated relative overflow-hidden border-primary/12 p-3">
              <div className="absolute right-6 top-6 z-10 hidden rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground md:inline-flex">
                Preescolar Buckingham
              </div>
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.preescolar.feature}
                  alt="Preescolar en Instituto Buckingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-secondary/35 via-secondary/5 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 hidden rounded-[1.2rem] border border-primary/15 bg-white/94 p-4 shadow-[0_20px_40px_-28px_rgba(12,29,55,0.28)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Metodología</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Juego, lenguaje y hábitos en una experiencia estructurada, alegre y fácil de comprender para las familias.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Metodología"
                title="Juego, estructura y crecimiento en una narrativa clara"
                description="La composición mantiene el equilibrio entre una experiencia alegre y una propuesta seria y bien pensada."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Explorar" label="para aprender" detail="La curiosidad guía la experiencia, no el ruido visual." />
                <StatCard value="Rutina" label="que da seguridad" detail="La estructura se comunica con bloques claros y ritmo consistente." />
                <StatCard value="Expresar" label="emociones e ideas" detail="La narrativa deja espacio para socioemocional y creatividad." />
                <StatCard value="Construir" label="hábitos y lenguaje" detail="La transición a Primaria se vuelve visible desde aquí." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Galería"
            title="Proyectos, juego y vida escolar con una grilla limpia y consistente"
            description="La cuadrícula reutilizable mantiene consistencia con el home y con el resto de niveles."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {images.preescolar.gallery.map((src, index) => (
              <GalleryItem key={src} src={src} alt={`Preescolar Buckingham ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes resueltas con claridad y cercanía"
            description="La página sostiene la conversación de la familia sin sacarla del flujo principal."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={preescolarFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Preescolar necesita verse alegre y sofisticado al mismo tiempo"
        description="La estructura actual ya permite sostener ese equilibrio con componentes reutilizables y una identidad visual consistente."
        primaryCta={{ label: 'Iniciar admisión', href: '/admisiones' }}
        secondaryCta={{ label: 'Explorar Primaria', href: '/primaria' }}
      />
    </div>
  )
}

