import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const milestones = [
  {
    year: "1993",
    title: "Fundación",
    description: "Abrimos nuestras puertas con Maternal y Preescolar, con el sueño de ofrecer una educación de calidad en un ambiente cálido y familiar.",
  },
  {
    year: "2000",
    title: "Consolidación",
    description: "Tras años de crecimiento, nos consolidamos como una institución de referencia en San Luis Potosí, reconocida por nuestra excelencia educativa.",
  },
  {
    year: "2007",
    title: "Primaria",
    description: "Inauguramos nuestra sección de Primaria, completando la oferta educativa y permitiendo que nuestros alumnos continúen su formación con nosotros.",
  },
  {
    year: "Hoy",
    title: "+30 Años de Historia",
    description: "Continuamos renovándonos y adaptándonos a los nuevos tiempos, manteniendo siempre nuestra esencia: educación con calidez y excelencia.",
  },
]

export function HistoryTimeline() {
  return (
    <section id="nosotros" className="bg-primary/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Nuestra Historia
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            Más de tres décadas dedicados a formar el futuro de San Luis Potosí.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-primary/30 md:left-1/2 md:-translate-x-1/2 md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 md:px-8">
                  <div
                    className={`rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/20 ${
                      idx % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                    } md:max-w-md`}
                  >
                    <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-secondary">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:top-8 md:block" />

                {/* Spacer for other side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Link to full history */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 border-primary text-secondary hover:bg-primary/10">
            <Link href="/nosotros/historia">
              Conoce más sobre nuestra historia
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
