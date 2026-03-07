import { Heart, Globe, Users, Sparkles, Brain, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Ambiente Cálido y Seguro",
    description: "Un espacio donde cada niño se siente valorado, protegido y libre para explorar y aprender con confianza.",
  },
  {
    icon: Globe,
    title: "Desarrollo Bilingüe",
    description: "Exposición temprana al inglés con metodologías probadas que preparan a nuestros alumnos para un mundo globalizado.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Grupos reducidos que permiten conocer y atender las necesidades individuales de cada estudiante.",
  },
  {
    icon: Sparkles,
    title: "Educación en Valores",
    description: "Formamos personas íntegras con valores sólidos: respeto, responsabilidad, honestidad y empatía.",
  },
  {
    icon: Brain,
    title: "Desarrollo Integral",
    description: "Estimulamos todas las áreas del desarrollo: cognitiva, física, emocional, social y artística.",
  },
  {
    icon: GraduationCap,
    title: "Equipo Docente Experimentado",
    description: "Maestros comprometidos, en constante actualización, que aman lo que hacen y lo transmiten a sus alumnos.",
  },
]

export function WhyBuckingham() {
  return (
    <section className="bg-primary/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            ¿Por qué las familias eligen Buckingham?
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            Más de 30 años construyendo una comunidad educativa basada en la confianza, el cariño y la excelencia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/20 transition-all duration-300 hover:shadow-md hover:ring-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 transition-colors group-hover:bg-primary/30">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-secondary">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
