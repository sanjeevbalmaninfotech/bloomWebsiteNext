"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { jobsData } from "@/app/constants/careers";

export function JobsListingSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const jobsPerPage = 8;

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      // Filter by category
      let matchesFilter = true;
      if (activeFilter !== "all") {
        const jobCategory = job.category.toLowerCase();
        if (activeFilter === "clinical") {
          // Match "Clinical Ex." but NOT "Non-Clinical"
          matchesFilter =
            jobCategory.includes("clinical") && !jobCategory.includes("non");
        } else if (activeFilter === "non-clinical") {
          // Exact match for "non-clinical"
          matchesFilter = jobCategory === "non-clinical";
        }
      }

      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.employmentType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  // Reset to page 1 when filter or search changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

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
              As one of the nation leading providers of private healthcare
              services, we pride ourselves on delivering extraordinary care.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs by title ..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B9DB5] focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* View All */}
              <button
                onClick={() => handleFilterChange("all")}
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
                onClick={() => handleFilterChange("clinical")}
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
                onClick={() => handleFilterChange("non-clinical")}
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
            <h3 className="text-2xl font-bold text-gray-900">
              {totalJobs} Vacancies
            </h3>
            <p className="text-gray-600">
              Showing {totalJobs > 0 ? startIndex + 1 : 0}-
              {Math.min(endIndex, totalJobs)} of {totalJobs}
            </p>
          </div>

          {/* Jobs Grid */}
          {paginatedJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {paginatedJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobDetails/${job.id}`}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
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
                  <div
                    className="w-full bg-gradient-to-r from-[#157DC1] to-[#5FC1A3]
    hover:from-[#5FC1A3] hover:to-[#157DC1]
    text-white py-3 rounded-lg font-medium 
    hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>More Details</span>

                    {/* ✔ Same icon used as in Register button */}
                    <img
                      src="/Arrow-Right.svg"
                      alt="Arrow Right"
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 invert brightness-0"
                    />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 mb-12">
              <p className="text-gray-600 text-lg">
                No jobs found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  handleFilterChange("all");
                }}
                className="mt-4 text-[#2B9DB5] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Page {currentPage} of {totalPages}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] hover:from-[#5FC1A3] hover:to-[#157DC1] text-white"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] hover:from-[#5FC1A3] hover:to-[#157DC1] text-white"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
