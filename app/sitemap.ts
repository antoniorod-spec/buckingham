import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/admisiones', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/maternal', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/preescolar', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/primaria', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/oferta-educativa', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contacto', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/vida-escolar', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/nosotros', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/nosotros/historia', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/nosotros/mision-vision', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/nosotros/valores', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/nosotros/equipo', priority: 0.5, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
