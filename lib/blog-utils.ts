import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function createPostSlug(fileName: string): string {
  return fileName.replace(/\.md$/, '').toLowerCase();
}

function findPostFileBySlug(slug: string): string | null {
  const normalizedSlug = slug.toLowerCase();
  const fileNames = fs.readdirSync(postsDirectory);

  return (
    fileNames.find((fileName) => createPostSlug(fileName) === normalizedSlug) ??
    null
  );
}

function formatPostDate(date: unknown): string {
  return date instanceof Date ? date.toISOString().slice(0, 10) : String(date);
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogTopics = [
  {
    slug: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    description:
      "Senior frontend engineering articles about architecture, delivery quality, mentoring, code review, and production React systems.",
    answer:
      "A senior frontend developer owns more than UI implementation. The real work is shaping architecture, reducing delivery risk, improving performance, reviewing trade-offs, mentoring engineers, and keeping product code understandable as complexity grows.",
    sections: [
      "Architecture decisions and boundaries",
      "Code review, mentoring, and delivery quality",
      "Performance, Core Web Vitals, and technical SEO",
    ],
    faq: [
      {
        question: "What does a senior frontend developer actually own?",
        answer:
          "A senior frontend developer owns frontend architecture, code quality, performance, delivery trade-offs, mentoring, and the technical decisions that keep product features maintainable.",
      },
      {
        question: "Is a senior frontend developer the same as a React developer?",
        answer:
          "No. React can be part of the stack, but senior frontend work includes architecture, browser performance, accessibility, state boundaries, delivery process, and technical SEO.",
      },
    ],
    keywords: ["senior", "frontend", "developer", "architecture", "lead"],
  },
  {
    slug: "react-architecture",
    title: "React Architecture",
    description:
      "React architecture notes about composition, dependency inversion, ViewModel boundaries, state placement, and scalable frontend structure.",
    answer:
      "React architecture is the set of boundaries that decide where rendering, orchestration, state, infrastructure, and product rules live. Good React architecture makes change cheaper without turning the app into a private framework.",
    sections: [
      "Composition root and dependency inversion",
      "ViewModel, Facade, and feature boundaries",
      "State management as business logic placement",
    ],
    faq: [
      {
        question: "What is React architecture?",
        answer:
          "React architecture is how a codebase organizes components, state, effects, data access, feature boundaries, and infrastructure so the product can keep changing safely.",
      },
      {
        question: "Which React architecture pattern should I start with?",
        answer:
          "Start with composition, clear component boundaries, and colocated feature logic. Add ViewModels, repositories, or dependency inversion only when change pressure makes them useful.",
      },
    ],
    keywords: ["react", "architecture", "dependency", "viewmodel", "composition"],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "JavaScript articles about language mechanics, browser behavior, proxies, reactivity, performance, and senior frontend interviews.",
    answer:
      "Senior JavaScript knowledge is not trivia. It is understanding execution, identity, closures, `this`, async work, browser constraints, proxies, reactivity, and how those mechanics affect real frontend architecture.",
    sections: [
      "Language mechanics that affect production UI",
      "Reactivity, Proxy, and browser behavior",
      "Senior JavaScript interview reasoning",
    ],
    faq: [
      {
        question: "What JavaScript should a senior frontend developer know?",
        answer:
          "They should know execution context, closures, prototypes, `this`, async behavior, browser rendering, memory, events, modules, and how frameworks build on those primitives.",
      },
      {
        question: "Is JavaScript still important if I use React?",
        answer:
          "Yes. React hides some mechanics but does not remove them. Debugging performance, state, events, and rendering still requires strong JavaScript fundamentals.",
      },
    ],
    keywords: ["javascript", "proxy", "this", "reactivity", "performance"],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description:
      "TypeScript articles about type modeling, frontend interview problems, runtime boundaries, generics, and maintainable product code.",
    answer:
      "TypeScript is most valuable when it models product states clearly. The goal is not clever types; the goal is making invalid states harder to express and safe changes easier to make.",
    sections: [
      "Domain modeling with discriminated unions",
      "Generics that preserve useful information",
      "Runtime validation at trust boundaries",
    ],
    faq: [
      {
        question: "What makes TypeScript useful in frontend applications?",
        answer:
          "TypeScript helps model UI states, API boundaries, form states, feature flags, and domain rules so developers can change code with fewer hidden assumptions.",
      },
      {
        question: "What should I practice for senior TypeScript interviews?",
        answer:
          "Practice modeling invalid states, writing useful generics, validating unknown input, refactoring optional-heavy types, and explaining trade-offs in plain language.",
      },
    ],
    keywords: ["typescript", "types", "interview", "frontend", "generic"],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    description:
      "Technical SEO articles for frontend developers working with metadata, structured data, Core Web Vitals, performance, and indexable UI.",
    answer:
      "Technical SEO for frontend developers is about making valuable content crawlable, understandable, fast, canonical, and trustworthy. It connects rendering, metadata, structured data, links, and Core Web Vitals.",
    sections: [
      "Metadata, canonical URLs, and structured data",
      "Crawlable links and indexable rendering",
      "Core Web Vitals and page experience",
    ],
    faq: [
      {
        question: "Why should frontend developers care about technical SEO?",
        answer:
          "Frontend decisions control rendering, links, metadata, performance, structured data, and whether search engines can understand a page at all.",
      },
      {
        question: "Is technical SEO only metadata?",
        answer:
          "No. Metadata helps snippets, but technical SEO also includes crawlability, internal links, canonical signals, structured data, JavaScript rendering, and Core Web Vitals.",
      },
    ],
    keywords: ["seo", "technical", "metadata", "schema", "performance"],
  },
] as const;

export type BlogTopic = (typeof blogTopics)[number];

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = createPostSlug(fileName);
      
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);
      
      return {
        slug,
        title: matterResult.data.title,
        date: formatPostDate(matterResult.data.date),
        excerpt: matterResult.data.excerpt,
        content: matterResult.content
      };
    });
    
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogTopic(slug: string): BlogTopic | undefined {
  return blogTopics.find((topic) => topic.slug === slug);
}

