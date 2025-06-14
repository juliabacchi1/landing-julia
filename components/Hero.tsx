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
    <section className="hero">
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <a href={hero.ctaLink}>
        <button>{hero.ctaText}</button>
      </a>
      <img src={hero.image.asset.url} alt={hero.image.alt} />
    </section>
  );
}
