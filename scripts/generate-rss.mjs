import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const siteUrl = process.env.SITE_URL ?? "https://anton-belousov-cv.vercel.app";
const postsDir = path.join(process.cwd(), "content/posts");
const outPath = path.join(process.cwd(), "public/rss.xml");

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const items = fs
  .readdirSync(postsDir)
  .filter((fileName) => fileName.endsWith(".md"))
  .map((fileName) => {
    const slug = fileName.replace(/\.md$/, "").toLowerCase();
    const file = fs.readFileSync(path.join(postsDir, fileName), "utf8");
    const parsed = matter(file);
    const date =
      parsed.data.date instanceof Date
        ? parsed.data.date.toISOString().slice(0, 10)
        : String(parsed.data.date);

    return {
      slug,
      title: parsed.data.title,
      excerpt: parsed.data.excerpt,
      date,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(
    (post) => `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${siteUrl}/blog/${post.slug}</link>
  <guid>${siteUrl}/blog/${post.slug}</guid>
  <description>${escapeXml(post.excerpt)}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join("\n");

fs.writeFileSync(
  outPath,
  `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
<title>Anton Belousov Blog</title>
<link>${siteUrl}/blog</link>
<description>Senior frontend engineering notes on React, architecture, TypeScript, performance, and technical SEO.</description>
${items}
</channel>
</rss>
`
);

console.log(`Generated ${path.relative(process.cwd(), outPath)}`);
