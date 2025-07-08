"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { benefitsQuery } from "../../../queries/benefits";
import { useIsMobile } from "../../../lib/useIsMobile";
import { Zap, Monitor, Clock, BarChart, Smartphone, Cloud } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: keyof typeof iconComponents;
};

type BenefitsData = {
  title: string;
  subtitle: string;
  benefits: Benefit[];
};

const iconComponents = {
  conversion: <Zap />,
  design: <Monitor />,
  fast: <Clock />,
  analytics: <BarChart />,
  mobile: <Smartphone />,
  hosting: <Cloud />,
};

export default function BenefitsSection() {
  const [data, setData] = useState<BenefitsData | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    client
      .fetch(benefitsQuery)
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto">{data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.benefits.map((benefit, index) =>
            isMobile ? (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6 text-white">
                  {iconComponents[benefit.icon]}
                </div>
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ) : (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6 text-white">
                  {iconComponents[benefit.icon]}
                </div>
                <h3 className="text-xl text-gray-800 font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
