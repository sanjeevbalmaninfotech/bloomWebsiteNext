'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { homePageFAQ } from '@/app/constants/FAQs';
import ButtonTalkToTeam from '../ButtonTalkToTeam';

export default function UccFAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (

    <>
      <div
        className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"
        style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2
              className="font-[family-name:var(--font-1)] font-semibold mb-4  text-[#157DC1]"
              style={{
                fontSize: "35.7px",
                lineHeight: "48px",
                verticalAlign: "middle"
              }}
            >
              Frequently Asked Questions
            </h2>

            <p
              className="font-[family-name:var(--font-1)] font-normal tracking-[-0.45px] text-[#171717]"
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                verticalAlign: "middle"
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
                  <span
                    className="font-[family-name:var(--font-1)] font-normal pr-4 text-[#155DFC]"
                    style={{
                      fontSize: "17px",
                      lineHeight: "28px",
                      letterSpacing: "-0.18px",
                      verticalAlign: "middle"
                    }}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? (
                      <div
                        className="flex items-center justify-center rounded-full transition-colors"
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "rgba(239, 246, 255, 1)",
                          borderRadius: "33554400px"
                        }}
                      >
                        <ChevronUp
                          className="w-5 h-5 md:w-6 md:h-6"
                          style={{ color: "rgba(21, 93, 252, 1)" }}
                        />
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-center rounded-full transition-colors"
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "rgba(239, 246, 255, 1)",
                          borderRadius: "33554400px"
                        }}
                      >
                        <ChevronDown
                          className="w-5 h-5 md:w-6 md:h-6"
                          style={{ color: "rgba(21, 93, 252, 1)" }}
                        />
                      </div>
                    )}
                  </span>
                </button>

                {/* Answer Content */}
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <p
                      className="font-[family-name:var(--font-1)] font-normal"
                      style={{
                        fontSize: "15px",
                        lineHeight: "24px",
                        letterSpacing: "-0.45px",
                        verticalAlign: "middle",
                        color: "rgba(54, 65, 83, 1)"
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <ButtonTalkToTeam />

          </div>
        </div>
      </div>

    </>
  );
}