"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function BlogHeader({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
        if (!isAnimating.current) {
          if (direction === "down" && isTitleVisible) {
            setIsTitleVisible(false);
            isAnimating.current = true;
            setTimeout(() => (isAnimating.current = false), 300);
          } else if (direction === "up" && !isTitleVisible) {
            setIsTitleVisible(true);
            isAnimating.current = true;
            setTimeout(() => (isAnimating.current = false), 300);
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTitleVisible]);

  return (
    <div className="wrapper_header__blog_post sticky top-0 max-w-5xl mx-auto p-6 md:p-10 bg-white text-gray-800 text-base sm:text-lg md:text-xl">
      <header>
        <div className="pt-2 flex justify-between items-center mb-6">
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

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isTitleVisible ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
        </div>

        <div className="border-b border-gray-300 pb-2 text-gray-600 mb-12">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>
    </div>
  );
}