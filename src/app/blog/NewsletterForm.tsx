"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("_honey", "");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/juliabacchi92@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-0 bg-canvaGray">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Decorações */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -ml-16 -mb-16" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Receba nossas atualizações
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Inscreva-se para receber as últimas dicas, estratégias e recursos
              para melhorar seu marketing digital e aumentar suas conversões.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition duration-300 whitespace-nowrap"
              >
                {isSubmitting ? "Enviando..." : "Quero receber"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-600 mt-4">
                Inscrição enviada com sucesso! 🎉
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">
                Ocorreu um erro. Tente novamente.
              </p>
            )}

            <p className="text-xs text-gray-500 mt-4 p-2">
              Você pode cancelar sua inscrição a qualquer momento. Não enviamos
              spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
