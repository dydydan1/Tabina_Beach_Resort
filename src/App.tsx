import { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FacilitiesSection } from "./components/FacilitiesSection";
import { CottageRatesSection } from "./components/CottageRatesSection";
import { GallerySection } from "./components/GallerySection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection, type InquiryPreset } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [inquiryPreset, setInquiryPreset] = useState<InquiryPreset>(null);

  const handleCottageInquiry = useCallback((cottageName: string) => {
    setInquiryPreset({ type: "Cottage reservation", cottage: cottageName, nonce: Date.now() });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <CottageRatesSection onInquire={handleCottageInquiry} />
        <GallerySection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection preset={inquiryPreset} />
      </main>
      <Footer />
    </>
  );
}
