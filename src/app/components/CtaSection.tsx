"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { ctaQuery } from "../../../queries/cta";
import { event } from "../../../lib/gtag";

type FormField = {
  label: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
};

type CtaData = {
  title: string;
  subtitle: string;
  formFields: FormField[];
  submitText: string;
  termsText: string;
};

export default function CtaSection() {
  const [data, setData] = useState<CtaData | null>(null);
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    client
      .fetch(ctaQuery)
      .then((res) => {
        setData(res);
        // Inicializa formData com campos vazios/false
        const initialFormState: Record<string, string | boolean> = {};
        res.formFields.forEach((field: FormField) => {
          if (field.type === "checkbox") {
            initialFormState[field.name] = false;
          } else {
            initialFormState[field.name] = "";
          }
        });
        setFormData(initialFormState);
      })
      .catch((err) => {
        console.error("Erro ao carregar dados CTA:", err);
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, String(formData[key]));
      }

      // Antispam: campo invisível
      formDataToSend.append("_honey", "");
      formDataToSend.append("_captcha", "false");

      // Envia pro FormSubmit com seu e-mail
      const response = await fetch(
        "https://formsubmit.co/ajax/juliabacchi92@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");

        event({
          action: "submit_formulario",
          category: "conversao",
          label: "Formulario - CtaSection",
        });

        // Resetar formulário após sucesso
        if (data) {
          const resetState: Record<string, string | boolean> = {};
          data.formFields.forEach((field) => {
            resetState[field.name] = field.type === "checkbox" ? false : "";
          });
          setFormData(resetState);
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data) return null;

  return (
    <section
      id="contato"
      className="py-20 px-4 bg-gradient-to-r from-primary to-secondary"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {data.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.formFields
                .filter((field) =>
                  ["text", "email", "tel"].includes(field.type)
                )
                .map((field, idx) => (
                  <div key={idx}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-primary"> *</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={(formData[field.name] as string) || ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  </div>
                ))}
            </div>

            {data.formFields
              .filter((field) => field.type === "select")
              .map((field, idx) => (
                <div key={idx}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-primary"> *</span>}
                  </label>
                  <select
                    id={field.name}
                    name={field.name}
                    value={(formData[field.name] as string) || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required={field.required}
                  >
                    <option value="">
                      {field.placeholder || "Selecione uma opção"}
                    </option>
                    {field.options?.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

            {data.formFields
              .filter((field) => field.type === "textarea")
              .map((field, idx) => (
                <div key={idx}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                    {field.required && <span className="text-primary"> *</span>}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={4}
                    value={(formData[field.name] as string) || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}

            {data.formFields
              .filter((field) => field.type === "checkbox")
              .map((field, idx) => (
                <div key={idx} className="flex items-center">
                  <input
                    id={field.name}
                    name={field.name}
                    type="checkbox"
                    checked={Boolean(formData[field.name])}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    required={field.required}
                  />
                  <label
                    htmlFor={field.name}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {data.termsText}
                  </label>
                </div>
              ))}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-full transition-all hover:opacity-90 disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : data.submitText}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg mt-4">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg mt-4">
                Ocorreu um erro ao enviar sua mensagem. Por favor, tente
                novamente.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
