// app/components/services/SpecialistsSection.tsx
"use client";


import React from "react";
import Link from "next/link";
import { servicesData } from "@/app/constants/services";

interface Specialist {
  id: string;
  name: string;
  title: string;
  image: string;
  specialties: string[];
  consultationFee: string;
  experience: string;
}

interface SpecialistsSectionProps {
  serviceId: string;
}

// Use specialists from centralized services data

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  serviceId,
}) => {
  const service = servicesData[serviceId] || servicesData["cardiology"];
  const specialists: Specialist[] = service.specialists || [];

  return (
<div className="bg-[rgba(243,248,252,1)] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Specialists Offering <span className="text-[#05BFDB]">{service.name}</span>
        </h2>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialists.map((specialist) => (
            <Link
              key={specialist.id}
              href={`/doctors/${specialist.id}`}
              className="
                bg-white rounded-lg overflow-hidden 
                shadow-sm hover:shadow-md 
                transition-shadow 
                flex flex-col h-full
                cursor-pointer
              "
            >
              {/* Content Section */}
              <div className="p-6 flex-grow">
                
                {/* Doctor Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          specialist.name
                        )}&size=64&background=05BFDB&color=fff`;
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {specialist.name}
                    </h3>
                    <p className="text-sm text-gray-600">{specialist.title}</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {specialist.specialties.join(" | ")}
                  </p>
                </div>

                {/* Fee & Experience */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Consultation Fee:</p>
                    <p className="text-lg font-bold text-gray-900">
                      {specialist.consultationFee}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Experience:</p>
                    <p className="text-lg font-bold text-gray-900">
                      {specialist.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button ALWAYS at bottom */}
              <div
                className="w-full bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] hover:from-[#126ba8] hover:to-[#4da990] text-white font-medium py-4 rounded-b-lg transition-all duration-300 mt-auto text-center"
              >
                Book An Appointment
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
