"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { testimonialsQuery } from "../../../queries/testimonials";

type Testimonial = {
  name: string;
  initials: string;
  role: string;
  content: string;
  rating: number;
  color: "primary" | "secondary" | "accent";
};

type TestimonialsData = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

export default function TestimonialsSection() {
  const [data, setData] = useState<TestimonialsData | null>(null);

  useEffect(() => {
    client
      .fetch(testimonialsQuery)
      .then((res) => setData(res))
      .catch((err) => {
        console.error("Erro ao buscar depoimentos:", err);
      });
  }, []);

  if (!data) return null;

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <section id="depoimentos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${colorClasses[testimonial.color]} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
