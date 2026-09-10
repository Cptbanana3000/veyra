import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickFacts from './components/QuickFacts';
import EarningsCalculator from './components/EarningsCalculator';
import AgencyPerks from './components/AgencyPerks';
import HowItWorks from './components/HowItWorks';
import HostShowcase from './components/HostShowcase';
import SafetyAndRules from './components/SafetyAndRules';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('terms');

  const openApply = () => setIsApplyModalOpen(true);
  const closeApply = () => setIsApplyModalOpen(false);

  const openTerms = () => {
    setLegalTab('terms');
    setIsLegalModalOpen(true);
  };

  const openPrivacy = () => {
    setLegalTab('privacy');
    setIsLegalModalOpen(true);
  };

  const openRules = () => {
    setLegalTab('rules');
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white antialiased">
      
      {/* Navigation */}
      <Navbar 
        onOpenApply={openApply}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenApply={openApply} 
        />
        
        <QuickFacts />
        
        <EarningsCalculator 
          onOpenApply={openApply} 
        />
        
        <AgencyPerks 
          onOpenApply={openApply} 
        />
        
        <HowItWorks 
          onOpenApply={openApply} 
        />
        
        <HostShowcase />
        
        <SafetyAndRules 
          onOpenTerms={openTerms} 
        />
        
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenApply={openApply}
        onOpenTerms={openTerms}
        onOpenPrivacy={openPrivacy}
        onOpenRules={openRules}
      />

      {/* Recruitment Application Modal */}
      <ApplicationModal 
        isOpen={isApplyModalOpen} 
        onClose={closeApply}
        onOpenTerms={openTerms}
        onOpenPrivacy={openPrivacy}
      />

      {/* Legal Documentation Modal */}
      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalTab}
      />

    </div>
  );
}
