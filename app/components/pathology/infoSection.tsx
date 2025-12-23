'use client';
import { useState } from "react";

export default function InfoSection() {
    const [openIndex, setOpenIndex] = useState(-1);
    const [openNewIndex, setOpenNewIndex] = useState(-1);


    type SectionType = {
        title: string;
        items: string[] | string;
    };



    const sectionsAccordion = [
        {
            title: "Cardiac & Circulatory Markers",
            description: "Helps assess chest pain, shortness of breath, dizziness or palpitations. Includes highly valuable markers such as:",
            listItems: ["Troponin IBNP", "NT-proBNP", "CK-MB", "Myoglobin"]
        },
        {
            title: "D-dimer",
            description: "Used to help evaluate the risk of clot-related issues where clinically appropriate."
        },
        {
            title: "Shortness-of-Breath Assessment Panel",
            description: "A multi-marker panel designed to support decision-making when breathlessness, chest tightness or unexplained fatigue occurs."
        },
        {
            title: "Drug Screening (TOX-DSX)",
            description: "A screening tool that can help identify the presence of commonly tested substances."
        },
        {
            title: "General Infection & Wellness Markers",
            description: "Supports clinicians in assessing signs of infection or inflammation during urgent care visits"
        },
    ];

    const sections: SectionType[] = [
        {
            title: "Core Health",
            items: [
                "Full Blood Count", " Kidney & Liver Function", " Thyroid Function", " Cholesterol & Lipid Profiles", "Diabetes markers"
            ]
        },
        {
            title: "Hormones & Fertility",
            items: "Female and male hormone profiles Menopause assessments Testosterone, prolactin, FSH/LH, and more"
        },
        {
            title: "Vitamins & Nutritional Markers",
            items: ["Vitamin D", "B-vitamins", "Iron studies", "Minerals & trace elements"]
        },
        {
            title: "Allergy & Immunology",
            items: ["IgE allergy panels", "Food intolerance (IgG)", "Immune response markers"]
        },
        {
            title: "Infection Screening",
            items: ["Urine, stool and swab testing", "Viral and bacterial markers", " Sexual health screens", "COVID-19 antibody testing"]
        },
        {
            title: "Advanced & Specialist Tests",
            items: ["Autoimmune screens", "Inflammatory markers"]
        },
        {
            title: "Health Screens",
            items: ["General wellbeing", "Men’s & women’s health", "Senior health", "Energy, fatigue and nutritional panels"]
        }
    ];



    const iconSections = [
        { icon: "/GP/WalkInAccess.svg", title: "Routine and advanced blood tests" },
        { icon: "/GP/selfReferral.svg", title: "Fast turnaround times" },
        { icon: "/GP/RoutineBlood.svg", title: "The ability for patients to attend with a GP request form or written referral" },
        { icon: "/GP/PatientsAttend.svg", title: "Walk-in access for many investigations" },
        { icon: "/GP/FastTurnaround.svg", title: "Availability for self-referral where appropriate" },

    ];

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const toggleNewSection = (index: number) => {
        setOpenNewIndex(openNewIndex === index ? -1 : index);
    };

    return (
        <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
            <div className="max-w-7xl mx-auto">

                <>
                    <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                        What We{' '}
                        <span className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] bg-clip-text text-transparent">
                            Offer
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                        Bloom Health Hospital provides two pathways for fast and dependable testing:
                    </p>

                    <h2
                        className="font-semibold text-[20px] md:text-[22px] leading-[40px] md:leading-[48px] tracking-[-0.72px]"
                        style={{
                            fontFamily: "Axiforma, sans-serif",
                            background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Onsite Point-of-Care Testing (POCT)
                    </h2>

                    {/* <p
                        className="font-medium text-[18px] leading-[24px] tracking-[-0.45px] text-[#000000] align-middle"
                        style={{ fontFamily: "'Axiforma', sans-serif" }}
                    >
                        Immediate results to support fast clinical decisions
                    </p> */}

                    {/* Bottom Description */}
                    <div className="space-y-3 md:space-y-4 max-w-3xl">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                            Our centre is equipped with advanced point-of-care testing technology, allowing immediate diagnostic tests to be performed during your visit. POCT includes a range of tests analysing different sample types, such as blood, urine, saliva, and other bodily fluids, providing timely results to support informed clinical decision-making. These tests can be used across urgent care assessments, specialist consultations, and other clinical pathways, particularly when prompt answers are needed to guide next steps.
                        </p>

                    </div>

                </>


                <div className="mt-6 mb-6">
                    <p className="font-medium text-[18px] leading-[24px] tracking-[-0.45px]" style={{ fontFamily: "Axiforma, sans-serif", }}
                    >
                        Why POCT matters
                    </p>
                    <ul className="space-y-1">
                        {[
                            "Provides fast information when it's needed most.",
                            "Helps guide immediate clinical decisions.",
                            "Avoids delays in starting the right treatment or next steps.",
                            "All tests performed by trained clinicians using accredited systems.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                {/* Dot */}
                                <span className="w-2 h-2 rounded-full bg-[#8A8A8A] shrink-0"></span>

                                <p className="font-axiforma text-base text-[18px] leading-relaxed text-[#707070]">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <h2
                    className="font-semibold text-[20px] md:text-[22px] leading-[40px] md:leading-[48px] tracking-[-0.72px]"
                    style={{
                        fontFamily: "Axiforma, sans-serif",
                        background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Comprehensive Laboratory Pathology
                </h2>


                <div className="space-y-3 md:space-y-4 max-w-3xl">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                        Hundreds of blood tests and specialist investigations processed through accredited partner laboratories, covering everything from general health screening to advanced biomarkers. Together, these services give you and your clinician a clear picture of your health, reduce uncertainty, and help guide the right next steps.
                    </p>

                </div>



                <>  <h1 className="font-semibold mb-1 md:mb-[10px] mt-4 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                    We Can Perform Rapid{' '}
                    <span className="bg-gradient-to-r from-[#157DC1] to-[#5FC1A3] bg-clip-text text-transparent">
                        Assessments for
                    </span>
                </h1></>

                <>

                    <div>
                        {/* <p
                            className="font-medium text-[18px] leading-[24px] tracking-[-0.45px] text-[#000000] align-middle"
                            style={{ fontFamily: "'Axiforma', sans-serif" }}
                        >
                            We can perform rapid assessments for :
                        </p> */}
                        <div className="max-w-3xl   bg-white">
                            {sectionsAccordion.map((section, index) => (
                                <div key={index} className="border-b" style={{
                                    borderImage: openIndex === index ? 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%) 1' : 'none',
                                    borderBottom: openIndex === index ? '1px solid' : '1px solid #e5e5e5'
                                }}>
                                    <button
                                        onClick={() => toggleSection(index)}
                                        className="w-full py-4 px-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Axiforma, sans-serif',
                                                fontWeight: 500,
                                                fontSize: '15px',
                                                lineHeight: '24px',
                                                letterSpacing: '-0.03em',
                                                background: openIndex === index
                                                    ? 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)'
                                                    : '',
                                                WebkitBackgroundClip: openIndex === index ? 'text' : 'unset',
                                                WebkitTextFillColor: openIndex === index ? 'transparent' : '#171717',
                                                backgroundClip: openIndex === index ? 'text' : 'unset'
                                            }}
                                        >
                                            {section.title}
                                        </span>

                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            style={{
                                                transform: openIndex === index ? 'rotate(0deg)' : 'rotate(-90deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <path
                                                d="M7 9L12 14L17 9"
                                                stroke={openIndex === index ? '#157DC1' : '#D3D3D3'}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        style={{
                                            // Increased maxHeight to accommodate the list
                                            maxHeight: openIndex === index ? '300px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.3s ease'
                                        }}
                                    >
                                        <div className="pb-4 px-2" style={{
                                            fontFamily: 'Axiforma, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            lineHeight: '24px',
                                            letterSpacing: '-0.03em',
                                            color: '#8A8A8A'
                                        }}>
                                            {/* Standard Description */}
                                            <p>{section.description}</p>

                                            {/* Conditional List Rendering */}
                                            {section.listItems && (
                                                <ul className="mt-2 ml-1">
                                                    {section.listItems.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span>•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    <>
                        <>
                            <div className="max-w-3xl">
                                <h2
                                    className="font-semibold text-[20px] md:text-[22px] leading-[40px] md:leading-[48px] tracking-[-0.72px]"
                                    style={{
                                        fontFamily: "Axiforma, sans-serif",
                                        background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Private Pathology Services
                                </h2>

                                <p
                                    className="font-medium text-[18px] leading-[24px] mb-2 tracking-[-0.45px] text-[#000000] align-middle"
                                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                                >
                                    Extensive private pathology services in Milton Keynes
                                </p>
                                <div className="space-y-3 md:space-y-4 ">
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-tight">
                                        For more in-depth testing, routine health checks or specialist investigations, Bloom Health partners with leading UK laboratories offering an exceptional range of diagnostics.
                                    </p>
                                </div>

                                <p
                                    className="font-medium text-[18px] leading-[24px] mt-4 tracking-[-0.45px] text-[#000000] align-middle"
                                    style={{ fontFamily: "'Axiforma', sans-serif" }}
                                >
                                    We support testing across:
                                </p>
                            </div>

                        </>

                        <div className="max-w-3xl  bg-white">
                            {sections.map((section, index) => (
                                <div key={index} className="border-b" style={{
                                    borderImage: openNewIndex === index ? 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%) 1' : 'none',
                                    borderBottom: openNewIndex === index ? '1px solid' : '1px solid #e5e5e5'
                                }}>
                                    <button
                                        onClick={() => toggleNewSection(index)}
                                        className="w-full py-4 px-2 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'Axiforma, sans-serif',
                                                fontWeight: 500,
                                                fontSize: '15px',
                                                lineHeight: '24px',
                                                letterSpacing: '-0.03em',
                                                background: openNewIndex === index
                                                    ? 'linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)'
                                                    : '',
                                                WebkitBackgroundClip: openNewIndex === index ? 'text' : 'unset',
                                                WebkitTextFillColor: openNewIndex === index ? 'transparent' : '#171717',
                                                backgroundClip: openNewIndex === index ? 'text' : 'unset'
                                            }}
                                        >
                                            {section.title}
                                        </span>

                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            style={{
                                                transform: openNewIndex === index ? 'rotate(0deg)' : 'rotate(-90deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <path
                                                d="M7 9L12 14L17 9"
                                                stroke={openNewIndex === index ? '#157DC1' : '#D3D3D3'}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        style={{
                                            maxHeight: openNewIndex === index ? '500px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.3s ease'
                                        }}
                                    >
                                        {Array.isArray(section.items) ? (
                                            <ul className="pb-4 px-2 space-y-2">
                                                {(section.items as string[]).map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-center"
                                                        style={{
                                                            fontFamily: 'Axiforma, sans-serif',
                                                            fontWeight: 500,
                                                            fontSize: '15px',
                                                            lineHeight: '24px',
                                                            letterSpacing: '-0.03em',
                                                            color: '#8A8A8A'
                                                        }}
                                                    >
                                                        <span className="mr-3 flex-shrink-0" style={{
                                                            width: '6px',
                                                            height: '6px',
                                                            borderRadius: '50%',
                                                            backgroundColor: '#8A8A8A'
                                                        }}></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : section.items ? (
                                            <p
                                                className="pb-4 px-2"
                                                style={{
                                                    fontFamily: 'Axiforma, sans-serif',
                                                    fontWeight: 500,
                                                    fontSize: '15px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#8A8A8A'
                                                }}
                                            >
                                                {section.items as string}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <>


                        </>
                    </>



                </>

            </div>
        </div>
    );
}