import type React from "react";
import type { Metadata, Viewport } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Anton Belousov Frontend Engineering Blog",
  description:
    "Senior frontend engineering articles by Anton Belousov about JavaScript, React, Next.js, TypeScript, performance optimization, technical SEO, and modern web architecture.",
  keywords: [
    "Anton Belousov blog",
    "Anton Belousov frontend",
    "Anton Belousov JavaScript",
    "frontend development blog",
    "senior frontend engineering",
    "React articles",
    "Next.js articles",
    "TypeScript articles",
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
    title: "Anton Belousov Frontend Engineering Blog",
    locale: "en_US",
    description:
      "Articles by Anton Belousov about senior frontend development, JavaScript, React, Next.js, TypeScript, web performance, and technical SEO.",
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
    title: "Anton Belousov Frontend Engineering Blog",
    description:
      "Senior frontend engineering articles about JavaScript, React, Next.js, TypeScript, web performance, and technical SEO.",
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
