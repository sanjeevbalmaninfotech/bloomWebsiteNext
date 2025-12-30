'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
// Yahan homePageFAQ ko import karein fallback ke liye
import { homePageFAQ } from '@/app/constants/FAQs';
import ButtonTalkToTeam from '../ButtonTalkToTeam';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData?: FAQItem[]; // '?' matlab ye optional hai
}

export default function UccFAQSection({ faqData }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(-1);

  // LOGIC: Agar faqData nahi hai ya array khali hai, toh displayData me homePageFAQ chala jayega
  const displayData = (faqData && faqData.length > 0) ? faqData : homePageFAQ;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2
            className="font-[family-name:var(--font-1)] font-semibold mb-4 text-[#157DC1]"
            style={{ fontSize: "36px", lineHeight: "48px" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-[family-name:var(--font-1)] font-normal text-[#171717]" style={{ fontSize: "15px" }}>
            Find answers to common questions about our services and care options.
          </p>
        </div>

        <div className="space-y-4">
          {/* Ab hum 'displayData' ko map karenge */}
          {displayData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-[family-name:var(--font-1)] font-normal pr-4 text-[#157DC1]" style={{ fontSize: "19px" }}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: "32px", height: "32px", backgroundColor: "rgba(239, 246, 255, 1)" }}
                  >
                    {openIndex === index ? <ChevronUp size={20} color="#157DC1" /> : <ChevronDown size={20} color="#157DC1" />}
                  </div>
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-5">
                  <p className="font-[family-name:var(--font-1)] text-[#364153]" style={{ fontSize: "15px", lineHeight: "24px" }}>
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
  );
}