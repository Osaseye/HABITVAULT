import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Screenshots from '../components/landing/Screenshots';
import HowItWorks from '../components/landing/HowItWorks';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-slate-900">
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;