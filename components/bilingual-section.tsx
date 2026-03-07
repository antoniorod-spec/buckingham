import Image from "next/image"
import { CheckCircle, Award } from "lucide-react"

const bilingualFeatures = [
  "Exposición temprana al inglés desde Maternal",
  "Maestros nativos y certificados en idiomas",
  "Programa estructurado con metodología Cambridge",
  "Actividades lúdicas que refuerzan el aprendizaje",
  "Preparación para certificaciones internacionales",
]

export function BilingualSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-primary/20">
              <Image
                src="/images/bilingual-classroom.jpg"
                alt="Clase de inglés en Instituto Buckingham"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl ring-1 ring-primary/20 md:-right-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-secondary">Cambridge & Pearson</p>
                <p className="text-sm text-secondary/60">Certificaciones reconocidas</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Educación Bilingüe
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Preparamos a tu hijo para un mundo sin fronteras
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary/70">
              Nuestro programa bilingüe está diseñado para que los niños adquieran el inglés de forma natural 
              y progresiva, adaptado a cada nivel educativo y respaldado por certificaciones internacionales.
            </p>

            <div className="mt-8 space-y-4">
              {bilingualFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-primary/10 p-6 ring-1 ring-primary/20">
              <p className="text-sm leading-relaxed text-secondary/80">
                <span className="font-semibold text-secondary">En Maternal y Preescolar: </span>
                Introducimos el inglés a través del juego, canciones y actividades sensoriales que despiertan 
                la curiosidad y el gusto por el idioma.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary/80">
                <span className="font-semibold text-secondary">En Primaria: </span>
                Fortalecemos las cuatro habilidades del idioma con un programa estructurado que prepara a 
                nuestros alumnos para obtener certificaciones Cambridge y Pearson.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
