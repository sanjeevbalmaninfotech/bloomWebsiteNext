import React from 'react';

const OriginBloomSection = () => {
    return (
        <section className="w-full py-12 px-6 sm:py-16 sm:px-12 lg:py-[60px] lg:px-[120px] bg-white">
            <div className="max-w-[1440px] mx-auto">

                {/* Heading */}
                <h2 className="font-semibold text-3xl sm:text-4xl lg:text-[36px] leading-[40px] tracking-[-0.02em] capitalize text-center mb-8 sm:mb-12 lg:mb-[60px]">
                    The Origin Of{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                        }}
                    >
                        Bloom Health
                    </span>
                </h2>

                {/* Content Container */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* IMAGE COLUMN */}
                    <div className="w-full md:w-[40%] xl:w-[489px] xl:min-w-[489px] flex">
                        <div className="flex flex-col flex-1">

                            {/* First Image */}
                            <div className="flex-1 flex items-center justify-center border-b border-gray-200">
                                <div className="relative w-full max-w-[400px] aspect-[4/5] lg:h-full lg:aspect-auto">
                                    <img
                                        src="/staff/MRravinder.jpeg"
                                        alt="Bloom Health Team Meeting"
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Second Image */}
                            <div className="flex-1 flex items-center justify-center">
                                <div className="relative w-full max-w-[400px] aspect-[4/5] lg:h-full lg:aspect-auto">
                                    <img
                                        src="/staff/MRravinder.jpeg"
                                        alt="Bloom Health Team Meeting"
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex-1 flex flex-col gap-6">
                        {/* Normal Text Content */}
                        <div className="flex-1 flex flex-col gap-4 sm:gap-5 text-gray-700">
                            <p className="font-normal text-sm sm:text-[15px] lg:text-[16px] leading-relaxed sm:leading-relaxed">
                                Bloom Health was created from a clear belief: exceptional healthcare must also be available healthcare. Care should not be fragmented or difficult to navigate, it should be timely, compassionate and built around the needs of people, not processes. This vision took shape through the lived experiences of its founders, Chairman Jashan Sandhu and CEO Ravinder Singh Punia, whose journeys, though different, were united by service, integrity and a deep commitment to improving healthcare in the UK.
                            </p>

                            <p className="font-normal text-sm sm:text-[15px] lg:text-[16px] leading-relaxed sm:leading-relaxed">
                                Jashan's path began in Punjab, India, where he first demonstrated leadership as President of Punjabi University, Patiala. After moving to the UK in 2000, he built trusted organisations dedicated to supporting vulnerable communities, including specialist transport services for children with special education needs and/or disabilities and a respected home care agency. Through this work, he witnessed the strain that delayed or fragmented care placed on families and individuals with complex needs. It became clear to him that the challenge was not clinical quality but access, and he became determined to help create a system that was easier, faster and more supportive for those who rely on it most.
                            </p>

                            <p className="font-normal text-sm sm:text-[15px] lg:text-[16px] leading-relaxed sm:leading-relaxed">
                                Ravinder's journey also began in India, followed by academic study at Bedford University and years of hard work across multiple roles. He rose to Director within a national medical staffing organisation, helping deliver millions of clinical hours to NHS hospitals by deploying nurses, GPs and consultants across the country. He gained a deep understanding of the pressures on the healthcare system, the realities of workforce shortages and the impact on waiting times. As a father, he experienced the same challenges many families face: long waits, unclear pathways and multiple trips for diagnostics. He became committed to building a more seamless model of care.
                            </p>

                            <p className="font-normal text-sm sm:text-[15px] lg:text-[16px] leading-relaxed sm:leading-relaxed">
                                When the two founders met, they aligned on a single purpose, to create a connected, modern healthcare destination where urgent care, GP services, diagnostics and specialist medicine work together effortlessly.
                            </p>
                        </div>

                        {/* Bold Text at Bottom */}
                        <div className="mt-6 pt-6 border-t border-gray-200 xl:border-t-0 xl:pt-0">
                            <p className="font-semibold text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-900">
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