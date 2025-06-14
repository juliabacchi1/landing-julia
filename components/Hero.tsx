"use client";

import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity";

type HeroData = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
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
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg md:text-xl">
          {hero.subtitle}
        </p>
        <a href={hero.ctaLink}>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg shadow-lg transition-colors duration-300 font-semibold">
            {hero.ctaText}
          </button>
        </a>
      </div>

      <div className="flex-1 max-w-md md:max-w-lg">
        <img
          src={hero.image.asset.url}
          alt={hero.image.alt}
          className="rounded-xl shadow-xl mx-auto"
        />
      </div>
    </section>
  );

}
