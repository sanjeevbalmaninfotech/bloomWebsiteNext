import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
    return (
        <>
            <div
                className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"
                style={{
                    background: 'linear-gradient(134.42deg, #157DC1 2.41%, #5FC1A3 139.58%)'
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        {/* Contact Card */}
                        <div className="bg-white rounded-3xl p-9 w-full max-w-[396px] shadow-xl">
                            {/* Heading Section */}
                            <div className="mb-[25px]">
                                {/* First Heading */}
                                <div className="mb-1">
                                    <h2 className="font-[family-name:var(--font-1)] font-semibold text-[35.7px] leading-[34px] text-[#171717]">
                                        Find Us{' '}
                                        <span
                                            style={{
                                                background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}
                                        >
                                            Easily
                                        </span>
                                    </h2>
                                </div>

                                {/* Second Heading */}
                                <div>
                                    <h3 className="font-[family-name:var(--font-1)] font-semibold text-[35.7px] leading-[34px] text-[#171717]">
                                        Reach Us{' '}
                                        <span
                                            style={{
                                                background: 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}
                                        >
                                            Anytime
                                        </span>
                                    </h3>
                                </div>
                            </div>

                            {/* Information Section */}
                            <div className="mb-[25px] px-2">
                                <div className="space-y-[8px] max-w-[280px]">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <MapPin
                                            className="w-[20px] h-[20px] mt-[2.25px] flex-shrink-0"
                                            strokeWidth={1.13}
                                            style={{
                                                stroke: 'url(#gradient1)'
                                            }}
                                        />
                                        <span className="font-[family-name:var(--font-1)] font-normal text-[16px] leading-[26px] text-[#171717]">
                                            163-175 Grafton Gate, Milton Keynes, MK9 1AE UK
                                        </span>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <Phone
                                            className="w-[20px] h-[20px] mt-[2.25px] flex-shrink-0"
                                            strokeWidth={1.13}
                                            style={{
                                                stroke: 'url(#gradient2)'
                                            }}
                                        />
                                        <span className="font-[family-name:var(--font-1)] font-normal text-[16px] leading-[26px] text-[#171717]">
                                            07949 301632
                                        </span>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <Mail
                                            className="w-[20px] h-[20px] mt-[2.25px] flex-shrink-0"
                                            strokeWidth={1.13}
                                            style={{
                                                stroke: 'url(#gradient3)'
                                            }}
                                        />
                                        <span className="font-[family-name:var(--font-1)] font-normal text-[16px] leading-[26px] text-[#171717]">
                                            info@bloom-health.co.uk
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Button Section */}
                            <button
                                className="w-full h-[45px] px-6 py-3 rounded-lg text-white font-[family-name:var(--font-1)] font-normal text-center transition-opacity duration-300 hover:opacity-90 flex items-center justify-center gap-3"
                                style={{
                                    background: 'linear-gradient(134.42deg, rgb(21, 125, 193) 2.41%, rgb(95, 193, 163) 139.58%)'
                                }}
                            >
                                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">
                                    Get Our Location
                                </span>

                                <img
                                    src="/Arrow-Right.svg"
                                    alt="Arrow Right"
                                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 invert brightness-0"
                                />
                            </button>

                            {/* SVG Gradients for Icons */}
                            <svg width="0" height="0" style={{ position: 'absolute' }}>
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#157DC1" />
                                        <stop offset="100%" stopColor="#5FC1A3" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#157DC1" />
                                        <stop offset="100%" stopColor="#5FC1A3" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#157DC1" />
                                        <stop offset="100%" stopColor="#5FC1A3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Map Container */}
                        <div className="lg:col-span-5 relative flex items-center justify-end">
                            <img
                                src="/Map.png"
                                alt="UK Map"
                                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}