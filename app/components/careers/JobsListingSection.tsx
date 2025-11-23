"use client";

import { useState } from "react";
import { jobsData } from "@/app/constants/careers";

export function JobsListingSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredJobs = jobsData.filter((job) => {
    if (activeFilter === "all") return true;
    return job.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const totalJobs = filteredJobs.length;

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Be A Part Of <span className="text-[#2B9DB5]">Amazing Team</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              As one of the nation leading providers of private healthcare services,
              we pride ourselves on delivering extraordinary care.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">

              {/* View All */}
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                  activeFilter === "all"
                    ? "bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] text-white hover:from-[#5FC1A3] hover:to-[#157DC1]"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                View All
              </button>

              {/* Clinical */}
              <button
                onClick={() => setActiveFilter("clinical")}
                className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                  activeFilter === "clinical"
                    ? "bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] text-white hover:from-[#5FC1A3] hover:to-[#157DC1]"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Clinical
              </button>

              {/* Non-Clinical */}
              <button
                onClick={() => setActiveFilter("non-clinical")}
                className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                  activeFilter === "non-clinical"
                    ? "bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] text-white hover:from-[#5FC1A3] hover:to-[#157DC1]"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Non-Clinical
              </button>

            </div>
          </div>

          {/* Job Count */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">{totalJobs} Vacancies</h3>
            <p className="text-gray-600">Showing 1-{totalJobs}</p>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 min-h-[56px]">
                  {job.title}
                </h4>

                <div className="space-y-3 mb-6">

                  {/* Employment Type */}
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded border-2 border-[#2B9DB5] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#2B9DB5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{job.employmentType}</span>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#2B9DB5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span>{job.category}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#2B9DB5]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  className="w-full bg-gradient-to-r from-[#157DC1] to-[#5FC1A3]
                  hover:from-[#5FC1A3] hover:to-[#157DC1]
                  text-white py-3 rounded-lg font-medium 
                  hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">1 Of 1 Pages</p>

            <button
              className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3]
              hover:from-[#5FC1A3] hover:to-[#157DC1]
              text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
