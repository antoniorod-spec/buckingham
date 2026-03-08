import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Heart, Users, Shield, Lightbulb, HandHeart, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Valores | Instituto Buckingham",
  description: "Los valores que guían la formación integral en Instituto Buckingham: respeto, responsabilidad, honestidad, solidaridad y más.",
}

const valores = [
  {
    icon: Heart,
    title: "Respeto",
    description: "Fomentamos el respeto hacia uno mismo, hacia los demás y hacia el entorno. Enseñamos a valorar las diferencias y a tratar a todos con dignidad y consideración.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Shield,
    title: "Responsabilidad",
    description: "Cultivamos la responsabilidad personal y social. Nuestros alumnos aprenden a cumplir sus compromisos, cuidar sus pertenencias y asumir las consecuencias de sus acciones.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Star,
    title: "Honestidad",
    description: "Promovemos la verdad y la integridad en todas las acciones. Valoramos la sinceridad, la transparencia y el actuar de manera ética en todas las situaciones.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: HandHeart,
    title: "Solidaridad",
    description: "Inspiramos el espíritu de ayuda y colaboración. Enseñamos a nuestros alumnos a ser sensibles ante las necesidades de otros y a contribuir al bienestar de su comunidad.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Desarrollamos habilidades de colaboración y comunicación. Los proyectos grupales enseñan a valorar las aportaciones de cada persona y a lograr metas en conjunto.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Lightbulb,
    title: "Creatividad",
    description: "Estimulamos el pensamiento innovador y la expresión original. Celebramos las ideas únicas y animamos a nuestros alumnos a explorar nuevas formas de resolver problemas.",
    color: "bg-orange-50 text-orange-600",
  },
]

export default function ValoresPage() {
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
              <span className="text-foreground font-medium">Valores</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--brown)] to-[var(--brown-dark)] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4" />
                Formación Integral
              </span>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 text-balance">
                Nuestros Valores
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Los valores son el corazón de nuestra propuesta educativa. Más que enseñar contenidos, 
                formamos personas íntegras que harán la diferencia en el mundo.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Educación que Transforma
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Instituto Buckingham creemos que la verdadera educación va más allá de los conocimientos 
                académicos. Por eso, integramos la formación en valores en cada actividad, desde el salón 
                de clases hasta el recreo, desde los proyectos escolares hasta las ceremonias cívicas.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-8 lg:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor) => (
                <Card key={valor.title} className="border-primary/20 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-8">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${valor.color} mb-6`}>
                        <valor.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                        {valor.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {valor.description}
                      </p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-primary/50 to-primary" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Teach Values */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Cómo Vivimos los Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los valores no se enseñan solo con palabras, sino con acciones y ejemplo diario.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ejemplo de los Docentes</h3>
                  <p className="text-muted-foreground text-sm">
                    Nuestros maestros modelan los valores que queremos inculcar, siendo ejemplos 
                    vivos de respeto, responsabilidad y honestidad en cada interacción.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Reflexión Diaria</h3>
                  <p className="text-muted-foreground text-sm">
                    Cada día iniciamos con un momento de reflexión donde abordamos situaciones 
                    cotidianas que permiten practicar y reforzar los valores.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Proyectos Sociales</h3>
                  <p className="text-muted-foreground text-sm">
                    Organizamos actividades de servicio a la comunidad donde los alumnos 
                    experimentan la solidaridad y el impacto positivo que pueden tener.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Reconocimientos</h3>
                  <p className="text-muted-foreground text-sm">
                    Celebramos y reconocemos públicamente a los alumnos que demuestran 
                    los valores en su conducta diaria, motivando a todos a seguir su ejemplo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Colaboración con Familias</h3>
                  <p className="text-muted-foreground text-sm">
                    Trabajamos de la mano con los padres para reforzar los mismos valores 
                    en casa, creando coherencia entre el hogar y la escuela.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Resolución de Conflictos</h3>
                  <p className="text-muted-foreground text-sm">
                    Enseñamos a resolver diferencias de manera pacífica y respetuosa, 
                    usando cada conflicto como oportunidad de aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-[rgba(127,87,26,0.05)] overflow-hidden">
              <CardContent className="p-12 text-center">
                <blockquote className="max-w-3xl mx-auto">
                  <p className="font-heading text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
                    "La educación es el arma más poderosa que puedes usar para cambiar el mundo, 
                    y los valores son los cimientos sobre los que construimos ese cambio."
                  </p>
                  <footer className="text-muted-foreground">
                    — Filosofía Instituto Buckingham
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[var(--brown-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
              Forma Parte de Nuestra Comunidad
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Si compartes nuestros valores y buscas una educación integral para tu hijo, 
              te invitamos a conocer nuestras instalaciones y propuesta educativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/admisiones">Iniciar Proceso de Admisión</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/nosotros/equipo">Conoce a Nuestro Equipo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
  )
}
