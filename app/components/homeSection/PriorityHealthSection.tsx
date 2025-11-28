import React from "react";
import { RegisterButton } from "../registerButton/RegisterButton";

const PriorityHealthSection = () => {
  return (
    // WHITE CONTAINER AROUND IMAGE SECTION
    <div className="w-full bg-white py-10 px-4 md:px-8">
      <div className="relative h-[650px] md:h-[700px] lg:h-[750px] rounded-3xl overflow-hidden shadow-lg">

        {/* Background Image */}
        <img
          src="/secimg2.png"
          alt="Priority Health"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>

        {/* Content */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center text-center px-4 z-10">

          {/* Heading */}
          <div className="bg-white rounded-b-2xl px-6 py-3 mb-6 md:mb-10 shadow-sm mx-4 md:mx-8 lg:mx-12">
            <h2 className="heading-large">
              Our Priority Is{" "}
              <span className="text-gradient">YOUR Health</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-paragraph max-w-3xl text-gray-800 mb-8 px-4">
            At Bloom Healthcare, our superspecialist doctors provide the highest quality
            of care through a team-based, doctor-led model. Trained at some of the world
            most prestigious institutions, our highly experienced doctors are recognized
            leaders in their respective specialties.
          </p>

          {/* Button */}
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default PriorityHealthSection;
