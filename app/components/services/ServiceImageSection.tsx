
"use client";

import { RegisterButton } from "@/app/components/registerButton/RegisterButton";
import { servicesData } from "@/app/constants/services";
import React from "react";

interface ServiceImageSectionProps {
  serviceId: string;
}

export const ServiceImageSection: React.FC<ServiceImageSectionProps> = ({
  serviceId,
}) => {
  const serviceData = servicesData[serviceId];

  if (!serviceData) {
    return null;
  }

  return (
    <div className="relative min-h-[400px] bg-[#0A4D68] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={serviceData.image}
          alt={serviceData.name}
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const imageElement = e.target as HTMLImageElement;
            imageElement.src =
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=400&fit=crop";
          }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0A4D68]/70"></div>
      </div>

      {/* Text Content Overlay */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 section-spacing">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {serviceData.name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/95 mb-6 sm:mb-8 leading-relaxed">
            {serviceData.description}
          </p>
          <div className="w-full md:w-1/2 lg:w-[43%]">
            <RegisterButton />
          </div>

        </div>
      </div>
    </div>
  );
};