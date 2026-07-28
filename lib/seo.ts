import type { Metadata } from 'next'
import { siteConfig } from './content'

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.institutobuckingham.edu.mx'
).replace(/\/$/, '')

export const defaultOgImage = {
  url: '/images/og-buckingham.jpg',
  width: 1200,
  height: 630,
  alt: 'Fachada del Instituto Buckingham en San Luis Potosí',
}

interface PageMetaInput {
  title: string
  description: string
  path: string
  image?: string
}

/**
 * Construye la metadata de una página con canonical y Open Graph absolutos.
 * `title` entra en el template del layout, así que va sin el sufijo de marca.
 */
export function pageMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const url = `${siteUrl}${path}`
  const ogImage = image ? { ...defaultOgImage, url: image } : defaultOgImage

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'es_MX',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage.url],
    },
  }
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: siteConfig.street,
  addressLocality: siteConfig.city,
  addressRegion: siteConfig.state,
  postalCode: siteConfig.postalCode,
  addressCountry: siteConfig.country,
}

/**
 * School hereda de EducationalOrganization y de LocalBusiness, así que cubre
 * tanto el panel de conocimiento como las señales de negocio local.
 */
export const schoolSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  '@id': `${siteUrl}/#school`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  description: `Colegio bilingüe privado en ${siteConfig.city} con Maternal, Preescolar y Primaria. Educación personalizada desde ${siteConfig.foundingYear}.`,
  url: siteUrl,
  logo: `${siteUrl}/images/logo-buckingham.png`,
  image: `${siteUrl}${defaultOgImage.url}`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: siteConfig.foundingYear,
  address: postalAddress,
  areaServed: {
    '@type': 'City',
    name: siteConfig.city,
  },
  sameAs: [siteConfig.social.facebook],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '15:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Oferta educativa',
    itemListElement: [
      { '@type': 'Course', name: 'Maternal', description: 'Educación inicial para niños de 1 a 3 años.' },
      { '@type': 'Course', name: 'Preescolar', description: 'Educación preescolar bilingüe para niños de 3 a 6 años.' },
      { '@type': 'Course', name: 'Primaria', description: 'Educación primaria bilingüe para niños de 6 a 12 años.' },
    ].map((course) => ({
      '@type': 'Offer',
      itemOffered: {
        ...course,
        provider: { '@id': `${siteUrl}/#school` },
      },
    })),
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteConfig.name,
  inLanguage: 'es-MX',
  publisher: { '@id': `${siteUrl}/#school` },
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
