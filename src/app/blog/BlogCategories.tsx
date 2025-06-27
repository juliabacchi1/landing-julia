"use client";

import { useEffect, useState } from "react";
import { fetchAllPosts } from "../../../lib/fetchPosts";
import type { Post } from "../../../lib/types";

export default function BlogCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const posts: Post[] = await fetchAllPosts();
      // Extrai todas as categorias
      const allCategories = posts.map((post) => post.category);
      // Remove duplicados
      const uniqueCategories = Array.from(new Set(allCategories));
      setCategories(uniqueCategories);
    }
    loadCategories();
  }, []);

  return (
    <section className="py-8 px-4 md:px-0 bg-graylight">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          <button className="category-badge bg-primary text-white px-5 py-2 rounded-full font-medium shadow-sm transition">
            Todos
          </button>

          {categories.map((category) => (
            <button
              key={category}
              className="category-badge bg-white px-5 py-2 rounded-full text-dark font-medium shadow-sm transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
