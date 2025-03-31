import CVTemplate from "../cv-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anton Belousov - Middle Frontend Developer | CV",
  description:
    "Professional CV of Anton Belousov, a Middle Frontend Developer with expertise in React, Next.js, and performance optimization.",
}

export default function Home() {
  return (
    <main>
      <CVTemplate />
    </main>
  )
}

