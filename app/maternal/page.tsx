import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Heart, 
  Clock, 
  Users, 
  Baby, 
  Sparkles, 
  Music, 
  Palette, 
  BookOpen,
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Maternal | Instituto Buckingham",
  description: "Programa Maternal para niños de 1 a 3 años. Estimulación temprana, desarrollo integral y ambiente seguro en San Luis Potosí.",
}

const features = [
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Grupos reducidos con máximo 10 niños por maestra para garantizar atención individualizada."
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Espacios diseñados especialmente para los más pequeños, con materiales seguros y supervisión constante."
  },
  {
    icon: Sparkles,
    title: "Estimulación Temprana",
    description: "Programa integral que desarrolla las habilidades cognitivas, motoras y sociales desde los primeros años."
  },
  {
    icon: Music,
    title: "Música y Movimiento",
    description: "Actividades musicales que estimulan el desarrollo auditivo, rítmico y la expresión corporal."
  },
  {
    icon: Palette,
    title: "Arte y Creatividad",
    description: "Exploración sensorial a través de texturas, colores y materiales diversos."
  },
  {
    icon: BookOpen,
    title: "Iniciación al Inglés",
    description: "Primera exposición al idioma inglés de forma natural a través de canciones y juegos."
  }
]

const schedule = [
  { time: "8:00 - 8:30", activity: "Recepción y bienvenida" },
  { time: "8:30 - 9:00", activity: "Círculo de la mañana" },
  { time: "9:00 - 9:30", activity: "Estimulación temprana" },
  { time: "9:30 - 10:00", activity: "Snack y tiempo libre" },
  { time: "10:00 - 10:30", activity: "Actividad sensorial/arte" },
  { time: "10:30 - 11:00", activity: "Música y movimiento" },
  { time: "11:00 - 11:30", activity: "Juego al aire libre" },
  { time: "11:30 - 12:00", activity: "Inglés / Cuento" },
  { time: "12:00 - 12:30", activity: "Preparación y salida" },
]

const benefits = [
  "Desarrollo de habilidades motoras finas y gruesas",
  "Estimulación del lenguaje y comunicación",
  "Socialización con otros niños de su edad",
  "Rutinas que brindan seguridad emocional",
  "Exploración sensorial guiada",
  "Preparación para el siguiente nivel educativo"
]

export default function MaternalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Baby className="h-4 w-4" />
                De 1 a 3 años
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
                Maternal
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Los primeros años son fundamentales. En nuestro programa Maternal, 
                brindamos un ambiente cálido y seguro donde los más pequeños 
                desarrollan sus primeras habilidades a través del juego, 
                la exploración y el amor.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/admisiones">
                    Solicitar Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5" asChild>
                  <Link href="/admisiones/agenda-visita">
                    Agendar Visita
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/20">
                <Image
                  src="/images/maternal.jpg"
                  alt="Niños en programa Maternal"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Baby className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Edad</p>
                  <p className="text-lg font-semibold text-foreground">1 a 3 años</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horario</p>
                  <p className="text-lg font-semibold text-foreground">8:00 - 12:30 hrs</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Grupos</p>
                  <p className="text-lg font-semibold text-foreground">Máximo 10 niños</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Nuestro Programa Maternal
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Un enfoque integral que estimula todas las áreas del desarrollo infantil
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/10 transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Benefits */}
      <section className="py-16 lg:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Schedule */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                Horario del Día
              </h2>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-sm ring-1 ring-primary/10"
                  >
                    <span className="w-28 shrink-0 text-sm font-medium text-primary">
                      {item.time}
                    </span>
                    <span className="text-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                Beneficios del Programa
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-primary/10 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Nota importante:</strong> Cada niño tiene su propio ritmo 
                  de desarrollo. Nuestras maestras especializadas adaptan las actividades 
                  según las necesidades individuales de cada pequeño.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold lg:text-4xl">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-secondary-foreground/80">
            Agenda una visita para conocer nuestras instalaciones y conversar 
            sobre el desarrollo de tu pequeño.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/admisiones">
                Iniciar Proceso de Admisión
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
              <Link href="tel:+524441234567">
                Llamar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
