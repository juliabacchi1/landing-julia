"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "../components/Icon";
import { tagColorsClasses } from "../../../lib/tagColors";
import { ArrowRight } from "lucide-react";
import { fetchAllPosts } from "../../../lib/fetchPosts";
import type { Post } from "../../../lib/types";

export default function FeaturedPost() {
  const [featured, setFeatured] = useState<Post | null>(null);

  useEffect(() => {
    async function loadFeatured() {
      const posts = await fetchAllPosts();

      // Pega o post com badge "Destaque" ou o primeiro
      const destaque =
        posts.find((post) => post.badge === "Destaque") || posts[0] || null;

      setFeatured(destaque);
    }
    loadFeatured();
  }, []);

  if (!featured) return null;

  return (
    <section className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-dark">
          Tópico em Destaque
        </h2>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div
              className={`md:w-1/2 h-64 md:h-auto flex items-center justify-center p-6 ${tagColorsClasses[featured.tagColor].bgLight}`}
            >
              <Icon
                name={featured.icon}
                size={80}
                className={tagColorsClasses[featured.tagColor].text}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <span
                    className={`bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {featured.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark">
                  {featured.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {featured.description}
                </p>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${tagColorsClasses[featured.tagColor].bgSolid}`}
                >
                  {featured.letter}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-dark">
                    {featured.author}
                  </p>
                </div>
                <Link
                  href={`/blog/posts/${featured.slug}`}
                  className="ml-auto bg-primary hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center"
                >
                  Ler mais
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
