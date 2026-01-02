import React from 'react';

const OriginBloomSection = () => {
    return (
        <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[36px] leading-[40px] tracking-[-0.02em] capitalize text-center mb-8 lg:mb-[50px]">
                    The Origin Of{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient( #157dc1 , #49acac )",
                        }}
                    >
                        Bloom Health
                    </span>
                </h2>

                {/* Content Container */}
                <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 items-start justify-between">

                    {/* IMAGE & CARD GRID SECTION */}
                    <div className="w-full xl:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                        {/* 1. Jashan Image */}
                        <div className="rounded-3xl overflow-hidden w-full">
                            <img
                                src="/staff/MrJashanSandhu.png"
                                alt="Mr. Jashan Sandhu"
                                className="w-full aspect-[4/6] object-cover"
                            />
                        </div>

                        {/* 2. Chairperson Card (Jashan) */}
                        <div className="bg-[#f2f9fb] p-6 rounded-3xl flex flex-col justify-center aspect-auto sm:aspect-square shadow-lg border border-white/50 w-full">
                            <div style={{ fontFamily: 'Axiforma, sans-serif' }}>
                                <h3 className="text-[#8A8A8A] text-[18px] font-normal leading-snug">
                                    Our Chairperson
                                </h3>

                                <p
                                    className="text-[#8A8A8A] text-[24px] font-semibold  leading-[100%] tracking-[0px] mt-1"
                                    style={{ fontFamily: 'Axiforma, sans-serif' }}
                                >
                                    Jashan Sandhu
                                </p>

                                <p className="text-[#8A8A8A] text-[16px] font-normal leading-[150%] tracking-[0.3px] mt-[30px]">
                                    “ My vision is to make excellent healthcare easier to access, without delay or complexity. ”
                                </p>
                            </div>
                        </div>

                        {/* 3. Ravinder Image (Desktop: Col 2) */}
                        <div className="rounded-3xl overflow-hidden w-full sm:col-start-2">
                            <img
                                src="/staff/MRravinder.jpeg"
                                alt="Mr. Ravinder Punia"
                                className="w-full aspect-[4/6] object-cover"
                            />
                        </div>

                        {/* 4. CEO Card (Ravinder) (Desktop: Col 1, Row 2) */}
                        <div className="bg-[#f2f9fb] p-6 rounded-3xl flex flex-col justify-center aspect-auto sm:aspect-square shadow-lg border border-white/50 w-full sm:col-start-1 sm:row-start-2">
                            <div style={{ fontFamily: 'Axiforma, sans-serif' }}>
                                <h3 className="text-[#8A8A8A] text-[18px] font-normal leading-snug">
                                    Our CEO
                                </h3>

                                <p
                                    className="text-[#8A8A8A] text-[24px] font-semibold leading-[100%] tracking-[0px] mt-1"
                                    style={{ fontFamily: 'Axiforma, sans-serif' }}
                                >
                                    Ravinder Punia
                                </p>

                                <p className="text-[#8A8A8A] text-[16px] font-normal leading-[150%] tracking-[0.3px] mt-[30px]">
                                    “ Healthcare should work around patients, not the other way around. ”
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* TEXT CONTENT SECTION */}
                    <div className="w-full xl:w-[45%] flex flex-col gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-1">
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
                            <p className="font-bold text-[18px]  leading-relaxed text-gray-900">
                                Bloom Health was born from this shared vision: a place where excellence and availability come together, and where every person receives the care they need, when they need it most.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OriginBloomSection;