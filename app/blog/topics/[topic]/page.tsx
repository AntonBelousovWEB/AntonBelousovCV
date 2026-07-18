import type { Metadata } from "next";
import Link from "next/link";
import {
  blogTopics,
  getBlogTopic,
  getPostsByTopic,
} from "@/lib/blog-utils";
import { notFound } from "next/navigation";

const baseUrl = "https://anton-belousov-cv.vercel.app";

export function generateStaticParams() {
  return blogTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = getBlogTopic(topicSlug);

  if (!topic) {
    return {
      title: "Topic Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${topic.title} Articles`,
    description: topic.description,
    alternates: {
      canonical: `${baseUrl}/blog/topics/${topic.slug}`,
    },
    openGraph: {
      type: "website",
      url: `${baseUrl}/blog/topics/${topic.slug}`,
      title: `${topic.title} Articles | Anton Belousov`,
      description: topic.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogTopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const { topic: topicSlug } = await params;
  const topic = getBlogTopic(topicSlug);

  if (!topic) {
    notFound();
  }

  const posts = getPostsByTopic(topic);
  const pageUrl = `${baseUrl}/blog/topics/${topic.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: `${topic.title} Articles by Anton Belousov`,
    description: topic.description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
    },
    about: topic.keywords.map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Anton Belousov",
      jobTitle: "Senior Frontend Engineer",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="wrapper max-w-7xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl">
        <header className="mb-12 md:mb-16">
          <nav className="mb-6">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to blog
            </Link>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {topic.title}
          </h1>
          <p className="text-xl text-gray-600 mt-4">{topic.description}</p>
        </header>

        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-6">
            Short Answer
          </h2>
          <p className="leading-relaxed text-gray-700">{topic.answer}</p>
        </section>

        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-6">
            What This Topic Covers
          </h2>
          <ul className="list-disc pl-5 md:pl-8 space-y-3">
            {topic.sections.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </section>

        <section className="main mb-12 md:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-8">
            Articles
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="box_post border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-6">
            Related Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {blogTopics
              .filter((relatedTopic) => relatedTopic.slug !== topic.slug)
              .map((relatedTopic) => (
                <Link
                  key={relatedTopic.slug}
                  href={`/blog/topics/${relatedTopic.slug}`}
                  className="rounded-full border border-gray-300 px-4 py-2 text-base text-gray-700 hover:border-blue-500 hover:text-blue-600"
                >
                  {relatedTopic.title}
                </Link>
              ))}
          </div>
        </section>

        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-gray-300 pb-3 mb-6">
            FAQ
          </h2>
          <div className="space-y-6">
            {topic.faq.map((item) => (
              <article key={item.question}>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>
            Built by{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Anton Belousov, Senior Frontend Engineer
            </Link>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
