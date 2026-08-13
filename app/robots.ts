import type { MetadataRoute } from "next";

const siteUrl = "https://anton-belousov-cv.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/urls.txt`],
    host: siteUrl,
  };
}
