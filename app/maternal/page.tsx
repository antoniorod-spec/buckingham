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
  title: 'Maternal',
  description:
    'Descubre la propuesta de Maternal de Instituto Buckingham: seguridad, acompañamiento y desarrollo temprano en un entorno cálido.',
}

const maternalBenefits = [
  {
    title: 'Vínculo y seguridad',
    description: 'Rutinas cuidadas para que la adaptación se sienta serena tanto para el niño como para su familia.',
    icon: 'heart' as const,
  },
  {
    title: 'Exploración sensorial',
    description: 'Experiencias guiadas para desarrollar lenguaje, motricidad, curiosidad y confianza desde muy temprano.',
    icon: 'sparkles' as const,
  },
  {
    title: 'Cuidado personalizado',
    description: 'Una estructura de atención que favorece observación cercana y seguimiento sensible a cada ritmo.',
    icon: 'users' as const,
  },
  {
    title: 'Entorno protegido',
    description: 'Espacios, ritmos y acompañamiento diseñados específicamente para la primera infancia.',
    icon: 'shield' as const,
  },
  {
    title: 'Primer contacto con inglés',
    description: 'Canciones, juego y lenguaje cotidiano para que el idioma aparezca de forma natural y amable.',
    icon: 'globe' as const,
  },
  {
    title: 'Comunicación con familias',
    description: 'La experiencia se construye junto con casa, con seguimiento cercano y expectativas claras.',
    icon: 'message-circle' as const,
  },
]

const maternalFaq = [
  ...homeFaq,
  {
    question: '¿Cómo acompañan la adaptación inicial?',
    answer:
      'La integración se plantea con cercanía y comunicación constante para que el niño gane seguridad de forma gradual y la familia se sienta acompañada.',
  },
]

export default function MaternalPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Maternal · 1 a 3 años"
        title="Primeros pasos en un ambiente sereno, seguro y profundamente acompañado"
        description="La página de Maternal comunica cuidado, estructura y sensibilidad. El foco está en generar confianza para una etapa en la que la familia necesita sentirse contenida desde el primer vistazo."
        image={images.maternal.hero}
        imageAlt="Programa Maternal en Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Adaptación acompañada', 'Primer vínculo escuela-familia', 'Rutinas seguras']}
        stats={[
          { value: '1 a 3 años', label: 'etapa atendida', detail: 'Diseño pensado para primera infancia.' },
          { value: 'Rutinas', label: 'que generan confianza', detail: 'Orden visible para bajar ansiedad y dar certeza.' },
          { value: 'Calidez', label: 'en cada interacción', detail: 'El tono visual y verbal acompaña esa promesa.' },
        ]}
      />

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Propuesta de valor"
            title="Todo en la página refuerza contención, cercanía y desarrollo temprano"
            description="Las secciones, íconos y ritmos visuales están pensados para que la familia perciba inmediatamente que Maternal es un entorno cuidado y confiable."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {maternalBenefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Experiencia diaria"
                title="El sitio explica cómo se vive Maternal sin caer en clichés visuales"
                description="La narrativa baja el tono infantilizado y lo sustituye por claridad, suavidad y una estética premium que sigue siendo cálida y familiar."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Rutina" label="bien diseñada" detail="Entrada, juego, descanso y acompañamiento con expectativas visibles." />
                <StatCard value="Exploración" label="con intención" detail="La página puede expandirse fácilmente con planes de aula o galerías por actividad." />
                <StatCard value="Familia" label="siempre informada" detail="El diseño reserva espacio para mensajes de confianza y seguimiento cercano." />
                <StatCard value="Transición" label="hacia Preescolar" detail="La continuidad entre niveles se comunica desde esta primera etapa." />
              </div>
            </div>
            <div className="card-elevated overflow-hidden p-3">
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.maternal.hero}
                  alt="Ambiente de Maternal"
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
            eyebrow="Galería"
            title="Espacios y momentos listos para mostrarse con una grilla sobria y flexible"
            description="Las imágenes sostienen la narrativa de calma y cuidado sin romper la estética general del sitio."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {images.maternal.gallery.map((src, index) => (
              <GalleryItem key={src} src={src} alt={`Maternal Buckingham ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="La página también resuelve las dudas emocionales de esta etapa"
            description="Las preguntas frecuentes refuerzan contención, proceso de adaptación y confianza en el acompañamiento."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={maternalFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Maternal debe sentirse tranquilo incluso antes de visitar el campus"
        description="La estructura ya comunica esa seguridad con una mezcla de copy cercano, superficies suaves y bloques de información claros."
        primaryCta={{ label: 'Iniciar proceso', href: '/admisiones' }}
        secondaryCta={{ label: 'Hablar con admisiones', href: '/contacto' }}
      />
    </div>
  )
}
