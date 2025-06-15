"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "./CustomButton";
import {
  TrendingUp,
  ArrowRight,
  PlayCircle,
  CheckCircle,
  Star,
} from "lucide-react";

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
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-16 gap-12 bg-[#131314] text-[#e3e3e3]"
    >
      <motion.div
        className="flex-1 text-center md:text-left z-10 space-y-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] rounded-full">
          <Star className="text-[#f482c3]" size={18} />
          <span className="text-sm font-medium text-[#f482c3]">
            Especialista em conversão
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8ab4f8] via-[#f482c3] to-[#8ab4f8]">
          {hero.title}
        </h1>

        <p className="text-lg md:text-xl text-[#8a8a8a] max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <CustomButton
            href={hero.ctaLink}
            variant="primary"
            icon={
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            }
          >
            {hero.ctaText}
          </CustomButton>

          <CustomButton
            href="#features"
            variant="outline"
            icon={<PlayCircle size={20} />}
          >
            {hero.ctaTextTwo}
          </CustomButton>
        </div>

        <div className="pt-8">
          <p className="text-[#8a8a8a] text-sm mb-4">
            <CheckCircle className="inline mr-2 text-green-500" size={16} />
            Já ajudamos mais de 200 clientes a aumentar suas conversões
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[
              "Startup Tech",
              "E-commerce",
              "Consultoria",
              "Saúde",
              "Educação",
            ].map((client, i) => (
              <div
                key={i}
                className="px-3 py-1 bg-[#1f1f1f] rounded-full text-xs font-medium border border-[#2a2a2a]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="group flex-1 max-w-md md:max-w-2xl relative w-full h-80 md:h-[600px] overflow-hidden rounded-3xl shadow-2xl border-4 border-[#1f1f1f]"
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        <div className="absolute bottom-6 left-6 bg-[#1f1f1f] px-4 py-3 rounded-lg shadow-xl border border-[#2a2a2a] flex items-center gap-2">
          <TrendingUp className="text-green-500" size={20} />
          <div>
            <p className="font-bold text-white">+150% conversões</p>
            <p className="text-xs text-[#8a8a8a]">Média de nossos clientes</p>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#8ab4f8] rounded-full opacity-10"></div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#131314] to-transparent z-0"></div>
    </motion.section>
  );
}
