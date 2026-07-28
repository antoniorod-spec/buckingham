import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Users, GraduationCap, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Equipo Docente | Instituto Buckingham",
  description: "Conoce al equipo de profesionales dedicados a la educación de tus hijos en Instituto Buckingham. Docentes certificados y comprometidos.",
}

const directivos = [
  {
    name: "Lic. María Elena Rodríguez",
    role: "Directora General",
    description: "Más de 25 años de experiencia en educación básica. Fundadora y líder de nuestra comunidad educativa.",
    initials: "MR",
  },
  {
    name: "Lic. Patricia Hernández",
    role: "Coordinadora Académica",
    description: "Especialista en pedagogía infantil con certificación en metodologías activas de aprendizaje.",
    initials: "PH",
  },
  {
    name: "Lic. Roberto Martínez",
    role: "Coordinador de Inglés",
    description: "Certificación CELTA de Cambridge. 15 años de experiencia en enseñanza de inglés como segunda lengua.",
    initials: "RM",
  },
]

const departamentos = [
  {
    title: "Maternal y Preescolar",
    count: "12 docentes",
    description: "Especialistas en primera infancia, con formación en estimulación temprana, desarrollo socioemocional y metodología Montessori.",
  },
  {
    title: "Primaria",
    count: "18 docentes",
    description: "Profesores certificados en educación básica, con especialidades en matemáticas, ciencias, español e inglés.",
  },
  {
    title: "Inglés",
    count: "8 docentes",
    description: "Maestros certificados por Cambridge con dominio nativo o avanzado del idioma y experiencia en enseñanza bilingüe.",
  },
  {
    title: "Artes y Deportes",
    count: "6 docentes",
    description: "Profesionales en música, artes plásticas, danza y educación física, fomentando el desarrollo integral.",
  },
  {
    title: "Apoyo Psicopedagógico",
    count: "4 especialistas",
    description: "Psicólogos y pedagogos que brindan acompañamiento individual y grupal a alumnos y familias.",
  },
  {
    title: "Administrativo",
    count: "10 colaboradores",
    description: "Equipo dedicado a la atención a padres, administración escolar y mantenimiento de instalaciones.",
  },
]

const caracteristicas = [
  {
    icon: GraduationCap,
    title: "Formación Continua",
    description: "Nuestros docentes participan en programas de actualización permanente para estar al día con las mejores prácticas educativas.",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Contamos con maestros certificados por Cambridge, SEP y otras instituciones reconocidas a nivel nacional e internacional.",
  },
  {
    icon: Heart,
    title: "Vocación de Servicio",
    description: "Seleccionamos profesionales que aman la educación y están comprometidos con el desarrollo integral de cada alumno.",
  },
  {
    icon: Users,
    title: "Trabajo Colaborativo",
    description: "Fomentamos el trabajo en equipo entre docentes para ofrecer una experiencia educativa coherente e integrada.",
  },
]

export default function EquipoPage() {
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
              <span className="text-foreground font-medium">Equipo Docente</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--brown)] to-[var(--brown-dark)] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Users className="h-4 w-4" />
                Nuestro Equipo
              </span>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 text-balance">
                Equipo Docente
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Un equipo de más de 50 profesionales apasionados por la educación, 
                comprometidos con el desarrollo integral de cada uno de nuestros alumnos.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/50 border-b border-primary/10">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-muted-foreground text-sm">Colaboradores</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">95%</div>
                <div className="text-muted-foreground text-sm">Con título universitario</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">12</div>
                <div className="text-muted-foreground text-sm">Años promedio de experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-muted-foreground text-sm">Certificados en inglés</div>
              </div>
            </div>
          </div>
        </section>

        {/* Directivos */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Equipo Directivo
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los líderes que guían nuestra institución con experiencia, visión y compromiso.
              </p>
            </div>

            <div className="relative mb-12 aspect-[16/7] overflow-hidden rounded-3xl ring-1 ring-primary/20">
              <Image
                src="/images/equipo-buckingham.jpg"
                alt="Educadoras de Instituto Buckingham acompañando a los alumnos en el aula"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 max-w-xl text-balance text-lg font-medium text-white sm:text-xl">
                Acompañamiento cercano en cada aula, todos los días del ciclo escolar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {directivos.map((persona) => (
                <Card key={persona.name} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 font-heading text-xl font-bold tracking-wide text-primary">
                      {persona.initials}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-1">
                      {persona.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {persona.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {persona.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departamentos */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Nuestros Departamentos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Organizados en equipos especializados para ofrecer la mejor atención educativa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departamentos.map((dept) => (
                <Card key={dept.title} className="border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {dept.title}
                      </h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {dept.count}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {dept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Características del Equipo */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Lo Que Nos Distingue
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Características que hacen de nuestro equipo docente uno de los mejores de la región.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {caracteristicas.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-[rgba(127,87,26,0.05)]">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Únete a Nuestro Equipo
              </h2>
              <p className="text-muted-foreground mb-8">
                Si eres un profesional apasionado por la educación y compartes nuestros valores, 
                nos encantaría conocerte. Envianos tu CV y forma parte de la familia Buckingham.
              </p>
              <Button asChild size="lg" className="bg-[var(--brown)] text-white hover:bg-[var(--brown-dark)]">
                <Link href="mailto:rh@institutobuckingham.edu.mx">Enviar CV</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[var(--brown-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
              Conoce a Nuestro Equipo en Persona
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Agenda una visita a nuestras instalaciones y conoce a los maestros que acompañarán 
              a tu hijo en su formación educativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/admisiones/agenda-visita">Agendar Visita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-white text-[var(--brown-dark)] hover:bg-[#F6F0E4]">
                <Link href="/admisiones">Ver Proceso de Admisión</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
  )
}
