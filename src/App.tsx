import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CorePillars } from './components/CorePillars';
import { FrictionMatrix } from './components/FrictionMatrix';
import { ImpactStatement } from './components/ImpactStatement';
import { Methodology } from './components/Methodology';
import { DiagnosticReport } from './components/DiagnosticReport';
import { DifferentiatorDialogue } from './components/DifferentiatorDialogue';
import { BrandContinuity } from './components/BrandContinuity';
import { SolutionsGrid } from './components/SolutionsGrid';
import { AboutCompany } from './components/AboutCompany';
import { FAQSection } from './components/FAQSection';
import { DiagnosticForm } from './components/DiagnosticForm';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      const yOffset = -40;
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToApproach = () => {
    const approachSection = document.getElementById('metodologia');
    if (approachSection) {
      const yOffset = -70;
      const y = approachSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-zinc-950 font-sans antialiased">
      {/* Global Navbar */}
      <Navbar onOpenSchedule={scrollToContact} />

      {/* Main Landing Flow */}
      <main>
        {/* 1. Hero with Interactive Company Mind Map */}
        <Hero
          onScheduleClick={scrollToContact}
          onExploreApproach={scrollToApproach}
        />

        {/* 2. Before Transforming, Know the Company */}
        <CorePillars />

        {/* 3. The Real Friction (Nem todo problema aparece no balanço) */}
        <FrictionMatrix />

        {/* 4. Impact Statement & Philosophy (Tecnologia pela tecnologia não serve para nada) */}
        <ImpactStatement />

        {/* 5. 6-Step Visual Methodology */}
        <Methodology />

        {/* 6. Diagnostic & Strategic Deliverable (3 Dias → 1 Semana) */}
        <DiagnosticReport />

        {/* 7. The Differentiator & Honest Decision Tree (Quero um app → NADA DISSO) */}
        <DifferentiatorDialogue />

        {/* 8. Modernize Without Distorting Identity (Passado → Presente → Futuro) */}
        <BrandContinuity />

        {/* 9. Editorial Solutions Architecture */}
        <SolutionsGrid />

        {/* 10. About Leandro & Future Platform Vision */}
        <AboutCompany />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Final CTA & 6-Step Diagnostic Form */}
        <DiagnosticForm />
      </main>

      {/* Footer */}
      <Footer onScheduleClick={scrollToContact} />
    </div>
  );
}
