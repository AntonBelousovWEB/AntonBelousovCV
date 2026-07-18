import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Head } from "@/components/seo/Head";

const siteUrl = "https://anton-belousov-cv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anton Belousov - Senior JavaScript and Frontend Developer CV",
    template: "%s | Anton Belousov",
  },
  description:
    "Anton Belousov is a Senior JavaScript and Frontend Developer specializing in React, Next.js, TypeScript, technical SEO, performance optimization, and scalable frontend architecture.",
  keywords: [
    "Anton Belousov",
    "Anton Belousov developer",
    "Anton Belousov CV",
    "Anton Belousov JavaScript",
    "senior JavaScript developer",
    "senior frontend developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "technical SEO",
    "Core Web Vitals",
    "frontend team lead",
  ],
  authors: [{ name: "Anton Belousov" }],
  creator: "Anton Belousov",
  publisher: "Anton Belousov",
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Anton Belousov - Senior Frontend Engineer CV",
    locale: "en_US",
    description:
      "React, Next.js, and TypeScript frontend developer focused on performance, technical SEO, architecture, and team leadership.",
    siteName: "Anton Belousov CV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anton Belousov - Senior Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anton Belousov - Senior JavaScript and Frontend Developer CV",
    description:
      "Senior JavaScript, React, Next.js, and TypeScript frontend developer focused on performance, technical SEO, architecture, and team leadership.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Head>{children}</Head>;
}
