import groq from "groq";

export const getPostBySlugQuery = (slug: string) =>
  groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    category,
    badge,
    author,
    letter,
    tagColor,
    icon,
    content,
    publishedAt
  }`;