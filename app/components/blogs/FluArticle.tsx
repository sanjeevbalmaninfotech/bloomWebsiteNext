import React from 'react';
import Head from 'next/head';

const FluArticle = () => {
    return (
        <>
            {/* Google Fonts Import - Axiforma is very similar to Axiforma */}
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Axiforma:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section className=" mx-auto  antialiased bg-white">
                {/* Main Heading */}
                <h1
                    className="font-semibold text-[36px] leading-[130%] text-[#000000] mb-6"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    What Is the “Super Flu” and Why This Winter Has Put the UK Healthcare System Under Pressure
                </h1>

                {/* Description 1 */}
                <p
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] mb-10"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Many people in the UK are seeing something strange as winter 2025 approaches: flu appears to be widespread.
                    Workplace sick days are increasing, local hospitals and surgeries are feeling the strain.
                    Health services are referring to this as one of the most difficult flu seasons in recent memory because
                    influenza infections are increasing earlier and more quickly than usual. This isn't simply another chilly winter.
                </p>

                {/* 2nd Heading */}
                <h2
                    className="font-medium text-[22px] leading-[200%] text-[#000000] mb-4"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    What’s Behind This Year’s Flu Surge?
                </h2>

                {/* 2nd Description (Multiple Paragraphs) */}
                <div
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] space-y-6"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p>
                        This is the time of year when influenza, a virus that affects the nose, throat, and lungs,
                        spreads throughout the population. Fever, coughing, sore throats, exhaustion, and aches in the
                        muscles are common signs of influenza.
                    </p>

                    <p>
                        This winter, however, influenza activity increased earlier than expected and has remained unusually high.
                        A mutated form of the common H3N2 strain, referred to in some reports as subclade K, has been widely
                        detected in patients and is thought to be driving much of this surge. Because this version wasn’t
                        included in the seasonal vaccine formulation, more people may be getting infected despite vaccination
                        efforts, though vaccination still offers important protection, especially against severe illness.
                    </p>

                    <p>
                        As a result, hospitalisations have risen sharply. NHS England data shows that flu-related admissions
                        climbed by more than 50% in a single week, with an average of more than 2,600 people per day now in
                        hospital due to flu, far higher than is typical for this point in the season.
                        NHS England.
                    </p>
                </div>
            </section>
        </>
    );
};

export default FluArticle;