"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

const topics = [
  {
    title: "Os 7 elementos de CTA que aumentam cliques em 82%",
    category: "CTA",
    badge: "Tendência em 2023",
    description:
      "Descubra quais elementos de Call-to-Action estão gerando os melhores resultados em 2023. Desde cores e posicionamento até copywriting persuasivo, tudo baseado em dados reais.",
    tagColor: "secondary",
    icon: (
      <svg
        className="w-1/3 h-1/3 text-secondary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
    author: "Marketing Digital",
    letter: "M",
  },
  {
    title: "Princípios de design UX que toda landing page precisa seguir",
    category: "Design",
    badge: "Guia Completo",
    description:
      "Aprenda os princípios fundamentais de UX que fazem a diferença entre uma landing page mediana e uma que converte. Inclui exemplos práticos e checklist para implementação.",
    tagColor: "primary",
    icon: (
      <svg
        className="w-1/3 h-1/3 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    author: "Design UX",
    letter: "D",
  },
  // [...adiciona os outros 4 cards aqui da mesma forma...]
];

export default function PopularTopics() {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Tópicos Mais Buscados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="post-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
            >
              <div
                className={`h-48 bg-${topic.tagColor}/10 flex items-center justify-center`}
              >
                {topic.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span
                    className={`bg-${topic.tagColor}/10 text-${topic.tagColor} text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {topic.category}
                  </span>
                  <span className="text-dark text-xs ml-3">
                    {topic.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {topic.description}
                </p>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full bg-${topic.tagColor} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {topic.letter}
                  </div>
                  <p className="text-sm font-medium text-gray-800 ml-2">
                    {topic.author}
                  </p>
                  <button className="ml-auto text-primary hover:text-purple-700 font-medium text-sm flex items-center">
                    Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto">
            Ver mais tópicos
            <ChevronDown className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
