"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/sanity";
import { heroQuery } from "../../../queries/hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      .fetch(heroQuery)
      .then((data) => setHero(data))
      .catch(console.error);
  }, []);

  if (!hero) return null;

  return (
    <section id="hero" className="pt-28 pb-20 px-4 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {hero.title.split("Convertem")[0]}
              <span className="text-primary">Convertem</span>
              {hero.title.split("Convertem")[1]}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.ctaLink ? (
                <Link
                  href={hero.ctaLink}
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-full text-center transition-all hover:opacity-90"
                >
                  {hero.ctaText}
                </Link>
              ) : (
                <button
                  disabled
                  className="bg-gray-400 cursor-not-allowed font-semibold px-8 py-3 rounded-full text-center"
                >
                  {hero.ctaText}
                </button>
              )}

              {hero.ctaLinkTwo ? (
                <Link
                  href={hero.ctaLinkTwo}
                  className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full text-center transition-all hover:bg-primary hover:text-white"
                >
                  {hero.ctaTextTwo}
                </Link>
              ) : (
                <button
                  disabled
                  className="border-2 border-gray-400 text-gray-400 font-semibold px-8 py-3 rounded-full text-center cursor-not-allowed"
                >
                  {hero.ctaTextTwo}
                </button>
              )}
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {hero.image?.asset?.url ? (
                <div className="relative w-full h-auto md:h-auto rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={hero.image.asset.url}
                    alt={hero.image.alt || "Landing page profissional"}
                    width={800}
                    height={600}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full h-96 md:h-[500px] bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400">Imagem da landing page</span>
                </div>
              )}

              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent rounded-full opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
