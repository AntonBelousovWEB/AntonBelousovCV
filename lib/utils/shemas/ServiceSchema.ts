export const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://anton-belousov-cv.vercel.app/#frontend-development-service",
  name: "Frontend Development, Technical SEO, and Performance Optimization",
  description:
    "React, Next.js, and TypeScript frontend development focused on technical SEO, Core Web Vitals, scalable architecture, and maintainable product interfaces.",
  url: "https://anton-belousov-cv.vercel.app",
  provider: {
    "@type": "Person",
    "@id": "https://anton-belousov-cv.vercel.app/#person",
    name: "Anton Belousov",
    jobTitle: "Senior Frontend Engineer",
    email: "polpoltrop228@gmail.com",
    telephone: "+380663208556",
    url: "https://anton-belousov-cv.vercel.app",
    sameAs: [
      "https://github.com/AntonBelousovWEB",
      "https://www.linkedin.com/in/anton-belousov-1803042b1/",
      "https://anton-belousov-cv.vercel.app/blog",
    ],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Ukraine",
    },
    {
      "@type": "Continent",
      name: "Europe",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  serviceType: [
    "Frontend Development",
    "Technical SEO",
    "Performance Optimization",
    "React Development",
    "Next.js Development",
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "USD",
      minPrice: 40,
      maxPrice: 60,
      unitText: "hour",
    },
    availability: "https://schema.org/InStock",
    validFrom: "2026-07-01",
    priceValidUntil: "2027-12-31",
    itemOffered: {
      "@type": "Service",
      name: "Frontend Development",
      description:
        "Custom frontend solutions using React, Next.js, and TypeScript with technical SEO and performance tuning.",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Frontend Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "SPA Development",
        itemOffered: {
          "@type": "Service",
          name: "React SPA Development",
          description:
            "Responsive React application development with maintainable architecture and baseline SEO setup.",
        },
      },
      {
        "@type": "Offer",
        name: "Next.js SSR Solution",
        itemOffered: {
          "@type": "Service",
          name: "Next.js SSR Development",
          description:
            "Server-rendered Next.js application with technical SEO, metadata, structured data, and Core Web Vitals optimization.",
        },
      },
    ],
  },
};
