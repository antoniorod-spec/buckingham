"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Actividades de aprendizaje en el aula",
    caption: "Aprendizaje interactivo",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Celebración del Día del Niño",
    caption: "Celebraciones especiales",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Clase de educación física",
    caption: "Desarrollo físico",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Taller de arte y creatividad",
    caption: "Expresión artística",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Actividades en el patio de recreo",
    caption: "Juego y socialización",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Proyecto de ciencias",
    caption: "Exploración científica",
  },
]

export function SchoolLifeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="vida-escolar" className="bg-primary/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Vida en Buckingham
          </h2>
          <p className="mt-4 text-lg text-secondary/70">
            Momentos que construyen recuerdos y aprendizajes para toda la vida.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative mt-12 md:hidden">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-primary/20">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/80 to-transparent p-4">
              <p className="text-center text-sm font-medium text-background">
                {galleryImages[currentIndex].caption}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full border-primary/30 text-secondary hover:bg-primary/10">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full border-primary/30 text-secondary hover:bg-primary/10">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="mt-12 hidden grid-cols-3 gap-4 md:grid">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-primary/20 ${
                idx === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${idx === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-background">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full gallery */}
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="gap-2 border-primary text-secondary hover:bg-primary/10">
            <Link href="/vida-escolar/galeria">
              Ver galería completa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
