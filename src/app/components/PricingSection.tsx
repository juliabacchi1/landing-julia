"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { pricingQuery } from "../../../queries/pricing";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import { event } from "../../../lib/gtag";

type PricingData = {
  title: string;
  subtitle: string;
  plans: Array<{
    name: string;
    price: string;
    priceDescription: string;
    description: string;
    features: Array<{
      text: string;
      included: boolean;
    }>;
    ctaText: string;
    highlight: boolean;
    highlightText: string;
  }>;
};

const trackSelectPlan = (plano: string) => {
  event({
    action: "click_select_plan",
    category: "plano",
    label: plano,
  });
};

export default function PricingSection() {
  const [data, setData] = useState<PricingData | null>(null);

  useEffect(() => {
    client
      .fetch(pricingQuery)
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="planos" className="py-20 px-4 bg-white">
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
          {data.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-sm border transition-all duration-300 relative ${
                plan.highlight
                  ? "border-2 border-primary shadow-lg scale-[1.03]"
                  : "border-gray-100"
              } hover:-translate-y-2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-semibold py-1 px-4 rounded-full shadow-md">
                  {plan.highlightText}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.priceDescription}</span>
                </div>
                <p className="text-gray-600 mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-primary" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300" />
                      )}
                    </span>
                    <span
                      className={`${
                        feature.included ? "" : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contato"
                onClick={() => trackSelectPlan(plan.name)}
                className={`block w-full py-3 px-6 text-center font-semibold rounded-full transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
