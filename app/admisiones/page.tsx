import type { Metadata } from 'next'
import { Clock3, FileCheck2, MapPin, MessageSquareMore, School, Sparkles } from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { ContactCard } from '@/components/ContactCard'
import { FAQAccordion } from '@/components/FAQAccordion'
import { LeadForm } from '@/components/LeadForm'
import { PageHero } from '@/components/PageHero'
import { ProgramCard } from '@/components/ProgramCard'
import { SectionHeading } from '@/components/SectionHeading'
import { StatCard } from '@/components/StatCard'
import { admissionsSteps, educationalLevels, homeFaq } from '@/lib/content'
import { images } from '@/lib/content/images'
import { pageMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = pageMetadata({
  title: 'Admisiones e inscripciones 2026 - 2027',
  description:
    'Inscripciones abiertas para maternal, kinder y primaria en San Luis Potosí. Proceso en 4 pasos, requisitos, documentos y cómo agendar tu visita al colegio.',
  path: '/admisiones',
})

const admissionsHighlights = [
  {
    title: 'Atención personalizada',
    description: 'Seguimiento cercano desde el primer contacto.',
    icon: MessageSquareMore,
  },
  {
    title: 'Proceso ordenado',
    description: 'Cada etapa se entiende con rapidez y claridad.',
    icon: MessageSquareMore,
  },
  {
    title: 'Campus para conocer',
    description: 'La visita ayuda a decidir con más confianza.',
    icon: School,
  },
  {
    title: '4 pasos',
    description: 'Ruta simple para avanzar sin fricción.',
    icon: FileCheck2,
  },
  {
    title: 'Respuesta oportuna',
    description: 'Seguimiento ágil para continuar el proceso.',
    icon: Clock3,
  },
]

export default function AdmisionesPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={[breadcrumbSchema([{ name: 'Inicio', path: '/' }, { name: 'Admisiones', path: '/admisiones' }]), faqSchema(homeFaq)]} />
      <PageHero
        eyebrow="Admisiones Instituto Buckingham"
        title="Un proceso cálido, transparente y bien acompañado desde el primer contacto"
        description="Te explicamos el proceso completo: qué documentos necesitas, cómo agendar tu visita al campus y cuánto tarda cada paso. Sin letra pequeña."
        image={images.admisiones.hero}
        imageAlt="Admisiones Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '#formulario' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Atención personalizada', 'Proceso ordenado', 'Campus para conocer en visita']}
        imageBadge={{ value: '4 pasos', label: 'Proceso claro y acompañado', detail: 'Información ordenada para conocer niveles, requisitos y siguientes pasos.' }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {admissionsHighlights.map((item) => {
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
            eyebrow="Ruta de admisión"
            title="Cuatro pasos, de la primera llamada al primer día de clases"
            description="Así es el proceso completo. En cada etapa sabrás con quién hablas y qué sigue después."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {admissionsSteps.map((step) => (
              <div key={step.step} className="relative overflow-hidden rounded-[1.6rem] border border-primary/18 bg-white p-6 shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,rgba(210,176,17,0.95),rgba(210,176,17,0.2))]" />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-lg font-semibold text-primary">
                  {step.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Oferta educativa"
            title="¿Aún no sabes qué nivel le toca a tu hijo?"
            description="Revisa las edades y el enfoque de cada etapa. Si tienes dudas, en la visita te ayudamos a ubicarlo."
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

      <section className="section-space section-tint">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Requisitos"
                title="Qué documentos necesitas tener a la mano"
                description="Esto es lo básico para cualquier nivel. Según la etapa podemos pedirte algún documento adicional, y te lo decimos desde el primer contacto."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Acta" label="de nacimiento" detail="Copia del acta de nacimiento del alumno." />
                <StatCard value="CURP" label="del alumno" detail="Y la identificación oficial de la madre, el padre o el tutor." />
                <StatCard value="Boletas" label="del ciclo anterior" detail="Solo si tu hijo viene de otro colegio, para ubicarlo en el grado que le corresponde." />
                <StatCard value="Visita" label="al campus" detail="No es un requisito, pero casi todas las familias deciden después de recorrer el colegio." />
              </div>
            </div>
            <div className="card-elevated relative overflow-hidden border-primary/12 p-6 sm:p-8">
              <div className="absolute right-6 top-6 hidden rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground md:inline-flex">
                Requisitos básicos
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">Lo básico para comenzar</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>Acta de nacimiento del alumno.</li>
                <li>CURP y datos generales de la familia.</li>
                <li>Comprobante de domicilio e identificación del tutor.</li>
                <li>Documentación académica previa cuando aplique.</li>
              </ul>
              <div className="mt-8 rounded-[1.25rem] border border-primary/15 bg-white/90 p-5 shadow-[0_18px_36px_-30px_rgba(12,29,55,0.2)]">
                <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Clock3 className="h-4 w-4 text-primary" />
                  La información detallada puede ampliarse por nivel al recibir la solicitud.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Conversión"
                title="Solicita informes o agenda tu visita"
                description="Escríbenos por el medio que prefieras. Te respondemos con la información del nivel que te interesa y la disponibilidad de lugares."
                align="left"
              />
              <div className="space-y-4">
                <ContactCard />
                <div className="rounded-[1.25rem] border border-primary/15 bg-white/90 p-5 text-sm leading-relaxed text-muted-foreground shadow-[0_18px_36px_-30px_rgba(12,29,55,0.2)]">
                  La composición prioriza claridad, buena lectura móvil y suficiente información para decidir sin distracciones.
                </div>
              </div>
            </div>
            <div className="card-elevated p-6 sm:p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Dudas sobre el proceso de admisión"
            description="Fechas, lugares disponibles, cambios desde otro colegio y todo lo que suelen preguntarnos antes de inscribir."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Admisiones abiertas para el ciclo 2026 - 2027"
        description="Los lugares por grupo son limitados porque trabajamos con grupos reducidos. Si te interesa, conviene empezar el proceso con tiempo."
        primaryCta={{ label: 'Contactar ahora', href: '/contacto' }}
        secondaryCta={{ label: 'Explorar niveles', href: '/oferta-educativa' }}
      />
    </div>
  )
}
