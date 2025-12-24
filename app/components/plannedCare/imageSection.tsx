


import React from 'react';
import { RegisterButton } from '../registerButton/RegisterButton';



export default function ImagingScreeningSection() {
    return (
        <div className="relative w-full h-[418px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070"
                    alt="Medical imaging professional reviewing scans"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) -0.14%, rgba(0, 0, 0, 0.8) 42.21%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl space-y-1">
                        {/* Heading */}
                        <h1
                            className="text-white text-[28px] sm:text-[32px] md:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[50px] tracking-[-0.02em] capitalize"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 600,
                            }}
                        >
                            Consultant-Led Speciality Care
                        </h1>

                        {/* Subheading */}
                        <p
                            className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[32px] md:leading-[50px] tracking-[-0.02em] capitalize"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 500,
                            }}
                        >
                            Private specialist and secondary care clinics coming soon to Milton Keynes.
                        </p>

                        {/* Description */}
                        <p
                            className="text-gray-100 text-[14px] sm:text-[15px] md:text-[16px] leading-[140%] tracking-[-0.02em]"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 400,
                            }}
                        >
                            Many health concerns need more than an initial assessment. Some conditions require specialist expertise, further investigation, or ongoing management. Our Specialist Care service is being developed to give patients access to experienced consultants across key medical areas, without the long waits often experienced elsewhere.
                        </p>
                        <p
                            className="text-gray-100 text-[14px] mt-2 sm:text-[15px] md:text-[16px] leading-[140%] tracking-[-0.02em]"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 400,
                            }}
                        >
                            This service is currently in development, and will launch once clinical teams, facilities and regulatory pathways are complete. We’re building it thoughtfully, with safety and patient experience at the centre.
                        </p>

                        {/* Register Button */}
                        <div className="pt-2">
                            <RegisterButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
