import type React from "react";
import type { Metadata, Viewport } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Frontend Development Blog",
  description:
    "Technical articles by Anton Belousov about frontend development, React, Next.js, performance optimization, technical SEO, and modern web architecture.",
  keywords: [
    "frontend development blog",
    "React articles",
    "Next.js articles",
    "technical SEO",
    "web performance",
    "Anton Belousov",
  ],
  authors: [{ name: "Anton Belousov" }],
  creator: "Anton Belousov",
  publisher: "Anton Belousov",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/blog",
    title: "Frontend Development Blog | Anton Belousov",
    locale: "en_US",
    description:
      "Articles about frontend development, React, Next.js, web performance, and technical SEO.",
    siteName: "Anton Belousov Blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anton Belousov - Frontend Development Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Frontend Development Blog | Anton Belousov",
    description:
      "Articles about frontend development, React, Next.js, web performance, and technical SEO.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
