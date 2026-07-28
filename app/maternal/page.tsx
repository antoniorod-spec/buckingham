import type { Metadata } from 'next'
import { Globe, Heart, ShieldCheck, Sparkles, Users } from 'lucide-react'
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

const maternalHighlights = [
  {
    title: 'Adaptación acompañada',
    description: 'Ingreso sereno y cercano para cada familia.',
    icon: Heart,
  },
  {
    title: 'Rutinas seguras',
    description: 'Orden visible que da confianza desde el inicio.',
    icon: ShieldCheck,
  },
  {
    title: 'Exploración temprana',
    description: 'Juego, lenguaje y motricidad con intención.',
    icon: Sparkles,
  },
  {
    title: 'Primer contacto con inglés',
    description: 'El idioma aparece de forma natural y amable.',
    icon: Globe,
  },
  {
    title: 'Cercanía con familias',
    description: 'Seguimiento claro y comunicación constante.',
    icon: Users,
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
        title="Primeros pasos con cuidado, seguridad y acompañamiento real"
        description="Maternal en Buckingham ofrece una etapa serena y bien guiada para desarrollar confianza, rutina y vínculo desde los primeros años."
        image={images.maternal.hero}
        imageAlt="Programa Maternal en Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Adaptación acompañada', 'Primer vínculo escuela-familia', 'Rutinas seguras']}
        imageBadge={{ value: '1 a 3 años', label: 'Etapa de primera infancia', detail: 'Cuidado cercano, rutina segura y desarrollo temprano.' }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {maternalHighlights.map((item) => {
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
            eyebrow="Propuesta de valor"
            title="Una etapa cuidada, cercana y diseñada para dar confianza"
            description="La propuesta visual y pedagógica refuerza contención, vínculo y desarrollo temprano con claridad."
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
                title="Rutina, exploración y acompañamiento desde el primer contacto"
                description="La página explica cómo se vive Maternal con una estética cálida, clara y confiable."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Rutina" label="bien diseñada" detail="Entrada, juego, descanso y acompañamiento con expectativas visibles." />
                <StatCard value="Exploración" label="con intención" detail="La experiencia puede ampliarse con actividades y galerías por etapa." />
                <StatCard value="Familia" label="siempre informada" detail="El diseño reserva espacio para seguimiento cercano y mensajes de confianza." />
                <StatCard value="Transición" label="hacia Preescolar" detail="La continuidad entre niveles se comunica desde esta primera etapa." />
              </div>
            </div>
            <div className="card-elevated relative overflow-hidden border-primary/12 p-3">
              <div className="absolute right-6 top-6 z-10 hidden rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground md:inline-flex">
                Maternal Buckingham
              </div>
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.maternal.feature}
                  alt="Ambiente de Maternal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-secondary/35 via-secondary/5 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 hidden rounded-[1.2rem] border border-primary/15 bg-white/94 p-4 shadow-[0_20px_40px_-28px_rgba(12,29,55,0.28)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Experiencia diaria</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Rutinas suaves, vínculos cercanos y una adaptación pensada para dar seguridad desde el inicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Galería"
            title="Espacios y momentos para comunicar calma, cuidado y cercanía"
            description="Las imágenes sostienen la narrativa de seguridad y contención sin romper la estética general del sitio."
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
            title="Dudas frecuentes resueltas con claridad y cercanía"
            description="Las preguntas frecuentes refuerzan proceso de adaptación, acompañamiento y confianza para la familia."
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

