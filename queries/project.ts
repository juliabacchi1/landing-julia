import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    subtitle,
    description,
    tags,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    link
  }
`;
