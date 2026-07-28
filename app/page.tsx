import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Globe, MapPin, Medal, ShieldCheck } from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { FAQAccordion } from '@/components/FAQAccordion'
import { FeatureCard } from '@/components/FeatureCard'
import { GalleryItem } from '@/components/GalleryItem'
import { LeadForm } from '@/components/LeadForm'
import { PageHero } from '@/components/PageHero'
import { ProgramCard } from '@/components/ProgramCard'
import { SectionHeading } from '@/components/SectionHeading'
import { TestimonialCard } from '@/components/TestimonialCard'
import { TimelineItem } from '@/components/TimelineItem'
import { TrustChip } from '@/components/TrustChip'
import { Button } from '@/components/ui/button'
import {
  admissionsSteps,
  bilingualFeatures,
  educationalLevels,
  homeFaq,
  siteConfig,
  testimonials,
  timelineEvents,
  trustChips,
  whyBuckingham,
} from '@/lib/content'
import { images } from '@/lib/content/images'
import { JsonLd } from '@/components/JsonLd'
import { faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Instituto Buckingham ofrece una experiencia educativa cálida, moderna y bilingüe para Maternal, Preescolar y Primaria.',
}

const trustProofItems = [
  {
    title: 'Educación bilingüe',
    description: 'Inglés desde edades tempranas',
    icon: Globe,
  },
  {
    title: '+30 años de trayectoria',
    description: 'Formando generaciones desde 1993',
    icon: Medal,
  },
  {
    title: 'Cambridge & Pearson',
    description: 'Certificaciones internacionales',
    icon: BookOpen,
  },
  {
    title: 'Ambiente seguro',
    description: 'Cuidado, cercanía y confianza',
    icon: ShieldCheck,
  },
  {
    title: 'San Luis Potosí',
    description: 'Lomas 1a Sección',
    icon: MapPin,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={faqSchema(homeFaq)} />
      <PageHero
        eyebrow="Educación bilingüe desde 1993"
        title="Calidez, excelencia y atención personalizada en cada etapa"
        description="Acompañamos a cada familia con formación integral, ambiente seguro y continuidad educativa desde Maternal hasta Primaria en San Luis Potosí."
        image={images.home.hero}
        imageAlt="Estudiantes de Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={trustChips.map((chip) => chip.label)}
        imageBadge={{ value: 'Desde 1993', label: 'Más de 30 años de trayectoria', detail: 'Educación personalizada y continuidad por etapas' }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {trustProofItems.map((item) => {
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
          <SectionHeading
            eyebrow="Oferta educativa"
            title="Una propuesta clara para cada momento del crecimiento"
            description="Cada nivel tiene identidad propia, pero todos comparten la misma promesa: una formación cercana, bilingüe y bien estructurada para acompañar a cada familia con confianza."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {educationalLevels.map((level) => (
              <ProgramCard
                key={level.title}
                title={level.title}
                ages={level.ages}
                description={level.description}
                image={level.image}
                href={level.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-primary/10">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              ¿Por qué las familias eligen Buckingham?
            </h2>
            <p className="mt-4 text-lg text-secondary/70">
              Más de 30 años construyendo una comunidad educativa basada en la confianza, el cariño y la excelencia.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyBuckingham.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon as 'heart' | 'globe' | 'users' | 'sparkles' | 'brain' | 'graduation'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative card-elevated overflow-hidden p-3">
              <div className="relative aspect-[4/3.5] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={images.home.bilingual}
                  alt="Programa bilingüe en Instituto Buckingham"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/5 to-transparent" />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Bilingüismo con intención"
                title="El inglés se integra a la rutina para que el aprendizaje se sienta natural"
                description="El objetivo no es saturar, sino construir confianza lingüística con continuidad, contexto y una metodología coherente con cada etapa del desarrollo."
                align="left"
                className="mb-8"
              />
              <ul className="space-y-4">
                {bilingualFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Admisiones"
            title="Un proceso claro, cálido y bien guiado desde el primer contacto"
            description="Cuatro pasos, sin trámites confusos ni respuestas a medias. Te decimos qué necesitas, cuándo y con quién hablar en cada momento."
          />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4">
              {admissionsSteps.map((step) => (
                <div key={step.step} className="card-soft flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-lg font-semibold text-primary">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-elevated p-6 sm:p-8">
              <div className="max-w-lg">
                <span className="eyebrow">Solicita informes</span>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
                  Cuéntanos qué etapa buscas para tu familia
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Déjanos tus datos y te contactamos con la información del nivel que te interesa, disponibilidad de lugares y fechas para visitar el colegio.
                </p>
              </div>
              <div className="mt-8">
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Vida escolar"
              title="Así se ve un día cualquiera en Buckingham"
              description="Nuestro castillo, los patios, las aulas y el recreo. Las mismas instalaciones que vas a recorrer cuando vengas a visitarnos."
              align="left"
              className="mb-0"
            />
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/vida-escolar#galeria">
                Ver toda la galería
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {images.home.gallery.slice(0, 4).map((src, index) => (
              <GalleryItem key={src} src={src} alt={`Vida escolar Buckingham ${index + 1}`} className={index === 0 ? 'xl:col-span-2 xl:row-span-2 xl:aspect-auto' : undefined} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Confianza"
            title="Lo que dicen las familias que ya nos eligieron"
            description="La mayoría de nuestras familias llegó por recomendación de otra familia. Esto es lo que cuentan quienes ya viven Buckingham todos los días."
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

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Más de 30 años educando en San Luis Potosí"
            description="Abrimos en 1993 y desde entonces hemos acompañado a generaciones de familias potosinas. Este es el camino que nos trajo hasta aquí."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                icon={event.icon as 'building' | 'users' | 'graduation' | 'award'}
                align={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Las dudas que más nos preguntan las familias"
            description="Edades de ingreso, cómo funciona el programa bilingüe, comunicación con casa y cómo agendar una visita."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </section>

      <CTASection
        variant="dark"
        title="Ven a conocer el colegio antes de decidir"
        description={`La mejor forma de saber si ${siteConfig.shortName} es para tu familia es recorrer el campus, ver a los niños en clase y platicar con el equipo. Agenda tu visita cuando te acomode.`}
        primaryCta={{ label: 'Iniciar admisión', href: '/admisiones' }}
        secondaryCta={{ label: 'Hablar con el colegio', href: `https://wa.me/${siteConfig.whatsapp}` }}
      />
    </div>
  )
}
