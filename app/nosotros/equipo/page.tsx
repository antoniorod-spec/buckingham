import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Award,
  ChevronRight,
  GraduationCap,
  Heart,
  Users,
} from 'lucide-react'
import { CTASection } from '@/components/CTASection'
import { FeatureCard } from '@/components/FeatureCard'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { images } from '@/lib/content/images'

export const metadata: Metadata = {
  title: 'Equipo Docente | Instituto Buckingham',
  description:
    'Conoce al equipo docente de Instituto Buckingham: profesionales comprometidos con la educación, el acompañamiento y la formación integral.',
}

const directivos = [
  {
    name: 'Lic. María Elena Rodríguez',
    role: 'Dirección general',
    description:
      'Más de 25 años de experiencia en educación básica y una trayectoria dedicada a construir una comunidad escolar cercana, estable y exigente en lo académico.',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Lic. Patricia Hernández',
    role: 'Coordinación académica',
    description:
      'Acompaña la estructura pedagógica del colegio y vela por la continuidad entre etapas, metodologías y seguimiento individual.',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Lic. Roberto Martínez',
    role: 'Coordinación de inglés',
    description:
      'Especialista en enseñanza del idioma y en integración del inglés a la experiencia cotidiana con claridad y progresión real.',
    image: '/images/team-3.jpg',
  },
]

const proofItems = [
  {
    title: 'Equipo cercano',
    description: 'Relación humana, clara y constante con cada familia.',
    icon: Heart,
  },
  {
    title: 'Experiencia docente',
    description: 'Profesionales preparados para cada etapa educativa.',
    icon: GraduationCap,
  },
  {
    title: 'Trabajo colaborativo',
    description: 'Coordinación entre áreas para acompañar mejor.',
    icon: Users,
  },
  {
    title: 'Actualización continua',
    description: 'Formación docente con visión académica actual.',
    icon: Award,
  },
]

const teamStrengths = [
  {
    title: 'Acompañamiento real',
    description:
      'El alumno no es un número. El equipo observa, conoce y da seguimiento cercano a cada proceso.',
    icon: 'heart' as const,
  },
  {
    title: 'Criterio pedagógico',
    description:
      'Las decisiones académicas responden a cada etapa del desarrollo, con estructura y claridad para la familia.',
    icon: 'graduation' as const,
  },
  {
    title: 'Comunicación constante',
    description:
      'La cercanía escuela-familia se sostiene con orden, escucha y seguimiento cotidiano.',
    icon: 'message-circle' as const,
  },
  {
    title: 'Visión compartida',
    description:
      'Todo el equipo trabaja bajo una misma promesa institucional: calidez, excelencia y atención personalizada.',
    icon: 'users' as const,
  },
]

export default function EquipoPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-border/70 bg-white/90">
        <div className="container-shell py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/nosotros" className="transition-colors hover:text-primary">
              Nosotros
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">Equipo Docente</span>
          </nav>
        </div>
      </div>

      <PageHero
        eyebrow="Nuestro equipo"
        title="Docentes y coordinadores que acompañan con experiencia y cercanía"
        description="El equipo Buckingham combina preparación académica, sensibilidad educativa y seguimiento constante para que cada familia se sienta bien acompañada."
        image={images.home.hero}
        imageAlt="Equipo docente de Instituto Buckingham"
        primaryCta={{ label: 'Solicitar informes', href: '/admisiones' }}
        secondaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        trustBullets={['Acompañamiento cercano', 'Trabajo colaborativo', 'Experiencia por etapas']}
        imageBadge={{
          value: 'Equipo',
          label: 'Atención humana y profesional',
          detail: 'La calidad académica también se sostiene en quién acompaña.',
        }}
      />

      <section className="border-y border-border/70 bg-white/80 py-7">
        <div className="container-shell">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {proofItems.map((item) => {
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
            eyebrow="Equipo directivo"
            title="Personas que dan forma a la experiencia educativa del colegio"
            description="La dirección y la coordinación académica sostienen un proyecto ordenado, cálido y consistente entre niveles."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {directivos.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-[1.75rem] border border-primary/18 bg-white shadow-[0_18px_38px_-30px_rgba(12,29,55,0.18)]"
              >
                <div className="relative aspect-[4/3] bg-primary/8">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {person.role}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-secondary">{person.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-warm">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Lo que distingue al equipo"
            title="Una forma de acompañar que se percibe desde el primer contacto"
            description="Más allá de credenciales, el valor del equipo está en cómo enseña, cómo observa y cómo se relaciona con cada familia."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {teamStrengths.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="card-elevated grid gap-6 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="eyebrow">Cultura docente</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">
                Preparación, sensibilidad y consistencia en cada nivel
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                En Buckingham, el equipo docente comparte una misma intención institucional: acompañar con atención real, mantener expectativas claras y ayudar a que cada alumno avance con seguridad.
              </p>
              <p>
                Esa consistencia entre personas, áreas y etapas es parte de lo que vuelve más confiable la experiencia para las familias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Conoce al equipo que puede acompañar la siguiente etapa de tu familia"
        description="Una visita al colegio permite entender mejor el tono humano y profesional con el que se vive Buckingham todos los días."
        primaryCta={{ label: 'Agendar visita', href: '/contacto' }}
        secondaryCta={{ label: 'Ver admisiones', href: '/admisiones' }}
      />
    </div>
  )
}
