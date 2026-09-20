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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D13] text-white flex flex-col font-sans selection:bg-[#387BFF] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 00. Hero Section (Dark) */}
        <HeroSection />

        {/* 01. Opportunity Section (Light/White) */}
        <OpportunitySection />

        {/* 02. Services / Capabilities Section (Off-white/Light) */}
        <ServicesSection />

        {/* 03. Problem to Solution - Make The Shift Section (Dark) */}
        <MakeTheShiftSection />

        {/* 04. Selected Work / Case Studies - Bizz-Hunter & Medex (Light) */}
        <SelectedWorkSection />

        {/* 05. How We Work / Process Section (Light) */}
        <ProcessSection />

        {/* 06. Why SammyRemi / Advantages Section (White) */}
        <WhySammyRemiSection />

        {/* 07. About Section (Dark) */}
        <AboutSection />

        {/* 08. Final CTA Section (Light) */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
