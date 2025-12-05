'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { homePageFAQ } from '@constants/FAQs';

export default function UccFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);



  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            <span className="text-[#171717]">Frequently Asked </span>
            <span className="bg-gradient-to-r from-[#157DC1] to-[#49acac] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p
            className="text-sm md:text-base"
            style={{
              fontFamily: "Axiforma, sans-serif",
              color: "rgba(138, 138, 138, 1)",
            }}
          >
            Find answers to common questions about our services, treatments, appointments, and patient care options to help you make informed health decisions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {homePageFAQ?.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-sm md:text-base text-[#171717] pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6" style={{ color: "rgba(21, 93, 252, 1)" }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" style={{ color: "rgba(21, 93, 252, 1)" }} />
                  )}
                </span>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-5">
                  <p
                    className="text-sm md:text-base"
                    style={{
                      fontFamily: "Axiforma, sans-serif",
                      color: "rgba(138, 138, 138, 1)",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}