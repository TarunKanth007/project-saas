"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { SignupModal } from "@/components/signup-modal";

export default function Home() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleStartTrial = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseSignup = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      <Hero onStartTrial={handleStartTrial} />
      <Features />
      <Pricing onStartTrial={handleStartTrial} />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={handleCloseSignup} 
      />
    </main>
  );
}