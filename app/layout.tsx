import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
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
  title: {
    default: 'Instituto Buckingham | Educación bilingüe con calidez y estructura',
    template: '%s | Instituto Buckingham',
  },
  description:
    'Instituto Buckingham acompaña a cada familia con una propuesta cálida, bilingüe y cuidadosamente diseñada para Maternal, Preescolar y Primaria en San Luis Potosí.',
  keywords: [
    'Instituto Buckingham',
    'colegio bilingüe en San Luis Potosí',
    'maternal',
    'preescolar',
    'primaria',
    'admisiones escolares',
  ],
  openGraph: {
    title: 'Instituto Buckingham',
    description:
      'Una comunidad educativa cálida, moderna y confiable para Maternal, Preescolar y Primaria.',
    locale: 'es_MX',
    type: 'website',
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
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
