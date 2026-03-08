import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navigation, siteConfig } from '@/lib/content'

const aboutLinks = navigation.find((item) => item.name === 'Nosotros')?.submenu ?? []
const academicLinks = navigation.find((item) => item.name === 'Oferta educativa')?.submenu ?? []

export function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-secondary text-secondary-foreground">
      <div className="container-shell py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.85fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label={siteConfig.name}>
              <Image
                src="/images/Logo-Web-Buckingham.webp"
                alt={siteConfig.name}
                width={220}
                height={72}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary-foreground/78 sm:text-base">
              Una comunidad educativa cálida, bilingüe y bien estructurada para familias que buscan cercanía, confianza y continuidad formativa.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/admisiones#formulario"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE9F0F]"
              >
                Solicitar informes
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-full border border-white/18 px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-white/10"
              >
                Agendar visita
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Nosotros
            </h3>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-secondary-foreground/76 transition-colors hover:text-secondary-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Oferta educativa
            </h3>
            <ul className="mt-5 space-y-3">
              {academicLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-secondary-foreground/76 transition-colors hover:text-secondary-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-secondary-foreground/76">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-sm text-secondary-foreground/76 transition-colors hover:text-secondary-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-secondary-foreground/76 transition-colors hover:text-secondary-foreground">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
            <div className="flex gap-5">
              <Link href="#" className="transition-colors hover:text-secondary-foreground">
                Aviso de privacidad
              </Link>
              <Link href="#" className="transition-colors hover:text-secondary-foreground">
                Políticas de admisión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
