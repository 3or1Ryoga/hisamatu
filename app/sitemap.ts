import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hisamatsu-dental.com'

  // サイトの主要ページのリスト
  const pages = [
    '/',
    '/about',
    '/services',
    '/first-visit',
    '/access',
  ]

  const pageUrls = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const, // 'monthly' を const アサーション
    priority: page === '/' ? 1.0 : 0.8, // ホームページを最優先
  }))

  return [...pageUrls]
}
