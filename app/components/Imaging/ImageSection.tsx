
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
                    <div className="max-w-3xl space-y-3">
                        {/* Heading */}
                        <h1
                            className="text-white text-[28px] sm:text-[32px] md:text-[40px] leading-tight tracking-[-0.02em] capitalize"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 600,
                            }}
                        >
                            Imaging & Screening
                        </h1>

                        {/* Subheading */}
                        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-snug tracking-[-0.02em] capitalize"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 500,
                            }}
                        >
                            Affordable medical imaging and scans, all under one roof in Milton Keynes
                        </p>

                        {/* Description */}
                        <p
                            className="text-gray-100 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed tracking-[-0.02em]"
                            style={{
                                fontFamily: 'Axiforma, sans-serif',
                                fontWeight: 400,
                            }}
                        >
                            At Bloom Health Hospital, our onsite imaging & screening suite brings together CT, Ultrasound, X-ray and Echo, supported by trusted MRI partners in Milton Keynes, to help you and your clinician understand what's going on and plan the right next steps.
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
