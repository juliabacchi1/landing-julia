export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

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
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
      currency: "BRL",
    });
  }
};