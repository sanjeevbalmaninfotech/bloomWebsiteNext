import React from 'react';

const OriginBloomSection = () => {
    return (
        <section className="w-full py-10 px-6 sm:py-16 sm:px-12 xl:py-[60px] xl:px-[120px] bg-white overflow-hidden">
            <div className="mx-auto">
                {/* Heading */}
                <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[36px] leading-[40px] tracking-[-0.02em] capitalize text-center mb-8 lg:mb-[50px]">
                    The Origin Of{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                        }}
                    >
                        Bloom Health
                    </span>
                </h2>

                {/* Content Container */}
                <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-start justify-between">

                    {/* IMAGE & CARD GRID SECTION */}
                    <div className="w-full xl:w-[55%] grid grid-cols-2 gap-4 sm:gap-6">

                        {/* Column 1: Jashan Image + CEO Card (Card at Bottom) */}
                        <div className="flex flex-col justify-between gap-6 sm:gap-10">
                            <div className="rounded-3xl overflow-hidden  w-full">
                                <img
                                    src="/staff/MrJashanSandhu.png"
                                    alt="Mr. Jashan Sandhu"
                                    className="w-full aspect-[4/6] object-cover"
                                />
                            </div>

                            {/* CEO Card - Touches the bottom */}
                            <div className="bg-[#f2f9fb] p-6 rounded-3xl flex flex-col justify-center aspect-square shadow-lg border border-white/50 w-full">
                                <div style={{ fontFamily: 'Axiforma, sans-serif' }}>
                                    <h3 className="text-[#8A8A8A] text-[18px] font-normal leading-snug">
                                        Our CEO
                                    </h3>

                                    <p
                                        className="text-[#8A8A8A] text-[21px] font-bold leading-[100%] tracking-[0px] mt-1"
                                        style={{ fontFamily: 'Axiforma, sans-serif' }}
                                    >
                                        Mr. Ravinder Punia
                                    </p>

                                    <div
                                        className="w-full h-[2px] mb-4 mt-4"
                                        style={{ backgroundImage: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)" }}
                                    ></div>
                                    <p className="text-[#8A8A8A] text-[12px] font-normal leading-none italic">
                                        “ Visionary leader driving growth and innovation.”
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Chairperson Card + Ravinder Image (Card at Top) */}
                        <div className="flex flex-col justify-between gap-6 sm:gap-10">
                            {/* Chairperson Card - Touches the top */}
                            <div className="bg-[#f2f9fb] p-6 rounded-3xl flex flex-col justify-center aspect-square shadow-lg border border-white/50 w-full">
                                <div style={{ fontFamily: 'Axiforma, sans-serif' }}>
                                    <h3 className="text-[#8A8A8A] text-[18px] font-normal leading-snug">
                                        Our Chairperson
                                    </h3>

                                    <p
                                        className="text-[#8A8A8A] text-[21px] font-bold leading-[100%] tracking-[0px] mt-1"
                                        style={{ fontFamily: 'Axiforma, sans-serif' }}
                                    >
                                        Mr. Jashan Sandhu
                                    </p>

                                    <div
                                        className="w-full h-[2px] mb-4 mt-4"
                                        style={{ backgroundImage: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)" }}
                                    ></div>
                                    <p className="text-[#8A8A8A] text-[12px] font-normal leading-none italic">
                                        “ Visionary leader driving growth and innovation.”
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden w-full">
                                <img
                                    src="/staff/MRravinder.jpeg"
                                    alt="Mr. Ravinder Punia"
                                    className="w-full aspect-[4/6] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TEXT CONTENT SECTION */}
                    <div className="w-full xl:w-[45%] flex flex-col gap-6">
                        <div className="flex flex-col gap-4 text-gray-700">
                            <p className="font-normal text-[16px] leading-[1.7] text-justify xl:text-left">
                                Bloom Health was created from a clear belief: exceptional healthcare must also be available healthcare. Care should not be fragmented or difficult to navigate, it should be timely, compassionate and built around the needs of people, not processes. This vision took shape through the lived experiences of its founders, Chairman Jashan Sandhu and CEO Ravinder Singh Punia, whose journeys, though different, were united by service, integrity and a deep commitment to improving healthcare in the UK.
                            </p>

                            <p className="font-normal text-[16px] leading-[1.7] text-justify xl:text-left">
                                Jashan's path began in Punjab, India, where he first demonstrated leadership as President of Punjabi University, Patiala. After moving to the UK in 2000, he built trusted organisations dedicated to supporting vulnerable communities, including specialist transport services for children with special education needs and/or disabilities and a respected home care agency. Through this work, he witnessed the strain that delayed or fragmented care placed on families and individuals with complex needs. It became clear to him that the challenge was not clinical quality but access, and he became determined to help create a system that was easier, faster and more supportive for those who rely on it most.
                            </p>

                            <p className="font-normal text-[16px] leading-[1.7] text-justify xl:text-left">
                                Ravinder's journey also began in India, followed by academic study at Bedford University and years of hard work across multiple roles. He rose to Director within a national medical staffing organisation, helping deliver millions of clinical hours to NHS hospitals by deploying nurses, GPs and consultants across the country. He gained a deep understanding of the pressures on the healthcare system, the realities of workforce shortages and the impact on waiting times. As a father, he experienced the same challenges many families face: long waits, unclear pathways and multiple trips for diagnostics. He became committed to building a more seamless model of care.
                            </p>

                            <p className="font-normal text-[16px] leading-[1.7] text-justify xl:text-left">
                                When the two founders met, they aligned on a single purpose, to create a connected, modern healthcare destination where urgent care, GP services, diagnostics and specialist medicine work together effortlessly.
                            </p>
                        </div>

                        {/* Bold Text Footer */}
                        <div className="mt-4 pt-6 border-t border-gray-100 xl:border-t-0 xl:pt-0">
                            <p className="font-bold text-[16px] lg:text-[18px] leading-relaxed text-gray-900">
                                Bloom Health was born from this shared vision: a place where excellence and availability come together, and where every person receives the care they need, when they need it most.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OriginBloomSection;