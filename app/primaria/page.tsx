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
import { pageMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = pageMetadata({
  title: 'Primaria bilingüe en San Luis Potosí',
  description:
    'Primaria bilingüe de 1º a 6º en San Luis Potosí: grupos reducidos, inglés con continuidad y hábitos de estudio para llegar preparado a secundaria.',
  path: '/primaria',
  image: '/images/primaria.jpg',
})

const primariaStrengths = [
  {
    title: 'Estructura académica clara',
    description: 'Programa SEP con planeación por bimestre, evaluación continua y expectativas que la familia conoce desde el inicio del ciclo.',
    icon: 'graduation' as const,
  },
  {
    title: 'Pensamiento y autonomía',
    description: 'Enseñamos a organizar el tiempo, estudiar solos y defender una idea con argumentos, no a memorizar para el examen.',
    icon: 'brain' as const,
  },
  {
    title: 'Bilingüismo con continuidad',
    description: 'El inglés que empezó en Maternal sigue aquí sin cortes, con más exigencia de lectura, escritura y conversación cada año.',
    icon: 'globe' as const,
  },
  {
    title: 'Acompañamiento docente',
    description: 'Grupos reducidos: los maestros conocen a cada alumno y detectan a tiempo si algo se atora.',
    icon: 'users' as const,
  },
  {
    title: 'Formación integral',
    description: 'Música, deporte, arte y convivencia forman parte del horario, no son actividades sueltas fuera de clase.',
    icon: 'heart' as const,
  },
  {
    title: 'Proyección a futuro',
    description: 'Al terminar sexto, tu hijo sale con hábitos de estudio y nivel de inglés para entrar con confianza a secundaria.',
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
      <JsonLd data={[breadcrumbSchema([{ name: 'Inicio', path: '/' }, { name: 'Primaria', path: '/primaria' }]), faqSchema(primariaFaq)]} />
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
            description="Seis años en los que tu hijo pasa de aprender a leer a estudiar por su cuenta. Esto es lo que ponemos de nuestra parte."
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
                title="Exigencia con acompañamiento, no exigencia a secas"
                description="Pedimos a cada alumno lo que puede dar y le damos las herramientas para llegar ahí."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Orden" label="en el día a día" detail="Horarios, tareas y evaluaciones con calendario claro desde el primer día del ciclo." />
                <StatCard value="Profundidad" label="sin saturar" detail="Preferimos que entiendan bien lo esencial antes que avanzar por avanzar." />
                <StatCard value="Comunicación" label="con familias" detail="Si algo pasa en clase te enteras por el colegio, no por tu hijo dos semanas después." />
                <StatCard value="Proyección" label="a secundaria" detail="Hábitos de estudio y nivel de inglés para dar el salto sin sobresaltos." />
              </div>
            </div>
            <div className="card-elevated relative overflow-hidden border-primary/12 p-3">
              <div className="absolute right-6 top-6 z-10 hidden rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground md:inline-flex">
                Primaria Buckingham
              </div>
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.primaria.feature}
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
            title="Clases, recreo y actividades de Primaria"
            description="Aulas, cancha, taller de música y los espacios donde tu hijo pasará estos seis años."
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
            title="Familias que ya pasaron por Primaria"
            description="Lo que cuentan padres y madres con hijos cursando estos años en Buckingham."
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
            description="Tamaño de grupo, tareas, nivel de inglés y cambio desde otro colegio: las dudas más habituales en Primaria."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={primariaFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Visita Primaria en día de clases"
        description="Es la mejor forma de ver el tamaño real de los grupos, cómo dan clase los maestros y cómo se trabaja el inglés."
        primaryCta={{ label: 'Iniciar admisión', href: '/admisiones' }}
        secondaryCta={{ label: 'Conocer Preescolar', href: '/preescolar' }}
      />
    </div>
  )
}

