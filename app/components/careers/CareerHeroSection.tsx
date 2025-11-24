"use client";

import { useState } from "react";

export function CareerHeroSection() {



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

    
        </div>
      </div>
    </div>
  );
}
