/* eslint-disable @typescript-eslint/no-explicit-any */

import { client } from "../../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";

// Gera todas as páginas de post
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

// Gera metadados dinâmicos por post
export async function generateMetadata({ params }: any) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.icon || "/og-image.jpg"],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [post.icon || "/og-image.jpg"],
    },
  };
}

// Página do post com any para evitar erro de tipagem
export default async function PostPage({ params }: any) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.description}</p>

      {post.icon && (
        <Image
          src={post.icon}
          alt="Ícone do post"
          width={100}
          height={100}
          className="object-contain mb-6"
        />
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}
