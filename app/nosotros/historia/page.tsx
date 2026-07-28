import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Calendar, Award, Users, Building } from "lucide-react"
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: "Nuestra historia",
  description: "Instituto Buckingham abrió en 1993 en San Luis Potosí. Más de 30 años de educación bilingüe y personalizada para familias potosinas.",
  path: '/nosotros/historia',
})

const timelineEvents = [
  {
    year: "1993",
    title: "Fundación",
    description: "Instituto Buckingham abre sus puertas con la visión de ofrecer educación bilingüe de calidad en San Luis Potosí. Iniciamos con un pequeño grupo de alumnos y el compromiso de formar personas íntegras.",
    icon: Building,
  },
  {
    year: "1998",
    title: "Expansión Preescolar",
    description: "Ampliamos nuestras instalaciones para dar servicio a más familias, incorporando nuevas aulas y espacios de recreación para los más pequeños.",
    icon: Users,
  },
  {
    year: "2005",
    title: "Certificación Cambridge",
    description: "Nos convertimos en centro preparador oficial de Cambridge, garantizando la calidad de nuestra enseñanza del inglés con estándares internacionales.",
    icon: Award,
  },
  {
    year: "2010",
    title: "Nuevas Instalaciones",
    description: "Inauguramos instalaciones completamente renovadas con tecnología educativa de vanguardia, laboratorios y áreas deportivas.",
    icon: Building,
  },
  {
    year: "2015",
    title: "Programa Maternal",
    description: "Lanzamos nuestro programa de Maternal para atender a niños desde 1 año, con metodologías de estimulación temprana y atención personalizada.",
    icon: Users,
  },
  {
    year: "2023",
    title: "30 Años de Excelencia",
    description: "Celebramos tres décadas formando generaciones de potosinos con valores, bilingüismo y excelencia académica. Miles de egresados nos respaldan.",
    icon: Award,
  },
]

export default function HistoriaPage() {
  return (
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-primary/20 bg-card">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Nosotros</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Historia</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--brown)] to-[var(--brown-dark)] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Calendar className="h-4 w-4" />
                Desde 1993
              </span>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 text-balance">
                Nuestra Historia
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Más de 30 años dedicados a la formación integral de niños y niñas en San Luis Potosí, 
                construyendo un legado de excelencia educativa y valores humanos.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-6">
                  Una Tradición de Excelencia Educativa
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Instituto Buckingham nació en 1993 con un sueño: ofrecer a las familias de San Luis Potosí 
                    una opción educativa que combinara la excelencia académica con la formación en valores, 
                    todo en un ambiente bilingüe que preparara a los niños para un mundo globalizado.
                  </p>
                  <p>
                    Fundado por educadores comprometidos con la infancia, nuestro colegio comenzó con un 
                    pequeño grupo de alumnos y la convicción de que cada niño merece una educación 
                    personalizada que respete su ritmo de aprendizaje y potencie sus talentos únicos.
                  </p>
                  <p>
                    A lo largo de tres décadas, hemos mantenido nuestro compromiso original mientras 
                    evolucionamos para incorporar las mejores prácticas educativas y tecnología de vanguardia, 
                    sin perder nunca el trato cercano y familiar que nos caracteriza.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3" />
                <Image
                  src="/images/hero-students.jpg"
                  alt="Historia de Instituto Buckingham"
                  width={600}
                  height={450}
                  className="relative rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Nuestro Recorrido
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada año ha sido un paso más en nuestro compromiso con la educación de calidad.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 lg:-translate-x-px" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Point */}
                    <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10" />
                    
                    {/* Content */}
                    <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                      <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <event.icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-2xl font-bold text-primary">{event.year}</span>
                          </div>
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-[var(--brown-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">30+</div>
                <div className="text-white/80">Años de experiencia</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-white/80">Egresados</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-white/80">Docentes capacitados</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-white/80">Compromiso</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Sé Parte de Nuestra Historia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Únete a la familia Buckingham y escribe el próximo capítulo junto a nosotros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/admisiones">Iniciar Proceso de Admisión</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/admisiones/agenda-visita">Agendar Visita</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
  )
}
