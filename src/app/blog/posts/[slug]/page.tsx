import { client } from "../../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
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
        <img
          src={post.icon}
          alt="Ícone do post"
          className="w-20 h-20 object-contain mb-6"
        />
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}