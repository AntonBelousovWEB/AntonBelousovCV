export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anton Belousov",
  jobTitle: "Middle Frontend Developer",
  telephone: "+380663208556",
  email: "polpoltrop228@gmail.com",
  url: "https://antonbelousov.dev",
  sameAs: ["https://github.com/AntonBelousovWEB", "https://www.linkedin.com/in/anton-belousov-1803042b1/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kyiv",
    addressCountry: "Ukraine",
  },
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "SEO Optimization",
    "Web Performance",
  ],
  workLocation: {
    "@type": "Place",
    name: "Linken Sphere",
  },
}

