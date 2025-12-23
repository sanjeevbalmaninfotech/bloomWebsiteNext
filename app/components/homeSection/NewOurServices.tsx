import React from 'react';
import { ChevronRight, Activity, Syringe, Droplet, Stethoscope } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Activity,
            title: "Urgent Care Centre & GP Walk-Ins",
            description: "24/7 access to immediate medical support. Walk in at any time for urgent treatment or GP consultations, with no appointments required and minimal waiting, providing fast, reassuring care when it matters most.",
        },
        {
            icon: Syringe,
            title: "Imaging & Screening",
            description: "Comprehensive diagnostic imaging and screening with rapid turnaround times and high-quality reports. Designed to support swift diagnosis and clear clinical pathways.",
        },
        {
            icon: Droplet,
            title: "Pathology & Blood Testing",
            description: "A complete range of blood tests and pathology services with accurate results, fast reporting, and seamless coordination with your clinician for timely care.",
        },
        {
            icon: Stethoscope,
            title: "Consultant Care",
            description: "Specialist-led assessments, diagnosis and treatment from leading consultants across multiple medical specialties, providing expert care tailored to your needs.",
        },
    ];

    return (
        <>
            <div className="w-full bg-white section-spacing px-4 md:px-8 lg:px-[120px]">
                <div className="relative max-w-7xl mx-auto h-auto pb-16 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-[#157DC1] to-[#5FC1A3]">
                    <div className="flex justify-center w-full ">
                        <div className="bg-white rounded-b-2xl md:rounded-b-3xl px-2  md:py-2 shadow-md w-[90%] md:w-1/3 flex flex-col items-center justify-center transition-all duration-300">
                            <h1
                                className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight tracking-[-0.02em] font-semibold text-center capitalize"
                                style={{ fontFamily: 'Axiforma, sans-serif' }}
                            >
                                Our{' '}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                                    }}
                                >
                                    Services
                                </span>
                            </h1>

                        </div>
                    </div>

                    {/* 2. Services Grid: Isme mt-12 ya mt-16 diya hai taaki heading se thoda niche rahe */}
                    <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 w-full px-4 md:px-10">
                        {services.map((service, index) => (
                            <React.Fragment key={index}>
                                {/* Service Card */}
                                <div className="flex flex-col items-center gap-[15px] text-white md:px-5 lg:px-6 flex-1 md:max-w-[280px] lg:max-w-none">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                                        <service.icon className="w-full h-full" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="font-semibold text-lg sm:text-[18px] leading-[1.2] tracking-[-0.02em] capitalize text-center mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="font-normal text-sm sm:text-[15px] leading-[20px] tracking-[-0.03em] text-center text-white/90 mb-4">
                                        {service.description}
                                    </p>

                                    <button
                                        className="mt-auto w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        aria-label={`Learn more about ${service.title}`}
                                    >
                                        <img
                                            src="/Arrow-Right.svg"
                                            alt="Arrow Right"
                                            className="invert brightness-0"
                                            style={{ width: "34px", height: "34px" }}
                                        />
                                    </button>
                                </div>

                                {/* Vertical Divider */}
                                {index < services.length - 1 && (
                                    <div className="hidden md:flex mx-4 lg:mx-8">
                                        <div
                                            className="w-[1.5px] self-stretch"
                                            style={{
                                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)'
                                            }}
                                        ></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesSection;