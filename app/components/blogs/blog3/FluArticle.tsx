import React from 'react';
import Head from 'next/head';
import BulletPoints from '../BulletPoints';

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

                <BulletPoints />


                <h1
                    className="font-semibold text-[36px] leading-[130%] text-[#000000] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    New Year, New Habits: Fitness, Wellness and Knowing Your Numbers
                </h1>

                {/* Description 1 */}
                <p
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    Every January, something familiar happens across the UK. Gym memberships spike, running shoes come out of cupboards, fitness apps light up with new users and conversations turn to fresh starts. The New Year brings with it a collective motivation to feel better, move more and take control of our health.
                </p>
                <p
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] mb-2"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    This renewed focus on fitness is a positive step. Regular exercise improves energy levels, supports mental well-being and reduces the risk of many long-term conditions. But while movement and motivation are important, true wellness starts with understanding what is happening inside your body, not just how active you feel on the outside.
                </p>

                {/* 2nd Heading */}
                <h2
                    className="font-medium text-[22px] leading-[200%] text-[#000000] "
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    The New Year Fitness Surge
                </h2>

                {/* 2nd Description (Multiple Paragraphs) */}
                <div
                    className="font-normal text-[15px] leading-[150%] text-[#8A8A8A] space-y-1"
                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                >
                    <p>
                        Across the UK, January is consistently the busiest month for gyms and fitness programmes. Many people set goals around weight loss, strength, stamina or simply feeling healthier after the festive season. For some, it’s about building better habits. For others, it’s about addressing concerns that have been quietly building over the year. </p>

                    <p>
                        While exercise plays a key role in health, it’s only one part of the picture. Fatigue, low energy, poor recovery from workouts or difficulty losing weight can sometimes be linked to underlying health factors that are not immediately obvious.
                    </p>

                </div>
            </section>
        </>
    );
};

export default FluArticle;