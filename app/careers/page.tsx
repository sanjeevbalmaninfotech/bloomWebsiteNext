
"use client";

import { MainFooter } from "@/app/components/footer/Footer";
import Navbar from "@/app/components/Navbar";
import { CareerHeroSection } from "../components/careers/CareerHeroSection";
import { JobsListingSection } from "../components/careers/JobsListingSection";
import HeroImage from "../components/careers/HeroImage";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <HeroImage />
      {/* <div className="min-h-screen bg-gray-50">
        <CareerHeroSection />
        <JobsListingSection />
      </div> */}
      <MainFooter />
    </>
  );
}

