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

                <div className="flex flex-col md:flex-row items-center gap-8 mb-6">


                    <div className="md:w-[60%] w-full">
                        <h2
                            className="font-semibold text-[36px] leading-[120%] text-[#000000] mb-4"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            Why “Knowing Your Numbers” Matters
                        </h2>
                        <div
                            className="font-normal text-[15px] leading-[160%] text-[#8A8A8A]"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            <p className="mb-1">
                                Your body gives you signals every day, but blood tests provide the clarity that symptoms alone cannot. Understanding key health markers can help explain how your body is responding to lifestyle changes and whether there are areas that need attention.
                            </p>
                            <p className="mb-1">
                                Blood tests can offer insight into things such as:
                            </p>

                            <ul className="list-disc pl-5 space-y-1">
                                <li>Iron levels and causes of tiredness</li>
                                <li>Cholesterol and heart health</li>
                                <li>Blood sugar and diabetes risk</li>
                                <li>Thyroid function and metabolism</li>
                                <li>Vitamin and nutritional levels</li>
                                <li>Markers of inflammation or stress</li >
                                <li>For many people starting a new fitness routine, these results provide reassurance. For others, they offer an early warning that allows changes to be made before problems become more serious.</li>

                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Fixed Height Image (60%) */}
                    <div className="md:w-[40%] w-full">
                        <img
                            src="/images/blogs/blog3.jpeg"
                            alt="Person feeling unwell"
                            /* Yahan h-[350px] set kiya hai, aap isse kam ya zyada kar sakte ho */
                            className="w-full h-[350px] object-center rounded-xl" //object-contain   object-fill 
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