import type { Metadata } from 'next'
import { Clock3, FileCheck2, MessageSquareMore, School } from 'lucide-react'
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

export const metadata: Metadata = {
  title: 'Admisiones',
  description:
    'Conoce el proceso de admisión de Instituto Buckingham y agenda una visita para explorar Maternal, Preescolar o Primaria.',
}

const admissionsHighlights = [
  {
    title: 'Respuesta oportuna',
    description: 'La estructura está pensada para resolver dudas rápido y mover a la familia al siguiente paso sin fricción.',
    icon: MessageSquareMore,
  },
  {
    title: 'Proceso claro',
    description: 'Cada etapa tiene objetivos y requisitos definidos para que la experiencia se sienta transparente y ordenada.',
    icon: FileCheck2,
  },
  {
    title: 'Visita guiada',
    description: 'La página impulsa el agendado de recorridos y sostiene la conversación con información útil y bien jerarquizada.',
    icon: School,
  },
]

export default function AdmisionesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Admisiones Instituto Buckingham"
        title="Un proceso cálido, transparente y bien acompañado desde el primer contacto"
        description="La página de admisiones organiza el recorrido ideal para las familias: entender el proyecto, conocer los niveles, revisar requisitos y dejar una solicitud sin perder claridad ni confianza."
        image={images.admisiones.hero}
        imageAlt="Admisiones Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '#formulario' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Atención personalizada', 'Proceso ordenado', 'Campus para conocer en visita']}
        stats={[
          { value: '4 pasos', label: 'para iniciar', detail: 'Ruta simple para reducir fricción en la decisión.' },
          { value: '<24 h', label: 'respuesta ideal', detail: 'Un tono cercano que invita al seguimiento rápido.' },
          { value: '3 niveles', label: 'para elegir', detail: 'Maternal, Preescolar y Primaria con navegación directa.' },
        ]}
      />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Ruta de admisión"
            title="La información principal aparece en el orden en que la familia la necesita"
            description="Primero se comunica confianza, después el proceso, luego la oferta educativa y finalmente la conversión. Esa secuencia hace que la página se sienta clara y profesional."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {admissionsSteps.map((step) => (
              <div key={step.step} className="card-soft p-6">
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

      <section className="section-space section-warm">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {admissionsHighlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card-soft p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
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
            title="La navegación hacia los niveles permanece visible dentro del proceso"
            description="En vez de sacar al usuario del flujo, la página integra los tres niveles para que la familia pueda profundizar sin perder el contexto de admisión."
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
                title="Documentación explicada con claridad, sin sobrecargar la página"
                description="La sección resume los básicos para disminuir incertidumbre y mantener el foco en la conversión principal."
                align="left"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard value="Acta" label="documentos del alumno" detail="Sección pensada para listar lo indispensable y ampliar según nivel." />
                <StatCard value="CURP" label="datos esenciales" detail="La interfaz puede conectarse después con un checklist descargable o CRM." />
                <StatCard value="Visita" label="recorrido sugerido" detail="La página refuerza que conocer el campus acelera la decisión." />
                <StatCard value="Tiempo" label="proceso acompañado" detail="La narrativa baja fricción y anticipa próximos pasos." />
              </div>
            </div>
            <div className="card-elevated p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">Lo básico para comenzar</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>Acta de nacimiento del alumno.</li>
                <li>CURP y datos generales de la familia.</li>
                <li>Comprobante de domicilio e identificación del tutor.</li>
                <li>Documentación académica previa cuando aplique.</li>
              </ul>
              <div className="mt-8 card-soft p-5">
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
                title="Formulario, contacto y contexto en una sola vista"
                description="La página cierra con una zona diseñada para que la familia tenga confianza antes de dejar sus datos."
                align="left"
              />
              <div className="space-y-4">
                <ContactCard />
                <div className="card-soft p-5 text-sm leading-relaxed text-muted-foreground">
                  La composición del bloque prioriza claridad, buena lectura móvil y suficiente información para decidir sin distracciones.
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
            title="Las preguntas frecuentes sostienen la decisión sin cambiar de página"
            description="El acordeón refuerza orden, confianza y ahorro de tiempo para el equipo comercial y para las familias."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Cuando la familia está lista, el siguiente paso está siempre visible"
        description="La página de admisiones termina con un cierre claro y coherente con todo el sistema visual del sitio."
        primaryCta={{ label: 'Contactar ahora', href: '/contacto' }}
        secondaryCta={{ label: 'Explorar niveles', href: '/oferta-educativa' }}
      />
    </div>
  )
}
