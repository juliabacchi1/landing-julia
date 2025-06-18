"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/#beneficios", label: "Benefícios" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#planos", label: "Planos" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center mt-4 md:mt-0">
        <Link
          href="/#hero"
          className="text-2xl font-bold text-primary flex items-center space-x-1 transition-all duration-300"
        >
          <span className="inline-flex overflow-hidden">
            <span>J</span>
            <motion.span
              animate={{
                x: scrolled ? -20 : 0,
                opacity: scrolled ? 0 : 1,
                width: scrolled ? 0 : "auto",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="inline-block"
            >
              ulia
            </motion.span>
          </span>

          <span className="inline-flex overflow-hidden text-secondary">
            <span>B</span>
            <motion.span
              animate={{
                x: scrolled ? -20 : 0,
                opacity: scrolled ? 0 : 1,
                width: scrolled ? 0 : "auto",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="inline-block"
            >
              acchi
            </motion.span>
          </span>
        </Link>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/48991779743?text=Ol%C3%A1%20Julia%2C%20te%20achei%20atrav%C3%A9s%20do%20seu%20Site%21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-secondary transition-colors"
          >
            Fale Conosco
          </a>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 border-b border-gray-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
