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

            <section className="mx-auto py-4 bg-white antialiased">
                {/* Row 1: items-center add kiya taaki agar text kam ho toh image ke beech mein dikhe */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-6">

                    {/* Left Column (40%) */}
                    <div className="md:w-[40%] w-full">
                        <h2
                            className="font-semibold text-[36px] leading-[120%] text-[#000000] mb-4"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            Common Winter Injuries
                        </h2>
                        <div
                            className="font-normal text-[15px] leading-[160%] text-[#8A8A8A]"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            <p className="mb-4">
                                Slips, trips and falls are some of the most common causes of injury at work in the UK and globally,
                                accounting for on average 40% of all reported major injuries in UK workplaces alone.
                            </p>

                            <ul className="list-disc pl-5 space-y-1">
                                <li>Sprained ankles and wrists</li>
                                <li>Twisted ankles and sprained wrists</li>
                                <li>Minor fractures following slips or trips</li>
                                <li>Back and shoulder injuries</li>
                                <li>Cuts and bruises requiring assessment or treatment</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Fixed Height Image (60%) */}
                    <div className="md:w-[60%] w-full">
                        <img
                            src="/images/blogs/blog3.jpeg"
                            alt="Person feeling unwell"
                            /* Yahan h-[350px] set kiya hai, aap isse kam ya zyada kar sakte ho */
                            className="w-full h-[350px] object-top rounded-xl" //object-contain   object-fill 
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full mt-10">
                    <h3
                        className="font-medium text-[22px] leading-[150%] text-[#000000] mb-4"
                        style={{ fontFamily: "'Axiforma', sans-serif" }}
                    >
                        The Hidden Impact on Healthcare Services
                    </h3>
                    <div
                        className="font-normal text-[15px] leading-[180%] text-[#8A8A8A] space-y-4"
                        style={{ fontFamily: "'Axiforma', sans-serif" }}
                    >
                        <p>
                            Winter pressures don’t just affect individuals, they affect the entire healthcare system. Across the UK, hospitals experience higher attendance levels during winter due to a combination of respiratory illness and injury-related admissions.

                        </p>
                        <p>Recent reporting has highlighted that attendance levels are already around 8% higher this year than last year, with hospitals struggling to manage both seasonal illness and injury-related demand. In some cases, patients with relatively straightforward injuries have waited many hours for assessment or a bed due to system pressures.


                        </p>
                        <p>

                            These delays are frustrating for patients and challenging for healthcare staff who are working tirelessly under increasing strain.

                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImpactSection;