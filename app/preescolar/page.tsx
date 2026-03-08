import type { Metadata } from 'next'
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
        title="Una etapa para descubrir, expresarse y construir bases sólidas con alegría y estructura"
        description="La página de Preescolar necesita comunicar energía, curiosidad y crecimiento, pero con una estética cuidada que mantenga la percepción premium y confiable de todo el sitio."
        image={images.preescolar.hero}
        imageAlt="Programa Preescolar en Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Conocer Maternal', href: '/maternal' }}
        trustBullets={['Juego intencional', 'Inglés cotidiano', 'Desarrollo socioemocional']}
        stats={[
          { value: '3 a 6 años', label: 'etapa clave', detail: 'Una fase donde se consolidan lenguaje, hábitos y curiosidad.' },
          { value: 'Aprender jugando', label: 'con estructura', detail: 'La experiencia visual explica diversión con propósito.' },
          { value: 'Puente', label: 'hacia Primaria', detail: 'Las secciones comunican continuidad sin ruptura entre niveles.' },
        ]}
      />

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pilares"
            title="Una página que transmite movimiento, descubrimiento y claridad pedagógica"
            description="Los bloques están diseñados para mostrar habilidades, beneficios y metodología con una jerarquía limpia y una atmósfera cálida."
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
            <div className="card-elevated overflow-hidden p-3">
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.preescolar.hero}
                  alt="Preescolar en Instituto Buckingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Metodología"
                title="La composición mezcla contenido emocional con señales claras de estructura"
                description="Ese balance es importante para que la familia vea un entorno alegre y child-centered, pero también ordenado, serio y bien pensado."
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
            title="El sistema visual está listo para soportar proyectos, juego y vida escolar de Preescolar"
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
            title="Preguntas resueltas con un tono cercano y confiable"
            description="La página sostiene la conversación de la familia sin obligarla a salir del flujo principal."
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
