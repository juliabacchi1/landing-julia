export default function FeaturedPost() {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-dark">
          Tópico em Destaque
        </h2>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto bg-primary/10 flex items-center justify-center">
              {/* Placeholder para imagem/ícone */}
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                IMG
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                  Categoria
                </span>
                <span className="text-dark text-sm ml-4">
                  Atualizado em Data
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark">
                Título do post em destaque
              </h3>
              <p className="text-gray-600 mb-6">
                Pequena descrição introdutória do conteúdo do post em destaque.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-dark">
                    Nome do autor
                  </p>
                  <p className="text-xs text-gray-500">
                    Cargo ou especialidade
                  </p>
                </div>
                <button className="ml-auto bg-primary hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center">
                  Ler mais
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
