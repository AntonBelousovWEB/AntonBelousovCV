import Link from "next/link";
import { blogTopics, getAllPosts } from "@/lib/blog-utils";

const baseUrl = "https://anton-belousov-cv.vercel.app";

export default function BlogPage() {
  const posts = getAllPosts();
  const recommendedSlugs = [
    "architecture-beats-stack-refactoring-react-without-switching-libraries",
    "fail-fast-frontend-error-handling-without-confusing-users",
    "model-view-patterns-for-react-developers",
    "state-management-is-business-logic-placement",
    "react-internationalization-without-pain-designing-i18n-as-architecture",
  ];
  const recommendedPosts = recommendedSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/blog#collection`,
    url: `${baseUrl}/blog`,
    name: "Anton Belousov Frontend Engineering Blog",
    description:
      "Technical articles by Anton Belousov about JavaScript, React, Next.js, TypeScript, frontend architecture, technical SEO, and web performance.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Anton Belousov",
      jobTitle: "Senior Frontend Engineer",
    },
    mainEntity: {
      "@type": "Blog",
      "@id": `${baseUrl}/blog#blog`,
      name: "Anton Belousov Frontend Engineering Blog",
      author: {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${baseUrl}/blog/${post.slug}`,
        datePublished: post.date,
        description: post.excerpt,
      })),
    },
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/blog#posts`,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>
      <div className="wrapper max-w-7xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl">
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 header_wrapper">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
              Anton's Blog
            </h1>
            <nav className="flex gap-6 text-xl">
              <Link
                hrefLang="en"
                href="/"
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                CV
              </Link>
            </nav>
          </div>
          <p className="text-xl text-gray-600 mt-4">
            Thoughts, insights, and tutorials on frontend development,
            optimization, and modern web technologies.
          </p>
        </header>

      <section className="mb-12 md:mb-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-8">
          Topics
        </h2>
        <div className="flex flex-wrap gap-3">
          {blogTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/blog/topics/${topic.slug}`}
              className="rounded-full border border-gray-300 px-4 py-2 text-base text-gray-700 hover:border-blue-500 hover:text-blue-600"
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 md:mb-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-8">
          Recommended Architecture Reading
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {recommendedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border border-gray-200 p-4 text-lg font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600"
            >
              {post.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="main mb-12 md:mb-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-8">
          Latest Articles
        </h2>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="box_post border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    <Link
                      hrefLang="en"
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-gray-600 mb-4">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    hrefLang="en"
                    href={`/blog/${post.slug}`}
                    className="inline-block text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Anton Belousov. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
