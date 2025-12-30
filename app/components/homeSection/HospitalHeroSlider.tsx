"use client";
import React, { useState, useEffect } from "react";
import { RegisterButton } from "../registerButton/RegisterButton";
import { slides } from "@/app/constants/homePage";

const HospitalHeroSlider = () => {


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="\images\pathologyHeroImage.png"
          alt="Information For GPs"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient( 270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 35%,  rgba(0, 0, 0, 0.55) 70.45%,  rgba(0, 0, 0, 0.8) 100% )`,
          }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl ">

            {/* Heading - 40px, SemiBold, White */}
            <h1 className="font-axiforma font-semibold text-white text-[22px] leading-[22px] md:text-[22px] md:leading-[22px] tracking-[-0.02em] capitalize">
              Affordable Healthcare
            </h1>

            {/* Sub Heading - 68px, SemiBold, Gradient */}
            <p className="font-axiforma font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#157dc1] to-[#49acac] text-[40px] leading-[40px] md:text-[40px] md:leading-[40px] tracking-[-0.02em] capitalize">
              In One Place
            </p>

            {/* Description 1 */}
            <p className="text-gray-100 font-axiforma text-[16px] md:text-[22px] max-w-2xl leading-relaxed tracking-tight mt-3">
              24/7 Private Urgent Care | Walk-In GP | Comprehensive Diagnostics | Consultant Specialists  </p>

            <p className="text-gray-100 font-axiforma text-[16px] md:text-[22px] max-w-2xl leading-relaxed tracking-tight mt-1">
              All in one modern hospital designed around your needs</p>

            <div className="mt-6">
              <RegisterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalHeroSlider;
