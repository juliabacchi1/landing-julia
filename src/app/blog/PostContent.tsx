"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

type Props = {
  value: PortableTextBlock[];
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value?.asset?.url}
        alt={value?.alt || ""}
        className="rounded-md my-6 mx-auto"
      />
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline decoration-2 underline-offset-4 text-primary hover:text-primary/80"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-800 my-8 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-primary my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-700 tracking-wider my-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-gray-700 my-4">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base/7 text-gray-700 tracking-wide mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 bg-gray-100 italic text-gray-600 my-6 rounded-md">
        {children}
      </blockquote>
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
    bullet: ({ children }) => (
      <li className="ml-4 leading-relaxed marker:text-primary">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4 leading-relaxed marker:text-primary">{children}</li>
    ),
  },
};

export default function PostContent({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
