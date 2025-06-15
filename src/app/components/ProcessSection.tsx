"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Smartphone,
  Search,
  Settings2,
  ArrowRight,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { useEffect } from "react";
import CustomButton from "./CustomButton";

const features = [
  {
    icon: <Smartphone size={40} className="text-[#8ab4f8]" />,
    title: "Mobile-first",
    description: "Seu site lindo em qualquer tela",
    detail:
      "Desenvolvido com Tailwind e breakpoints otimizados para garantir performance em todos os dispositivos.",
    bgClass: "bg-[#f5faff] dark:bg-[#10151f]",
  },
  {
    icon: <Search size={40} className="text-[#8ab4f8]" />,
    title: "SEO otimizado",
    description: "Mais chances de aparecer no Google",
    detail:
      "Estrutura semântica, metatags bem definidas e performance rápida ajudam seu site a ranquear melhor.",
    bgClass: "bg-[#f5faff] dark:bg-[#10151f]",
  },
  {
    icon: <Settings2 size={40} className="text-[#8ab4f8]" />,
    title: "CMS fácil",
    description: "Você edita seu site sem depender de ninguém",
    detail:
      "Sanity CMS integrado: conteúdo 100% personalizável sem tocar no código.",
    bgClass: "bg-[#f5faff] dark:bg-[#10151f]",
  },
];

export default function ProcessSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 py-20 bg-gray-50 dark:bg-[#0d1117]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="max-w-7xl mx-auto w-full relative z-10 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5faff] dark:bg-[#10151f] rounded-full mb-6">
          <CheckCircle className="text-[#8ab4f8]" size={18} />
          <span className="text-sm font-medium text-[#8ab4f8]">
            Metodologia comprovada
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-br from-[#8ab4f8] via-[#f482c3] to-[#ffbca7] text-transparent bg-clip-text">
          O que todo site precisa para converter
        </h2>

        <p className="text-lg text-[#5a5a5a] dark:text-[#cfcfcf] max-w-4xl mx-auto leading-relaxed">
          Não é só sobre ter um site bonito: é sobre ter presença digital
          estratégica, otimizada e fácil de manter.
        </p>
      </motion.div>

      {/* Aqui o motion só no bloco inteiro dos cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        className="grid md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto"
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className={`relative ${feature.bgClass} p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
                {feature.icon}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-left w-full flex items-start gap-3">
                <ArrowRight
                  size={18}
                  className="text-[#8ab4f8] mt-0.5 flex-shrink-0"
                />
                <span className="text-sm">{feature.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-20"
      >
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          <CheckCircle className="inline mr-2 text-green-500" size={16} />
          Já ajudamos mais de 200 clientes a aumentar suas conversões
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton
            href="#contato"
            variant="primary"
            icon={
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            }
          >
            Quero um site assim!
          </CustomButton>

          <CustomButton
            href="#features"
            variant="outline"
            icon={<PlayCircle size={20} />}
          >
            Ver cases de sucesso
          </CustomButton>
        </div>
      </motion.div>
    </section>
  );
}
