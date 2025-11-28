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
          <h1 className="heading-large text-white mb-6" style={{ fontSize: '3.75rem' }}>
            Together We Thrive
          </h1>

          <p className="text-paragraph text-white/90 mb-10" style={{ fontSize: '1.25rem' }}>
            Stay informed with our latest announcements and health insights.
          </p>


        </div>
      </div>
    </div>
  );
}
