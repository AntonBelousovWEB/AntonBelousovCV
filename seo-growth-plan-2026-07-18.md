# SEO Growth Plan for Anton Belousov CV and Blog

Date: 2026-07-18  
Goal: grow organic visibility for `Anton Belousov`, `senior frontend developer`, `senior JavaScript developer`, `React developer`, `TypeScript developer`, `frontend architecture`, and article-level long-tail queries.  
Budget: free implementation only.

## North Star

The realistic path to outsized growth is not chasing `developer` or `javascript` as naked head terms. Those are too broad and dominated by platforms, docs, job boards, and high-authority publishers.

The path is:

1. Own the branded entity: `Anton Belousov`, `Anton Belousov developer`, `Anton Belousov CV`, `Anton Belousov React developer`.
2. Build topical authority around senior frontend engineering.
3. Use topic hubs to collect search intent.
4. Use strong internal links to push authority to CV and best articles.
5. Use free external profiles and community distribution to create entity corroboration.
6. Measure in Search Console and only then spend DataForSEO credits on validation.

## Current State

Already strong:

- Static Next.js pages.
- Sitemap and robots.
- Canonicals on CV, blog, and posts.
- BlogPosting and BreadcrumbList JSON-LD.
- ProfilePage, Person, WebSite schema.
- RSS feed.
- Related posts.
- Topic hubs:
  - `/blog/topics/senior-frontend-developer`
  - `/blog/topics/react-architecture`
  - `/blog/topics/javascript`
  - `/blog/topics/typescript`
  - `/blog/topics/technical-seo`
- Topic hubs now include visible answer blocks, coverage sections, related topics, FAQ, CollectionPage schema, ItemList schema, and FAQPage schema.
- IndexNow key and submission script are prepared.
- Blog post JavaScript payload was reduced by removing client-side syntax highlighting.
- RSS is generated automatically before build.
- Weekly tracking CSV and post-deploy checklist are prepared.
- DataForSEO baseline:
  - `anton belousov react developer`: site ranked #1.
  - `anton belousov`: site not visible in top 8.
  - best article opportunities: React DI, React ViewModel, frontend architecture patterns, TypeScript interview problems, frontend feature flags.

Weak spots:

- No verified post-deploy indexing workflow documented.
- Topic hubs are useful but still thin; they should become real landing pages.
- Internal contextual links inside article bodies are still too sparse.
- Blog post JS payload is heavy enough to deserve performance attention.
- External entity corroboration depends on GitHub/LinkedIn/dev profiles being consistent.
- No free weekly measurement loop yet.

## Phase 0: Deploy and Indexing Loop

Priority: P0  
Expected impact: required foundation  
Cost: free

Tasks:

1. Deploy the current SEO changes.
2. Submit `/sitemap.xml` in Google Search Console.
3. Submit `/sitemap.xml` in Bing Webmaster Tools.
4. Inspect these URLs manually in Google Search Console URL Inspection:
   - `/`
   - `/blog`
   - `/blog/topics/senior-frontend-developer`
   - `/blog/topics/react-architecture`
   - `/blog/topics/javascript`
   - `/blog/topics/typescript`
   - `/blog/topics/technical-seo`
5. In Bing Webmaster Tools, submit the same URLs manually or via IndexNow.
6. Confirm that robots.txt exposes the sitemap.

Definition of done:

- Google Search Console sees the sitemap.
- Bing Webmaster Tools sees the sitemap.
- Important pages are indexed or queued.
- No coverage errors for the topic hubs.

Do not spend DataForSEO here. Crawl/indexing must happen first.

## Phase 1: Entity Domination for Anton Belousov

Priority: P0  
Expected impact: branded SERP control  
Cost: free

Goal: make the web consistently describe the same entity:

`Anton Belousov = Senior JavaScript / Frontend / React / TypeScript developer from Kyiv, Ukraine`

Tasks:

1. GitHub profile:
   - Bio should contain: `Senior Frontend Engineer | JavaScript, React, Next.js, TypeScript, Technical SEO`.
   - Website should point to `https://anton-belousov-cv.vercel.app/`.
   - Pin repositories that demonstrate frontend, React, TypeScript, SEO, performance.
   - Add a profile README linking to CV and blog topics.

2. LinkedIn profile:
   - Headline should include `Senior Frontend Engineer`, `JavaScript`, `React`, `Next.js`, `TypeScript`.
   - Featured section should link to the CV and 2-3 strongest blog posts.
   - About section should use the same entity wording as the CV.

