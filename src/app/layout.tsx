import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";
import Analytics from "./components/Analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landings-julia.vercel.app"),
  title: "Landing pages que convertem | Julia Bacchi",
  description:
    "Landing pages profissionais e estratégicas para transformar visitantes em clientes. Design, copy e performance feitos sob medida para o seu negócio.",
  keywords: [
    "landing page",
    "landing page profissional",
    "sites que convertem",
    "aumentar conversão",
    "Julia Bacchi",
    "site para negócios",
    "landing page estratégica",
    "design de landing page",
    "freelancer landing page",
  ],
  openGraph: {
    title: "Landing pages que convertem | Julia Bacchi",
    description:
      "Transforme visitantes em clientes com uma landing page feita sob medida. Foco em conversão, performance e identidade visual forte.",
    url: "https://landings-julia.vercel.app/",
    type: "website",
    siteName: "Julia Bacchi",
    images: "/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing pages que convertem | Julia Bacchi",
    description:
      "Landing pages personalizadas para aumentar conversões e destacar o seu negócio online.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="4xv1yyEjDeOaYvvkUgzOtfPkYBhTjSDKbu4_hVldXOo"
        />
        {/* Título no iOS */}
        <meta name="apple-mobile-web-app-title" content="Julia Bacchi" />
        <meta name="application-name" content="Julia Bacchi" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* Favicons */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        <link rel="manifest" href="/favicon/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="92x92"
          href="/favicon/favicon-92x92.png"
        />

        {/* PWA icons - Android */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/favicon-512x512.png"
        />

        {/* Script GA */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            debug_mode: ${process.env.NODE_ENV === "development"}
          });
        `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
