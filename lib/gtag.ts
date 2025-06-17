export const GA_MEASUREMENT_ID = "G-LRRG713C84";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Isso aqui embaixo garante que o TypeScript reconheça window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};
