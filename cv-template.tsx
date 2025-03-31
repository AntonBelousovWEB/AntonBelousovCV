export default function CVTemplate() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl">
      <header className="mb-12 md:mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Anton Belousov</h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-6 md:mb-12">Middle Frontend Developer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <p className="mb-3">
              <strong>Email:</strong> polpoltrop228@gmail.com
            </p>
            <p className="mb-3">
              <strong>Phone:</strong> +380663208556
            </p>
            <p className="mb-3">
              <strong>Location:</strong> Ukraine, Kyiv
            </p>
          </div>
          <div>
            <p className="mb-3">
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/AntonBelousovWEB" className="text-blue-600 hover:underline">
                github.com/AntonBelousovWEB
              </a>
            </p>
            <p className="mb-3">
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/anton-belousov-1803042b1/" className="text-blue-600 hover:underline">
                linkedin.com/in/anton-belousov-1803042b1
              </a>
            </p>
          </div>
        </div>
      </header>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Professional Summary
        </h3>
        <p className="text-justify leading-relaxed">
          Frontend developer with experience since 2020, specializing in creating high-performance and SEO-optimized web
          applications. My journey began as a freelancer, which provided me with a solid foundation in diverse project
          requirements and client communication. I've since progressed to successful roles in international companies,
          where I've refined my expertise in modern JavaScript frameworks and frontend architecture. I possess deep
          knowledge in code optimization, performance tuning, and technical SEO implementation that delivers measurable
          results. My approach combines technical excellence with user-centered design principles to create exceptional
          digital experiences. I've conducted numerous technical audits that have significantly improved application
          performance and code quality. I continuously enhance my skills by staying current with emerging technologies
          and industry best practices, allowing me to deliver innovative solutions to complex challenges. With my
          technical expertise and optimization skills, I can substantially elevate the quality and performance of any
          project I work on.
        </p>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Experience
        </h3>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Middle Frontend Developer</h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">February 2025 — Present</span>
          </div>
          <h5 className="text-gray-700 italic mb-3 md:mb-5">Linken Sphere (ls2.app)</h5>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>
              Development of the front-end part of the project from scratch, including architecture and integration with
              API
            </li>
            <li>
              Technical SEO optimization: improving indexing, working with meta tags and structured data (Schema.org)
            </li>
            <li>
              Improving application performance: code refactoring, implementing lazy loading and optimizing resource
              loading
            </li>
            <li>Implementing modern technologies (React, Next.js, Tailwind CSS) to improve UX/UI</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Middle Frontend Developer</h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">January 2024 — January 2025</span>
          </div>
          <h5 className="text-gray-700 italic mb-3 md:mb-5">Your Price Booking OÜ (yourpricebooking.com)</h5>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Development of complex interface sections: dynamic forms, customized tables and interactive maps</li>
            <li>
              Optimization of application operation: reduction of loading time by 40% through caching and code splitting
            </li>
            <li>Refactoring of legacy code and improvement of project architecture</li>
            <li>Conducting SEO audits and technical optimization (Lighthouse, Google PageSpeed)</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Junior Frontend Developer</h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">~6 months</span>
          </div>
          <h5 className="text-gray-700 italic mb-3 md:mb-5">[Company name hidden by agreement]</h5>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Working in a team with senior developers, participating in code reviews and sprint planning</li>
            <li>Developing user interfaces using React and Redux</li>
            <li>Integrating with REST API and setting up authentication</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Frontend Developer (Freelance)</h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">October 2020 — October 2021</span>
          </div>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Implementation of web applications for clients from various industries</li>
            <li>Mastering modern frameworks: React, Next.js, Vue.js</li>
            <li>Setting up CI/CD (GitHub Actions, Vercel) and deploying projects</li>
          </ul>
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Key Projects
        </h3>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Frontend Developer</h4>
            <span className="text-gray-600 text-lg md:text-xl lg:text-2xl">Current project</span>
          </div>
          <h5 className="text-gray-700 italic mb-3 md:mb-5">Kyiv European University (e-u.com.ua)</h5>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Complete development of the frontend part from scratch</li>
            <li>Architectural solutions based on FSD, developed by me</li>
            <li>Performance Optimization: Lighthouse, Speed Page in 90+</li>
            <li>UX improvement: adaptive layout and interactive elements</li>
          </ul>
        </div>

        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 md:mb-4">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold">SEO audits and optimization</h4>
          </div>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Conducted 10+ audits for clients, improved PageSpeed Insights by 30-50%</li>
            <li>Implementation of structured data and micro-markup to increase CTR</li>
          </ul>
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">Languages</h4>
            <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3 (SCSS)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">Frameworks & Libraries</h4>
            <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
              <li>React</li>
              <li>Next.js</li>
              <li>Redux, RTK</li>
              <li>Tailwind CSS</li>
              <li>Material UI, Ant Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">Development Tools</h4>
            <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
              <li>Webpack, Vite</li>
              <li>Babel, ESLint, Prettier</li>
              <li>Git (GitHub, GitLab)</li>
              <li>Figma, Postman</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">Testing</h4>
            <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
              <li>Jest</li>
              <li>React Testing Library</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-5 text-xl sm:text-2xl lg:text-3xl">SEO & Optimization</h4>
            <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
              <li>Lighthouse</li>
              <li>Google PageSpeed</li>
              <li>Schema.org</li>
              <li>WhatWG</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Office Programs
        </h3>
        <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <li>
            <strong>Microsoft Office:</strong> Word, Excel, PowerPoint
          </li>
          <li>
            <strong>Google Workspace:</strong> Docs, Sheets, Slides
          </li>
          <li>
            <strong>Project Management:</strong> Jira
          </li>
          <li>
            <strong>Documentation:</strong> Notion, Obsidian
          </li>
        </ul>
      </section>

      <section className="mb-12 md:mb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Soft Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Analytical thinking and solving complex problems</li>
            <li>Effective communication and teamwork</li>
          </ul>
          <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
            <li>Time management and meeting deadlines</li>
            <li>Self-learning and adaptation to new technologies</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-4 md:mb-8">
          Additional Information
        </h3>
        <ul className="list-disc pl-5 md:pl-8 space-y-3 md:space-y-5">
          <li>Proficiency in English (Intermediate)</li>
          <li>Hobbies: open source, reading technical literature</li>
        </ul>
      </section>
    </div>
  )
}

