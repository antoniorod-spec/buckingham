import { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ProgramCard } from '@/components/ProgramCard'
import { CTASection } from '@/components/CTASection'
import { educationalLevels, bilingualFeatures } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Kinder, preescolar y primaria bilingüe',
  description: 'Maternal (1-3 años), kinder y preescolar (3-6) y primaria (6-12) en un mismo colegio bilingüe de San Luis Potosí, con continuidad entre niveles.',
  path: '/oferta-educativa',
})

export default function OfertaEducativaPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Maternal, Preescolar y Primaria"
        title="Una oferta educativa para cada etapa"
        description="Acompañamos a tu hijo desde los primeros años hasta la educación básica. Programas diseñados para cada etapa del desarrollo, con continuidad y coherencia pedagógica."
        primaryCta={{ label: 'Solicitar información', href: '/contacto' }}
        secondaryCta={{ label: 'Conocer admisiones', href: '/admisiones' }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestros programas"
            description="Cada nivel está diseñado para las necesidades específicas de esa etapa."
          />
          <div className="grid gap-8 md:grid-cols-3">
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

      <section className="bg-[#F6F0E4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Continuidad de formación"
            description="Una trayectoria coherente desde Maternal hasta Primaria."
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground">
              Nuestra oferta está diseñada para que los niños tengan una transición fluida entre
              niveles. La metodología, los valores y el enfoque bilingüe se mantienen a lo largo
              de toda la formación, adaptándose a cada etapa del desarrollo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Educación bilingüe"
            description="El inglés como parte integral de la formación."
          />
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-4">
              {bilingualFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Qué nivel es el adecuado para tu hijo?"
        description="Contáctanos y te ayudamos a encontrar el programa ideal."
        primaryCta={{ label: 'Solicitar información', href: '/contacto' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
      />
    </div>
  )
}
