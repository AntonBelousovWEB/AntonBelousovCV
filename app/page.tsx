import CVTemplate from "../cv-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anton Belousov - Middle Frontend Developer | CV",
  description:
    "Professional CV of Anton Belousov, a Middle Frontend Developer with expertise in React, Next.js, and performance optimization.",
  openGraph: {
    images: [
      {
        url: "https://anton-belousov-cv.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anton Belousov - Frontend Developer",
      },
    ],
  },
}

export default function Home() {
  return (
    <main>
      <CVTemplate />
    </main>
  )
}

