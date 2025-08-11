


import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";

const Index = () => {



  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ReviewsSection />
        <GuaranteeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
