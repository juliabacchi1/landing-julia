# Landing Page Oficial

**landings-julia** é a minha **landing page oficial**, criada para apresentar meus serviços de desenvolvimento de sites e landings personalizadas. Pensada para conversão e experiência do usuário, ela mostra como eu trabalho: com foco em design estratégico, conteúdo bem estruturado e tecnologia moderna.
Desenvolvida com **Next.js, TailwindCSS e Sanity CMS**, é um exemplo real de entrega profissional.

[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)  
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Next.js%20%7C%20React%20%7C%20Tailwind-blue)](https://nextjs.org/)  
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-purple)](https://landings-julia.vercel.app)  
[![GitHub](https://img.shields.io/badge/GitHub-@juliabacchi1%2Flanding--julia-black?logo=github)](https://github.com/juliabacchi1/landing-julia)

![Screenshot do Site](./public/screenshot.webp)

---

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sanity CMS](https://www.sanity.io/)

---

## 🚀 Como rodar localmente

```bash
git clone https://github.com/juliabacchi1/landing-julia.git
cd landing-julia
npm install
npm run dev
```

Antes de rodar, crie um arquivo `.env.local` com as variáveis necessárias para conexão com o CMS (Sanity)

.env.example
```bash
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=
```

---

## ✨ Funcionalidades
- 🧲 Hero com chamada para ação dupla (WhatsApp e explorações)
- 💡 Seção "Como Funciona" com ícones e explicações simples
- 🎯 Benefícios destacados com texto direto e visual leve
- 💸 Tabela de Planos clara e focada em conversão
- 🗣️ Depoimentos reais (com CMS)
- ❓ Seção de FAQ com respostas claras para dúvidas comuns dos clientes
- 💬 Contato com formulário para envio ao e-mail
- 🧑‍💻 CMS via Sanity para editar textos e imagens sem precisar de código
- 🌈 Animações suaves e microinterações com Framer Motion
- 📱 100% responsiva, pensada pra funcionar bem no celular e no desktop

## 📂 Estrutura do projeto

```
src/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PlansSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Navbar.tsx
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── sanity.ts
└── public/
    └── screenshot-landing.webp
```

## 🧩 Propósito
Essa é a minha vitrine digital – o lugar onde mostro aos clientes o que posso entregar: sites funcionais, bonitos, estratégicos e prontos pra converter.

## 🙋‍♀️ Feito por
Julia Bacchi – apaixonada por web moderna, design com propósito e experiências que encantam pessoas e vendem ideias.
[LinkedIn](https://www.linkedin.com/in/juliabacchi/) | [Portfólio](https://juliabacchi.com)
