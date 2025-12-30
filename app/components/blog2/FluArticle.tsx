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
                <div className="flex items-center gap-4 text-[#000000] mb-6">

                    {/* Category Item */}
                    <div className="flex items-center gap-x-2">
                        {/* 8px Dot - Added -translate-y-[1px] for optical centering */}
                        <div className="h-[8px] w-[8px] rounded-full bg-[#000000] shrink-0" />

                        <span className="font-['Axiforma'] text-[14px] font-normal leading-[150%] tracking-[0%]">
                            Category
                        </span>
                    </div>

                    {/* Read Time Item */}
                    <div className="flex items-center gap-x-2">
                        {/* 8px Dot */}
                        <div className="h-[8px] w-[8px] rounded-full bg-[#000000] shrink-0" />

                        <span className="font-['Axiforma'] text-[14px] font-normal leading-[150%] tracking-[0%]">
                            10 min read
                        </span>
                    </div>
                </div>                {/* Main Heading */}
                <h1
                    className="font-semibold text-[36px] leading-[130%] text-[#000000] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Winter Falls, Trips and Seasonal Injuries: Why This Time of Year Is Riskier Than We Realise
                </h1>

                {/* Description 1 */}
                <p
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Winter in the UK brings a familiar mix of darker evenings, icy pavements and busy social calendars. From rushing to catch a train on a frosty morning to navigating slippery car parks, festive gatherings and late nights out, this season quietly increases the risk of falls, trips and avoidable injuries.
                    For many people, these incidents feel minor at first, a slip on black ice, a stumble on wet steps, a twisted ankle after a night out. But across the country, hospitals see a clear seasonal rise in injuries during the winter months, particularly those linked to falls and accidents
                </p>

                {/* 2nd Heading */}
                <h2
                    className="font-medium text-[22px] leading-[200%] text-[#000000] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Why Winter Increases the Risk?
                </h2>

                {/* 2nd Description (Multiple Paragraphs) */}
                <div
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] space-y-6"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p>
                        Even a short walk that feels routine in summer can become risky in winter conditions. There isn’t one single cause. Instead, winter brings together several factors that make everyday environments less forgiving:
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-disc pl-6 mb-1 space-y-1">
                        <li>Icy and wet surfaces on pavements, roads and car parks          </li>
                        <li>Reduced daylight, making hazards harder to see</li>
                        <li>Bulky winter clothing and footwear that can affect balance</li>
                        <li>Festive socialising and alcohol, which can slow reactions and coordination</li>
                        <li>Rushing in cold weather, increasing the chance of slips and missteps </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default FluArticle;