import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Instituto Buckingham | Educación Bilingüe en San Luis Potosí',
  description: 'Colegio bilingüe privado con más de 30 años de experiencia en San Luis Potosí. Maternal, Preescolar y Primaria. Formación integral con calidez y excelencia académica.',
  keywords: ['colegio bilingüe', 'san luis potosí', 'educación preescolar', 'primaria bilingüe', 'maternal', 'instituto buckingham'],
  openGraph: {
    title: 'Instituto Buckingham | Educación Bilingüe en San Luis Potosí',
    description: 'Colegio bilingüe privado con más de 30 años de experiencia. Maternal, Preescolar y Primaria.',
    locale: 'es_MX',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#C8A951',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
