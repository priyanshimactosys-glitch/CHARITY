'use client'

import AboutSection from "@/src/modules/home/AboutSection";
import GetHelpSection from "@/src/modules/home/GetHelpSection";
import HeroSection from "@/src/modules/home/HeroSection";
import ProfessionalServices from "@/src/modules/home/ProfessionalServices";
import ServicesSection from "@/src/modules/home/ServicesSection";
import SupportSection from "@/src/modules/home/SupportSection";
import WhyServeSection from "@/src/modules/home/WhyServeSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>  
      <GetHelpSection/>
      <ProfessionalServices/>
      <SupportSection/>
      <WhyServeSection/>
    </main>
  );
}
