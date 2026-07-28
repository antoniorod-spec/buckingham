import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { TimelineItem } from '@/components/TimelineItem'
import { CTASection } from '@/components/CTASection'
import { timelineEvents } from '@/lib/content'
import { images } from '@/lib/content/images'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Nosotros',
  description: 'Conoce la historia, misión, visión y valores del Instituto Buckingham. Más de 30 años formando generaciones en San Luis Potosí.',
  path: '/nosotros',
})

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Desde 1993"
        title="Más de 30 años formando el futuro"
        description="Instituto Buckingham nació con la visión de ofrecer educación bilingüe de calidad en San Luis Potosí. Hoy somos una comunidad educativa sólida, cercana y comprometida con cada familia."
        image={images.nosotros.hero}
        imageAlt="Instituto Buckingham"
        primaryCta={{ label: 'Conocer admisiones', href: '/admisiones' }}
        secondaryCta={{ label: 'Contactar', href: '/contacto' }}
        variant="dark"
      />

      <section id="historia" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Nuestra historia"
                title="Una tradición de excelencia educativa"
                align="left"
              />
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Instituto Buckingham nació en 1993 con un sueño: ofrecer a las familias de San
                  Luis Potosí una opción educativa que combinara la excelencia académica con la
                  formación en valores, todo en un ambiente bilingüe.
                </p>
                <p>
                  Fundado por educadores comprometidos con la infancia, comenzamos con Maternal y
                  Preescolar. En 2007 ampliamos nuestra oferta con Primaria, completando la formación
                  desde los primeros años hasta la educación básica.
                </p>
                <p>
                  A lo largo de tres décadas, hemos mantenido nuestro compromiso original mientras
                  evolucionamos para incorporar las mejores prácticas educativas, sin perder nunca
                  el trato cercano y familiar que nos caracteriza.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-border">
              <Image
                src={images.nosotros.story}
                alt="Historia Instituto Buckingham"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mision" className="bg-[#F6F0E4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Misión, visión y valores"
            description="Los pilares que guían nuestro quehacer educativo."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
              <h3 className="font-heading text-lg font-semibold text-primary">Misión</h3>
              <p className="mt-3 text-muted-foreground">
                Formar personas íntegras con educación bilingüe de calidad, en un ambiente cálido
                y seguro que potencie el desarrollo integral de cada niño.
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
              <h3 className="font-heading text-lg font-semibold text-primary">Visión</h3>
              <p className="mt-3 text-muted-foreground">
                Ser el colegio de referencia en San Luis Potosí por nuestra excelencia educativa,
                formación en valores y el vínculo cercano con las familias.
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-border">
              <h3 className="font-heading text-lg font-semibold text-primary">Valores</h3>
              <p className="mt-3 text-muted-foreground">
                Respeto, responsabilidad, honestidad, empatía y excelencia. Valores que vivimos
                día a día en cada actividad y que transmitimos a nuestros alumnos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Filosofía educativa"
            title="Educación centrada en la persona"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground">
              Creemos que cada niño es único y merece una educación que respete su ritmo,
              potencie sus talentos y lo prepare para un mundo en constante cambio. La formación
              en valores no es una materia aparte: se vive en cada interacción, cada proyecto
              y cada momento del día.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F0E4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestra trayectoria"
            description="Hitos que han marcado nuestro camino."
          />
          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <TimelineItem
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                icon={event.icon as 'building' | 'users' | 'graduation' | 'award'}
                align={i % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sé parte de nuestra historia"
        description="Únete a la familia Buckingham y escribe el próximo capítulo junto a nosotros."
        primaryCta={{ label: 'Iniciar proceso de admisión', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
      />
    </div>
  )
}
