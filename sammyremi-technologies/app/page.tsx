import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { OpportunitySection } from "@/components/opportunity/OpportunitySection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { MakeTheShiftSection } from "@/components/shift/MakeTheShiftSection";
import { SelectedWorkSection } from "@/components/work/SelectedWorkSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { WhySammyRemiSection } from "@/components/why/WhySammyRemiSection";
import { AboutSection } from "@/components/about/AboutSection";
import { FinalCtaSection } from "@/components/cta/FinalCtaSection";
import { Footer } from "@/components/navigation/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0D13] text-neutral-900 dark:text-white flex flex-col font-sans selection:bg-[#D96B18] selection:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 00. Hero Section */}
        <HeroSection />

        {/* 01. Opportunity Section */}
        <OpportunitySection />

        {/* 02. Services / Capabilities Section */}
        <ServicesSection />

        {/* 03. Problem to Solution - Make The Shift Section */}
        <MakeTheShiftSection />

        {/* 04. Selected Work / Case Studies */}
        <SelectedWorkSection />

        {/* 05. How We Work / Process Section */}
        <ProcessSection />

        {/* 06. Why SammyRemi / Advantages Section */}
        <WhySammyRemiSection />

        {/* 07. About Section */}
        <AboutSection />

        {/* 08. Final CTA Section */}
        <FinalCtaSection />
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
