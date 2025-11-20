"use client";

import { MainFooter } from "@/app/components/footer/Footer";
import Navbar from "@/app/components/Navbar";
import { ServiceAccordionSection } from "@/app/components/services/ServiceAccordionSection";
import { ServiceImageSection } from "@/app/components/services/ServiceImageSection";
import { SpecialistsSection } from "@/app/components/services/SpecialistsSection";
import { WayToPaySection } from "@/app/components/services/WayToPaySection";
import { servicesData } from "@/app/constants/services";
import { TypeServicePageProps } from "@/app/types/services";
import React, { use } from "react";

const ServicePage: React.FC<TypeServicePageProps> = ({ params }) => {
  const resolvedParams = use(params);
  const serviceId = resolvedParams.id || "cardiology";

  const serviceData = servicesData[serviceId];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600">The requested service does not exist.</p>
        </div>
      </div>
    );
  }

  return (<>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      <ServiceImageSection serviceId={serviceId} />
        <ServiceAccordionSection serviceId={serviceId} />
         <SpecialistsSection serviceId={serviceId} />
          <WayToPaySection serviceId={serviceId} />
    </div>
    <MainFooter/>
    </>
  );
};

export default ServicePage;