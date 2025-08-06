"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { SignupModal } from "@/components/signup-modal";
import { Protections } from "@/components/sections/protections";

export default function Home() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleStartTrial = () => setIsSignupModalOpen(true);
  const handleCloseSignup = () => setIsSignupModalOpen(false);

  return (
    <main className="min-h-screen">
      <section id="home"><Hero onStartTrial={handleStartTrial} /></section>
      <section id="features"><Features /></section>
      <section id="pricing"><Pricing onStartTrial={handleStartTrial} /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="protections"><Protections /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><Footer /></section>
      
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={handleCloseSignup} 
      />
    </main>
  );
}
