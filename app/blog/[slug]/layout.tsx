import type { Metadata, Viewport } from "next";
import { getPostBySlug } from "@/lib/blog-utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Anton Belousov's Blog",
      description: "The requested blog post could not be found.",
    };
  }

  const baseUrl = "https://anton-belousov-cv.vercel.app";
  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Anton Belousov's Blog`,
    description: post.excerpt,
    authors: [{ name: "Anton Belousov", url: baseUrl }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Anton Belousov"],
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
