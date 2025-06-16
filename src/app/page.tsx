import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import BenefitsSection from "./components/benefitsSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandsSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
