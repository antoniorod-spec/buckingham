import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Baby, Blocks, BookOpen } from "lucide-react"

const levels = [
  {
    icon: Baby,
    title: "Maternal",
    ages: "1 a 3 años",
    description: "Primeros pasos en un ambiente de amor y estimulación temprana. Desarrollo sensorial, motriz y social en un espacio seguro y cálido.",
    image: "/images/maternal.jpg",
    href: "/oferta-educativa/maternal",
  },
  {
    icon: Blocks,
    title: "Preescolar",
    ages: "3 a 6 años",
    description: "Aprendizaje a través del juego con introducción al sistema bilingüe. Desarrollamos habilidades cognitivas, sociales y emocionales.",
    image: "/images/preescolar.jpg",
    href: "/oferta-educativa/preescolar",
  },
  {
    icon: BookOpen,
    title: "Primaria",
    ages: "6 a 12 años",
    description: "Formación académica sólida y bilingüe con valores. Preparamos a nuestros alumnos para los retos del futuro con bases firmes.",
    image: "/images/primaria.jpg",
    href: "/oferta-educativa/primaria",
  },
]

export function EducationLevels() {
  return (
    <section id="niveles" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Oferta Educativa
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            Acompañamos a tu hijo en cada etapa de su desarrollo con programas diseñados para su edad y necesidades.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {levels.map((level) => (
            <Card
              key={level.title}
              className="group overflow-hidden border-primary/20 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={level.image}
                  alt={`Nivel ${level.title} en Instituto Buckingham`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-lg">
                  <level.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-xl text-secondary">{level.title}</CardTitle>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-secondary">
                    {level.ages}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-secondary/70">
                  {level.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group/btn gap-2 px-0 text-primary hover:bg-transparent hover:text-primary/80">
                  <Link href={level.href}>
                    Conocer más
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
