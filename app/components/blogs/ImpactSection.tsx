import React from 'react';
import Head from 'next/head';

const ImpactSection = () => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Axiforma:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section className=" mx-auto  py-4 bg-white antialiased">
                {/* Row 1: 45% Text | 55% Image */}
                <div className="flex flex-col md:flex-row items-start gap-4 mb-2">
                    {/* Left Column (45%) */}
                    <div className="md:w-[40%] w-full">
                        <h2
                            className="font-semibold text-[36px] leading-[150%] text-[#000000] mb-1"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            The Impact Across the UK
                        </h2>
                        <div
                            className="font-normal text-[15px] leading-[200%] text-[#8A8A8A]"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            <p>
                                In comparison to other winters, hospitals throughout the United Kingdom are reporting noticeably higher attendance levels. A recent BBC story claims that attendance is already about 8% higher than it was the previous year and that a significant portion of admissions are due to respiratory illnesses.
                            </p>
                            <p>
                                At the Royal Infirmary, One patient reportedly waited 106 hours for a ward bed, while another patient, Gary, arrived with a stomach bug and waited 34 hours before a bed became available. (Source: BBC News)
                            </p>
                            <p>
                                Nationally, the situation reflects a worrying trend. During the first week of December, an average of 2,660 patients per day were hospitalised with flu, marking the highest number ever recorded for this time of year. (Source: BBC News)
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image (55%) */}
                    <div className="md:w-[60%] w-full">
                        <img
                            src="/images/blogs/blogImage2.jpg"
                            alt="Person feeling unwell"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Bottom Section: Title and Description */}
                <div className="w-full">
                    <h3
                        className="font-medium text-[22px] leading-[150%] text-[#000000] "
                        style={{ fontFamily: "'Axiforma', sans-serif" }}
                    >
                        Vaccination Helps, But Pressure Remains
                    </h3>
                    <div
                        className="font-normal text-[15px] leading-[200%] text-[#8A8A8A] space-y-1"
                        style={{ fontFamily: "'Axiforma', sans-serif" }}
                    >
                        <p>
                            Public health teams have worked hard to reduce the severity of this flu season. Nearly 17 million flu vaccines were delivered this autumn, 350,000 more than at the same time last year, highlighting strong efforts to protect the population. (Source: BBC News)
                        </p>
                        <p>
                            Vaccination remains one of the most effective tools we have, particularly for older adults, children and those with long-term conditions. However, even with improved uptake, the sheer volume of patients experiencing flu symptoms, complications and overlapping respiratory illnesses has continued to strain hospitals.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImpactSection;