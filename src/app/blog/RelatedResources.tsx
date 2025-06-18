"use client";

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
              <svg
                className="w-1/4 h-1/4 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                E-book Gratuito
              </h3>
              <p className="text-gray-600 mb-4">
                O Guia Definitivo para Landing Pages de Alta Conversão: 50
                páginas com estratégias práticas e exemplos reais.
              </p>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-primary hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center justify-center">
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
              </button>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="h-40 bg-secondary/10 flex items-center justify-center">
              <svg
                className="w-1/4 h-1/4 text-secondary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Webinar Exclusivo
              </h3>
              <p className="text-gray-600 mb-4">
                Assista nossa masterclass com especialistas em landing pages que
                já geraram milhões em vendas online.
              </p>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-secondary hover:bg-teal-500 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center justify-center">
                Assistir Agora
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
              </button>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <svg
                className="w-1/4 h-1/4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
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
              <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center justify-center">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
