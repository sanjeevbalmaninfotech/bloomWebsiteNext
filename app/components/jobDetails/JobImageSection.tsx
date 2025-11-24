"use client";



import { jobsDetailsData } from "@/app/constants/jobs/jobs";
import { primaryButtonClasses } from "@/app/constants/styles/buttons";
import { JobDetailsImageSectionProps } from "@/app/types/jobs/jobs";
import Image from "next/image";
import React from "react";

export default function JobImageSection({ jobId }: JobDetailsImageSectionProps) {
  const job = jobsDetailsData[jobId];

  if (!job) return null;

  return (
    <div className="relative bg-linear-to-r from-[#1e5a7d] to-[#4a90b8] py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={job.heroImage}
          alt={job.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            {/* Job Info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {job.title}
              </h1>

              {/* Job Details */}
              <div className="flex flex-wrap gap-4 md:gap-6 text-base md:text-lg text-white/90 mb-8">
                {job.type && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{job.type}</span>
                  </div>
                )}

                {job.experience && (
                  <React.Fragment>
                    <span className="text-white/50">|</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{job.experience}</span>
                    </div>
                  </React.Fragment>
                )}

                {job.location && (
                  <React.Fragment>
                    <span className="text-white/50">|</span>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                  </React.Fragment>
                )}
              </div>

              {/* Apply Button */}
              <button
                className={`${primaryButtonClasses} rounded-lg px-8 py-3.5 shadow-lg hover:shadow-xl`}
              >
                <span>Apply Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}