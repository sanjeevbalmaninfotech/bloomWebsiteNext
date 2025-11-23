"use client";

import { doctorsData } from "@/app/constants/doctors";
import Image from "next/image";
import React from "react";

interface ImageSectionProps {
  doctorId: string;
}

export default function ImageSection({ doctorId }: ImageSectionProps) {
  const doctor = doctorsData[doctorId];

  if (!doctor) return null;

   return (
    <div className="bg-[#012840] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-16">

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden bg-gray-300 shadow-lg">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {doctor.name}
              </h1>

<p className="text-[rgba(95,193,163,1)] text-xl md:text-2xl mb-4 font-medium">

                {doctor.title}
              </p>

              <div className="flex flex-wrap gap-3 text-base text-gray-300 mb-6 justify-center md:justify-start">
                {doctor.specialties.map((specialty, index) => (
                  <React.Fragment key={specialty}>
                    <span>{specialty}</span>
                    {index < doctor.specialties.length - 1 && <span>|</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2 transition-colors mx-auto md:mx-0">
                <span>View All Availability</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
