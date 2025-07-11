"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../../lib/sanity";
import { footerQuery } from "../../../queries/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";

const socialIcons = {
  facebook: <Facebook className="h-6 w-6" />,
  instagram: <Instagram className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
  twitter: <Twitter className="h-6 w-6" />,
  youtube: <Youtube className="h-6 w-6" />,
  portfolio: <Globe className="h-6 w-6" />,
};

type FooterData = {
  brandName: string;
  brandHighlight: string;
  description: string;
  socialLinks: {
    platform: keyof typeof socialIcons;
    url: string;
  }[];
  columns: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
  ctaBox?: {
    text: string;
    buttonText: string;
    buttonLink: string;
  };
  copyright: string;
};

const scrollToIdWithOffset = (id: string, offset = 40) => {
  const el = document.getElementById(id);
  if (!el) return;

  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null);
  const router = useRouter();

  useEffect(() => {
    client
      .fetch(footerQuery)
      .then((res) => setData(res))
      .catch((err) => console.error("Erro ao buscar footer:", err));
  }, []);

  if (!data) return null;

  const hasHighlight = data.brandName.includes(data.brandHighlight);
  const brandParts = hasHighlight
    ? data.brandName.split(data.brandHighlight)
    : [data.brandName, ""];

    const handleHashNav = async (href: string) => {
      const id = href.split("#")[1];
      const isMobile = window.innerWidth < 768;

      if (window.location.pathname !== "/") {
        await router.push("/");
        setTimeout(() => {
          if (isMobile) {
            scrollToIdWithOffset(id);
          } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      } else {
        if (isMobile) {
          scrollToIdWithOffset(id);
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

  return (
    <footer className="bg-dark text-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Coluna da Marca */}
          <div>
            <div className="mb-6 text-2xl font-bold text-white">
              {brandParts[0]}
              <span className="text-secondary">{data.brandHighlight}</span>
              {brandParts[1]}
            </div>
            <p className="text-gray-400 mb-6">{data.description}</p>
            <div className="flex space-x-4">
              {data.socialLinks.map(({ platform, url }, i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir para ${platform}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {socialIcons[platform]}
                </Link>
              ))}
            </div>
          </div>

          {/* Colunas de Links */}
          {data.columns.map((col, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => {
                  const isHash = link.url.startsWith("/#");

                  if (isHash) {
                    return (
                      <li key={j}>
                        <Link
                          href={link.url}
                          scroll={false}
                          onClick={(e) => {
                            e.preventDefault();
                            handleHashNav(link.url);
                          }}
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label={`Ir para ${link.text}`}
                        >
                          {link.text}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={j}>
                        <Link
                          href={link.url}
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label={`Ir para ${link.text}`}
                        >
                          {link.text}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          ))}

          {data.ctaBox && (
            <div>
              <p className="font-semibold text-lg mb-4">{data.ctaBox.text}</p>
              <Link
                href={data.ctaBox.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-secondary text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-all"
                  aria-label={`Abrir ${data.ctaBox.buttonText} no WhatsApp`}
                >
                  {data.ctaBox.buttonText}
                </button>
              </Link>
            </div>
          )}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>{data.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}
