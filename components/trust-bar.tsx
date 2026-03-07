import { Globe, Award, BookOpen, Shield, MapPin } from "lucide-react"

const trustItems = [
  {
    icon: Globe,
    title: "Educación Bilingüe",
    description: "Inglés desde maternal",
  },
  {
    icon: Award,
    title: "+30 Años de Experiencia",
    description: "Fundado en 1993",
  },
  {
    icon: BookOpen,
    title: "Cambridge & Pearson",
    description: "Certificaciones internacionales",
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Cuidado y calidez",
  },
  {
    icon: MapPin,
    title: "San Luis Potosí",
    description: "Lomas 1a Sección",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-primary/20 bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-secondary">{item.title}</h3>
              <p className="mt-1 text-xs text-secondary/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
