"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Nosotros",
    href: "/nosotros",
    submenu: [
      { name: "Historia", href: "/nosotros/historia" },
      { name: "Misión y Visión", href: "/nosotros/mision-vision" },
      { name: "Valores", href: "/nosotros/valores" },
      { name: "Equipo Docente", href: "/nosotros/equipo" },
      { name: "Instalaciones", href: "/nosotros/instalaciones" },
    ],
  },
  {
    name: "Oferta Educativa",
    href: "/oferta-educativa",
    submenu: [
      { name: "Maternal", href: "/maternal" },
      { name: "Preescolar", href: "/preescolar" },
      { name: "Primaria", href: "/primaria" },
      { name: "Programa Bilingüe", href: "/programa-bilingue" },
    ],
  },
  {
    name: "Admisiones",
    href: "/admisiones",
    submenu: [
      { name: "Proceso de Admisión", href: "/admisiones/proceso" },
      { name: "Requisitos", href: "/admisiones/requisitos" },
      { name: "Agenda tu Visita", href: "/admisiones/agenda-visita" },
      { name: "Preguntas Frecuentes", href: "/admisiones/faq" },
    ],
  },
  {
    name: "Vida Escolar",
    href: "/vida-escolar",
    submenu: [
      { name: "Galería", href: "/vida-escolar/galeria" },
      { name: "Eventos", href: "/vida-escolar/eventos" },
      { name: "Actividades", href: "/vida-escolar/actividades" },
      { name: "Noticias", href: "/vida-escolar/noticias" },
    ],
  },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-buckingham.png"
            alt="Instituto Buckingham"
            width={52}
            height={60}
            className="h-16 w-auto"
          />
          <div className="hidden sm:block">
            <span className="font-serif text-xl font-semibold text-secondary">Instituto Buckingham</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-secondary/80 hover:bg-primary/10 hover:text-secondary data-[state=open]:bg-primary/10">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[220px] gap-1 p-2">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subitem.href}
                                className="block rounded-md px-3 py-2 text-sm text-secondary/80 transition-colors hover:bg-primary/10 hover:text-secondary"
                              >
                                {subitem.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-secondary/80 transition-colors hover:bg-primary/10 hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden bg-primary text-secondary hover:bg-primary/90 sm:inline-flex">
            <Link href="/admisiones/agenda-visita">Solicitar informes</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-secondary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto border-primary/20 sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-buckingham.png"
                    alt="Instituto Buckingham"
                    width={48}
                    height={56}
                    className="h-14 w-auto"
                  />
                  <span className="font-serif text-xl font-semibold text-secondary">Instituto Buckingham</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-secondary/80 transition-colors hover:bg-primary/10 hover:text-secondary"
                          >
                            {item.name}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                openSubmenu === item.name && "rotate-180"
                              )}
                            />
                          </button>
                          {openSubmenu === item.name && (
                            <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="rounded-md px-3 py-2 text-sm text-secondary/70 transition-colors hover:bg-primary/10 hover:text-secondary"
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-md px-3 py-2 text-base font-medium text-secondary/80 transition-colors hover:bg-primary/10 hover:text-secondary"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <Button asChild className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/admisiones/agenda-visita" onClick={() => setIsOpen(false)}>
                    Solicitar informes
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
