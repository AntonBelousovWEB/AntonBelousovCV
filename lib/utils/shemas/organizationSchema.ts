export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://anton-belousov-cv.vercel.app/#professional-service",
  name: "Anton Belousov Frontend Development",
  url: "https://anton-belousov-cv.vercel.app",
  logo: "https://anton-belousov-cv.vercel.app/img/favicons/android-icon-144x144.png",
  description:
    "Independent frontend development, technical SEO, and web performance services by Anton Belousov.",
  sameAs: [
    "https://github.com/AntonBelousovWEB",
    "https://www.linkedin.com/in/anton-belousov-1803042b1/",
    "https://anton-belousov-cv.vercel.app/blog",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Professional inquiries",
    email: "polpoltrop228@gmail.com",
    telephone: "+380663208556",
    areaServed: ["UA", "EU", "US"],
    availableLanguage: [
      {
        "@type": "Language",
        name: "English",
      },
      {
        "@type": "Language",
        name: "Ukrainian",
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kyiv",
    addressCountry: "Ukraine",
  },
  founder: {
    "@type": "Person",
    "@id": "https://anton-belousov-cv.vercel.app/#person",
    name: "Anton Belousov",
    jobTitle: "Senior Frontend Engineer",
    url: "https://anton-belousov-cv.vercel.app",
    sameAs: [
      "https://github.com/AntonBelousovWEB",
      "https://www.linkedin.com/in/anton-belousov-1803042b1/",
      "https://anton-belousov-cv.vercel.app/blog",
    ],
  },
};
