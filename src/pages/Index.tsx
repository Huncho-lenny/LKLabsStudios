import { useState, useEffect, lazy, Suspense } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";

const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TechStackSection = lazy(() => import("@/components/TechStackSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const CodePoetrySection = lazy(() => import("@/components/CodePoetrySection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen show={loading} />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={null}>
          <ProjectsSection />
          <AboutSection />
          <ServicesSection />
          <TechStackSection />
          <ProcessSection />
          <CodePoetrySection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