3. Public developer profiles:
   - Dev.to, Hashnode, Medium, daily.dev, Stack Overflow profile, npm profile if applicable.
   - Use the same name, same title, same website URL.
   - Do not duplicate full articles everywhere; publish teasers or canonical cross-posts.

4. CV homepage:
   - Keep visible copy human.
   - Keep JSON-LD precise.
   - Add a subtle footer or contact area link to GitHub, LinkedIn, Blog, RSS.

Definition of done:

- Searching `Anton Belousov React developer` keeps the site #1.
- Searching `Anton Belousov frontend developer` starts showing the CV or profiles.
- Searching `Anton Belousov` begins showing at least one owned property in top 10.

## Phase 2: Upgrade Topic Hubs into Real Landing Pages

Status: implemented first version.

Priority: P0  
Expected impact: high  
Cost: free

Current topic hubs are good architecture. Now they need more substance.

Each hub should have:

1. Human intro: 150-250 words.
2. A concise answer block:
   - Example: `What does a senior frontend developer actually do?`
   - 40-70 words.
3. Article groups:
   - Fundamentals.
   - Architecture.
   - Practical implementation.
   - Trade-offs.
4. Internal links to:
   - 5-10 related posts.
   - CV homepage.
   - One neighboring hub.
5. FAQ section with visible questions and answers.
6. CollectionPage + ItemList JSON-LD already exists; keep it aligned with visible content.

Hub-specific content:

### `/blog/topics/senior-frontend-developer`

Target queries:

- `senior frontend developer`
- `senior frontend engineer`
- `senior javascript developer`
- `frontend team lead`
- `senior react developer`

Needed sections:

- What separates a senior frontend developer from a middle developer.
- Architecture decisions seniors are expected to own.
- Senior frontend interview signals.
- How delivery, mentoring, performance, and technical SEO fit together.
- Link to CV as proof of experience.

### `/blog/topics/react-architecture`

Target queries:

- `react architecture`
- `react architecture patterns`
- `react dependency injection`
- `react viewmodel pattern`
- `frontend architecture patterns react`

Needed sections:

- React architecture is about boundaries, not folder names.
- Composition root, dependency inversion, ViewModel, state placement.
- When to use Context, Zustand, MobX, React Query.
- Link to DI, ViewModel, SOLID, state management posts.

### `/blog/topics/javascript`

Target queries:

- `javascript frontend developer`
- `javascript proxy`
- `javascript this arrow functions`
- `javascript reactivity`
- `senior javascript engineer`

Needed sections:

- JavaScript knowledge that matters in frontend architecture.
- Runtime model, `this`, Proxy, reactivity, browser APIs.
- Interview and production debugging angle.

### `/blog/topics/typescript`

Target queries:

- `typescript frontend developer`
- `typescript interview problems`
- `senior typescript interview`
- `typescript domain modeling`

Needed sections:

- TypeScript as product modeling, not type gymnastics.
- Discriminated unions, generics, runtime boundaries, validation.
- Link to interview-problems article.

### `/blog/topics/technical-seo`

Target queries:

- `technical seo frontend developer`
- `technical seo react`
- `technical seo next.js`
- `javascript seo`
- `core web vitals frontend`

Needed sections:

- Technical SEO as frontend engineering.
- Metadata, structured data, SSR/SSG, Core Web Vitals, crawlable links.
- Link to CV as proof of SEO skill.

Definition of done:

- Every hub is useful even if landed on directly from Google.
- Every hub has at least 8 internal links.
- Every hub links to CV with descriptive anchor text.
- Every hub links to neighboring hubs.

## Phase 3: Article-Level SERP Snippet Upgrades

Status: first version implemented for the top 5 DataForSEO opportunity articles.

Priority: P0  
Expected impact: high  
Cost: free

For each target article, add:

1. One clear answer block near the top.
2. Table of contents or section links if article is long.
3. FAQ with visible Q&A only when natural.
4. Contextual internal links in the first 3 paragraphs.
5. One "When not to use this" section.
6. One "Production checklist" section.

Top articles to upgrade first:

1. React DI:
   - Target: `react dependency injection`
   - Add: "React dependency injection in one paragraph"
   - Add: "Props vs Context vs Container"
   - Add: production checklist.

2. React ViewModel:
   - Target: `react viewmodel pattern`
   - Add: "React ViewModel pattern in one paragraph"
   - Add: hook vs class vs MobX comparison.

