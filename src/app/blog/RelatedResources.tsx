"use client";

import Link from "next/link";
import { CheckCircle, Calendar, Search } from "lucide-react";

export default function RelatedResources() {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
          Recursos Relacionados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recurso 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="h-40 bg-primary/10 flex items-center justify-center">
              <Search className="w-1/4 h-1/4 text-primary" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Análise Express de SEO
              </h3>
              <p className="text-gray-600 mb-4">
                Descubra os principais pontos de melhoria do seu site para ter
                mais visitas e conversões.
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="https://wa.me/5548991779743?text=Oi%2C+Ju%21+Quero+minha+an%C3%A1lise+express+de+SEO.+Segue+o+link+do+meu+site%3A"
                target="_blank"
                className="w-full bg-primary hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center justify-center"
              >
                Quero minha análise
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="h-40 bg-secondary/10 flex items-center justify-center">
              <CheckCircle className="w-1/4 h-1/4 text-secondary" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Checklist para o seu site
              </h3>
              <p className="text-gray-600 mb-4">
                Um checklist completo para avaliar a sua página antes de lançar.
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/Checklist.pdf"
                target="_blank"
                download
                className="w-full bg-secondary hover:bg-teal-500 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center justify-center"
              >
                Baixar Agora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <Calendar className="w-1/4 h-1/4 text-gray-500" />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Consultoria Gratuita
              </h3>
              <p className="text-gray-600 mb-4">
                Agende uma sessão de 30 minutos com nossos especialistas para
                analisar sua landing page atual.
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="https://wa.me/5548991779743?text=Oi%2C+Ju%21+Gostaria+de+agendar+uma+sess%C3%A3o+de+consultoria+gratuita.+Quando+podemos+marcar%3F"
                target="_blank"
                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center justify-center"
              >
                Agendar Sessão
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
