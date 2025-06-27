"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "../components/Icon";
import { tagColorsClasses } from "../../../lib/tagColors";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fetchAllPosts } from "../../../lib/fetchPosts";
import type { Post } from "../../../lib/types";

export default function PopularTopics() {
  const [topics, setTopics] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    async function loadTopics() {
      const posts = await fetchAllPosts();
      setTopics(posts);
    }
    loadTopics();
  }, []);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + 3);
  }

  return (
    <section className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Tópicos Mais Buscados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.slice(0, visibleCount).map((topic, i) => (
            <div
              key={i}
              className="post-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
            >
              <div
                className={`${tagColorsClasses[topic.tagColor]?.bgLight} h-48 flex items-center justify-center`}
              >
                <Icon
                  name={topic.icon}
                  size={64}
                  className={tagColorsClasses[topic.tagColor]?.text}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span
                    className={`${tagColorsClasses[topic.tagColor]?.bgLight} ${tagColorsClasses[topic.tagColor]?.text} text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {topic.category}
                  </span>
                  <span className="text-dark text-xs ml-3">{topic.badge}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {topic.description}
                </p>
                <div className="flex items-center">
                  <div
                    className={`${tagColorsClasses[topic.tagColor]?.bgSolid} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {topic.letter}
                  </div>
                  <p className="text-sm font-medium text-gray-800 ml-2">
                    {topic.author}
                  </p>
                  <Link
                    href={`/blog/posts/${topic.slug}`}
                    className="ml-auto text-primary hover:text-purple-700 font-medium text-sm flex items-center"
                  >
                    Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sempre mostrar o botão */}
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={visibleCount >= topics.length}
            className={`border-2 font-medium py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto
      ${
        visibleCount >= topics.length
          ? "border-gray-300 text-gray-400 cursor-not-allowed bg-white"
          : "border-primary text-primary hover:bg-primary hover:text-white"
      }
    `}
          >
            Ver mais tópicos
            <ChevronDown className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
