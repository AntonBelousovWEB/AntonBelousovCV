import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-utils";
import type { Metadata } from "next";
import BlogContent from "@/components/blog-content";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Anton Belousov's Blog`,
    description: post.excerpt,
  };
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

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl">
      <header className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/blog"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            ← Back to all posts
          </Link>
          <nav className="flex gap-6 text-xl">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              CV
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Blog
            </Link>
          </nav>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {post.title}
        </h1>

        <div className="text-gray-600 mb-8">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>

      <article className="prose prose-lg md:prose-xl max-w-none">
        <BlogContent content={post.content} />
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Anton Belousov. All rights reserved.</p>
      </footer>
    </div>
  );
}
