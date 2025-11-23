"use client";


import { MainFooter } from "@/app/components/footer/Footer";
import JobDetailsSection from "@/app/components/jobDetails/JobDetailsSection";
import JobImageSection from "@/app/components/jobDetails/JobImageSection";
import Navbar from "@/app/components/Navbar";
import { jobsDetailsData } from "@/app/constants/jobs/jobs";
import { JobDetailsPageProps } from "@/app/types/jobs/jobs";



import React, { use } from "react";

const JobDetailsPage: React.FC<JobDetailsPageProps> = ({ params }) => {
  const resolvedParams = use(params);
  const jobId = resolvedParams.id || "senior-radiographer";

  const jobData = jobsDetailsData[jobId];

  if (!jobData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Job Not Found
          </h1>
          <p className="text-gray-600">The requested job posting does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <JobImageSection jobId={jobId} />
      <JobDetailsSection jobId={jobId} />
      </div>
      <MainFooter />
    </>
  );
};

export default JobDetailsPage;