"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchPopularTopics } from "../../../lib/fetchPosts";
import Image from "next/image";

type TagColor = "primary" | "secondary";

const tagColorsClasses: Record<
  TagColor,
  { bgLight: string; text: string; bgSolid: string }
> = {
  primary: {
    bgLight: "bg-primary/10",
    text: "text-primary",
    bgSolid: "bg-primary",
  },
  secondary: {
    bgLight: "bg-secondary/10",
    text: "text-secondary",
    bgSolid: "bg-secondary",
  },
};

export default function PopularTopics() {
  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    fetchPopularTopics().then(setTopics);
  }, []);

  return (
    <section className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Tópicos Mais Buscados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="post-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
            >
              <div
                className={`${
                  tagColorsClasses[topic.tagColor as TagColor]?.bgLight || ""
                } h-48 flex items-center justify-center`}
              >
                {topic.icon && (
                  <Image
                    src={topic.icon}
                    alt=""
                    width={100} // ajusta o tamanho que fizer sentido pra você
                    height={100} // idem
                    className="object-contain"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span
                    className={`${
                      tagColorsClasses[topic.tagColor as TagColor]?.bgLight ||
                      ""
                    } ${
                      tagColorsClasses[topic.tagColor as TagColor]?.text || ""
                    } text-xs font-semibold px-3 py-1 rounded-full`}
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
                    className={`${
                      tagColorsClasses[topic.tagColor as TagColor]?.bgSolid ||
                      ""
                    } w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {topic.letter}
                  </div>
                  <p className="text-sm font-medium text-gray-800 ml-2">
                    {topic.author}
                  </p>
                  <Link
                    href={`/blog/posts/${topic.slug.current}`}
                    className="ml-auto text-primary hover:text-purple-700 font-medium text-sm flex items-center"
                  >
                    Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto">
            Ver mais tópicos
            <ChevronDown className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}