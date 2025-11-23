// app/doctors/[id]/page.tsx
"use client";

import { AboutSection } from "@/app/components/doctorProfile/AboutSection";
import ImageSection from "@/app/components/doctorProfile/imageSection";
import { InsuranceSection } from "@/app/components/doctorProfile/InsuranceSection";
import { MainFooter } from "@/app/components/footer/Footer";
import Navbar from "@/app/components/Navbar";
import { doctorsData } from "@/app/constants/doctors";
import { TypeDoctorPageProps } from "@/app/types/doctors";

import React, { use } from "react";

const DoctorProfile: React.FC<TypeDoctorPageProps> = ({ params }) => {
  const resolvedParams = use(params);
  const doctorId = resolvedParams.id || "mauro-lencioni";

  const doctorData = doctorsData[doctorId];

  if (!doctorData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Doctor Not Found
          </h1>
          <p className="text-gray-600">The requested doctor profile does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <ImageSection doctorId={doctorId} />
        <AboutSection doctorId={doctorId}/>
        <InsuranceSection/>
      </div>
      <MainFooter />
    </>
  );
};

export default DoctorProfile;