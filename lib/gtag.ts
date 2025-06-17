export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Garante que o TypeScript reconheça window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Rastreia visualização de página
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_ID) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

// Rastreia eventos personalizados
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag && GA_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
      currency: "BRL",
    });
  }
};