3. Frontend Architecture Fundamentals:
   - Target: `frontend architecture patterns react`
   - Add: comparison table of patterns.
   - Add: "Which pattern should I choose?"

4. TypeScript Interview Problems:
   - Target: `typescript interview problems frontend`
   - Add: 5 runnable exercises.
   - Add: answers and reasoning.

5. Frontend Feature Flags:
   - Target: `frontend feature flags react`
   - Add: frontend vs backend flags table.
   - Add: flag lifecycle checklist.

Definition of done:

- Each article has a direct snippet-ready answer.
- Each article has at least 5 contextual internal links.
- Each article links back to its hub.
- Each article links to CV only when author expertise is relevant.

## Phase 4: Internal Link Graph

Priority: P0  
Expected impact: high  
Cost: free

Rules:

1. Hubs link to articles.
2. Articles link back to hubs.
3. Articles link to sibling articles.
4. CV links to blog only lightly, not as a noisy article index.
5. Anchors must be descriptive:
   - Good: `React dependency injection without containers`
   - Weak: `read more`

Implementation:

1. Add `primaryTopic` frontmatter to posts.
2. Use it for:
   - related posts
   - hub membership
   - breadcrumbs
   - RSS categories
3. Add a manual `relatedSlugs` field only for top posts where exact links matter.

Definition of done:

- Every post has a hub link.
- Every hub has 8+ post links.
- Every top post has 5+ contextual links.
- No orphan pages.

## Phase 5: Free Indexing Acceleration

Status: implemented code support; requires deploy before submission.

Priority: P1  
Expected impact: medium  
Cost: free

Tasks:

1. Google Search Console:
   - Submit sitemap.
   - Request indexing for CV, blog, hubs, and top posts.
   - Monitor pages with "Discovered - currently not indexed" or "Crawled - currently not indexed".

2. Bing Webmaster Tools:
   - Submit sitemap.
   - Enable or manually use URL submission.
   - Use IndexNow after each deploy.

3. IndexNow implementation:
   - Generated IndexNow key.
   - Added `public/4f8f7d8c5c2f4e9eb1f0a3c2d6e7b809.txt`.
   - Added `npm run indexnow`.
   - Run manually after deploy, because the key file must exist on the live domain first.
   - Added `seo-post-deploy-checklist.md`.

Definition of done:

- Bing receives hub URLs.
- Google sees updated sitemap.
- IndexNow key is hosted.
- Manual post-deploy indexing checklist exists.

## Phase 6: Performance and Core Web Vitals

Status: first major win implemented.

Priority: P1  
Expected impact: medium-high  
Cost: free

Result:

- Blog post route dropped from about `263 kB / 367 kB First Load JS` to `974 B / 104 kB First Load JS` in `next build`.
- The win came from removing client-side `react-syntax-highlighter` from blog rendering and using server-rendered code blocks.

Tasks:

1. Replace heavy syntax highlighting with lighter CSS-first code blocks, or dynamically load highlighting only when a post has code.
2. Avoid shipping unnecessary UI dependencies to blog pages.
3. Use `next/image` where local images are added later.
4. Keep font display as `swap`.
5. Run Lighthouse locally after build.
6. Track LCP, INP, CLS in Search Console when enough field data exists.

Targets:

- LCP under 2.5s.
- INP under 200ms.
- CLS under 0.1.
- Blog post JS payload reduced materially.

Definition of done:

- Lighthouse mobile performance improves.
- No layout shift from headers, cards, related posts, or code blocks.
- Blog post route JS is smaller than current baseline.

## Phase 7: Free External Authority

Priority: P1  
Expected impact: medium  
Cost: free

Status: profile and distribution templates prepared in `seo-external-entity-and-distribution.md`.

No link exchanges. No paid dofollow links. No low-quality directories.

Allowed:

1. GitHub profile README.
2. Project README links.
3. LinkedIn posts linking to the canonical blog article.
4. Dev.to canonical or teaser posts.
5. Hashnode canonical or teaser posts.
6. Medium teaser posts.
7. Stack Overflow profile link.
8. Thoughtful comments in relevant communities only when genuinely useful.
9. Guest posts only if editorial and relevant.

Distribution cadence:

- 1 LinkedIn post per article.
- 1 GitHub README update for relevant repos.
- 1 dev.to teaser per top article.
- 1 community comment only when there is an actual discussion to help.

Definition of done:

- At least 10 owned/free external pages consistently link to CV.
- At least 5 external posts link to top technical articles.
- No spammy anchors.

