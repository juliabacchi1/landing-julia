"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="hidden md:flex fixed bottom-5 right-5 z-50 group">

      <div className="absolute right-16 bottom-1/2 translate-y-1/2 bg-white text-gray-800 text-sm px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-200">
        <span className="block leading-tight">Fale comigo!</span>
      </div>

      <motion.a
        href="https://wa.me/5548991779743?text=Ol%C3%A1%20Julia%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1EBE5D] transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
