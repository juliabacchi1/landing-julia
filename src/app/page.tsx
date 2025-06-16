import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import { BenefitsSection } from "./components/benefitsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandsSection />
      <BenefitsSection />
      {/* outras seções */}
    </main>
  );
}
