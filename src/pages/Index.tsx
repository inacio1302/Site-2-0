import UrgencyBar from "@/components/UrgencyBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SocialProofToast from "@/components/SocialProofToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <Header />
      <Hero />
      <PromoSection />
      <HowItWorks />
      <BeforeAfterGallery />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
      <SocialProofToast />
    </div>
  );
};

export default Index;
