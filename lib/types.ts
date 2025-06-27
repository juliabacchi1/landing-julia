import type { PortableTextBlock } from "sanity";
import type { TagColor } from "./tagColors";

export type Post = {
  title: string;
  slug: string;
  description: string;
  content: PortableTextBlock[];
  author: string;
  category: string;
  badge?: string;
  tagColor: TagColor;
  letter: string;
  icon: string;
};
