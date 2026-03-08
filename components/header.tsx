'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { MobileMenu } from '@/components/MobileMenu'
import { Button } from '@/components/ui/button'
import { navigation, siteConfig } from '@/lib/content'
import { cn } from '@/lib/utils'

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/96 shadow-[0_12px_34px_-30px_rgba(12,29,55,0.24)] backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="border-b border-secondary/6 bg-[#8A5C1E] text-white">
        <div className="container-shell flex min-h-11 items-center justify-between gap-3 py-2 text-xs font-medium">
          <p className="truncate">{siteConfig.admissionsLabel}</p>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="hidden text-white/86 transition-colors hover:text-white sm:inline-flex"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="container-shell flex h-[5.6rem] items-center justify-between gap-5">
        <Link
          href="/"
          className="flex shrink-0 items-center py-1"
          aria-label={siteConfig.name}
        >
          <Image
            src="/images/Logo-Web-Buckingham.webp"
            alt={siteConfig.name}
            width={300}
            height={92}
            priority
            className="h-[3.35rem] w-auto object-contain sm:h-[3.75rem] lg:h-[4.15rem]"
          />
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {navigation.map((item) => {
              const isActive = isActivePath(pathname, item.href)

              if (item.submenu?.length) {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        'h-11 rounded-2xl border border-transparent bg-transparent px-4 text-[0.96rem] font-medium text-foreground/72 hover:bg-[#F5EDDA] hover:text-foreground data-[state=open]:bg-[#F5EDDA] data-[state=open]:text-foreground',
                        isActive && 'bg-[#6E4716] text-white hover:bg-[#6E4716] hover:text-white data-[state=open]:bg-[#6E4716] data-[state=open]:text-white'
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-3 w-[18.5rem] rounded-2xl border border-border bg-white p-2.5 shadow-[0_22px_45px_-30px_rgba(12,29,55,0.28)]">
                      <ul className="grid gap-0.5">
                        {item.submenu.map((subitem) => {
                          const isSubActive = isActivePath(pathname, subitem.href)

                          return (
                            <li key={subitem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subitem.href}
                                  className={cn(
                                    'block whitespace-nowrap rounded-xl px-5 py-3 text-[0.96rem] font-medium text-foreground/72 transition-colors hover:bg-[#F8F4EA] hover:text-foreground',
                                    isSubActive && 'bg-[#F8F4EA] text-foreground'
                                  )}
                                >
                                  {subitem.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'inline-flex h-11 items-center justify-center rounded-2xl px-4 py-2 text-[0.96rem] font-medium text-foreground/72 transition-colors hover:bg-[#F5EDDA] hover:text-foreground',
                        isActive && 'bg-[#6E4716] text-white hover:bg-[#6E4716] hover:text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden min-w-[11.25rem] rounded-[1.1rem] bg-primary px-6 text-[0.98rem] text-primary-foreground hover:bg-[#BE9F0F] sm:inline-flex">
            <Link href="/admisiones#formulario">Solicitar informes</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
