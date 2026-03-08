import type { Metadata } from 'next'
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
        title="Una primaria con estructura, cercanía y visión de futuro para avanzar con confianza"
        description="La página de Primaria sostiene un tono más maduro: formación académica, inglés, hábitos y acompañamiento, todo presentado con una estética sobria y contemporánea."
        image={images.primaria.hero}
        imageAlt="Programa Primaria en Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Bases académicas', 'Inglés integrado', 'Acompañamiento cercano']}
        stats={[
          { value: '6 a 12 años', label: 'etapa formativa', detail: 'La interfaz cambia el tono hacia mayor solidez y proyección.' },
          { value: 'Hábitos', label: 'y autonomía', detail: 'La narrativa ayuda a visualizar estructura y crecimiento personal.' },
          { value: 'Continuidad', label: 'hacia el futuro', detail: 'Todo el nivel se presenta como un puente sólido a siguientes retos.' },
        ]}
      />

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Fortalezas"
            title="El diseño acompaña un discurso más académico sin perder calidez"
            description="Primaria necesita inspirar confianza, orden y profundidad. Por eso la página usa superficies más sobrias, bloques claros y copy enfocado en avance, criterio y acompañamiento."
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
                title="La información se organiza para explicar rigor, cercanía y proyección"
                description="El contenido no se limita a listar materias: pone en valor hábitos, seguimiento, pensamiento crítico y una experiencia escolar que acompaña el crecimiento integral."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Orden" label="en el recorrido" detail="Jerarquía visual para que la familia comprenda la propuesta con rapidez." />
                <StatCard value="Profundidad" label="sin saturación" detail="Se comunica rigor con claridad, no con exceso de texto." />
                <StatCard value="Comunicación" label="con familias" detail="La relación escuela-casa sigue siendo visible dentro de la narrativa." />
                <StatCard value="Proyección" label="a siguientes etapas" detail="La página sugiere preparación y continuidad académica." />
              </div>
            </div>
            <div className="card-elevated overflow-hidden p-3">
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.primaria.hero}
                  alt="Primaria en Instituto Buckingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Vida escolar"
            title="La galería mantiene el lenguaje premium del sitio incluso en un nivel más académico"
            description="Eso permite mostrar proyectos, aula y comunidad sin romper la consistencia visual general."
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
            description="En Primaria, las familias suelen buscar evidencia de acompañamiento académico y trato humano. Los testimonios ayudan a sostener ambas cosas."
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
            title="Preguntas resueltas para sostener una decisión más racional y comparativa"
            description="La interfaz permite explicar acompañamiento, estructura y continuidad sin cargar demasiado la página principal del nivel."
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
