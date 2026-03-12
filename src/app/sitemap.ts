import { MetadataRoute } from 'next'
import { getCategories } from '@/lib/api'
import sanityClient from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sharpspaceltd.com'

  // Static pages (public, indexable pages only)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mini-shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs/blog-grid`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Dynamic category pages
  let categoryPages: MetadataRoute.Sitemap = []
  try {
    const categories = await getCategories()
    categoryPages = categories.map((category) => ({
      url: `${baseUrl}/mini-shop/${category.slug.current}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.85,
    }))
  } catch (error) {
    console.error('Sitemap: failed to fetch categories', error)
  }

  // Dynamic product pages (minimal fields only)
  let productPages: MetadataRoute.Sitemap = []
  try {
    const products: { slug: { current: string }; createdAt?: string }[] =
      await sanityClient.fetch(`*[_type == "product"]{ slug, createdAt }`)
    productPages = products.map((product) => ({
      url: `${baseUrl}/product-details/${product.slug.current}`,
      lastModified: product.createdAt ? new Date(product.createdAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch (error) {
    console.error('Sitemap: failed to fetch products', error)
  }

  return [...staticPages, ...categoryPages, ...productPages]
}
