import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-utils";
import BlogContent from "@/components/blog/blog-content";
import BlogHeader from "@/components/blog/BlogHeader";

const baseUrl = "https://anton-belousov-cv.vercel.app";

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

  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
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
    image: `${baseUrl}/og-image.png`,
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

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Anton Belousov. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
