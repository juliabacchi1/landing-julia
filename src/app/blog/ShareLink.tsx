"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
};

export default function ShareLink({ title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title,
      text: `Dá uma olhada nesse post: ${title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error("Erro ao copiar link:", err);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
      >
        <Share2 size={16} className="mr-1" />
        Compartilhar
      </button>
      {copied && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow transition-all duration-300">
          Link copiado!
        </div>
      )}
    </>
  );
}
