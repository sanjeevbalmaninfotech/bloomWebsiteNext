"use client";


import { jobsDetailsData } from "@/app/constants/jobs/jobs";
import React, { useState } from "react";

interface JobDetailsSectionProps {
  jobId: string;
}

export default function JobDetailsSection({ jobId }: JobDetailsSectionProps) {
  const job = jobsDetailsData[jobId];
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!job) return null;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Job Title & Basic Info */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {job.title}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Location:</span> {job.location}</p>
              <p><span className="font-semibold">Full Time,</span> {job.hoursPerWeek}</p>
              <p><span className="font-semibold">Shift Times:</span> {job.shiftTimes}</p>
              <p><span className="font-semibold">Permanent</span></p>
              <p><span className="font-semibold">Salary:</span> {job.salary}</p>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            {job.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Expandable Sections */}
          <div className="space-y-4 mb-12">
            
            {/* Duties & Responsibilities */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('duties')}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  Duties & responsibilities:
                </span>
                <div className={`w-6 h-6 rounded border-2 border-gray-400 flex items-center justify-center transition-transform ${
                  openSection === 'duties' ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openSection === 'duties' && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.duties.map((duty, index) => (
                      <li key={index}>{duty}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* What You'll Bring */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('requirements')}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  What you bring:
                </span>
                <div className={`w-6 h-6 rounded border-2 border-gray-400 flex items-center justify-center transition-transform ${
                  openSection === 'requirements' ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openSection === 'requirements' && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Why Bloom Health UK */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('benefits')}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  Why Bloom Health UK?
                </span>
                <div className={`w-6 h-6 rounded border-2 border-gray-400 flex items-center justify-center transition-transform ${
                  openSection === 'benefits' ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openSection === 'benefits' && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#3b9ec7] to-[#5fc1a3] hover:from-[#2e8bb3] hover:to-[#4aa88c] text-white font-semibold px-10 py-3.5 rounded-lg inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
              <span>Register Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}