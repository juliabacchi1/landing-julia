"use client";

export default function NewsletterForm() {
  return (
    <section className="py-16 px-4 md:px-0 bg-canvaGray">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Decoração circular */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -ml-16 -mb-16" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Receba mais insights sobre landing pages
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Inscreva-se para receber as últimas tendências, estudos de caso e
              dicas práticas sobre como criar landing pages de alta conversão
              diretamente no seu email.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <button className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition duration-300 whitespace-nowrap">
                Quero receber
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Você pode cancelar sua inscrição a qualquer momento. Não enviamos
              spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
