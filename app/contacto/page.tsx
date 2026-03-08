import { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { LeadForm } from '@/components/LeadForm'
import { ContactCard } from '@/components/ContactCard'
import { FAQAccordion } from '@/components/FAQAccordion'
import { siteConfig } from '@/lib/content'
import { homeFaq } from '@/lib/content'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Contacto | Instituto Buckingham',
  description: 'Contáctanos para solicitar información o agendar una visita. Estamos en San Luis Potosí para atenderte.',
}

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para ayudarte"
        description="¿Tienes preguntas sobre admisiones, horarios o nuestros programas? Contáctanos por el medio que prefieras. Te responderemos a la brevedad."
        image={images.contacto.hero}
        imageAlt="Contacto Instituto Buckingham"
        primaryCta={{ label: 'WhatsApp', href: `https://wa.me/${siteConfig.whatsapp}` }}
        secondaryCta={{ label: 'Llamar', href: `tel:${siteConfig.phone.replace(/\s/g, '')}` }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                title="Información de contacto"
                description="Ubicación, horarios y canales de comunicación."
                align="left"
              />
              <div className="mt-8">
                <ContactCard />
              </div>
              <div className="mt-8 rounded-2xl bg-[#F6F0E4] p-6">
                <h3 className="font-heading font-semibold text-foreground">WhatsApp</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Respuesta rápida para consultas y agendar visitas.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-[#BE9F0F]"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-lg ring-1 ring-border sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Envíanos un mensaje
              </h2>
              <p className="mt-2 text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo.
              </p>
              <div className="mt-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F0E4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border sm:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Ubicación
                </h3>
                <p className="mt-2 text-muted-foreground">{siteConfig.address}</p>
              </div>
              <div className="aspect-video w-full max-w-md overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">Mapa de ubicación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Preguntas frecuentes"
            description="Respuestas rápidas a las dudas más comunes."
          />
          <div className="mx-auto max-w-2xl">
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </section>
    </div>
  )
}
