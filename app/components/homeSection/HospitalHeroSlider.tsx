"use client";
import React, { useState, useEffect } from "react";
import { RegisterButton } from "../registerButton/RegisterButton";
import { slides } from "@/app/constants/homePage/homePage";

const HospitalHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-cyan-800/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-cyan-300">{slide.highlight}</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="pt-4 w-fit">
                    <RegisterButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className=" absolute  z-10  flex gap-3 bottom-6 left-1/2 transform -translate-x-1/2
    md:bottom-auto md:left-auto md:top-1/2 md:right-8 md:transform md:-translate-y-1/2 md:flex-col "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-cyan-400 scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalHeroSlider;
