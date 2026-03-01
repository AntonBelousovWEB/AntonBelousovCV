import Link from "next/link";
import { personSchema } from "./lib/utils/shemas/schema";

export default function CVTemplate() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl">
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>

      <header
        className="mb-12 md:mb-24"
        itemScope
        itemType="https://schema.org/Person"
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
          itemProp="name"
        >
          Anton Belousov
        </h1>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-2"
          itemProp="jobTitle"
        >
          Strong Middle Frontend Developer (React, Next.js, TypeScript)
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
          Frontend Developer with 5+ years of commercial experience building
          scalable React / Next.js applications. Specialized in performance
          optimization (Core Web Vitals 90+), technical SEO, and frontend
          architecture (FSD). Delivered measurable results including 40–60% load
          time reduction and 30–50% PageSpeed improvements. Experience in
          refactoring legacy systems, building projects from scratch, API
          integration (REST / GraphQL), and leading frontend teams (5
          developers). Focus: clean architecture, measurable impact,
          business-oriented frontend engineering.
        </p>
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
              Frontend Team Lead
            </h4>
            <span
              className="text-gray-600 text-lg md:text-xl lg:text-2xl"
              itemProp="startDate"
              content="2025-07"
            >
              July 2025 — <meta itemProp="endDate" content="present" />
              Present
            </span>
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
              Leading team of 5 frontend engineers (code review, sprint
              planning, architecture decisions)
            </li>
            <li>
              Designed modular architecture for multi-module Web3 trading
              platform (React, Vite, TypeScript)
            </li>
            <li>Implemented core trading UI features</li>
            <li>
              Standardized development processes (ESLint, code guidelines, PR
              review workflow)
            </li>
            <li>
              Reduced technical debt via refactoring legacy modules
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
              className="text-gray-600 text-lg md:text-xl lg:text-2xl"
              itemProp="startDate"
              content="2025-02"
            >
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
              Built frontend from scratch using React, Next.js, Tailwind
            </li>
            <li>
              Implemented technical SEO (meta tags, Schema.org, SSR)
            </li>
            <li>
              Improved Core Web Vitals to 90+
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
              <meta itemProp="startDate" content="2024-01" />
              January 2024 — <meta itemProp="endDate" content="2025-01" />
              January 2025
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
              Developed complex UI modules (dynamic forms, tables, maps) using
              React & TypeScript
            </li>
            <li>
              Reduced page load time by 40% via caching and code splitting
            </li>
            <li>
              Refactored legacy codebase and improved maintainability
            </li>
            <li>
              Conducted SEO optimization (Lighthouse, PageSpeed, Schema.org)
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
              ~6 months
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
              October 2020 — <meta itemProp="endDate" content="2021-10" />
              October 2021
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
            <li>Delivered production-ready solution independently</li>
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
          Achievements
        </h3>
        <ul
          className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-4"
          itemProp="description"
        >
          <li>Developed custom FSD-based architecture for scalable frontends</li>
          <li>Mentored 2 junior developers</li>
          <li>
            Contributed to legacy-to-modern architecture migration
          </li>
        </ul>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              Core
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>React, Next.js, TypeScript, JavaScript (ES6+)</li>
              <li>Redux / RTK, GraphQL, REST API</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              Architecture
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>Feature-Sliced Design (FSD)</li>
              <li>Modular architecture, code refactoring</li>
              <li>Scalable frontend systems</li>
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
              <li>Technical SEO, Schema.org</li>
              <li>Code splitting, lazy loading, caching</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">
              Tooling
            </h4>
            <ul
              className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5"
              itemProp="knowsAbout"
            >
              <li>Webpack, Vite, Git, CI/CD, GitHub Actions, Vercel</li>
              <li>Jest, React Testing Library</li>
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
