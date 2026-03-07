import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Puzzle, 
  Languages, 
  Calculator,
  Palette,
  Music,
  TreePine,
  CheckCircle2,
  ArrowRight,
  BookOpen
} from "lucide-react"

export const metadata = {
  title: "Preescolar | Instituto Buckingham",
  description: "Programa Preescolar bilingüe para niños de 3 a 6 años. Kinder 1, 2 y 3 con educación integral en San Luis Potosí.",
}

const grades = [
  {
    name: "Kinder 1",
    age: "3-4 años",
    description: "Primeras bases del aprendizaje formal. Desarrollo de independencia, socialización y habilidades pre-matemáticas y pre-lectura."
  },
  {
    name: "Kinder 2",
    age: "4-5 años",
    description: "Fortalecimiento de la lectoescritura emergente, pensamiento lógico-matemático y mayor exposición al inglés."
  },
  {
    name: "Kinder 3",
    age: "5-6 años",
    description: "Preparación para primaria. Consolidación de lectoescritura, operaciones básicas y dominio comunicativo del inglés."
  }
]

const features = [
  {
    icon: Languages,
    title: "Programa Bilingüe",
    description: "50% del día en inglés con maestras certificadas. Los niños adquieren el idioma de forma natural."
  },
  {
    icon: Calculator,
    title: "Pensamiento Matemático",
    description: "Desarrollo del razonamiento lógico a través de material concreto y actividades lúdicas."
  },
  {
    icon: BookOpen,
    title: "Lectoescritura",
    description: "Método fonético que facilita el aprendizaje de la lectura y escritura en español e inglés."
  },
  {
    icon: Palette,
    title: "Expresión Artística",
    description: "Artes plásticas, música y danza para desarrollar la creatividad y expresión personal."
  },
  {
    icon: Puzzle,
    title: "Aprendizaje por Proyectos",
    description: "Los niños exploran temas de su interés desarrollando habilidades de investigación."
  },
  {
    icon: TreePine,
    title: "Educación Ambiental",
    description: "Contacto con la naturaleza y conciencia ecológica desde temprana edad."
  }
]

const schedule = [
  { time: "8:00 - 8:30", activity: "Recepción y activación" },
  { time: "8:30 - 9:15", activity: "Círculo de la mañana / Inglés" },
  { time: "9:15 - 10:00", activity: "Taller de lectoescritura" },
  { time: "10:00 - 10:30", activity: "Snack y recreo" },
  { time: "10:30 - 11:15", activity: "Pensamiento matemático" },
  { time: "11:15 - 12:00", activity: "Inglés / Proyecto" },
  { time: "12:00 - 12:45", activity: "Educación física / Arte / Música" },
  { time: "12:45 - 13:15", activity: "Almuerzo" },
  { time: "13:15 - 14:00", activity: "Actividades complementarias" },
]

const benefits = [
  "Desarrollo integral: cognitivo, social, emocional y físico",
  "Bilingüismo real con certificación Cambridge",
  "Grupos reducidos para atención personalizada",
  "Maestras tituladas y en constante capacitación",
  "Tecnología educativa como herramienta de aprendizaje",
  "Preparación óptima para el ingreso a primaria",
  "Valores y formación del carácter",
  "Comunicación constante con los padres"
]

export default function PreescolarPage() {
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
                <GraduationCap className="h-4 w-4" />
                De 3 a 6 años
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
                Preescolar
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                En nuestro programa Preescolar bilingüe, los niños descubren 
                el placer de aprender mientras desarrollan las competencias 
                necesarias para su éxito académico y personal.
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
                  src="/images/preescolar.jpg"
                  alt="Niños en programa Preescolar"
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
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Grados</p>
                  <p className="text-lg font-semibold text-foreground">Kinder 1, 2 y 3</p>
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
                  <p className="text-lg font-semibold text-foreground">8:00 - 14:00 hrs</p>
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
                  <p className="text-lg font-semibold text-foreground">Máximo 18 alumnos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Nuestros Grados
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Cada nivel está diseñado para potenciar el desarrollo según la etapa madurativa
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {grades.map((grade, index) => (
              <Card key={index} className="border-primary/10 transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {grade.age}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{grade.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{grade.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Nuestro Programa
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Un currículo integral que combina lo mejor de la educación tradicional con metodologías innovadoras
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/10 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
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
      <section className="py-16 lg:py-24">
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
                ¿Por qué elegir nuestro Preescolar?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Badge */}
      <section className="py-12 bg-card border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <Languages className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-foreground">Certificación Cambridge</h3>
              <p className="text-muted-foreground">
                Nuestros alumnos de Kinder 3 presentan su primer examen Cambridge (Starters), 
                certificando internacionalmente su nivel de inglés.
              </p>
            </div>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/5" asChild>
              <Link href="/modelo-educativo/programa-bilingue">
                Conocer más
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold lg:text-4xl">
            Dale a tu hijo el mejor inicio
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-secondary-foreground/80">
            Agenda una visita para conocer nuestras instalaciones y platicar 
            sobre el desarrollo de tu hijo.
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
