"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { faqQuery } from "../../../queries/faq";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqData = {
  title: string;
  subtitle: string;
  questions: FaqItem[];
};

export default function FaqSection() {
  const [data, setData] = useState<FaqData | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    client
      .fetch(faqQuery)
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  if (!data) return null;

  return (
    <section id="faq" className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
        </motion.div>

        <div className="space-y-6">
          {data.questions.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-medium text-left">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-primary transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } p-5 bg-gray-50 border-t border-gray-200`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
