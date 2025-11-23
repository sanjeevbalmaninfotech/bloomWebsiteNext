import React from "react";

const WhatSetsUsApart = () => {
  const menuItems = [
    { id: 1, title: "About bloom health", color: "text-black" },
    { id: 2, title: "Why choose us", color: "text-black" },
    { id: 3, title: "Paying for your treatment", color: "text-black" },
    { id: 4, title: "Insurance", color: "text-black" },
  ];

  
return (
  <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">

      {/* Main Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 px-2">
        What Sets Us Apart From <span className="text-cyan-500">Others</span>
      </h2>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">

        {/* Left Side - Menu */}
        <div className="w-full lg:w-1/3">
          <div className="space-y-3 sm:space-y-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group hover:bg-gradient-to-r hover:from-[#126ba8] hover:to-[#4da990]"
              >
                <h3
                  className={`text-sm sm:text-base md:text-lg font-semibold ${item.color} group-hover:text-white transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                  <img
                    src="/Arrow-Right.svg"
                    alt="Arrow Right"
                    className="w-5 h-5 sm:w-6 sm:h-6 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content + Image (this area contains the two equal columns) */}
        <div className="w-full lg:w-2/3">

          {/* Parent row for the content & image.
              Use items-start so both children start at same top line.
          */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 h-full items-start">

            {/* LEFT SECTION → set same fixed height as image at md+ and keep content spaced (top + bottom) */}
            <div className="w-full md:w-1/2 flex flex-col justify-between md:h-[350px] lg:h-[400px]">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                  Care YOU Can Count On !
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  At Bloom Health, we believe every patient deserves prompt,
                  high-quality medical care delivered with compassion and
                  expertise. Our team combines urgent care and specialist
                  outpatient services, ensuring your health is in safe, capable
                  hands.
                </p>
              </div>

              {/* Button pinned to bottom of this fixed-height box */}
              <div>
                <button className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] hover:from-[#126ba8] hover:to-[#4da990] text-white px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-lg inline-flex items-center gap-2 sm:gap-3 transition-colors duration-300 cursor-pointer text-base sm:text-lg md:text-xl font-semibold">
                  Read More
                  <img
                    src="/Arrow-Right.svg"
                    alt="Arrow Right"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 filter brightness-0 invert"
                  />
                </button>
              </div>
            </div>

            {/* RIGHT SECTION → Image with the same height classes */}
            <div className="w-full md:w-1/2 flex items-start justify-center">
              <div className="rounded-lg overflow-hidden shadow-2xl w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px]">
                <img
                  src="/AboutBloom.png"
                  alt="Bloom Health Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
);



};

export default WhatSetsUsApart;