import Link from "next/link";

export default function CVTemplate() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl">
      <header
        className="mb-12 md:mb-24"
        itemScope
        itemType="https://schema.org/Person"
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1"
          itemProp="name"
        >
          Anton Belousov
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mb-2">
          Web Development • tech.SEO • System Design • Mentoring
        </p>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-2"
          itemProp="jobTitle"
        >
          Senior Frontend Engineer
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 mb-6 md:mb-12">
          Performance & Technical SEO | Scalable Architecture | 5+ years
          experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <p className="mb-3">
              <strong>Email:</strong>{" "}
              <span itemProp="email">polpoltrop228@gmail.com</span>
            </p>
            <p className="mb-3">
              <strong>Phone:</strong>{" "}
              <span itemProp="telephone">+380663208556</span>
            </p>
            <p
              className="mb-3"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <strong>Location:</strong>{" "}
              <span itemProp="addressCountry">Ukraine</span>,{" "}
              <span itemProp="addressLocality">Kyiv</span>
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong>GitHub:</strong>{" "}
              <a
                hrefLang="en"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AntonBelousovWEB"
                className="text-blue-600 hover:underline"
                itemProp="url"
              >
                github.com/AntonBelousovWEB
              </a>
            </p>
            <p className="mb-3">
              <strong>LinkedIn:</strong>{" "}
              <a
                hrefLang="en"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anton-belousov-1803042b1/"
                className="text-blue-600 hover:underline"
                itemProp="sameAs"
              >
                linkedin.com/in/anton-belousov-1803042b1
              </a>
            </p>
            <p className="mb-3">
              <strong>Blog:</strong>{" "}
              <Link
                hrefLang="en"
                href="/blog"
                className="text-blue-600 hover:underline"
                itemProp="sameAs"
              >
                Personal Tech Blog
              </Link>
            </p>
          </div>
        </div>
      </header>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Professional Summary
        </h3>
        <p className="text-justify leading-relaxed" itemProp="description">
          Senior Frontend Engineer with 5+ years of experience building
          production React, Next.js, and TypeScript applications with a strong
          focus on performance, technical SEO, and scalable frontend
          architecture. Led a 5-person frontend team, built products from
          scratch, refactored legacy systems, and delivered measurable
          improvements: Core Web Vitals 90+, 30–50% PageSpeed growth, and
          40–60% load-time reduction. Recent work includes Three.js/WebGL
          interfaces, GLSL shaders, JavaScript runtime optimization, and
          adaptive UI for graphics-heavy products across desktop and mobile
          devices.
        </p>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Impact Highlights
        </h3>
        <ul
          className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-4"
          itemProp="description"
        >
          <li>
            Led a frontend team of 5 engineers: code review, sprint planning,
            architecture decisions, and delivery quality
          </li>
          <li>
            Improved Core Web Vitals to 90+ and raised PageSpeed scores by
            30–50% through rendering, loading, and SEO optimization
          </li>
          <li>
            Reduced page load time by 40–60% using caching, code splitting, lazy
            loading, and legacy code refactoring
          </li>
          <li>
            Built SEO-ready React/Next.js products from scratch with SSR,
            metadata, Schema.org, and production deployment
          </li>
          <li>
            Developed performance-sensitive Three.js/WebGL interfaces with GLSL
            shaders and adaptive layouts for cross-device stability
          </li>
        </ul>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Experience
        </h3>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/OrganizationRole"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="roleName"
            >
              Senior JavaScript Engineer
            </h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              <meta itemProp="startDate" content="2026-03" />
              March 2026 — <meta itemProp="endDate" content="2026-08" />
              August 2026
            </span>
          </div>
          <h5
            className="text-gray-700 italic mb-3 md:mb-5"
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <span itemProp="name">24 Play LLC</span>
          </h5>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="responsibilities"
          >
            <li>
              Developed interactive product interfaces using Three.js, WebGL,
              and GLSL shaders, focusing on rendering stability, visual quality,
              and browser performance
            </li>
            <li>
              Optimized JavaScript execution paths, rendering logic, and asset
              loading for graphics-heavy screens across desktop and mobile
              devices
            </li>
            <li>
              Improved adaptive layouts for interaction-heavy UI, ensuring
              consistent behavior across different viewport sizes, device
              capabilities, and input types
            </li>
            <li>
              Worked close to the browser rendering pipeline, GPU-accelerated
              UI, and real-device performance constraints to keep products
              responsive under load
            </li>
          </ul>
        </div>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/OrganizationRole"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="roleName"
            >
              Frontend Team Lead
            </h4>
            <span
              className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              <meta itemProp="startDate" content="2025-07" />
              July 2025 — <meta itemProp="endDate" content="2026-07" />
              July 2026</span>
          </div>
          <h5
            className="text-gray-700 italic mb-3 md:mb-5"
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <span itemProp="name">Palace NFT — TMA</span>
          </h5>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="responsibilities"
          >
            <li>
              Led a team of 5 frontend engineers, owning code review, sprint
              planning, technical decisions, and frontend delivery quality
            </li>
            <li>
              Designed modular React/Vite/TypeScript architecture for a
              multi-module Web3 trading platform, separating shared UI, business
              logic, and feature modules
            </li>
            <li>
              Delivered core trading interface flows with a focus on responsive
              UX, maintainability, and predictable state management
            </li>
            <li>
              Standardized frontend processes: ESLint rules, code guidelines,
              PR review workflow, and reusable development patterns
            </li>
            <li>
              Reduced technical debt by refactoring legacy modules and improving
              component boundaries, making the codebase easier to extend and
              onboard into
            </li>
          </ul>
        </div>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/OrganizationRole"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="roleName"
            >
              Middle Frontend Developer
            </h4>
            <span
              className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              <meta itemProp="startDate" content="2025-02" />
              February 2025 — <meta itemProp="endDate" content="2025-10" />
              October 2025
            </span>
          </div>
          <h5
            className="text-gray-700 italic mb-3 md:mb-5"
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <span itemProp="name">Linken Sphere (ls2.app)</span>
          </h5>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="responsibilities"
          >
            <li>
              Built a production frontend from scratch using React, Next.js, and
              Tailwind, covering page structure, reusable components, routing,
              and deployment readiness
            </li>
            <li>
              Implemented technical SEO foundation: SSR-friendly pages,
              metadata, canonical URLs, Schema.org structured data, and
              crawlable content architecture
            </li>
            <li>
              Improved Core Web Vitals to 90+ through rendering optimization,
              code splitting, asset loading improvements, and layout stability
              fixes
            </li>
            <li>
              Created responsive UI flows aligned with product requirements
              while keeping the codebase maintainable for future feature
              development
            </li>
          </ul>
        </div>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/OrganizationRole"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="roleName"
            >
              Middle Frontend Developer
            </h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              <meta itemProp="startDate" content="2024-03" />
              March 2024 — <meta itemProp="endDate" content="2025-02" />
              February 2025
            </span>
          </div>
          <h5
            className="text-gray-700 italic mb-3 md:mb-5"
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <span itemProp="name">
              Your Price Booking OÜ (yourpricebooking.com)
            </span>
          </h5>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="responsibilities"
          >
            <li>
              Developed complex React/TypeScript UI modules: dynamic forms, data
              tables, maps, booking flows, and reusable interface components
            </li>
            <li>
              Reduced page load time by 40% through caching, code splitting,
              bundle optimization, and lazy loading
            </li>
            <li>
              Refactored legacy frontend modules, improving maintainability,
              readability, and feature delivery speed
            </li>
            <li>
              Conducted technical SEO and performance improvements using
              Lighthouse, PageSpeed Insights, Core Web Vitals, and Schema.org
            </li>
          </ul>
        </div>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/OrganizationRole"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="roleName"
            >
              Junior Frontend Developer
            </h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              <meta itemProp="startDate" content="2023-01" />
              January 2023 — <meta itemProp="endDate" content="2023-07" />
              July 2023
            </span>
          </div>
          <h5
            className="text-gray-700 italic mb-3 md:mb-5"
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <span itemProp="name">[Company name hidden by agreement]</span>
          </h5>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="responsibilities"
          >
            <li>
              Working in a team with senior developers, participating in code
              reviews and sprint planning
            </li>
            <li>Developing user interfaces using React and Redux</li>
            <li>Integrating with REST API and setting up authentication</li>
          </ul>
        </div>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/OrganizationRole"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="roleName"
            >
              Frontend Developer (Freelance)
            </h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              <meta itemProp="startDate" content="2020-10" />
              October 2020 — <meta itemProp="endDate" content="2022-07" />
              July 2022
            </span>
          </div>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="responsibilities"
          >
            <li>
              Implementation of web applications for clients from various
              industries
            </li>
            <li>Mastering modern frameworks: React, Next.js, Vue.js</li>
            <li>
              Setting up CI/CD (GitHub Actions, Vercel) and deploying projects
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Selected Projects
        </h3>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h4
              className="text-xl sm:text-2xl lg:text-3xl font-semibold"
              itemProp="name"
            >
              Kyiv European University (e-u.com.ua)
            </h4>
            <span className="text-gray-600 text-lg md:text-xl">
              January 2025 — June 2025
            </span>
          </div>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="description"
          >
            <li>Developed internal student system using React</li>
            <li>Built modular frontend structure and implemented core UI logic</li>
            <li>Integrated frontend with backend API</li>
            <li>
              Delivered production-ready solution independently, owning the
              frontend architecture from implementation to deployment readiness
            </li>
          </ul>
        </div>

        <div
          className="mb-8 md:mb-12"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <h4
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3"
            itemProp="name"
          >
            Technical SEO & Performance Audits (Freelance)
          </h4>
          <ul
            className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
            itemProp="description"
          >
            <li>Conducted 10+ audits for commercial projects</li>
            <li>Improved PageSpeed scores by 30–50%</li>
            <li>Implemented structured data (Schema.org)</li>
          </ul>
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              Frontend
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>JavaScript ES6+, TypeScript, React, Next.js, Vite</li>
              <li>Tailwind CSS, HTML5, CSS3, responsive UI</li>
              <li>Three.js, WebGL, GLSL shaders, graphics-heavy UI</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              State & Data
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>Redux Toolkit, Apollo Client, GraphQL, REST API</li>
              <li>Authentication flows, API integration, data-heavy UI</li>
              <li>Reusable components and predictable state management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              Performance & SEO
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>Core Web Vitals, Lighthouse, PageSpeed Insights</li>
              <li>Technical SEO, SSR/SSG, Schema.org, canonical URLs</li>
              <li>
                JavaScript runtime optimization, rendering optimization, code
                splitting, lazy loading, caching
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              Architecture & Leadership
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>Feature-Sliced Design, modular architecture, refactoring</li>
              <li>Code review, mentoring, sprint planning, delivery ownership</li>
              <li>Git, CI/CD, GitHub Actions, Vercel, Jest, RTL</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Additional Information
        </h3>
        <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
          <li
            itemProp="knowsLanguage"
            itemScope
            itemType="https://schema.org/Language"
          >
            <span itemProp="name">English</span> —{" "}
            <span itemProp="proficiencyLevel">B1/B2</span>
          </li>
          <li>
            <Link
              hrefLang="en"
              href="/blog"
              className="text-blue-600 hover:underline"
              itemProp="sameAs"
            >
              Technical blog
            </Link>
          </li>
        </ul>
      </section>

      <footer className="mt-20 pt-8 border-t border-gray-300 text-center text-gray-400">
        <p>Anton Belousov · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
