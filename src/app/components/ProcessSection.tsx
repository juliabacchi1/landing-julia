"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { processQuery } from "../../../queries/process";
import Link from "next/link";

type ProcessData = {
  title: string;
  subtitle: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  ctaText: string;
  ctaLink: string;
};

export default function ProcessSection() {
  const [data, setData] = useState<ProcessData | null>(null);

  useEffect(() => {
    client
      .fetch(processQuery)
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="como-funciona" className="py-20 px-4 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href={data.ctaLink}
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-full inline-block transition-all hover:opacity-90"
          >
            {data.ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}