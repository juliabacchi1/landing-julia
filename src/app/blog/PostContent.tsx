"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

type Props = {
  value: PortableTextBlock[];
};

const components: PortableTextComponents = {
  types: {
    // se tiver outros tipos customizados depois, como imagens, adicionamos aqui
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline text-primary hover:text-primary/80"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-gray-700 mt-5 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base text-gray-700 mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-700 mb-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
};

export default function PostContent({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