## Phase 8: Measurement System

Status: first version implemented with `seo-weekly-tracking.csv`.

Priority: P0  
Expected impact: required  
Cost: free, with optional existing DataForSEO credit

Weekly tracking:

1. Google Search Console:
   - Queries.
   - Pages.
   - CTR.
   - Average position.
   - New indexed pages.
   - Coverage issues.

2. Bing Webmaster Tools:
   - SEO reports.
   - Sitemap status.
   - IndexNow activity.

3. Local CSV:
   - Date.
   - URL.
   - Target query.
   - Impressions.
   - Clicks.
   - CTR.
   - Average position.
   - Change made.

Optional DataForSEO checks:

- Run only after deployment and indexing.
- Track 20 queries max every 2 weeks.
- Do not use DataForSEO as daily rank tracking.

Core query set:

- `anton belousov`
- `anton belousov cv`
- `anton belousov frontend developer`
- `anton belousov react developer`
- `anton belousov javascript`
- `senior frontend developer anton belousov`
- `senior javascript developer anton belousov`
- `react dependency injection`
- `react viewmodel pattern`
- `frontend architecture patterns react`
- `typescript interview problems frontend`
- `frontend feature flags react`
- `technical seo frontend developer`
- `javascript proxy two way binding`

Definition of done:

- Weekly report takes under 20 minutes.
- Every content change is tied to a measured query/page.
- No random SEO work without a measurement reason.

## Phase 9: Content Expansion Roadmap

Priority: P2  
Expected impact: compounding  
Cost: free

New articles to write:

1. `What Senior Frontend Developers Actually Own in Production`
2. `React Architecture Patterns: Composition Root, ViewModel, Facade, and State Boundaries`
3. `Senior JavaScript Developer Roadmap: What Still Matters Beyond Syntax`
4. `Technical SEO for React and Next.js Developers`
5. `Core Web Vitals for Frontend Engineers: LCP, INP, CLS Without Rituals`
6. `TypeScript Domain Modeling for Frontend Applications`
7. `React Dependency Injection: Props, Context, Services, and Testing Seams`
8. `Frontend Team Lead Checklist: Code Review, Architecture, Delivery, Mentoring`
9. `JavaScript Proxy in Real Frontend State Systems`
10. `Feature Flags in React: Rollouts, Kill Switches, and Cleanup`

Rules:

- Every article must belong to a hub.
- Every article must link to 3 old posts.
- Every article must contain one original example from real frontend work.
- Every article must avoid generic AI-sounding filler.

Definition of done:

- 10 new posts published over 30-45 days.
- Each new post supports one hub.
- Each hub has enough depth to feel like a mini-library.

## Phase 10: What Not To Do

Do not:

1. Hide keyword text only for crawlers.
2. Serve different topics to bots and humans.
3. Buy dofollow links.
4. Use mass directory submissions.
5. Generate thin programmatic pages.
6. Change article dates without substantial updates.
7. Stuff keywords into visible copy until the page feels unnatural.
8. Publish duplicate articles across platforms without canonical/teaser strategy.
9. Track rankings daily and panic over noise.

Aggressive is good. Sloppy is expensive.

## Ideal Execution Order

1. Deploy current changes.
2. Submit sitemap in Google Search Console and Bing.
3. Implement IndexNow.
4. Expand the 5 topic hubs into real landing pages.
5. Add contextual links inside the top 5 articles.
6. Upgrade top 5 articles with answer blocks, FAQ, and checklists.
7. Reduce blog JS payload.
8. Align GitHub, LinkedIn, Dev.to, Hashnode, Medium profiles.
9. Publish 10 supporting articles.
10. Measure after indexing.
11. Use remaining DataForSEO credit only for re-checking the core query set.

## The Perfect Free Strategy in One Sentence

Make Google understand that Anton Belousov is a real senior frontend entity, make the blog a coherent frontend architecture library, make every important page easy to crawl and link internally, then use free profiles and Search Console feedback to compound authority without buying links.

## Research Sources

- Google Search Central: SEO Starter Guide
- Google Search Central: Helpful, reliable, people-first content
- Google Search Central: Sitemaps
- Google Search Central: Search Console
- Google Search Central: JavaScript SEO and dynamic rendering guidance
- Google Search Central: Spam policies and cloaking
- Google Search Central: Title links, snippets, canonical URLs, crawlable links, image SEO
- Google Search Central: Core Web Vitals
- Bing Webmaster Tools: Sitemaps, URL Submission, IndexNow
