"use client";

import Link from "next/link";

export default function BackToSiteLink() {
  return (
    <section className="py-8 px-4 md:px-0 text-center">
      <Link
        href="/"
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
        Voltar para o site principal
      </Link>
    </section>
  );
}
