import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Desde que mi hija entró a Buckingham, hemos visto un cambio increíble. Su inglés ha mejorado muchísimo y cada día llega a casa emocionada por lo que aprendió.",
    author: "María González",
    role: "Mamá de Sofía, Preescolar",
  },
  {
    quote: "Lo que más valoramos es el trato personal. Las maestras conocen a cada niño por su nombre y entienden sus necesidades. Eso no se encuentra en cualquier escuela.",
    author: "Carlos Martínez",
    role: "Papá de Diego, Primaria",
  },
  {
    quote: "Mis tres hijos han pasado por Buckingham y cada uno ha tenido una experiencia maravillosa. La calidad educativa y el ambiente familiar son incomparables.",
    author: "Ana Rodríguez",
    role: "Mamá de tres egresados",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Lo que dicen nuestras familias
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            La confianza de las familias es nuestro mayor reconocimiento.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-card p-8 shadow-sm ring-1 ring-primary/20"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/30" />
              <p className="relative leading-relaxed text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-primary/20 pt-6">
                <p className="font-semibold text-secondary">{testimonial.author}</p>
                <p className="text-sm text-secondary/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
