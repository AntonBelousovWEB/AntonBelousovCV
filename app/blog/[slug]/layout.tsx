import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "../../globals.css"
import SchemaMarkup from "@/components/SchemaMarkup"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Anton Belousov's Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Anton Belousov's Blog`,
    description: post.excerpt,
    keywords: `${post.title.toLowerCase().split(" ").join(", ")}, frontend development, anton belousov blog`,

    openGraph: {
      type: "article",
      url: `https://anton-belousov-cv.vercel.app/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Anton Belousov"],
      images: [
        {
          url: "https://anton-belousov-cv.vercel.app/og-image.png",
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
      images: ["https://anton-belousov-cv.vercel.app/og-image.png"],
    },

    alternates: {
      canonical: `https://anton-belousov-cv.vercel.app/blog/${post.slug}`,
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className={inter.className}>
        {children}
        <SchemaMarkup />
      </body>
    </html>
  )
}



import '../../globals.css'
import { getPostBySlug } from "@/lib/blog-utils"
