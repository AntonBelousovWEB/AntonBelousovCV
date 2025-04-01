import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import SchemaMarkup from "@/components/SchemaMarkup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anton Belousov - Frontend Development Blog",
  description:
    "Technical blog by Anton Belousov, sharing insights, tutorials, and best practices on frontend development, React, Next.js, performance optimization, and modern web technologies.",
  keywords:
    "frontend blog, react tutorials, next.js tips, web optimization, SEO techniques, Anton Belousov, frontend development, javascript blog, web performance",
  authors: [{ name: "Anton Belousov" }],
  creator: "Anton Belousov",
  publisher: "Anton Belousov",
  robots: "index, follow",

  openGraph: {
    type: "website",
    url: "https://anton-belousov-cv.vercel.app/blog",
    title: "Anton Belousov - Frontend Development Blog",
    description:
      "Technical blog sharing insights and tutorials on frontend development, React, Next.js, and web optimization.",
    siteName: "Anton Belousov Blog",
    images: [
      {
        url: "https://anton-belousov-cv.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anton Belousov - Frontend Development Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anton Belousov - Frontend Development Blog",
    description:
      "Technical blog sharing insights and tutorials on frontend development, React, Next.js, and web optimization.",
    images: ["https://anton-belousov-cv.vercel.app/og-image.png"],
  },

  alternates: {
    canonical: "https://anton-belousov-cv.vercel.app/blog",
  },
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
}

export default function BlogLayout({
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



import '../globals.css'