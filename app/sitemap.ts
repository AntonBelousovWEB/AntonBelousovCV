import type { MetadataRoute } from "next";
import { blogTopics, getAllPosts } from "@/lib/blog-utils";

const siteUrl = "https://anton-belousov-cv.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const topics = blogTopics.map((topic) => ({
    url: `${siteUrl}/blog/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...topics,
    ...posts,
  ];
}
