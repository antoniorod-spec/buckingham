import { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { TestimonialCard } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTASection'
import { GalleryItem } from '@/components/GalleryItem'
import { testimonials } from '@/lib/content'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Vida Escolar | Instituto Buckingham',
  description: 'Conoce el día a día en Instituto Buckingham. Eventos, actividades y momentos que construyen la experiencia de ser parte de nuestra comunidad.',
}

export default function VidaEscolarPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Vida escolar"
        title="La experiencia de ser parte de Buckingham"
        description="Eventos, celebraciones, proyectos y momentos cotidianos que construyen la vida escolar. Conoce cómo se vive cada día en nuestra comunidad."
        image={images.vidaEscolar.hero}
        imageAlt="Vida escolar Instituto Buckingham"
        primaryCta={{ label: 'Ver galería', href: '#galeria' }}
        secondaryCta={{ label: 'Contactar', href: '/contacto' }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Más que clases: una comunidad
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La vida en Buckingham se construye en el aula, en el patio, en las celebraciones
              y en los proyectos especiales. Cada momento es una oportunidad para aprender,
              convivir y crecer juntos.
            </p>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-[#F6F0E4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Galería"
            description="Momentos que reflejan la vida en Buckingham."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {images.vidaEscolar.gallery.map((src, i) => (
              <GalleryItem key={i} src={src} alt={`Vida escolar Buckingham ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Lo que dicen las familias"
            description="La confianza de nuestra comunidad es nuestro mayor logro."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} quote={t.quote} author={t.author} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres ser parte de esta comunidad?"
        description="Agenda una visita y conoce de cerca la vida en Buckingham."
        primaryCta={{ label: 'Solicitar información', href: '/contacto' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
      />
    </div>
  )
}
