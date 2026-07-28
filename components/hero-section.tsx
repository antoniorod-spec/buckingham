import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageCircle, GraduationCap, Heart, Users, Globe } from "lucide-react"

const trustChips = [
  { icon: Calendar, label: "Desde 1993" },
  { icon: Globe, label: "Sistema bilingüe" },
  { icon: GraduationCap, label: "Maternal, Preescolar y Primaria" },
  { icon: Heart, label: "Atención personalizada" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 to-background pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <Badge className="mb-4 rounded-full border-primary/30 bg-primary/20 px-4 py-1 text-sm font-medium text-secondary">
              Más de 30 años formando el futuro
            </Badge>
            
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-secondary sm:text-5xl lg:text-6xl">
              <span className="text-balance">Donde el aprendizaje se vive con </span>
              <span className="text-primary">calidez</span>
              <span className="text-balance"> y </span>
              <span className="text-primary">excelencia</span>
            </h1>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary/70">
              En Instituto Buckingham brindamos educación bilingüe de calidad en un ambiente seguro y afectuoso. 
              Formamos niños felices, seguros y preparados para el futuro desde maternal hasta primaria.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-secondary text-background hover:bg-secondary/90">
                <Link href="/contacto">
                  <Calendar className="h-4 w-4" />
                  Agendar visita
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-primary text-secondary hover:bg-primary/10">
                <Link href="/contacto">
                  <MessageCircle className="h-4 w-4" />
                  Solicitar informes
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-secondary shadow-sm ring-1 ring-primary/20"
                >
                  <chip.icon className="h-4 w-4 text-primary" />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-primary/20">
              <Image
                src="/images/hero-students.jpg"
                alt="Estudiantes felices en Instituto Buckingham"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-xl ring-1 ring-primary/20 md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">500+</p>
                  <p className="text-sm text-secondary/60">Familias nos eligen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
