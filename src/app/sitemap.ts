import { MetadataRoute } from 'next';
import { db } from '@/lib/db';
import { posts } from '@/schema/posts';
import { eq } from 'drizzle-orm';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pulseai.biz.id';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/jasa-web`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#tentang-kami`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#solusi`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#fitur`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#harga`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  try {
    const publishedPosts = db
      .select({
        slug: posts.slug,
        category: posts.category,
        updatedAt: posts.updatedAt,
        publishedAt: posts.publishedAt,
      })
      .from(posts)
      .where(eq(posts.status, 'published'))
      .all();

    const postRoutes: MetadataRoute.Sitemap = publishedPosts.map((p) => {
      const folder = p.category === 'news' ? 'berita' : 'blog';
      return {
        url: `${baseUrl}/${folder}/${p.slug}`,
        lastModified: new Date(p.updatedAt || p.publishedAt || now),
        changeFrequency: 'monthly',
        priority: p.category === 'news' ? 0.85 : 0.8,
      };
    });

    return [...staticRoutes, ...postRoutes];
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error);
    return staticRoutes;
  }
}
