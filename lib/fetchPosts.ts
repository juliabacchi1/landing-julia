import { client } from "./sanity";
import { getPostBySlugQuery } from "../queries/posts";
import groq from "groq";
import { Post } from "./types";

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const query = getPostBySlugQuery(slug);
  const data = await client.fetch(query, { slug });
  return data || null;
}

export async function fetchAllSlugs(): Promise<string[]> {
  const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
  return await client.fetch(query);
}

export async function fetchAllPosts(): Promise<Post[]> {
  const query = groq`
    *[_type == "post"][]{
      title,
      description,
      category,
      badge,
      author,
      letter,
      tagColor,
      icon,
      "slug": slug.current,
      content,
      publishedAt
    }
  `;
  return await client.fetch(query);
}
