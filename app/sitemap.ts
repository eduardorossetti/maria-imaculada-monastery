import type { MetadataRoute } from "next"
import { getPosts } from "@/lib/notion"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clarissasmarilia.com.br"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/formacao`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/vocacao`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/quem-somos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/nosso-mosteiro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/obra`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contate-nos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ]

  let posts: Awaited<ReturnType<typeof getPosts>> = []
  try {
    posts = await getPosts(100)
  } catch {
    posts = []
  }

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/postagens/${post.id}`,
    lastModified: post.publishedDate ? new Date(post.publishedDate) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...postPages]
}
