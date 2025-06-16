"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import { brandsQuery } from "../../../queries/brands";
import Image from "next/image";
import { motion } from "framer-motion";

type Brand = {
  name: string;
  logo?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  url?: string;
};

type BrandsSectionData = {
  title: string;
  brands: Brand[];
};

export default function BrandsSection() {
  const [data, setData] = useState<BrandsSectionData | null>(null);

  useEffect(() => {
    client
      .fetch(brandsQuery)
      .then(setData)
      .catch((err) => {
        console.error("Erro ao buscar dados das marcas:", err);
      });
  }, []);

  if (!data) {
    return (
      <section className="py-10 bg-gray-50 text-center">
        <p className="text-gray-400 text-lg">Carregando marcas...</p>
      </section>
    );
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-gray-500 mb-8 text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {data.title || "Marcas"}
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {data.brands?.length > 0 ? (
            data.brands.map((brand, index) => (
              <motion.div
                key={`brand-${index}`}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {brand.logo?.asset?.url ? (
                  <div className="relative h-12 w-32 md:h-16 md:w-40 grayscale hover:grayscale-0 transition-all duration-300">
                    {brand.url ? (
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={brand.logo.asset.url}
                          alt={brand.logo.alt || brand.name || "Logo marca"}
                          fill
                          className="object-contain"
                        />
                      </a>
                    ) : (
                      <Image
                        src={brand.logo.asset.url}
                        alt={brand.logo.alt || brand.name || "Logo marca"}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                ) : (
                  <span className="text-gray-400 font-semibold text-xl">
                    {brand.name}
                  </span>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">
              Nenhuma marca cadastrada ainda.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
