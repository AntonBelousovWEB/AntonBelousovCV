export const ServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["Service", "Offer"],
    "name": "Frontend Development Services",
    "description": "Professional frontend development with React, Next.js, and SEO optimization. Specializing in high-performance, accessible, and scalable web applications for global clients.",
    "url": "https://antonbelousovweb.com/services",
    "provider": {
      "@type": "Person",
      "name": "Anton Belousov",
      "jobTitle": "Strong Middle Frontend Developer (React, Next.js, TypeScript)",
      "email": "polpoltrop228@gmail.com",
      "telephone": "+380663208556",
      "url": "https://github.com/AntonBelousovWEB",
      "sameAs": [
        "https://github.com/AntonBelousovWEB",
        "https://www.linkedin.com/in/anton-belousov-1803042b1/",
        "https://antonbelousovweb.com/blog"
      ],
      "description": "Frontend Developer with 5+ years building scalable React/Next.js apps. Performance (Core Web Vitals 90+), technical SEO, FSD architecture. Leads frontend teams.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kyiv",
        "addressCountry": "Ukraine"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Frontend Developer",
        "responsibilities": "Development of high-performance web applications, technical SEO optimization, code refactoring, and performance improvements.",
        "skills": [
          "React", "Next.js", "TypeScript", "JavaScript", "Redux", "GraphQL", "REST API",
          "WebGL", "GLSL", "Service Worker", "Web Worker", "FSD", "Core Web Vitals",
          "Technical SEO", "System Design", "Webpack", "Vite", "Git", "CI/CD", "Jest"
        ]
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Kyiv European University"
      },
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "English",
          "proficiencyLevel": "B1/B2"
        },
        {
          "@type": "Language",
          "name": "Ukrainian",
          "proficiencyLevel": "Native"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "40-60",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-04-01",
      "businessFunction": "https://purl.org/goodrelations/v1#ProvideService",
      "eligibleCustomerType": "https://schema.org/Business",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Ukraine"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Continent",
          "name": "Europe"
        }
      ],
      "itemOffered": {
        "@type": "Service",
        "name": "Frontend Development",
        "description": "Custom frontend solutions using React, Next.js, and TypeScript with technical SEO and performance tuning."
      }
    },
    "serviceType": "Frontend Development, SEO Optimization, Performance Tuning",
    "termsOfService": "https://antonbelousovweb.com/terms",
    "serviceOutput": {
      "@type": "WebApplication",
      "name": "Custom Web Solution",
      "browserRequirements": "HTML5, CSS3, JavaScript, SEO, React, Next.js, TypeScript, Redux, GraphQL, Tailwind CSS, Material UI, Ant Design, Webpack, Vite, Babel, ESLint, Prettier, Git, Figma, Postman, Jest, React Testing Library, Lighthouse, Google PageSpeed Insights, Schema.org, WhatWG, W3C standards",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All modern browsers"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Packages",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Basic Package",
          "itemListElement": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "40",
            "itemOffered": {
              "@type": "Service",
              "name": "SPA Development",
              "description": "Single Page Application built with React. Includes responsive layout and basic SEO setup."
            }
          }
        },
        {
          "@type": "OfferCatalog",
          "name": "Advanced Package",
          "itemListElement": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "60",
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js SSR Solution",
              "description": "Server-side rendered Next.js application with advanced SEO and Lighthouse optimization."
            }
          }
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Startups, Agencies, Small Businesses, Freelancers",
      "geographicArea": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": ["UA", "US", "EU"]
        }
      }
    }      
}