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
                    When a Fall Needs Medical Attention
                </h2>

                {/* 1st Description Block */}
                <div
                    className="font-normal text-[15px] leading-[200%] text-[#8A8A8A] "
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p className="mb-1">
                        Not every slip requires emergency care, but it’s important to seek assessment if:
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-disc pl-6 mb-1 space-y-1">
                        <li>Pain is severe or worsening</li>
                        <li>You cannot put weight on a limb
                        </li>
                        <li>There is swelling, deformity or loss of movement
                        </li>
                        <li>You hit your head or feel dizzy afterward
                        </li>
                        <li>Symptoms don’t improve over time </li>
                    </ul>
                    <p className="mb-1 mt-1">
                        Prompt assessment can help rule out fractures, guide treatment and reduce the risk of longer-term problems.

                    </p>


                </div>

                {/* 2nd Heading */}
                <h3
                    className="font-medium text-[22px] leading-[200%] text-[#000000] mt-4 mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Looking Ahead: Why Accessible Care Matters
                </h3>

                {/* 2nd Description Block */}
                <div
                    className="font-normal text-[15px] leading-[200%] text-[#8A8A8A] space-y-1"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p>
                        Winter injuries highlight a simple truth: health concerns don’t arrive on a schedule. Slips, falls and sudden pain happen in real time, often outside traditional appointment hours and often when people least expect it.

                    </p>
                    <p>
                        As the UK continues to face winter pressures year after year, there is a growing need for healthcare models that can support people quickly, safely and appropriately, without unnecessary delays or overcrowding.

                    </p>
                    <p>

                        At Bloom Health Hospital, our vision is rooted in addressing exactly these gaps, offering accessible, patient-centred care designed to support communities during high-pressure seasons like winter, when timely assessment and reassurance make all the difference.

                    </p>
                    <p>

                        This winter, take extra care when walking, driving and socialising. And if a fall or accident does happen, knowing when and where to seek the right level of care can help ensure faster recovery and peace of mind.

                    </p>

                </div>
            </section>
        </>
    );
};

export default HealthcareNeedSection;