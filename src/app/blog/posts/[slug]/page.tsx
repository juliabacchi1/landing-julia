import { fetchPostBySlug, fetchAllSlugs } from "../../../../../lib/fetchPosts";
import { notFound } from "next/navigation";
import PostContent from "../../PostContent";
import type { Post } from "../../../../../lib/types";
import { tagColorsClasses } from "../../../../../lib/tagColors";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import Footer from "@/app/components/FooterSection";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post: Post | null = await fetchPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const color = tagColorsClasses[post.tagColor] ?? tagColorsClasses["primary"];

  return (
    <main className="bg-white pt-16">
      {/* Breadcrumbs */}
      <div className="bg-graylight py-3 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-canvaPurple">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-canvaPurple">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Header do Post */}
      <section className="py-12 border-b">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Categoria + Data por extenso */}
          <div className="text-sm text-gray-500 mb-4">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white ${color.bgSolid}`}
            >
              {post.category}
            </span>
            <span className="ml-2 text-gray-400">Publicado em TAL DATA</span>
          </div>
          {/* Título e Descrição */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{post.description}</p>
          {/* Autor, Categoria e Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
              {post.letter}
            </div>
            <div>
              <p className="text-sm text-gray-800 font-semibold">
                {post.author}
              </p>
              <p className="text-xs text-gray-500">{post.category}</p>
            </div>
          </div>
          {/* Retângulo com ícone */}
          <div
            className={`w-full h-60 rounded-xl mb-8 flex items-center justify-center ${color.bgLight}`}
          >
            <Icon name={post.icon} size={64} className={color.text} />
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="container mx-auto max-w-3xl px-4 py-12">
        <PostContent value={post.content} />

        <div className="py-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-purple-700 font-medium transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para o blog
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}
