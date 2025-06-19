import { fetchPostBySlug } from "../../../../../lib/fetchPosts";
import { fetchAllSlugs } from "../../../../../lib/fetchPosts";
import { notFound } from "next/navigation";
import PostContent from "../../PostContent";
import type { Post } from "../../../../../lib/types";
import {
  Flame,
  Users,
  Code,
  Camera,
  Heart,
  Star,
  Coffee,
  Book,
  Bell,
  Zap,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const iconsMap = {
  flame: Flame,
  users: Users,
  code: Code,
  camera: Camera,
  heart: Heart,
  star: Star,
  coffee: Coffee,
  book: Book,
  bell: Bell,
  zap: Zap,
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post: Post | null = await fetchPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const iconKey =
    typeof post.icon === "string" ? post.icon.trim().toLowerCase() : "";

  const IconComponent = iconsMap[iconKey as keyof typeof iconsMap];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-6 flex flex-col items-start gap-4">
        {IconComponent ? (
          <IconComponent size={80} className="text-primary" />
        ) : (
          <span className="italic text-sm text-gray-400">
            Ícone não encontrado
          </span>
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-gray-600 text-lg mb-4">{post.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <span>
            Autor: {post.author} ({post.letter})
          </span>
          <span>Categoria: {post.category}</span>
          {post.badge && (
            <span
              className={`px-2 py-1 rounded text-white ${
                post.tagColor === "primary" ? "bg-blue-600" : "bg-gray-600"
              }`}
            >
              {post.badge}
            </span>
          )}
        </div>
      </header>
      <PostContent value={post.content} />
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}
