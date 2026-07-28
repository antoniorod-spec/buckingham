import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { JsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/content'
import { defaultOgImage, schoolSchema, siteUrl, websiteSchema } from '@/lib/seo'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Colegio bilingüe en San Luis Potosí | Instituto Buckingham',
    template: '%s | Instituto Buckingham',
  },
  description:
    'Colegio bilingüe privado en San Luis Potosí con Maternal, Preescolar y Primaria. Grupos reducidos, atención personalizada y más de 30 años de trayectoria. Admisiones abiertas.',
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Colegio bilingüe en San Luis Potosí | Instituto Buckingham',
    description:
      'Maternal, Preescolar y Primaria con educación bilingüe y atención personalizada en San Luis Potosí. Más de 30 años de trayectoria.',
    url: siteUrl,
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colegio bilingüe en San Luis Potosí | Instituto Buckingham',
    description:
      'Maternal, Preescolar y Primaria con educación bilingüe y atención personalizada en San Luis Potosí.',
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: '#FCFAF5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[schoolSchema, websiteSchema]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
