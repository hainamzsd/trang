import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://woolforest.shop' // Replace with your actual domain
  
  // Static pages with proper priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/shipping`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/return`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/term`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
  ]

  // Product categories based on your folder structure
  const productCategories = [
    { name: 'LenAcrylic', slug: 'len-acrylic' },
    { name: 'LenBamboo', slug: 'len-bamboo' },
    { name: 'LenCotton', slug: 'len-cotton' },
    { name: 'LenMohair', slug: 'len-mohair' },
    { name: 'LenPha', slug: 'len-pha' },
    { name: 'LenSilk', slug: 'len-silk' },
    { name: 'LenWool', slug: 'len-wool' }
  ]

  const categoryPages: MetadataRoute.Sitemap = productCategories.map(category => ({
    url: `${baseUrl}/products/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Generate individual product pages
  const productPages: MetadataRoute.Sitemap = []
  let productId = 1
  
  productCategories.forEach((category) => {
    for (let i = 1; i <= 24; i++) {
      productPages.push({
        url: `${baseUrl}/products/${productId}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
      productId++
    }
  })

  // Blog/Content pages
  const contentPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/post1`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/post2`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  return [
    ...staticPages,
    ...categoryPages,
    ...productPages,
    ...contentPages,
  ]
} 