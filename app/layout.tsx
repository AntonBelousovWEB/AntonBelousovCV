import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Head } from "@/components/Head";

export const metadata: Metadata = {
  title: "Anton Belousov - Middle Frontend Developer | CV",
  description:
    "Professional CV of Anton Belousov, a Middle Frontend Developer with expertise in React, Next.js, and performance optimization. Specializing in creating high-performance and SEO-optimized web applications.",
  keywords:
    "frontend developer, react developer, next.js developer, web optimization, SEO specialist, Anton Belousov, CV, resume, Ukraine developer",
  authors: [{ name: "Anton Belousov" }],
  creator: "Anton Belousov",
  publisher: "Anton Belousov",
  robots: "NOODP",

  openGraph: {
    type: "profile",
    url: "https://anton-belousov-cv.vercel.app",
    title: "Anton Belousov - Middle Frontend Developer",
    locale: "en_US",
    description:
      "Professional CV of Anton Belousov, a Middle Frontend Developer with expertise in React, Next.js, and performance optimization.",
    siteName: "Anton Belousov CV",
    images: [
      {
        url: "https://anton-belousov-cv.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anton Belousov - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anton Belousov - Middle Frontend Developer",
    description:
      "Professional CV of Anton Belousov, a Middle Frontend Developer with expertise in React, Next.js, and performance optimization.",
    images: ["https://anton-belousov-cv.vercel.app/og-image.png"],
  },

  alternates: {
    canonical: "https://anton-belousov-cv.vercel.app/",
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
