import React from 'react';
import Head from 'next/head';

const HealthcareNeedSection = () => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Axiforma:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section className=" mx-auto py-2 bg-white antialiased">
                {/* Main Heading */}
                <h2
                    className="font-semibold text-[36px] leading-[150%] text-[#000000] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    A Changing Healthcare Need
                </h2>

                {/* 1st Description Block */}
                <div
                    className="font-normal text-[15px] leading-[200%] text-[#8A8A8A] "
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p className="mb-1">
                        Not every flu-related illness requires emergency department care, yet when people cannot access timely GP appointments, diagnostics or urgent assessment elsewhere, hospitals become the default option. This winter has once again highlighted the need for healthcare models that offer:
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-disc pl-6 mb-1 space-y-1">
                        <li>Clear assessment for urgent but non-life-threatening illness</li>
                        <li>Faster access to GPs</li>
                        <li>On-site diagnostics to support quicker decisions</li>
                    </ul>

                    {/* Additional Context Paragraphs */}
                    <div className="space-y-1">
                        <p>
                            The experience of this winter is not just about flu. It is about how healthcare is accessed, and how delays can impact both patients and the wider system.
                        </p>
                        <p>
                            As the UK continues to navigate this challenging flu season, one thing is clear: healthcare must evolve to meet rising demand with better and timely access, smarter pathways and patient-centred solutions.
                        </p>
                        <p>
                            At Bloom Health Hospital, our vision has been shaped by these realities. We believe that improving access to urgent care, diagnostics and clinical expertise can play an important role in supporting communities and easing pressure on hospitals during times like this.
                        </p>
                        <p>
                            This winter has reminded us that healthcare needs do not wait and the way we deliver care must&apos;nt too!
                        </p>
                    </div>
                </div>

                {/* 2nd Heading */}
                <h3
                    className="font-medium text-[22px] leading-[200%] text-[#000000] mt-4 mb-4"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Looking Ahead
                </h3>

                {/* 2nd Description Block */}
                <div
                    className="font-normal text-[15px] leading-[200%] text-[#8A8A8A] space-y-1"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p>
                        As the UK continues to navigate this challenging flu season, one thing is clear: healthcare must evolve to meet rising demand with better and timely access, smarter pathways and patient-centred solutions.
                    </p>
                    <p>
                        At Bloom Health Hospital, our vision has been shaped by these realities. We believe that improving access to urgent care, diagnostics and clinical expertise can play an important role in supporting communities and easing pressure on hospitals during times like this.
                    </p>
                    <p>
                        This winter has reminded us that healthcare needs do not wait and the way we deliver care must&apos;nt too!
                    </p>
                </div>
            </section>
        </>
    );
};

export default HealthcareNeedSection;