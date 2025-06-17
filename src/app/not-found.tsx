"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Ops! Essa página não foi encontrada.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white bg-primary hover:bg-secondary transition-colors px-6 py-3 rounded-full font-medium"
      >
        <ArrowLeft size={20} />
        Voltar para o início
      </Link>
    </div>
  );
}
