import type { MetadataRoute } from 'next'

const BASE = 'https://www.adaysu.com'

const ROUTES = [
  { path: '', priority: 1.0, changeFreq: 'monthly' },
  { path: '/urunler', priority: 0.9, changeFreq: 'weekly' },
  { path: '/urunler/aday-su-premium', priority: 0.8, changeFreq: 'monthly' },
  { path: '/hizmetler', priority: 0.8, changeFreq: 'monthly' },
  { path: '/hakkimizda', priority: 0.7, changeFreq: 'yearly' },
  { path: '/iletisim', priority: 0.7, changeFreq: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const locales = ['', '/en']

  for (const route of ROUTES) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE}${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq as MetadataRoute.Sitemap[0]['changeFrequency'],
        priority: route.priority,
      })
    }
  }

  return entries
}
