import type { Metadata } from 'next'
import { BookOpen, Globe, MapPin, Medal, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { CTASection } from '@/components/CTASection'
import { FAQAccordion } from '@/components/FAQAccordion'
import { FeatureCard } from '@/components/FeatureCard'
import { GalleryItem } from '@/components/GalleryItem'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { StatCard } from '@/components/StatCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { homeFaq, testimonials } from '@/lib/content'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Primaria',
  description:
    'Conoce la propuesta de Primaria de Instituto Buckingham: estructura académica, acompañamiento cercano y continuidad bilingüe.',
}

const primariaStrengths = [
  {
    title: 'Estructura académica clara',
    description: 'La página transmite orden, profundidad y una promesa formativa seria sin sentirse rígida.',
    icon: 'graduation' as const,
  },
  {
    title: 'Pensamiento y autonomía',
    description: 'Los contenidos destacan hábitos, criterio y avance progresivo con acompañamiento real.',
    icon: 'brain' as const,
  },
  {
    title: 'Bilingüismo con continuidad',
    description: 'La narrativa integra inglés, habilidades académicas y confianza comunicativa como parte de una misma propuesta.',
    icon: 'globe' as const,
  },
  {
    title: 'Acompañamiento docente',
    description: 'La sección visualiza seguimiento, observación y cercanía como parte del valor del nivel.',
    icon: 'users' as const,
  },
  {
    title: 'Formación integral',
    description: 'Lo académico convive con valores, convivencia y experiencia escolar en una composición equilibrada.',
    icon: 'heart' as const,
  },
  {
    title: 'Proyección a futuro',
    description: 'La página sugiere preparación para siguientes etapas con una estética madura y confiable.',
    icon: 'shield' as const,
  },
]

const primariaHighlights = [
  {
    title: 'Bases académicas',
    description: 'Formación sólida con estructura y seguimiento.',
    icon: BookOpen,
  },
  {
    title: 'Inglés integrado',
    description: 'Continuidad bilingüe dentro de la rutina diaria.',
    icon: Globe,
  },
  {
    title: '+30 años de trayectoria',
    description: 'Una comunidad educativa con experiencia y confianza.',
    icon: Medal,
  },
  {
    title: 'Ambiente seguro',
    description: 'Cuidado, cercanía y atención en cada etapa.',
    icon: ShieldCheck,
  },
  {
    title: 'San Luis Potosí',
    description: 'Lomas 1a Sección para familias de la ciudad.',
    icon: MapPin,
  },
]

const primariaFaq = [
  ...homeFaq,
  {
    question: '¿Cómo acompañan el avance académico individual?',
    answer:
      'La estructura de Primaria contempla seguimiento cercano, comunicación con familias y claridad sobre fortalezas, retos y próximos pasos.',
  },
]

export default function PrimariaPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Primaria · 6 a 12 años"
        title="Formación académica, cercanía y continuidad para avanzar con confianza"
        description="Primaria en Buckingham integra estructura, acompañamiento cercano e inglés en una experiencia sólida y clara para las familias."
        image={images.primaria.hero}
        imageAlt="Programa Primaria en Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Bases académicas', 'Inglés integrado', 'Acompañamiento cercano']}
        imageBadge={{ value: '6 a 12 años', label: 'Etapa formativa', detail: 'Hábitos, autonomía y continuidad académica para el futuro.' }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {primariaHighlights.map((item) => {
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
            eyebrow="Fortalezas"
            title="Una propuesta académica clara sin perder cercanía ni calidez"
            description="Primaria comunica orden, profundidad y acompañamiento con una jerarquía sobria y fácil de recorrer."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {primariaStrengths.map((strength) => (
              <FeatureCard
                key={strength.title}
                title={strength.title}
                description={strength.description}
                icon={strength.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Modelo académico"
                title="Rigor, cercanía y proyección explicados con claridad"
                description="El contenido organiza hábitos, seguimiento y crecimiento integral sin cargar demasiado la página."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Orden" label="en el recorrido" detail="Jerarquía visual para que la familia comprenda la propuesta con rapidez." />
                <StatCard value="Profundidad" label="sin saturación" detail="Se comunica rigor con claridad, no con exceso de texto." />
                <StatCard value="Comunicación" label="con familias" detail="La relación escuela-casa sigue siendo visible dentro de la narrativa." />
                <StatCard value="Proyección" label="a siguientes etapas" detail="La página sugiere preparación y continuidad académica." />
              </div>
            </div>
            <div className="card-elevated relative overflow-hidden border-primary/12 p-3">
              <div className="absolute right-6 top-6 z-10 hidden rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground md:inline-flex">
                Primaria Buckingham
              </div>
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.primaria.hero}
                  alt="Primaria en Instituto Buckingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-secondary/35 via-secondary/5 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 hidden rounded-[1.2rem] border border-primary/15 bg-white/94 p-4 shadow-[0_20px_40px_-28px_rgba(12,29,55,0.28)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Modelo académico</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Una experiencia con orden, seguimiento cercano y continuidad para proyectar confianza académica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Vida escolar"
            title="Proyectos, aula y comunidad con el mismo lenguaje premium del sitio"
            description="La galería permite mostrar vida escolar sin romper la consistencia visual general."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {images.primaria.gallery.map((src, index) => (
              <GalleryItem key={src} src={src} alt={`Primaria Buckingham ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Testimonios"
            title="La validación social refuerza la promesa de rigor con cercanía"
            description="Los testimonios ayudan a sostener evidencia de acompañamiento académico y trato humano."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes resueltas con claridad"
            description="La interfaz permite explicar acompañamiento, estructura y continuidad sin sobrecargar la página."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={primariaFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Primaria debe proyectar confianza, exigencia sana y cercanía en la misma pantalla"
        description="La estructura actual ya sostiene ese equilibrio con componentes reutilizables y una dirección visual más editorial que genérica."
        primaryCta={{ label: 'Iniciar admisión', href: '/admisiones' }}
        secondaryCta={{ label: 'Conocer Preescolar', href: '/preescolar' }}
      />
    </div>
  )
}

