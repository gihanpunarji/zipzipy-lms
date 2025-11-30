import { Navbar } from "./components/landing/navbar";
import { BenefitsSection } from "./components/landing/benefits-section";
import { CourseCategoriesSection } from "./components/landing/course-categories-section";
import { FaqSection } from "./components/landing/faq-section";
import { FeaturesSection } from "./components/landing/features-section";
import { Footer } from "./components/landing/footer";
import { HeroSection } from "./components/landing/hero-section";
import { HowItWorksSection } from "./components/landing/how-it-works-section";
import { TestimonialsSection } from "./components/landing/testimonials-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CourseCategoriesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}