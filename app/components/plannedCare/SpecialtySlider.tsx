"use client";

import React from "react";
import {
    Heart, Ear, ScanFace, Bone, Stethoscope, Wind,
    Activity, UserRound, Baby, BrainCircuit,
    Droplets, Flower2, PersonStanding, Zap
} from "lucide-react";

const specialties = [
    {
        title: "Cardiology", desc: "For palpitations, chest sensations, breathlessness, dizziness or heart rhythm concerns.",
        imageUrl: "/plannedCare/Cardiology.svg"
    },
    {
        title: "ENT", desc: "For sinus issues, ear symptoms, throat discomfort, hoarseness and swallowing difficulties.",
        imageUrl: "/plannedCare/ENT.svg"
    },
    {
        title: "Dermatology", desc: "For rashes, eczema, acne, moles, skin lesions and chronic skin concerns.",
        imageUrl: "/plannedCare/Dermatology.svg"
    },
    {
        title: "Orthopaedics", desc: "For joint pain, injuries, tendon problems, back/neck discomfort, and mobility issues.",
        imageUrl: "/plannedCare/Orthopaedics.svg"
    },
    {
        title: "Gastroenterology", desc: "For abdominal pain, reflux, bloating, bowel symptoms and digestive health concerns.",
        imageUrl: "/plannedCare/Gastroenterology.svg"
    },
    {
        title: "Respiratory", desc: "For persistent cough, breathlessness, chest tightness or asthma-related issues.",
        imageUrl: "/plannedCare/Respiratory.svg"
    },
    {
        title: "Minor Procedures", desc: "For lumps, bumps, hernias and other concerns needing surgical input.",
        imageUrl: "/plannedCare/MINOR.svg"
    },
    {
        title: "Men’s Health", desc: "For hormonal issues, prostate concerns, sexual health and general male wellbeing.",
        imageUrl: "/plannedCare/Men.svg"
    },
    {
        title: "Women’s Health", desc: "For menstrual issues, menopause support, gynaecological symptoms and hormonal concerns.",
        imageUrl: "/plannedCare/Women.svg"
    },
    { title: "Paediatrics", desc: "For children’s symptoms, developmental concerns, allergies and general paediatric health.", imageUrl: "/plannedCare/Orthopaedics.svg" },
    {
        title: "Mental Health", desc: "For stress, anxiety, mood concerns and specialist mental health input.",
        imageUrl: "/plannedCare/Mental.svg"
    },
    {
        title: "Urology", desc: "Specialist evaluation and treatment of urinary tract and male reproductive conditions.",
        imageUrl: "/plannedCare/Urology.svg"
    },
    {
        title: "Gynaecology", desc: "Clinical assessment and management of gynaecological conditions.",
        imageUrl: "/plannedCare/Gynaecology.svg"
    },
    {
        title: "Rheumatology", desc: "Management of inflammatory, autoimmune, and musculoskeletal conditions.",
        imageUrl: "/plannedCare/Rheumatology.svg"
    },
    {
        title: "Pain Clinics", desc: "Assessment and management of acute and chronic pain.",
        imageUrl: "/plannedCare/Pain.svg"
    },
];

const SpecialtySlider = () => {
    // Triple the data to ensure no white gaps on very wide screens
    const scrollData = [...specialties, ...specialties, ...specialties];

    return (
        <div className="w-full  py-4 overflow-hidden font-sans">
            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-slow-scroll {
          display: flex;
          width: max-content;
         
          animation: scroll 80s linear infinite;
        }
        .animate-slow-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>



            <div className="relative w-full">

                {/* The Track */}
                <p className="font-axiforma font-normal text-[20px] leading-[48px] tracking-[-0.72px] text-black align-middle">
                    Each specialty will support common symptoms and concerns in a clear, patient-friendly way:
                </p>

                <div className="animate-slow-scroll ">
                    {scrollData.map((item, index) => (
                        <div
                            key={index}
                            className="w-[320px] px-4 flex-shrink-0"
                        >
                            <div className="bg-[#e8f2f9] h-[260px] rounded-xl p-8 flex flex-col justify-start items-start shadow-lg border border-sky-100">
                                <div className="text-[#005499] mb-4">
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>

                                <h3 className="font-medium text-[18px] leading-[24px] tracking-[-0.45px] text-black align-middle">
                                    {item.title}
                                </h3>

                                <h3 className="font-medium text-[18px] leading-[24px] tracking-[-0.45px] text-black align-middle">
                                    (Coming Soon)
                                </h3>


                                <p className="font-normal text-[15px] leading-[24px] tracking-[-0.45px] text-black align-middle mt-4">
                                    {item.desc}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    );
};

export default SpecialtySlider;