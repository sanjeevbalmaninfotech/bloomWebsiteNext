import React from "react";
import Link from "next/link";

const NewsSection = () => {
  return (
    <>
      {/* TOP SECTION */}
      <div className="p-4 bg-white sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT SECTION */}
            <div className="flex flex-col justify-between h-full">

              {/* TOP CONTENT */}
              <div>
                <h1 className="heading-large text-gray-900 mb-4">
                  News At <span className="text-gradient">Bloom</span>
                </h1>

                <p className="text-paragraph text-gray-600 mb-6">
                  At Bloom Healthcare, our superspecialist doctors provide the
                  highest quality of care through a team-based, doctor-led model.
                </p>
                {/* news-signup */}
                <Link href="/">

                  <div className="btn btn-primary flex items-center space-x-2 w-fit"
                  >
                    <span>Sign Up For Latest News</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* 2x2 NEWS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">25, Feb, 2025</div>

                      <h3 className="heading-small text-gray-900 leading-snug">
                        <span className="font-bold">Bloom Hosts</span>
                        <br />
                        Multi-Stakeholder Panel on World Obesity Day to Address the
                        Rising Obesity Crisis and its Health Impacts
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
            <div className="h-full">
              <div className="bg-[#1e4a5f] rounded-lg overflow-hidden w-full h-full flex flex-col">

                {/* IMAGE */}
                <div className="relative w-full h-80 flex-shrink-0 bg-gray-300">
                  <img
                    src="/newsSectionImg2.png"
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
                <div className="p-8">
                  <h2 className="heading-medium text-white mb-6 leading-tight">
                    Bloom Hosts Multi-Stakeholder Panel on World Obesity Day
                  </h2>
                  <p className="text-paragraph text-white opacity-90">
                    HCA Healthcare UK has announced that it has treated a metastatic lung cancer
                    patient with tumour-infiltrating lymphocyte (TIL) therapy for the first time.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM SECTION — OPPOSITE LAYOUT */}
      <div className="p-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT — IMAGE CARD */}
            <div className="flex flex-col bg-[#1e4a5f] rounded-xl overflow-hidden h-full">

              <div className="relative w-full h-80 bg-gray-300">
                <img
                  src="/newsSectionImg1.png"
                  alt="Featured News"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <span className="bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded">
                    25, Feb, 2025
                  </span>
                  <span className="bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded">
                    Press Release
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
                  Bloom Hosts Multi-Stakeholder Panel on World Obesity Day
                </h2>
                <p className="text-white text-base leading-relaxed opacity-90">
                  HCA Healthcare UK has treated a metastatic lung cancer patient with TIL therapy...
                </p>
              </div>
            </div>

            {/* RIGHT — SINGLE 2×2 NEWS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-blue-50 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">25, Feb, 2025</div>

                    <h3 className="heading-small text-gray-900 leading-snug">
                      <span className="font-bold">Bloom Hosts</span>
                      <br />
                      Multi-Stakeholder Panel on World Obesity Day to Address the
                      Rising Obesity Crisis and its Health Impacts
                    </h3>

                    <span className="inline-block text-blue-600 text-sm font-medium pt-2">
                      News
                    </span>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
