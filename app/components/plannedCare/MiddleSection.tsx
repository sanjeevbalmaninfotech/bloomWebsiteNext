'use client';
import { useState } from "react";


export default function MiddleSection() {

    const [openIndex, setOpenIndex] = useState(-1);

    const features = [
        "Provide faster access to expert opinion than traditional waiting lists.",
        "Offer clear follow-up pathways after urgent care or diagnostics.",
        "Support patients who want private specialist input for reassurance or ongoing symptoms.",
        "Use onsite diagnostics: CT, X-ray, Ultrasound, Echo and pathological tests to streamline the journey."


    ];
    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const sectionsAccordion = [
        {
            image: "images/imagingimage1.jpg",
            title: "X-ray",
            subHeading: "Our onsite digital X-ray service means that, where appropriate, patients can often have their X-ray in Milton Keynes during the same visit as their clinical assessment.",
            description: "X-ray can be particularly useful when:",
            listItems: ["You have a suspected fracture or bone injury.", "There are concerns about joints or the spine.", "A chest X-ray is clinically indicated.", "The clinician needs a quick view of bones or certain structures."]
        },
        {
            image: "",
            title: "CT Scan (Computed Tomography)",
            subHeading: "Our onsite CT scanner allows us to take detailed cross-sectional images of the body using carefully controlled X-rays.",
            description: "A CT scan in Milton Keynes at Bloom Health may be used, where clinically appropriate, to help assess:",
            listItems: ["Certain types of abdominal pain or discomfort.", "Some headaches or neurological concerns (as advised by a clinician)", "Injuries or trauma, especially where deeper structures need review.", 'Selected chest or lung-related issuesYour CT will only be requested after a clinical assessment.']

        },
        {
            title: "Ultrasound",
            subHeading: "We offer private ultrasound in Milton Keynes using a high-quality ultrasound machine with multiple probes. Ultrasound uses sound waves, not radiation, to create moving images of structures inside the body.",
            description: "Depending on your symptoms and clinical assessment, ultrasound may be used to look at:",
            listItems: ["Abdominal organs (such as liver, gallbladder, kidneys).", "Pelvic area, including gynaecological or bladder-related concerns.", "Muscles, tendons and joints (MSK ultrasound).", 'Soft tissue lumps or swellings.', 'Certain vascular (blood vessel) assessments.', 'Some pregnancy-related concerns, where clinically appropriate.']
        },
        {
            image: "",
            title: "Echo (Echocardiogram)",
            subHeading: 'An echocardiogram is a non-invasive ultrasound scan that produces detailed images of the heart, allowing clinicians to assess its structure and function in real time.',
            description: "At Bloom Health Hospital, echocardiograms are performed using our advanced ultrasound technology and may be used to help assess symptoms such as:",
            listItems: ['Chest discomfort or unexplained chest symptoms.', 'Shortness of breath or reduced exercise tolerance.', 'Palpitations or concerns about heart function.', 'Dizziness or light-headedness.', 'Suspected valve, muscle, or structural heart conditions.'],
            endDescription: "An echocardiogram does not replace all cardiac investigations, but it provides valuable insight into how the heart is working and may be used alongside other tests, clinical assessment, and further imaging where appropriate."
        },
        {
            title: "MRI Access: Trusted Local Partners",
            subHeading: "Some conditions or symptoms are best assessed with MRI (Magnetic Resonance Imaging), which provides very detailed views of soft tissues, joints, the brain and spinal structures.",
            description: "While MRI is not located onsite at Bloom Health, we work closely with trusted MRI providers in Milton Keynes. When your clinician feels an MRI would be helpful, we can:",
            listItems: ['Discuss why an MRI is recommended.', 'Help guide you towards an appropriate private MRI pathway in Milton Keynes.', 'Ensure results are considered alongside your other findings and clinical assessment.']
        },

    ];

    return (
        <>

            <div className="bg-white py-12 px-6 md:py-16 md:px-12 lg:py-[60px] lg:px-[120px]">
                <div className="max-w-7xl mx-auto">

                    <>
                        <h1 className="font-semibold mb-1 md:mb-[10px] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight font-axiforma">
                            What is{" "}
                            <span
                                style={{
                                    background: "linear-gradient(133.01deg, #157DC1 -11.36%, #5FC1A3 115%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Specialty Care?
                            </span>
                        </h1>


                        {/* Subheading */}
                        <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                            Specialty Care (sometimes called “secondary care”) means appointments with expert consultants who can help diagnose, manage and treat more complex or ongoing health concerns. Our goal is continuity, clarity and compassion - giving patients a structured path from first symptoms to specialist expertise.
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
                                At Bloom Health, our Specialist Care service will be designed to :
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
                                Future Specialist Clinics{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(133.01deg, #49acac -11.36%, #5FC1A3 115%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    (Coming Soon)
                                </span>
                            </h1>


                            {/* Subheading */}
                            <p className="text-gray-700 mb-5 md:mb-7 text-sm sm:text-base leading-relaxed tracking-tight font-axiforma">
                                These clinics are planned, in development, and will be introduced gradually.
                            </p>
                        </>

                    </>
                    <>
                        <div className="max-w-3xl   bg-white mt-8">

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
                                            background: "linear-gradient(133.01deg, #49acac -11.36%, #5FC1A3 115%)",
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