"use client";

import React from "react";
interface PaymentOption {
  id: string;
  title: string;
  image: string;
  link?: string;
}

interface WayToPaySectionProps {
  serviceId?: string;
}

// Payment options data
const paymentOptions: PaymentOption[] = [
  {
    id: "treatment",
    title: "Paying For Your Treatment",
    image: "/temp4.jpg", // Replace with actual image
    link: "/payment-options",
  },
  {
    id: "insurance",
    title: "Using Your Health Insurance",
    image: "/temp3.jpg", // Replace with actual image
    link: "/health-insurance",
  },
];

export const WayToPaySection: React.FC<WayToPaySectionProps> = ({ serviceId }) => {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Way To <span className="text-[#05BFDB]">Pay</span>
        </h2>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-white cursor-pointer transition-all duration-300"
            >
              
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback background if image fails
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.background =
                        option.id === "treatment"
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
                    }
                  }}
                />
              </div>

              {/* Blue Bottom Bar */}
              <div className="bg-[rgba(3,52,83,1)] py-4 flex justify-center">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                  {option.title}
                </h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
