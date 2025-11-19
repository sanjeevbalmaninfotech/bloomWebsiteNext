import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: "/Walkins.svg",
      title: "Walk-In Centre",
      description:
        "Walk-in and same-day appointments for minor injuries, sudden illnesses, and urgent health concerns.",
    },
    {
      id: 2,
      icon: "/Plannedcare.svg",
      title: "Planned Care",
      description:
        "Specialist consultations, follow-up care, chronic disease management, and health screenings.",
    },
    {
      id: 3,
      icon: "/Diagnostics.svg",
      title: "Diagnostics",
      description:
        "On-site laboratory tests, ultrasound, X-ray, CT scans, and rapid-result services.",
    },
  ];

return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12">
          Our <span className="text-cyan-500">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              {/* Card */}
              <div className="flex-1 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center p-6 md:p-8">
                {/* Icon + Title with background */}
                <div className="bg-gray-100 rounded-lg p-6 w-full flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mt-6 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Arrow Button */}
                <button className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:text-white transition-all duration-300 group cursor-pointer">
                  <img
                    src="/Arrow-Right.svg"
                    alt="Arrow Right"
                    className="w-7 h-7 md:w-8 md:h-8"
                  />
                </button>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="hidden md:flex mx-6">
                  <div className="w-px self-stretch bg-gradient-to-b from-gray-200 via-gray-500 to-gray-200"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
