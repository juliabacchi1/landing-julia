import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import BenefitsSection from "./components/BenefitsSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ProjectsSection from "./components/ProjectsSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/FooterSection";

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
      <ProjectsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
