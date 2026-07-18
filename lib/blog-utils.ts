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
    keywords: ["senior", "frontend", "developer", "architecture", "lead"],
  },
  {
    slug: "react-architecture",
    title: "React Architecture",
    description:
      "React architecture notes about composition, dependency inversion, ViewModel boundaries, state placement, and scalable frontend structure.",
    keywords: ["react", "architecture", "dependency", "viewmodel", "composition"],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "JavaScript articles about language mechanics, browser behavior, proxies, reactivity, performance, and senior frontend interviews.",
    keywords: ["javascript", "proxy", "this", "reactivity", "performance"],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description:
      "TypeScript articles about type modeling, frontend interview problems, runtime boundaries, generics, and maintainable product code.",
    keywords: ["typescript", "types", "interview", "frontend", "generic"],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    description:
      "Technical SEO articles for frontend developers working with metadata, structured data, Core Web Vitals, performance, and indexable UI.",
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
