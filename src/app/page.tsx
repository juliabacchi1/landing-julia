import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import BenefitsSection from "./components/benefitsSection";
import ProcessSection from "./components/ProcessSection";
import { PricingSection } from "./components/PricingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandsSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
    </main>
  );
}
