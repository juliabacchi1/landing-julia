import type { PortableTextBlock } from "sanity";

export type Post = {
  title: string;
  description: string;
  content: PortableTextBlock[];
  author: string;
  category: string;
  badge?: string;
  tagColor: "primary" | "secondary";
  letter: string;
  icon: string;
};