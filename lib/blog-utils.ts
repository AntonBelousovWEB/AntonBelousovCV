import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);
      
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
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

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const matterResult = matter(fileContents);
    
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
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

