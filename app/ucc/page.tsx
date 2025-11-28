import React from "react";
import { Pill, ClipboardCheck, PlusCircle, Stethoscope } from "lucide-react";
import { Heart, Brain, AlertCircle } from "lucide-react";
import {
  HeartPulse,
  Droplet,
  Baby,
  AlertTriangle,
  Activity,
  Skull,
  ShieldAlert,
  HeartCrack,
  Ambulance,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { MainFooter } from "../components/footer/Footer";

const UrgentCareBlock = () => {
  const services = [
    {
      icon: Activity,
      title: "Treatment of minor emergencies (sprains, cuts, fractures)",
    },
    {
      icon: Pill,
      title: "Infection diagnoses & antibiotic treatment",
    },
    {
      icon: ClipboardCheck,
      title: "Respiratory, gastro, and flu-like illness management",
    },
    {
      icon: HeartPulse,
      title: "Imaging & X-ray services onsite",
    },
    {
      icon: PlusCircle,
      title: "Laboratory tests & diagnostics",
    },
    {
      icon: Stethoscope,
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
        "You’ll be seen by an experienced GP, Emergency Medicine clinician, or senior nurse practitioner who will take a full history and examine you. Where helpful, we can arrange on-site tests such as X-ray, ultrasound, CT (extended hours) or blood work to reach a clear diagnosis efficiently.",
    },
    {
      title: "Treatment & Guidance",
      description:
        "Once we understand what’s wrong, we’ll begin treatment without delay. This may include prescriptions, wound care, dressings, minor procedures, symptom relief, or safety-netting advice. Our team ensures you leave with clear instructions and full confidence in your next steps.",
    },
    {
      title: "Follow-Up Options",
      description:
        "If your condition requires further specialist input, planned investigation, or ongoing care, we’ll help organise the appropriate referrals — either within Bloom Health Hospital or through your GP. We make sure no patient leaves without a clear plan.",
    },
  ];
  const conditions = [
    {
      icon: HeartPulse,
      title: "Chest Pain or Suspected Heart Attack",
      description:
        "Any sudden chest pain, tightness, or pain radiating to the jaw/left arm requires A&E immediately",
    },
    {
      icon: Brain,
      title: "Severe Head Injury or Loss of Consciousness",
      description:
        "Major trauma, severe blows to the head, confusion, or blackouts must be managed in emergency departments.",
    },
    {
      icon: Droplet,
      title: "Severe or Uncontrolled Bleeding",
      description:
        "Heavy bleeding or wounds requiring advanced surgical care should go directly to A&E.",
    },
    {
      icon: Baby,
      title: "Pregnancy-Related Emergencies",
      description:
        "Heavy bleeding, severe abdominal pain, or concerns with pregnancy should be treated in maternity emergency services",
    },
    {
      icon: Activity,
      title: "Stroke Symptoms",
      description:
        "Facial drooping, weakness on one side, speech difficulties — call 999 immediately.",
    },
    {
      icon: AlertTriangle,
      title:
        "Major Fractures or Suspected Broken Bones of the Hip, Pelvis, or Spine",
      description: "These injuries require specialist trauma care.",
    },
    {
      icon: ShieldAlert,
      title: "Severe Allergic Reactions (Anaphylaxis)",
      description:
        "Breathing difficulties, throat swelling, or widespread rash require urgent emergency treatment.",
    },
    {
      icon: Baby,
      title: "Children Under the Age of 1",
      description:
        "Infants require paediatric specialist assessment in hospital emergency services.",
    },
    {
      icon: Skull,
      title: "Severe Mental Health Crisis",
      description:
        "Threats to safety, extreme agitation, or mental health emergencies require dedicated crisis services or A&E.",
    },
    {
      icon: Ambulance,
      title: "Any Life-Threatening Emergency — Call 999",
      description:
        "If you are unsure, call 999 or visit A&E for immediate help.",
    },
  ];

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

  return (
    <>
      <Navbar />
      <div className="relative w-full max-w-6xl mx-auto overflow-visible rounded-2xl shadow-2xl mb-4">
        {/* Background Image */}
        <div className="absolute inset-0">
  <img
    src="/temp1.jpg"
    alt="Medical care background"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
</div>

        {/* Content Container */}
       <div className=" relative flex flex-col min-h-[420px]">
          {/* RED BOX - Bottom Right */}
          <div className="absolute bottom-[-40px] right-20">
            <div className="bg-gradient-primary backdrop-blur-sm rounded-3xl p-6 md:p-8 w-[350px] md:w-[450px] shadow-xl">
              <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Welcome to Bloom Health
                <br />
                Urgent Care Centre
              </h1>

              <div className="mb-4 space-y-1">
                <p className="text-white text-base font-semibold">
                  Open 24 Hours a Day, 7 Days a Week
                </p>
                <p className="text-white text-base font-semibold">
                  Urgent Care Centre & GP Walk-In Service in Milton Keynes
                </p>
              </div>

              <p className="text-white text-lg font-bold mb-3">
                Walk-In Anytime
              </p>

              <p className="text-white text-sm leading-relaxed">
                At Bloom Health Urgent Care Centre, we provide fast, expert
                medical attention for non-life-threatening but urgent illnesses
                and injuries. Be seen by experienced GPs, A&E consultants,
                senior nurses and HCAs, with on-site access to X-ray, CT,
                ultrasound and blood tests — all under one roof, 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="w-full max-w-5xl mx-auto py-12 px-4 mb-4">
          {/* Entire content centered */}
          <div className="space-y-10 text-center">
            {/* Badge */}
            <div className="inline-block">
              <span className="badge badge-primary text-lg px-4 py-2">
                WHAT SETS US APART / Who We Are
              </span>
            </div>

            {/* Main Heading */}
         
             <div>
            <h2 className="heading-large">
               A New Standard of Urgent Care in{" "}
              <span className="text-gradient">Milton Keynes</span>
            </h2>
          </div>

            {/* Main description */}
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
              With a diverse team of senior clinicians, modern facilities, and a
              commitment to fast, patient-first care, Bloom Health Hospital
              brings a new standard of urgent treatment to Milton Keynes. Our
              goal is simple: to get you assessed, diagnosed, and treated as
              quickly and comfortably as possible.
            </p>

            {/* Bullet points */}
            <ul className="space-y-6 max-w-4xl mx-auto text-left">
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-3 mt-1 text-xl">
                  •
                </span>
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Clinicians You Can Trust
                  </span>
                  <p className="text-lg text-gray-700 mt-1">
                    Our Urgent Care Centre is staffed by an exceptional mix of
                    senior Emergency Medicine consultants and registrars,
                    alongside experienced GPs, nurses and HCAs. This breadth of
                    expertise means you’re always seen by a professional suited
                    to your condition - day or night.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-3 mt-1 text-xl">
                  •
                </span>
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Fast Access, 24/7 Walk-In Care
                  </span>
                  <p className="text-lg text-gray-700 mt-1">
                    We are open around the clock, offering immediate walk-in
                    access for urgent but non-life-threatening illnesses and
                    injuries. We prioritise rapid triage and prompt assessment
                    so you can get reassurance and a plan without long waits.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-3 mt-1 text-xl">
                  •
                </span>
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Hospital-Based Urgent Care with On-Site Diagnostics
                  </span>
                  <p className="text-lg text-gray-700 mt-1">
                    As part of Bloom Health Hospital, we can arrange X-rays,
                    ultrasound, CT scans, POCT and blood tests on-site, with
                    extended hours and on-call availability for urgent cases.
                    This means fewer delays, fewer referrals elsewhere, and
                    quicker answers.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-3 mt-1 text-xl">
                  •
                </span>
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    A Patient-Centred, Comfortable Environment
                  </span>
                  <p className="text-lg text-gray-700 mt-1">
                    Our facilities have been designed to feel modern, calming
                    and accessible. Private treatment rooms, clean clinical
                    areas and attentive staff ensure you feel supported from the
                    moment you arrive.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-3 mt-1 text-xl">
                  •
                </span>
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Efficient Pathways to Treatment
                  </span>
                  <p className="text-lg text-gray-700 mt-1">
                    Our focus is on doing everything we can to start your
                    diagnosis and treatment straight away. By combining skilled
                    clinicians with immediate access to investigations, we aim
                    to reduce waiting times and keep your care moving forward
                    without unnecessary steps.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-3 mt-1 text-xl">
                  •
                </span>
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    Easy, Accessible Visit Experience
                  </span>
                  <p className="text-lg text-gray-700 mt-1">
                    We are conveniently located with extensive council parking
                    directly outside the hospital, which we reimburse for
                    patients attending the Urgent Care Centre.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>

      <div className="w-full bg-gradient-primary py-10 px-4 mb-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Container */}
                  <div className="mb-4 relative">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-white text-sm font-semibold leading-tight">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto py-12 px-4 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT on mobile / RIGHT on large */}
          <div className="lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=1000&fit=crop"
              alt="Medical professional with patient"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT on mobile / LEFT on large */}
          <div className="space-y-6 lg:order-1">
            <div className="inline-block">
              <span className="badge badge-primary">
                WHEN TO COME TO BLOOM UCC
              </span>
            </div>

            <p className="text-paragraph text-gray-800">
              Bloom Health Urgent Care Centre is led by experienced Emergency
              Medicine consultants, GPs and senior nurses, delivering fast,
              reliable care for non-life-threatening conditions. Our focus is on
              providing safe, efficient, patient-centred treatment with access
              to modern hospital facilities - 24 hours a day.
            </p>

            {/* --- Added Line Starts Here --- */}
            <h3 className="text-lg font-semibold text-blue-900 tracking-wide border-l-4 border-blue-900 pl-3 mb-2">
              You should choose Bloom Health Urgent Care Centre if:
            </h3>
            {/* --- Added Line Ends Here --- */}

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="heading-small text-gray-900">
                    You need to be seen quickly
                  </span>
                  <span className="text-paragraph text-gray-700">
                    {" "}
                    - But your condition isn’t life-threatening — such as minor
                    injuries, infections, sudden pain, or symptoms that can’t
                    wait for a GP appointment.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="heading-small text-gray-900">
                    Your GP cannot offer an urgent same-day slot
                  </span>
                  <span className="text-paragraph text-gray-700">
                    {" "}
                    – Or you need help outside normal practice hours, overnight,
                    or at weekends.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="heading-small text-gray-900">
                    You want to avoid long A&E waiting times
                  </span>
                  <span className="text-paragraph text-gray-700">
                    {" "}
                    - For conditions that can be safely managed within urgent
                    care — where you’ll receive prompt clinical attention.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="heading-small text-gray-900">
                    You require rapid assessment with on-site tests
                  </span>
                  <span className="text-paragraph text-gray-700">
                    {" "}
                    – such as X-ray, ultrasound, CT scan (available extended
                    hours), or blood tests, allowing for quicker answers and
                    faster decision-making.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

   <div className="w-full py-12 px-4 mb-4 bg-[#F0441F]">
  <div className="max-w-7xl mx-auto">
    {/* Center All Headings */}
    <div className="text-center space-y-6">

      <div>
        <h2 className="heading-large">
          What We Don’t Treat at Bloom Health{"  "}
          <span className="text-gradient">Urgent Care Centre</span>
        </h2>
      </div>

<>
  {/* Small Section Heading */}
  <p className="text-xl font-semibold text-gray-900">
    Important Information for Patients
  </p>

  {/* Explanatory Text */}
<div className=" border-blue-700 pl-4 mt-3 space-y-1">
  <h3 className="text-xl font-semibold text-gray-900">
    Our Urgent Care Centre is designed for non-life-threatening illnesses
    and injuries.
     For your safety, the conditions below require A&E or emergency
    services and cannot be treated at urgent care.
  </h3>

  
</div>

  {/* Main Section Heading */}
  <h3 className="text-2xl font-semibold mt-6">
    Conditions Requiring Emergency Care (Not Treated Here):
  </h3>
</>

    </div>

    {/* Conditions Grid - 2 Columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {conditions.map((condition, index) => {
        const Icon = condition.icon;
        return (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <Icon className="w-8 h-8 text-red-600" />
              </div>

              {/* Content */}
              <div>
                <h3 className="heading-small mb-2 text-gray-900">
                  {condition.title}
                </h3>
                <p className="text-paragraph text-gray-700">
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


      <>
        <div className="w-full bg-gray-50 py-12 px-4 mb-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <h2
              className="heading-large mb-4"
              style={{ color: "var(--color-primary-blue)" }}
            >
              What to Expect
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {/* Red top bar */}
                  <div className="h-3 bg-gradient-primary"></div>

                  {/* Card content */}
                  <div className="p-6">
                    <h3
                      className="heading-small mb-3"
                      style={{ color: "var(--color-primary-blue)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-paragraph text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
      <div className="w-full bg-gray-50 py-14 px-4">
        {/* SPECIALISTS SECTION for UCC */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2
            className="heading-large text-center mb-4"
            style={{ color: "var(--color-primary-blue)" }}
          >
            Meet Our Urgent Care Doctors
          </h2>
          <p className="text-paragraph text-center text-gray-600 mb-4">
            Our compassionate urgent care team is dedicated to your
            health—available every day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Card with bigger rounded bottom-right corner */}
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl rounded-br-[6rem] p-7 pb-20 shadow-lg transition-all duration-200 group-hover:from-white group-hover:to-white group-hover:shadow-xl min-h-[420px] flex flex-col justify-between">
                  {/* Decorative blocks in top right */}
                  <div className="absolute top-8 right-8 flex gap-2 z-10">
                    <div className="w-4 h-4bg-gradient-primary"></div>
                    <div className="w-4 h-4"></div>
                  </div>
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  {/* Text content */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-900 transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    <p className="text-white text-lg group-hover:text-cyan-500 transition-colors duration-300">
                      {doctor.title}
                    </p>
                  </div>
                </div>
                {/* Bottom-right decorative circle */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-400 rounded-full -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MainFooter/>
    </>
  );
};

export default UrgentCareBlock;