export function getPostsByTopic(topic: BlogTopic): Post[] {
  return getAllPosts().filter((post) => {
    const text = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
    return topic.keywords.some((keyword) => text.includes(keyword));
  });
}

export function getTopicsForPost(post: Post): BlogTopic[] {
  const text = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
  return blogTopics.filter((topic) =>
    topic.keywords.some((keyword) => text.includes(keyword))
  );
}

const stopWords = new Set([
  'and',
  'are',
  'for',
  'from',
  'how',
  'into',
  'the',
  'this',
  'when',
  'with',
  'without',
  'your',
]);

function keywordsFor(post: Post): Set<string> {
  return new Set(
    `${post.title} ${post.excerpt}`
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 3 && !stopWords.has(word))
  );
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const currentKeywords = keywordsFor(post);

  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score: [...keywordsFor(candidate)].filter((word) =>
        currentKeywords.has(word)
      ).length,
    }))
    .sort((a, b) => b.score - a.score || String(b.post.date).localeCompare(String(a.post.date)))
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fileName = findPostFileBySlug(slug);

    if (!fileName) {
      return null;
    }

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const matterResult = matter(fileContents);
    
    return {
      slug: createPostSlug(fileName),
      title: matterResult.data.title,
      date: formatPostDate(matterResult.data.date),
      excerpt: matterResult.data.excerpt,
      content: matterResult.content
    };
  } catch (error) {
    return null;
  }
}

export function savePost(post: Post): void {
  const fullPath = path.join(postsDirectory, `${post.slug}.md`);
  const content = `---
title: ${post.title}
date: ${post.date}
excerpt: ${post.excerpt}
---

${post.content}`;

  fs.writeFileSync(fullPath, content);
}

export function deletePost(slug: string): void {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  fs.unlinkSync(fullPath);
}
