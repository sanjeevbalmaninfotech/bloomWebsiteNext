"use client";
import React, { useState, useEffect } from "react";
import { RegisterButton } from "../registerButton/RegisterButton";
import { slides } from "@/app/constants/homePage";
import OpeningDateSection from "../OpeningDateSection/OpeningDateSection";

const HospitalHeroSlider = () => {


  return (
    //   <div className="relative w-full h-screen overflow-hidden">
    //     {/* Background Image with Overlay */}
    //     <OpeningDateSection />
    //     <div className="absolute inset-0">
    //       <img
    //         src="/images/homePageImage.jpg"
    //         alt="Home page image"
    //         className="w-full h-full object-cover object-[75%_center] md:object-center"
    //       />
    //       {/* 1. object-cover: Ensures image covers the screen (standard).
    //     2. object-[75%_center]: Triggers ONLY on mobile. This shifts the image horizontally. 
    //        - 50% is center. 
    //        - 0% is the left edge. 
    //        - 100% is the right edge.
    //        - Tweak "75%" to "20%" or "80%" depending on where your subject is in the photo.
    //     3. md:object-center: Resets the image to be perfectly centered on Laptop/Desktop.
    // */}
    //     </div>

    //     {/* Content */}
    //     <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
    //       <div className="max-w-7xl mx-auto w-full">
    //         <div className="max-w-4xl ">

    //           {/* Heading - 40px, SemiBold, White */}
    //           <h1 className="font-axiforma font-semibold text-white text-[22px] leading-[22px] md:text-[22px] md:leading-[22px] tracking-[-0.02em] capitalize">
    //             Affordable Healthcare
    //           </h1>

    //           {/* Sub Heading - 68px, SemiBold, Gradient */}
    //           <p className="font-axiforma font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#157dc1] to-[#49acac] text-[40px] leading-[40px] md:text-[40px] md:leading-[40px] tracking-[-0.02em] capitalize">
    //             In One Place
    //           </p>

    //           {/* Description 1 */}
    //           <p className="text-gray-100 font-axiforma text-[16px] md:text-[22px] max-w-2xl leading-relaxed tracking-tight mt-3">
    //             24/7 Private Urgent Care | Walk-In GP | Comprehensive Diagnostics | Consultant Specialists  </p>

    //           <p className="text-gray-100 font-axiforma text-[16px] md:text-[22px] max-w-2xl leading-relaxed tracking-tight mt-1">
    //             All in one modern hospital designed around your needs.</p>

    //           <div className="mt-6">
    //             <RegisterButton />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>

    <div className="relative w-full h-[60vh] min-h-[500px] md:h-screen overflow-hidden">

      <OpeningDateSection />

      <div className="absolute inset-0">
        <img
          src="/images/homePageImage.jpg"
          alt="Home page image"
          /* 2. UPDATE IMAGE:
             - Keep 'object-cover'. Since the parent is now shorter on mobile, 
               the image will naturally fit better without extreme zooming.
          */
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            {/* ... (Your existing text content remains unchanged) ... */}
            <h1 className="font-axiforma font-semibold text-white text-[22px] leading-[22px] md:text-[22px] md:leading-[22px] tracking-[-0.02em] capitalize">
              Affordable Healthcare
            </h1>
            <p className="font-axiforma font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#157dc1] to-[#49acac] text-[40px] leading-[40px] md:text-[40px] md:leading-[40px] tracking-[-0.02em] capitalize">
              In One Place
            </p>
            <p className="text-gray-100 font-axiforma text-[16px] md:text-[22px] max-w-2xl leading-relaxed tracking-tight mt-3">
              24/7 Private Urgent Care | Walk-In GP | Comprehensive Diagnostics | Consultant Specialists
            </p>
            <p className="text-gray-100 font-axiforma text-[16px] md:text-[22px] max-w-2xl leading-relaxed tracking-tight mt-1">
              All in one modern hospital designed around your needs.
            </p>
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
