import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Target, Eye, Compass, Heart, BookOpen, Globe } from "lucide-react"
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: "Misión y visión",
  description: "La misión, visión y filosofía educativa de Instituto Buckingham. Formamos personas íntegras con excelencia académica y valores humanos.",
  path: '/nosotros/mision-vision',
})

export default function MisionVisionPage() {
  return (
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-primary/20 bg-card">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Nosotros</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Misión y Visión</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--brown)] to-[var(--brown-dark)] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Compass className="h-4 w-4" />
                Nuestra Filosofía
              </span>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 text-balance">
                Misión y Visión
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Los principios que guían nuestra labor educativa y el futuro que construimos 
                juntos cada día en Instituto Buckingham.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    Nuestra Misión
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-foreground">Formar personas íntegras</strong> con excelencia académica, 
                    dominio del idioma inglés y sólidos valores humanos, en un ambiente de calidez, 
                    respeto y atención personalizada.
                  </p>
                  <p>
                    Desarrollamos en cada alumno las competencias necesarias para enfrentar los retos 
                    del siglo XXI, fomentando el pensamiento crítico, la creatividad y la responsabilidad 
                    social, mientras cultivamos su curiosidad natural y amor por el aprendizaje.
                  </p>
                  <p>
                    Trabajamos en estrecha colaboración con las familias, reconociendo que la educación 
                    es una tarea compartida donde padres y escuela se complementan para lograr el 
                    desarrollo pleno de cada niño.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <blockquote className="relative">
                      <span className="absolute -top-4 -left-2 text-6xl text-primary/30 font-heading">"</span>
                      <p className="text-xl font-medium text-foreground leading-relaxed pl-6">
                        Creemos que cada niño tiene un potencial único que merece ser descubierto, 
                        nutrido y celebrado. Nuestra misión es ser el espacio donde ese potencial florece.
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-primary/20 bg-gradient-to-br from-[rgba(127,87,26,0.05)] to-[rgba(109,74,22,0.10)]">
                  <CardContent className="p-8">
                    <blockquote className="relative">
                      <span className="absolute -top-4 -left-2 text-6xl text-primary/30 font-heading">"</span>
                      <p className="text-xl font-medium text-foreground leading-relaxed pl-6">
                        Imaginamos un futuro donde nuestros egresados lideran con integridad, 
                        contribuyen a su comunidad y transforman positivamente el mundo que los rodea.
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    Nuestra Visión
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-foreground">Ser el colegio de referencia</strong> en educación 
                    bilingüe en San Luis Potosí, reconocido por la calidad de nuestra formación académica, 
                    el éxito de nuestros egresados y el ambiente familiar que nos distingue.
                  </p>
                  <p>
                    Aspiramos a ser una comunidad educativa innovadora que evoluciona constantemente 
                    para ofrecer las mejores herramientas pedagógicas, sin perder la calidez y el 
                    trato personalizado que ha sido nuestra marca durante más de 30 años.
                  </p>
                  <p>
                    Nos visualizamos como formadores de ciudadanos globales: personas bilingües, 
                    con pensamiento crítico, valores sólidos y la capacidad de adaptarse y contribuir 
                    positivamente a un mundo en constante cambio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Pilares de Nuestra Filosofía
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los fundamentos que sostienen nuestra propuesta educativa y guían cada decisión que tomamos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Educación con Amor
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creemos que el aprendizaje florece en un ambiente de cariño, respeto y confianza. 
                    Cada niño es recibido con afecto y acompañado en su desarrollo con paciencia y dedicación.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Excelencia Académica
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mantenemos estándares académicos rigurosos, con metodologías actualizadas y 
                    certificaciones internacionales que garantizan la calidad de nuestra enseñanza.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Visión Global
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Preparamos a nuestros alumnos para un mundo interconectado, desarrollando 
                    competencias bilingües y una mentalidad abierta que valora la diversidad cultural.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[var(--brown-dark)] text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
              Comparte Nuestra Visión
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Si nuestra filosofía educativa resuena contigo, te invitamos a conocernos 
              y descubrir cómo podemos ser parte de la educación de tu hijo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/admisiones">Iniciar Proceso de Admisión</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-white text-[var(--brown-dark)] hover:bg-[#F6F0E4]">
                <Link href="/nosotros/valores">Conoce Nuestros Valores</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
  )
}
