import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/studio/',
          '/_next/',
          '/my-account',
          '/checkout',
          '/cart',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/studio/',
          '/_next/',
          '/my-account',
          '/checkout',
          '/cart',
        ],
      },
    ],
    sitemap: 'https://sharpspaceltd.com/sitemap.xml',
  }
}
