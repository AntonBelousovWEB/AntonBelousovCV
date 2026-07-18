import fs from "node:fs";
import path from "node:path";

const siteUrl = process.env.SITE_URL ?? "https://anton-belousov-cv.vercel.app";
const host = new URL(siteUrl).host;
const key = "4f8f7d8c5c2f4e9eb1f0a3c2d6e7b809";
const postsDir = path.join(process.cwd(), "content/posts");
const topics = [
  "senior-frontend-developer",
  "react-architecture",
  "javascript",
  "typescript",
  "technical-seo",
];

const postUrls = fs
  .readdirSync(postsDir)
  .filter((fileName) => fileName.endsWith(".md"))
  .map((fileName) => `${siteUrl}/blog/${fileName.replace(/\.md$/, "").toLowerCase()}`);

const urlList = [
  siteUrl,
  `${siteUrl}/blog`,
  ...topics.map((topic) => `${siteUrl}/blog/topics/${topic}`),
  ...postUrls,
];

const response = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${response.status} ${response.statusText}`);
console.log(`Submitted URLs: ${urlList.length}`);
