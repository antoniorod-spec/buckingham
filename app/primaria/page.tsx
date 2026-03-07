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
  Languages, 
  Calculator,
  FlaskConical,
  Globe,
  Trophy,
  Laptop,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Target,
  Medal
} from "lucide-react"

export const metadata = {
  title: "Primaria | Instituto Buckingham",
  description: "Programa de Primaria bilingüe de 1° a 6° grado. Educación integral con certificación Cambridge en San Luis Potosí.",
}

const subjects = [
  {
    icon: Languages,
    title: "Inglés Intensivo",
    description: "50% del currículo en inglés. Certificaciones Cambridge cada dos años: Movers, Flyers y KET."
  },
  {
    icon: Calculator,
    title: "Matemáticas",
    description: "Desarrollo del pensamiento lógico-matemático con resolución de problemas y competencias."
  },
  {
    icon: FlaskConical,
    title: "Ciencias",
    description: "Aprendizaje práctico en laboratorio, proyectos de investigación y ferias de ciencias."
  },
  {
    icon: BookOpen,
    title: "Español",
    description: "Comprensión lectora, redacción, gramática y literatura con enfoque comunicativo."
  },
  {
    icon: Globe,
    title: "Formación Ciudadana",
    description: "Valores, ética, civismo y habilidades socioemocionales para la vida."
  },
  {
    icon: Laptop,
    title: "Tecnología",
    description: "Computación, programación básica y uso responsable de herramientas digitales."
  }
]

const extracurriculars = [
  { name: "Fútbol", icon: Trophy },
  { name: "Básquetbol", icon: Trophy },
  { name: "Ajedrez", icon: Target },
  { name: "Robótica", icon: Laptop },
  { name: "Arte", icon: BookOpen },
  { name: "Música", icon: BookOpen },
]

const achievements = [
  {
    icon: Medal,
    title: "Excelencia Académica",
    description: "Alumnos destacados en olimpiadas de matemáticas, español y conocimientos"
  },
  {
    icon: Languages,
    title: "Certificación Cambridge",
    description: "100% de nuestros alumnos certificados al finalizar primaria (nivel A2-B1)"
  },
  {
    icon: Trophy,
    title: "Logros Deportivos",
    description: "Participación y triunfos en torneos intercolegiales de la zona"
  },
  {
    icon: Target,
    title: "Preparación Integral",
    description: "Egresados aceptados en las mejores secundarias de San Luis Potosí"
  }
]

const schedule = [
  { time: "7:30 - 8:00", activity: "Recepción y activación" },
  { time: "8:00 - 8:50", activity: "Primera clase" },
  { time: "8:50 - 9:40", activity: "Segunda clase" },
  { time: "9:40 - 10:10", activity: "Receso" },
  { time: "10:10 - 11:00", activity: "Tercera clase" },
  { time: "11:00 - 11:50", activity: "Cuarta clase" },
  { time: "11:50 - 12:40", activity: "Quinta clase" },
  { time: "12:40 - 13:10", activity: "Almuerzo" },
  { time: "13:10 - 14:00", activity: "Sexta clase" },
  { time: "14:00 - 14:30", activity: "Actividades extracurriculares (opcional)" },
]

const benefits = [
  "Educación bilingüe con certificación internacional",
  "Maestros especializados por asignatura",
  "Grupos reducidos (máximo 22 alumnos)",
  "Plataforma digital para seguimiento académico",
  "Laboratorio de ciencias equipado",
  "Sala de cómputo con tecnología actualizada",
  "Actividades extracurriculares incluidas",
  "Acompañamiento socioemocional",
  "Preparación para exámenes de admisión a secundaria"
]

export default function PrimariaPage() {
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
                De 6 a 12 años
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
                Primaria
              </h1>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Nuestra Primaria bilingüe forma estudiantes competentes, críticos 
                y con valores sólidos. Un programa riguroso que combina excelencia 
                académica con desarrollo integral de la persona.
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
                  src="/images/primaria.jpg"
                  alt="Estudiantes de Primaria"
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
                  <p className="text-lg font-semibold text-foreground">1° a 6° grado</p>
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
                  <p className="text-lg font-semibold text-foreground">7:30 - 14:30 hrs</p>
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
                  <p className="text-lg font-semibold text-foreground">Máximo 22 alumnos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Áreas de Formación
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Un currículo completo que desarrolla competencias para el siglo XXI
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <Card key={index} className="border-primary/10 transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <subject.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{subject.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Nuestros Logros
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Resultados que hablan por sí mismos
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-primary/10 bg-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <achievement.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
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
              <div className="space-y-2">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 rounded-lg bg-card p-3 shadow-sm ring-1 ring-primary/10"
                  >
                    <span className="w-28 shrink-0 text-sm font-medium text-primary">
                      {item.time}
                    </span>
                    <span className="text-sm text-foreground">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                ¿Por qué elegir nuestra Primaria?
              </h2>
              <div className="space-y-3">
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

      {/* Extracurriculars */}
      <section className="py-12 bg-card border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Actividades Extracurriculares</h3>
            <p className="text-muted-foreground">Complementa la formación con actividades deportivas, artísticas y tecnológicas</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {extracurriculars.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-foreground"
              >
                <activity.icon className="h-4 w-4 text-primary" />
                {activity.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cambridge Badge */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
              <Languages className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold text-foreground">Certificación Cambridge</h3>
              <p className="text-muted-foreground">
                Nuestros alumnos presentan exámenes Cambridge cada dos años: 
                <strong className="text-foreground"> Movers (2°-3°), Flyers (4°-5°) y KET (6°)</strong>. 
                Al egresar, nuestros estudiantes alcanzan un nivel A2-B1 del Marco Común Europeo.
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
            Forma parte de nuestra comunidad
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-secondary-foreground/80">
            Conoce nuestras instalaciones, platica con nuestros directivos y descubre 
            por qué somos la mejor opción para la educación de tu hijo.
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
