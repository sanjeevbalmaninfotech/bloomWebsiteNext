'use client';
import { useState } from "react";


export default function MiddleSection() {

    const [openIndex, setOpenIndex] = useState(-1);

    const features = [
        "Sudden or ongoing pain that needs further investigation.",
        "A recent injury or suspected fracture.",
        "Abdominal or pelvic discomfort that requires more than a physical examination.",
        "Chest symptoms, such as breathlessness or persistent discomfort.",
        "Soft tissue lumps or swellings that need characterisation.",
        "Musculoskeletal injuries, such as sports injuries or joint problems.",
        "A known condition that requires monitoring.",

    ];
    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
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

    return (
        <>

            <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
                <div className="max-w-7xl mx-auto">

                    <>
                        <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                            What Imaging Means at{" "}
                            <span
                                style={{
                                    background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Bloom Health
                            </span>
                        </h1>


                        {/* Subheading */}
                        <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                            Bloom Health’s imaging and screening services are seamlessly integrated across our Urgent Care Centre, self-directed diagnostic access, and specialty care pathways; striving to deliver rapid, accurate results and insights when they matter most.
                        </p>




                    </>


                    <>
                        <div className="max-w-7xl mx-auto mt-8">
                            {/* Heading */}
                            <h2
                                className="text-[#171717] text-[18px] leading-[28px] tracking-[-0.18px] mb-6"
                                style={{
                                    fontFamily: 'Axiforma, sans-serif',
                                    fontWeight: 400,
                                }}
                            >
                                At Bloom Health you'll find:
                            </h2>

                            {/* Features List */}
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        {/* Custom Gradient Bullet */}
                                        <span
                                            className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5"
                                            style={{
                                                background: '#157DC1',
                                            }}
                                        />

                                        {/* Feature Text */}
                                        <p
                                            className="text-[#171717] text-[18px] leading-[28px] tracking-[-0.18px] flex-1"
                                            style={{
                                                fontFamily: 'Axiforma, sans-serif',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {feature}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                    <>

                        <>
                            <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma mt-8">
                                Our Onsite{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Imaging Services
                                </span>
                            </h1>


                            {/* Subheading */}
                            <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                                We provide a range of medical imaging services in one place, helping to minimise delays and reduce the need to travel between different sites.
                            </p>
                        </>

                    </>
                    <>
                        <div className="max-w-3xl   bg-white mt-8">
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
                    </>

                    <>

                        <>
                            <div className="max-w-7xl mt-8 mx-auto ">
                                {/* Heading */}
                                <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma mt-8">
                                    When Imaging{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        Can Help
                                    </span>
                                </h1>

                                <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                                    Imaging is not always necessary, but it can be extremely helpful when used at the right time, for the right reason. If you’re unsure whether you need a scan, our team will listen to your concerns and explain your options in clear, simple terms.
                                </p>

                                <h2
                                    className="text-[#171717] text-[18px] leading-[28px] tracking-[-0.18px] mb-6 mt-4"
                                    style={{
                                        fontFamily: 'Axiforma, sans-serif',
                                        fontWeight: 400,
                                    }}
                                >
                                    Your clinician may recommend imaging if you have:
                                </h2>

                                {/* Features List */}
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            {/* Custom Gradient Bullet */}
                                            <span
                                                className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5"
                                                style={{
                                                    background: '#157DC1',
                                                }}
                                            />

                                            {/* Feature Text */}
                                            <p
                                                className="text-[#171717] text-[18px] leading-[28px] tracking-[-0.18px] flex-1"
                                                style={{
                                                    fontFamily: 'Axiforma, sans-serif',
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>

                    </>








                </div>
            </div>

        </>
    );
}