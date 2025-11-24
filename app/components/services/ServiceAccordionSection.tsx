"use client";

import React, { useState } from "react";
import { RegisterButton } from "../registerButton/RegisterButton";
import { servicesData } from "@/app/constants/services";
import { primaryButtonClasses } from "@/app/constants/styles/buttons";

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
              className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors border border-gray-200 rounded-lg"
            >
              <span className="text-lg font-semibold text-gray-900">
                Fast access to private cardiac care with bloom health
              </span>
              <div className={`w-6 h-6 rounded border-2 border-gray-400 flex items-center justify-center transition-transform ${
                showDescription ? 'rotate-180' : ''
              }`}>
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
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
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </span>
                    <div className={`w-6 h-6 rounded border-2 border-gray-400 flex items-center justify-center transition-transform ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}>
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {expandedId === item.id && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
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
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
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
              <button className={`${primaryButtonClasses} w-full rounded-md px-5 py-2.5`}>
                Discover Bloom Membership
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
