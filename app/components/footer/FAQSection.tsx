'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    {
      question: "How can I book an appointment at Bloom?",
      answer: "You can book an appointment online through the Bloom website, via the Bloom 24/7 app, or by calling the hospital's appointment helpline. Walk-in appointments may also be available."
    },
    {
      question: "Does Bloom offer second opinions or online consultations?",
      answer: "Yes, Bloom offers both second opinion services and online consultations. You can request these through our website or by contacting our patient care team."
    },
    {
      question: "What type of information do I need to provide before booking a medical appointment?",
      answer: "You'll need to provide your personal details, medical history, current symptoms, insurance information (if applicable), and any relevant medical documents or test results."
    },
    {
      question: "Will I be informed about the cost of treatment and duration of stay at Bloom?",
      answer: "Yes, our team will provide you with a detailed cost estimate and expected duration of stay before your treatment. We believe in transparent pricing and clear communication."
    },
    {
      question: "What are the visiting hours and policies for patients' families?",
      answer: "Visiting hours are typically from 10 AM to 8 PM daily. However, specific policies may vary by department. Please check with the nursing station for department-specific guidelines."
    },
    {
      question: "Are international patients provided assistance with travel, visas, and accommodation?",
      answer: "Yes, we have a dedicated international patient services team that assists with visa processing, travel arrangements, accommodation bookings, and local transportation."
    }
  ];

  const toggleFAQ = (index :number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
<section className="relative py-16 px-4 lg:px-8 min-h-screen flex items-center bg-[url('/FAQ2.png')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-blue-100 -z-10"></div>


      <div className="relative max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequent Asked Questions
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto">
            Find answers to common questions about our services, treatments, appointments, and patient care options to help you make informed health decisions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base lg:text-lg pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}