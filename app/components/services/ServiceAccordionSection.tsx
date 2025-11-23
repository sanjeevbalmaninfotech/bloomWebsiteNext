"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { RegisterButton } from "../registerButton/RegisterButton";
import { servicesData } from "@/app/constants/services";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface ServiceAccordionSectionProps {
  serviceId: string;
}

// Use centralized service data for accordion items and related treatments

export const ServiceAccordionSection: React.FC<
  ServiceAccordionSectionProps
> = ({ serviceId }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  const service = servicesData[serviceId] || servicesData["cardiology"];
  const accordionItems: AccordionItem[] = service.accordionItems || [];
  const treatments: string[] = service.relatedTreatments || [];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Description & Accordion */}
          <div className="lg:col-span-2 space-y-8">
            {/* Toggle Button */}
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">
                Fast access to private cardiac care with bloom health
              </span>
              {showDescription ? (
                <Minus size={20} className="text-gray-600 flex-shrink-0" />
              ) : (
                <Plus size={20} className="text-gray-600 flex-shrink-0" />
              )}
            </button>

            {/* Description - Only show when toggled */}
            {showDescription && (
              <>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    At Bloom health, we offer a wide range of cardiology
                    treatments at locations across the UK. We give you fast
                    access to accurate and reliable diagnostics with the latest
                    imaging facilities onsite.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our consultant cardiologists are specialists in the
                    diagnosis, treatment, and ongoing management of all common
                    heart problems. If you need surgery, they can seamlessly
                    refer you to one of our experienced consultant heart
                    surgeons.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We also focus on the prevention of heart problems, looking
                    after your cardiovascular health to stop problems before
                    they develop.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Get in touch today by phone or using our simple online
                    booking system to arrange an appointment with one of our
                    leading cardiology consultants. We can often arrange to see
                    you within 48 hours.
                  </p>
                </div>

                <div className="w-full md:w-1/2 lg:w-[35%]">
                  <RegisterButton />
                </div>
              </>
            )}

            {/* Accordion - Always visible */}
            <div className="space-y-3">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">
                      {item.title}
                    </span>
                    {expandedId === item.id ? (
                      <Minus
                        size={20}
                        className="text-gray-600 flex-shrink-0"
                      />
                    ) : (
                      <Plus size={20} className="text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {expandedId === item.id && (
                    <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Fast Track Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Track Your{" "}
                <span className="text-[#05BFDB]">Treatment</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To book an appointment or speak with one of our friendly team,
                please get in touch using the options below
              </p>
            </div>

            {/* Membership Card */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Our Membership
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Unlimited access to our private GP service from{" "}
                <span className="font-bold text-gray-900">
                  £23.99 per month
                </span>
              </p>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-[#05BFDB] hover:bg-[#04A5C0] text-white font-medium px-5 py-2.5 rounded-md transition-colors duration-200">
                Discover Bloom Membership
                <Plus size={18} />
              </button>
            </div>

            {/* Related Treatments */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Related Treatments:
              </h3>

              <div className="flex flex-wrap gap-2">
                {treatments.map((treatment, index) => (
                  <button
                    key={index}
                    className="bg-[#E8F2F9] px-3 py-2 text-sm text-gray-800 rounded-full hover:bg-[#dbe9f3] transition"
                  >
                    {treatment}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
