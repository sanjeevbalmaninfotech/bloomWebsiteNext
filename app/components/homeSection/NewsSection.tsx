import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const NewsSection = () => {
  return (
    <>
      <section className="w-full py-12 px-6 sm:py-16 sm:px-12 lg:py-[60px] lg:px-[120px] bg-white">
        <div className="max-w-[1440px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* LEFT SECTION */}
            <div className="flex flex-col justify-between h-full">

              {/* TOP CONTENT */}
              <div className="mb-8 lg:mb-0">
                <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[36px] leading-[40px] tracking-[-0.02em] text-gray-900 mb-4">
                  News At{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient( #157DC1 0%, #49acac )'
                    }}
                  >
                    Bloom
                  </span>
                </h1>

                <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed mb-6">
                  News at Bloom brings you timely health stories, expert perspectives and seasonal advice, created to help you better understand the health issues affecting our community. Through clear, reliable information and thoughtful insights, we aim to support you and your family with care, confidence and informed decision-making throughout the year.
                </p>

                {/* Get More Button */}
                {/* <button
                  className="flex items-center justify-center gap-4 rounded-lg text-white hover:opacity-90 transition-opacity w-[172px] h-[46px]"
                  style={{
                    background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)"
                  }}
                >
                  <span className="w-[80px] h-[24px] flex items-center justify-center text-[17px] leading-[24px] font-medium text-center">
                    Get More
                  </span>

                  <img
                    src="/Arrow-Right.svg"
                    alt="Arrow Right"
                    className="invert brightness-0 w-[20px] h-[20px]"
                  />
                </button> */}


              </div>

              {/* 2x2 NEWS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-blue-50 rounded-lg p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">25, Feb, 2025</div>

                      <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                        <span className="font-bold">Bloom Hosts</span>
                        <br />
                        Multi-Stakeholder Panel on World Obesity Day to Address the
                        Rising Obesity Crisis and Its Health Impacts
                      </h3>

                      <span className="inline-block text-blue-600 text-sm font-medium pt-2">
                        News
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT LARGE CARD */}
            <div className="h-full min-h-[600px]">
              <div className="bg-[#1e4a5f] rounded-lg overflow-hidden w-full h-full flex flex-col">

                {/* IMAGE */}
                <div className="relative w-full h-80 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop"
                    alt="Featured News"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <span className="bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded">
                      25, Feb, 2025
                    </span>
                    <span className="bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded">
                      Press release
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
                  <h2 className="font-semibold text-2xl lg:text-[28px] text-white mb-4 lg:mb-6 leading-tight">
                    Bloom Hosts Multi-Stakeholder Panel on World Obesity Day to Address the Rising Obesity Crisis and Its Health Impacts
                  </h2>
                  <p className="text-sm lg:text-[15px] text-white opacity-90 leading-relaxed">
                    HCA Healthcare UK has announced that it has treated a metastatic lung cancer
                    patient with tumour-infiltrating lymphocyte (TIL) therapy for the first time as part of a
                    clinical trial at its research arm, Sarah Cannon Research Institute UK.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default NewsSection;
