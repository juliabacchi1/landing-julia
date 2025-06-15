"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, ArrowRight, PlayCircle, CheckCircle, Star } from "lucide-react";

type HeroData = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  ctaTextTwo: string;
  ctaLinkTwo: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
};

export default function Hero() {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "hero"][0]{
        title,
        subtitle,
        ctaText,
        ctaLink,
        ctaTextTwo,
        ctaLinkTwo,
        image{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setHero(data))
      .catch(console.error);
  }, []);

  if (!hero) return <div>Carregando...</div>;

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 lg:px-16 gap-12 bg-gray-50 dark:bg-gray-900"
    >
      <motion.div
        className="flex-1 text-center md:text-left z-10 space-y-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Badge de destaque */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fff4ed] dark:bg-[#2a1a12] rounded-full">
          <Star className="text-[#e94f37]" size={18} />
          <span className="text-sm font-medium text-[#e94f37]">
            Especialista em conversão
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-br from-[#e94f37] via-[#f3722c] to-[#f8961e] text-transparent bg-clip-text">
          {hero.title}
        </h1>

        <p className="text-lg md:text-xl text-[#5a5a5a] dark:text-[#cfcfcf] max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {hero.subtitle}
        </p>

        {/* Botões com microinterações sofisticadas */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href={hero.ctaLink} className="group">
            <button className="relative bg-gradient-to-r from-[#e94f37] to-[#f3722c] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold text-md overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                {hero.ctaText}
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#f3722c] to-[#e94f37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </a>
          {hero.ctaLinkTwo && hero.ctaTextTwo && (
            <a href={hero.ctaLinkTwo} className="group">
              <button className="border-2 border-[#e94f37] text-[#e94f37] dark:text-white dark:border-white/30 hover:bg-[#e94f37] hover:text-white px-8 py-4 rounded-xl transition-all font-semibold text-md flex items-center gap-2">
                <PlayCircle size={20} />
                {hero.ctaTextTwo}
              </button>
            </a>
          )}
        </div>

        {/* Elementos de confiança */}
        <div className="pt-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            <CheckCircle className="inline mr-2 text-green-500" size={16} />
            Já ajudamos mais de 200 clientes a aumentar suas conversões
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Clientes (substituir por logos reais) */}
            {[
              "Startup Tech",
              "E-commerce",
              "Consultoria",
              "Saúde",
              "Educação",
            ].map((client, i) => (
              <div
                key={i}
                className="px-3 py-1 bg-white dark:bg-gray-800 dark:text-white rounded-full text-xs font-medium shadow-sm border border-gray-100 dark:border-gray-700"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Imagem */}
      <motion.div
        className="group flex-1 max-w-md md:max-w-2xl relative w-full h-80 md:h-[600px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src={hero.image.asset.url}
          alt={hero.image.alt}
          fill
          style={{ objectFit: "cover" }}
          priority
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay mais profissional */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Badge de resultados melhorado */}
        <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2">
          <TrendingUp className="text-green-500" size={20} />
          <div>
            <p className="font-bold text-gray-900 dark:text-white">
              +150% conversões
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Média de nossos clientes
            </p>
          </div>
        </div>

        {/* Elemento decorativo adicional (opcional) */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#e94f37] rounded-full opacity-10"></div>
      </motion.div>

      {/* Elemento decorativo de fundo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent z-0"></div>
    </motion.section>
  );
}
