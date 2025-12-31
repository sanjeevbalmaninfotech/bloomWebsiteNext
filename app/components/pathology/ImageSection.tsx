'use client';

import OpeningDateSection from "../OpeningDateSection/OpeningDateSection";
import { RegisterButton } from "../registerButton/RegisterButton";

export default function ImageSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            <OpeningDateSection />
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="\images\pathologyHeroImage.png"
                    alt="Information For GPs"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient( 270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 35%,  rgba(0, 0, 0, 0.55) 70.45%,  rgba(0, 0, 0, 0.8) 100%    )`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-[120px]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl space-y-4">
                        {/* Heading */}
                        <h1 className="font-axiforma font-semibold text-white text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-[38px] tracking-[-0.02em] capitalize">
                            Pathology and Blood Testing
                        </h1>
                        <p className="font-axiforma font-semibold text-white text-[20px] leading-[22px] tracking-[-0.02em] capitalize mt-1">
                            Fast, affordable and comprehensive tests.
                        </p>

                        {/* Description 1 */}
                        <p className="text-gray-100 font-axiforma text-[15px] leading-relaxed tracking-tight">
                            At Bloom Health, we know that when you're unwell, worried about symptoms, or simply want clarity about your health, getting answers quickly makes all the difference. Our integrated Pathology & Testing service brings together on-site point-of-care testing (POCT) and an extensive accredited laboratory network, giving you access to an exceptionally wide range of tests, all in one place.
                        </p>

                        {/* Description 2 */}
                        <p className="text-gray-100 font-axiforma text-[15px] leading-relaxed tracking-tight">
                            Whether tests are needed as part of an urgent care visit, a specialist consultation, or a routine health check, our pathology services are designed to provide clear insights and support informed next steps in your care.
                        </p>
                        <div className="mt-6">
                            <RegisterButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}

        </div>
    );
}