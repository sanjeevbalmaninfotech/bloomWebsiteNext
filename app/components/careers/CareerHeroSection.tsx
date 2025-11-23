"use client";

import { useState } from "react";

export function CareerHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="relative bg-gradient-to-r from-[#1a5f7a] to-[#2d8ba8] py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/images/careers/hero-bg.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Together We Thrive
          </h1>

          <p className="text-xl text-white/90 mb-10">
            Stay informed with our latest announcements and health insights.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl"
          >
            <input
              type="text"
              placeholder="Search For Jobs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
      w-full sm:flex-1 px-6 py-4 
      rounded-lg bg-white/30 backdrop-blur-lg 
      text-gray-800 placeholder-white placeholder-opacity-100 
      focus:outline-none focus:ring-2 focus:ring-white/50
    "
            />

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#2B9DB5] hover:bg-[#258a9f] 
               text-white px-8 py-4 rounded-lg font-medium 
               transition-colors flex items-center justify-center gap-2"
            >
              <span>Search</span>
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
