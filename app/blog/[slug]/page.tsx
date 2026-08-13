import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
  getTopicsForPost,
} from "@/lib/blog-utils";
import BlogContent from "@/components/blog/blog-content";
import BlogHeader from "@/components/blog/BlogHeader";

const baseUrl = "https://anton-belousov-cv.vercel.app";
const coreArticleKeywords = [
  "Anton Belousov",
  "Senior Frontend Engineer",
  "Senior JavaScript Developer",
  "Frontend Developer",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Technical SEO",
  "Frontend Architecture",
];

function postKeywords(title: string, excerpt: string) {
  return [
    ...coreArticleKeywords,
    ...`${title} ${excerpt}`
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 4)
      .slice(0, 12),
  ];
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const postTopics = getTopicsForPost(post);
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const postImage = `${baseUrl}${post.image ?? "/og-image.png"}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    keywords: postKeywords(post.title, post.excerpt),
    articleSection: postTopics.map((topic) => topic.title),
    inLanguage: "en",
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    isPartOf: {
      "@type": "Blog",
      "@id": `${baseUrl}/blog#blog`,
      name: "Anton Belousov Frontend Engineering Blog",
    },
    about: [
      ...postTopics.map((topic) => ({
        "@type": "Thing",
        name: topic.title,
        url: `${baseUrl}/blog/topics/${topic.slug}`,
      })),
      {
        "@type": "Thing",
        name: "Frontend Architecture",
      },
      {
        "@type": "Thing",
        name: "React",
      },
      {
        "@type": "Thing",
        name: "JavaScript",
      },
      {
        "@type": "Thing",
        name: "TypeScript",
      },
    ],
    mentions: [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Anton Belousov",
      },
      {
        "@type": "Thing",
        name: "Senior Frontend Engineer",
      },
      {
        "@type": "Thing",
        name: "Technical SEO",
      },
    ],
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Anton Belousov",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Anton Belousov",
    },
    image: postImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "CV",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <BlogHeader title={post.title} date={post.date} />
      <div className="wrapper_content__blog_post max-w-5xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl">
        <article className="prose prose-lg md:prose-xl max-w-none">
          <BlogContent content={post.content} />
        </article>

        {postTopics.length > 0 && (
          <aside className="mt-14 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Topics</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {postTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/blog/topics/${topic.slug}`}
                  className="rounded-full border border-gray-300 px-4 py-2 text-base text-gray-700 hover:border-blue-500 hover:text-blue-600"
                >
                  {topic.title}
                </Link>
              ))}
            </div>
          </aside>
        )}

        {relatedPosts.length > 0 && (
          <aside className="mt-14 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Related reading
            </h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.slug}>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="block h-full rounded-lg border border-gray-200 p-4 text-gray-900 transition hover:border-blue-400 hover:text-blue-700"
                  >
                    <span className="text-sm text-gray-500">
                      {relatedPost.date}
                    </span>
                    <span className="mt-2 block text-lg font-semibold leading-snug">
                      {relatedPost.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-gray-600">
                      {relatedPost.excerpt}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <section className="mt-14 border-t border-gray-200 pt-8 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900">
            About the author
          </h2>
          <p className="mt-3 leading-relaxed">
            Anton Belousov is a Senior JavaScript and Frontend Developer
            focused on React, Next.js, TypeScript, technical SEO, Core Web
            Vitals, and scalable frontend architecture.
          </p>
          <Link href="/" className="mt-3 inline-block text-blue-600 hover:underline">
            View Anton Belousov CV
          </Link>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Anton Belousov. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
