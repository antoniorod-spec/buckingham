'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { navigation } from '@/lib/content'
import { cn } from '@/lib/utils'

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/6 hover:text-secondary">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] overflow-y-auto border-secondary/12 bg-background sm:w-[380px]"
      >
        <SheetHeader className="border-b border-border/60 px-0 pb-5 pt-6">
          <div className="flex justify-center">
            <Image
              src="/images/Logo-Web-Buckingham.webp"
              alt="Instituto Buckingham"
              width={260}
              height={82}
              className="h-16 w-auto object-contain"
            />
          </div>
          <SheetTitle className="sr-only">Menú principal</SheetTitle>
          <SheetDescription className="sr-only">
            Navegación principal del sitio Instituto Buckingham
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-6 pt-6">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
              const isActive = isActivePath(pathname, item.href)

              if (item.submenu?.length) {
                const isExpanded = openSubmenu === item.name

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenSubmenu(isExpanded ? null : item.name)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-base font-medium transition-colors hover:bg-secondary/6 hover:text-secondary',
                        isActive ? 'bg-secondary/7 text-secondary' : 'text-secondary/82'
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    </button>
                    {isExpanded ? (
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/35 pl-4">
                        {item.submenu.map((subitem) => {
                          const isSubActive = isActivePath(pathname, subitem.href)

                          return (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                'rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary/6 hover:text-secondary',
                                isSubActive ? 'bg-secondary/7 text-secondary' : 'text-secondary/70'
                              )}
                            >
                              {subitem.name}
                            </Link>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-secondary/6 hover:text-secondary',
                    isActive ? 'bg-secondary/7 text-secondary' : 'text-secondary/82'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-[#BE9F0F]">
            <Link href="/admisiones#formulario" onClick={() => setIsOpen(false)}>
              Solicitar informes
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
