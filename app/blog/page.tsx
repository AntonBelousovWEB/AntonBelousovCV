import Link from "next/link";
import { getAllPosts } from "@/lib/blog-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Anton's Blog - Thoughts, insights, and tutorials on frontend development, optimization, and modern web technologies.",
  description:
    "Blog of thoughts, insights, and tutorials on frontend development, optimization, and modern web technologies.",
  openGraph: {
    locale: "en_US",
    images: [
      {
        url: "https://anton-belousov-cv.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anton Belousov - Anton's Blog",
      },
    ],
  },
  robots: "NOODP",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
}
