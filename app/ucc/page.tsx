"use client";
import React from "react";


import Navbar from "../components/Navbar";
import { MainFooter } from "../components/footer/Footer";
import ImageSection from "../components/Ucc/UccHeroImage";
import TeamMemberCard from "../components/TeamsCard/TeamMemberCard";
import FooterImage from "../components/footer/FooterImage";
import UccFAQSection from "../components/footer/UccFAQSection";
import { uccPageFAQ } from "../constants/FAQs";

const UrgentCareBlock = () => {
  const uccServices = [
    {
      icon: "/TREATMENT.svg",
      title: "Treatment of minor emergencies (sprains, cuts, fractures)",
    },
    {
      icon: "/INFECTION.svg",
      title: "Infection diagnosis & antibiotic treatment",
    },
    {
      icon: "/RESPIRATORY.svg",
      title: "Respiratory, gastro, and flu-like illness management",
    },
    {
      icon: "/IMAGING.svg",
      title: "Imaging & X-ray services onsite",
    },

    {
      icon: "/LABORATORY.svg",
      title: "Laboratory tests & diagnostics",
    },
    {
      icon: "/WOUND.svg",
      title: "Wound care and minor surgical procedures",
    },
  ];

  const steps = [
    {
      title: "Arrival & Triage",
      description:
        "Our clinical team will assess your condition as soon as you arrive to ensure that those who need urgent attention are prioritised. Triage is quick, supportive, and focused on keeping you safe and informed from the outset.",
    },
    {
      title: "Assessment & Diagnosis",
      description:
        "You'll be seen by an experienced GP, Emergency Medicine clinician, or senior nurse practitioner who will take a full history and examine you. Where helpful, we can arrange on-site tests such as X-ray, ultrasound, CT (extended hours) or blood work to reach a clear diagnosis efficiently.",
    },
    {
      title: "Treatment & Guidance",
      description:
        "Once we understand what's wrong, we'll begin treatment without delay. This may include prescriptions, wound care, dressings, minor procedures, symptom relief, or safety-netting advice. Our team ensures you leave with clear instructions and full confidence in your next steps.",
    },
    {
      title: "Follow-Up Options",
      description:
        "If your condition requires further specialist input, planned investigation, or ongoing care, we'll help organise the appropriate referrals - either within Bloom Health Hospital or through your GP. We make sure no patient leaves without a clear plan.",
    },
  ];
  const conditions = [
    {
      icon: "/Icons/HeartAttack.svg",
      title: "Chest Pain or Suspected Heart Attack",
      description:
        "Any sudden chest pain, tightness, or pain radiating to the jaw/left arm requires A&E immediately.",
    },
    {
      icon: "/Icons/HeadInjury.svg",
      title: "Severe Head Injury or Loss of Consciousness",
      description:
        "Major trauma, severe blows to the head, confusion, or blackouts must be managed in emergency departments.",
    },
    {
      icon: "/Icons/Bleeding.svg",
      title: "Severe or Uncontrolled Bleeding",
      description:
        "Heavy bleeding or wounds requiring advanced surgical care should go directly to A&E.",
    },
    {
      icon: "/Icons/PregnancyEmergencies.svg",
      title: "Pregnancy-Related Emergencies",
      description: "Heavy bleeding, severe abdominal pain, or concerns with pregnancy should be treated in maternity emergency services."
    },
    {
      icon: "/Icons/StrokeSymptons.svg",
      title: "Stroke Symptoms",
      description:
        "Facial drooping, weakness on one side, speech difficulties - call 999 immediately.",
    },
    {
      icon: "/Icons/MajorFractures.svg",
      title:
        "Major Fractures or Suspected Broken Bones of the Hip, Pelvis or Spine",
      description: "These injuries require specialist trauma care.",
    },
    {
      icon: "/Icons/AllergicReactions.svg",
      title: "Severe Allergic Reactions (Anaphylaxis)",
      description:
        "Breathing difficulties, throat swelling, or widespread rash require urgent emergency treatment.",
    },
    {
      icon: "/Icons/eye.svg",
      title: "Sudden Vision Loss",
      description:
        "A sudden loss or change in vision can be a sign of a serious eye or neurological emergency.",
    },
    {
      icon: "/Icons/MentalHealthCrisis.svg",
      title: "Severe Mental Health Crisis",
      description:
        "Threats to safety, extreme agitation, or mental health emergencies require dedicated crisis services or A&E.",
    },
    {
      icon: "/Icons/CallEmergency.svg",
      title: "Any Life-Threatening Emergency - Call 999",
      description:
        "If you are unsure, call 999 or visit A&E for immediate help.",
    },
  ];

  const teamMembers = [
    {
      id: 3,
      name: 'Dr. Shindo Francis',
      role: 'Urgent Care Center Clinical Lead',
      imageUrl: '/staff/Shindo.jpg'
    },
    {
      id: 1,
      name: 'Chris Larmour', // comment added 
      role: 'Lead Nurse',
      imageUrl: '/images/Chris.jpg'
    },
    {
      id: 2,
      name: 'Andy Marfleet',
      role: 'Radiographer',
      imageUrl: '/images/Andy.jpg'
    },

  ];
  /*
  const doctors = [
    {
      name: "Andre van Nierop",
      title: "Urgent Care Doctor",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    },
    {
      name: "Jalal Moradzadeh",
      title: "Urgent Care Doctor",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    },
    {
      name: "Raeen Farrokhnik",
      title: "Urgent Care Doctor",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    },
  ];
  */



  return (
    <>
      <Navbar />
      {/* Hero Image */}
      {/* <div className="w-full h-auto">
        <img
          src="/ucchero.png"
          alt="Medical Image"
          className="w-full h-auto object-cover object-center md:h-[500px] sm:h-[350px]"
        />
        

      </div> */}

      <ImageSection />

      {/* What Sets Us Apart Section */}
      <div className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Badge - What Sets Us Apart */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              <span className="text-[#171717]">What Sets </span>
              <span
                className="bg-gradient-to-r from-[#157DC1] to-[#49acac] bg-clip-text text-transparent"
                style={{ fontFamily: "Axiforma, sans-serif" }}
              >
                Us Apart
              </span>
            </h2>
          </div>

          {/* Main Heading */}
          <div className="mb-4">
            <h3
              className="text-lg md:text-xl"
              style={{
                fontFamily: "Axiforma, sans-serif",
                color: "rgba(23, 23, 23, 1)",
              }}
            >
              A New Standard of Urgent Care in Milton Keynes
            </h3>
          </div>

          {/* Main description */}
          <div className="mb-6">
            <p
              style={{
                fontFamily: "Axiforma, sans-serif",
                color: "rgba(138, 138, 138, 1)",
                fontSize: "15px",
                lineHeight: "24px",
              }}
            >
              With a diverse team of senior clinicians, modern facilities, and a
              commitment to fast, patient-first care, Bloom Health Hospital
              brings a new standard of urgent treatment to Milton Keynes. Our
              goal is simple: to get you assessed, diagnosed, and treated as
              quickly and comfortably as possible.
            </p>
          </div>

          {/* Bullet points container */}
          <div className="space-y-6">
            {[
              {
                title: "Clinicians You Can Trust",
                desc: "Our Urgent Care Centre is staffed by an exceptional mix of senior Emergency Medicine consultants and registrars, alongside experienced GPs, nurses and HCAs. This breadth of expertise means you're always seen by a professional suited to your condition - day or night.",
              },
              {
                title: "Fast Access, 24/7 Walk-In Care",
                desc: "We are open around the clock, offering immediate walk-in access for urgent but non-life-threatening illnesses and injuries. We prioritise rapid triage and prompt assessment so you can get reassurance and a plan without long waits.",
              },
              {
                title: "Walk In Access to GPs",
                desc: "GPs would be able available from 8am to midnight as part of our Urgent Care Centre Services.",
              },
              {
                title: "Hospital-Based Urgent Care with On-Site Diagnostics",
                desc: "As part of Bloom Health Hospital, we can arrange X-rays, ultrasound, CT scans, POCT and pathology tests on-site, with extended hours and on-call availability for urgent cases. This means fewer delays, fewer referrals elsewhere, and quicker answers.",
              },
              {
                title: "A Patient-Centred, Comfortable Environment",
                desc: "Our facilities have been designed to feel modern, calming and accessible. Private treatment rooms, clean clinical areas and attentive staff ensure you feel supported from the moment you arrive.",
              },
              {
                title: "Efficient Pathways to Treatment",
                desc: "Our focus is on doing everything we can to start your diagnosis and treatment straight away. By combining skilled clinicians with immediate access to investigations, we aim to reduce waiting times and keep your care moving forward without unnecessary steps.",
              },
              {
                title: "Easy, Accessible Visit Experience",
                desc: "We are conveniently located with extensive council parking directly outside the hospital, which we reimburse for patients attending the Urgent Care Centre.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-[rgba(21,93,252,1)] text-xl md:text-2xl flex-shrink-0 mt-1">
                  •
                </span>
                <div>
                  <h4
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: "Axiforma, sans-serif",
                      color: "rgba(23, 23, 23, 1)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm md:text-base mt-1"
                    style={{
                      fontFamily: "Axiforma, sans-serif",
                      color: "rgba(138, 138, 138, 1)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner info section */}

      <div
        className="w-full py-12 md:py-16"
        style={{
          background: "linear-gradient( #157DC1 , #49acac )",
        }}
      >
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1920px] mx-auto">

          {/* Added Heading Section */}
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-white text-left mb-8 md:mb-12"
              style={{
                fontFamily: "Axiforma, sans-serif",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight: "48px",
                letterSpacing: "-0.72px",
                verticalAlign: "middle"
              }}
            >
              What We Treat
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto">
            {uccServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex items-center justify-center">
                  {/* Added container div with fixed dimensions and centering */}
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt=""
                      className="max-w-full max-h-full object-contain" // Changed to object-contain
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>
                <p
                  className="text-white text-xs md:text-sm leading-tight mt-2"
                  style={{ fontFamily: "var(--font-family-1, sans-serif)" }}
                >
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* When To Come To Bloom UCC Section */}


      {/*   When To Come To Bloom UCC Section */}
      <div className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                  <span className="text-[#171717]">When To Come To </span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: "linear-gradient( #157DC1, #49acac)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    Bloom Urgent Care
                  </span>
                </h2>
                <h3
                  className="text-lg md:text-xl"
                  style={{
                    fontFamily: "Axiforma, sans-serif",
                    color: "rgba(23, 23, 23, 1)",
                  }}
                >
                  A New Standard of Urgent Care in Milton Keynes
                </h3>
              </div>

              <div className="mb-6">
                <p
                  style={{
                    fontFamily: "Axiforma, sans-serif",
                    color: "rgba(138, 138, 138, 1)",
                    fontSize: "15px",
                    lineHeight: "24px",
                  }}
                >
                  Bloom Health Urgent Care Centre is led by experienced
                  Emergency Medicine consultants, GPs and senior nurses,
                  delivering fast, reliable care for non-life-threatening
                  conditions. Our focus is on providing safe, efficient,
                  patient-centred treatment with access to modern hospital
                  facilities -<strong className="text-black font-bold">24 hours a day</strong>


                </p>
              </div>

              <div className="mb-6">
                <p
                  style={{
                    fontFamily: "Axiforma, sans-serif",
                    color: "rgba(138, 138, 138, 1)",
                    fontSize: "15px",
                    lineHeight: "24px",
                  }}
                >
                  With a diverse team of senior clinicians, modern facilities,
                  and a commitment to fast, patient-first care, Bloom Health
                  Hospital brings a new standard of urgent treatment to Milton
                  Keynes. Our goal is simple: to get you assessed, diagnosed,
                  and treated as quickly and comfortably as possible.
                </p>
              </div>

              <div className="space-y-6">
                <h3
                  className="text-lg md:text-xl font-normal pl-3 border-l-4"
                  style={{
                    fontFamily: "Axiforma, sans-serif",
                    color: "rgba(21, 125, 193, 1)",
                    borderLeft: "4px solid transparent",
                    borderImage:
                      "linear-gradient(133.01deg, #157DC1 -11.36%, #49acac  115%) 1",
                  }}
                >
                  You should choose Bloom Health Urgent Care Centre if:
                </h3>

                <ul className="space-y-2">
                  {[
                    {
                      title: "You need to be seen quickly",
                      desc: " - But your condition isn't life-threatening - such as minor injuries, infections, sudden pain, or symptoms that can't wait for a GP appointment.",
                    },
                    {
                      title: "Your GP cannot offer an urgent same-day slot",
                      desc: " - Or you need help outside normal practice hours, overnight, or at weekends.",
                    },
                    {
                      title: "You want to avoid long A&E waiting times",
                      desc: " - For conditions that can be safely managed within urgent care - where you'll receive prompt clinical attention.",
                    },
                    {
                      title: "You require rapid assessment with on-site tests",
                      desc: " - Such as X-ray, ultrasound, CT scan (available extended hours), or blood tests, allowing for quicker answers and faster decision-making.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 md:gap-4">
                      <span className="text-[rgba(21,93,252,1)] text-xl md:text-2xl flex-shrink-0 mt-1">
                        •
                      </span>
                      <div>
                        <span
                          className="block text-base md:text-lg"
                          style={{
                            fontFamily: "Axiforma, sans-serif",
                            color: "rgba(23, 23, 23, 1)",
                          }}
                        >
                          {item.title}{" "}
                          <span
                            className="text-sm md:text-base"
                            style={{
                              fontFamily: "Axiforma, sans-serif",
                              color: "rgba(138, 138, 138, 1)",
                            }}
                          >
                            {item.desc}
                          </span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image - Same height as content */}
            <div className="lg:w-1/2 flex">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/uccside.png"
                  alt="Medical professional with patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditions Requiring Emergency Care Section */}
      <div
        className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"
        style={{
          background: "linear-gradient(#157DC1 , #49acac )",
        }}
      >
        <div className="max-w-7xl mx-auto">

          {/* NEW HEADER SECTION */}
          <div className="bg-white rounded-2xl p-6 md:p-10 mb-8 md:mb-12">
            <p
              style={{
                fontFamily: "Axiforma, sans-serif",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "24px",
                letterSpacing: "-0.45px",
                color: "#171717",
                verticalAlign: "middle"
              }}
            >
              Important Information for Patients
            </p>

            <h2
              className="my-1"
              style={{
                fontFamily: "Axiforma, sans-serif",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight: "1.2", // Adjusting 'm' spacing to a standard visual equivalent
                letterSpacing: "0px",
                color: "#E7000B",
                verticalAlign: "middle"
              }}
            >
              Conditions Not Treated Here
            </h2>

            <p
              style={{
                fontFamily: "Axiforma, sans-serif",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "24px",
                letterSpacing: "-0.45px",
                color: "#8A8A8A",
                verticalAlign: "middle"
              }}
            >
              Our Urgent Care Centre is designed for non-life-threatening illnesses and injuries. For your safety, the conditions below require A&E or emergency services and cannot be treated at urgent care.
            </p>
          </div>

          {/* YOUR EXISTING GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {conditions.map((condition, index) => {
              const isLastItem = index === conditions.length - 1;
              return (
                <div
                  key={index}
                  className={`bg-white  rounded-2xl p-4 md:p-6 ${isLastItem ? "border-5 border-[#DC2626]" : ""}`}
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <img
                        src={condition.icon}
                        alt={condition.title}
                        className="w-10 h-10 md:w-12 md:h-12"
                        style={{ filter: 'invert(24%) sepia(85%) saturate(4456%) hue-rotate(350deg) brightness(93%) contrast(96%)' }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[#DC2626] font-semibold text-sm md:text-base mb-2"
                        style={{ fontFamily: "Axiforma, sans-serif" }}
                      >
                        {condition.title}
                      </h3>
                      <p
                        className="text-gray-700 text-xs md:text-sm"
                        style={{ fontFamily: "Axiforma, sans-serif" }}
                      >
                        {condition.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* What to Expect Section */}
      <div
        className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"

      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              <span className="text-[#171717]">What to </span>
              <span className="bg-gradient-to-r from-[#157DC1] to-[#49acac] bg-clip-text text-transparent">
                Expect
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg"
                style={{
                  backgroundColor: "rgba(21, 125, 193, 0.07)",
                  height: "100%",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{
                    fontFamily: "Axiforma, sans-serif",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm md:text-base"
                  style={{
                    fontFamily: "Axiforma, sans-serif",
                    color: "rgba(87, 87, 87, 1)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Doctors Section */}
      <div
        className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-24"
        style={{ background: "radial-gradient(circle at center, #EDEDED , #FFFFFF)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <span className="text-[#171717]">Meet Our </span>
              <span className="bg-gradient-to-r from-[#157dc1] to-[#49acac] bg-clip-text text-transparent">
                Urgent Care Team
              </span>
            </h2>

            <p
              className="text-sm md:text-base"
              style={{
                fontFamily: "Axiforma, sans-serif",
                color: "rgba(138, 138, 138, 1)",
              }}
            >
              Our compassionate urgent care team is dedicated to your
              health - available every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <FooterImage />
        <UccFAQSection faqData={uccPageFAQ} />
      </div>
      <MainFooter />
    </>
  );
};

export default UrgentCareBlock;
