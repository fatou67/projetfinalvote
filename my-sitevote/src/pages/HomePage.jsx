import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/featuresSection';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/footer'; 


export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
