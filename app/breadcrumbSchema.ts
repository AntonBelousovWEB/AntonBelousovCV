export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "name": "Site Breadcrumbs",
  "description": "Breadcrumb navigation for Anton Belousov's CV and blog pages",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://anton-belousov-cv.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://anton-belousov-cv.vercel.app/blog"
    }
  ]
};