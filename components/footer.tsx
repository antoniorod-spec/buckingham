import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, MessageCircle } from "lucide-react"

const nosotrosLinks = [
  { name: "Historia", href: "/nosotros/historia" },
  { name: "Filosofía educativa", href: "/nosotros/filosofia" },
  { name: "Misión, visión y valores", href: "/nosotros/mision-vision-valores" },
  { name: "Equipo", href: "/nosotros/equipo" },
  { name: "Instalaciones", href: "/nosotros/instalaciones" },
]

const ofertaLinks = [
  { name: "Maternal", href: "/oferta-educativa/maternal" },
  { name: "Preescolar", href: "/oferta-educativa/preescolar" },
  { name: "Primaria", href: "/oferta-educativa/primaria" },
]

const admisionesLinks = [
  { name: "Proceso de admisión", href: "/admisiones/proceso" },
  { name: "Requisitos", href: "/admisiones/requisitos" },
  { name: "Agenda tu visita", href: "/admisiones/agenda-visita" },
  { name: "Preguntas frecuentes", href: "/admisiones/faq" },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-buckingham.png"
                alt="Instituto Buckingham"
                width={48}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
              <span className="font-serif text-xl font-semibold text-background">
                Instituto Buckingham
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              Más de 30 años formando niños felices, seguros y preparados para el futuro con educación bilingüe de calidad.
            </p>
            
            {/* Contact Info */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  Lomas 1a Sección<br />
                  San Luis Potosí, S.L.P.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+524441234567" className="text-sm text-background/70 hover:text-background">
                  (444) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                <a href="https://wa.me/524441234567" className="text-sm text-background/70 hover:text-background">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@buckingham.edu.mx" className="text-sm text-background/70 hover:text-background">
                  info@buckingham.edu.mx
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  Lunes a Viernes<br />
                  7:30 AM - 3:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Nosotros */}
          <div>
            <h3 className="font-semibold text-background">Nosotros</h3>
            <ul className="mt-4 space-y-2">
              {nosotrosLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Oferta Educativa */}
          <div>
            <h3 className="font-semibold text-background">Oferta Educativa</h3>
            <ul className="mt-4 space-y-2">
              {ofertaLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="mt-6 font-semibold text-background">Admisiones</h3>
            <ul className="mt-4 space-y-2">
              {admisionesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h3 className="font-semibold text-background">Síguenos</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary hover:text-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary hover:text-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-6 aspect-video overflow-hidden rounded-lg bg-background/10 ring-1 ring-primary/20">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-primary/60" />
                  <p className="mt-2 text-xs text-background/40">Mapa de ubicación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Instituto Buckingham. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/50 hover:text-primary">
                Aviso de Privacidad
              </Link>
              <Link href="#" className="text-sm text-background/50 hover:text-primary">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
