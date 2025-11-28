import React from "react";
import {
  Activity,
  Pill,
  ClipboardCheck,
  HeartPulse,
  PlusCircle,
  Stethoscope,
} from "lucide-react";
import { Heart, Brain, Droplet, Baby, AlertCircle } from "lucide-react";
import { SpecialistsSection } from "@/app/components/services/SpecialistsSection";
import Navbar from "../components/Navbar";

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
        "Assessing your condition quickly to ensure those in greatest need are seen promptly.",
    },
    {
      title: "Assessment & Diagnosis",
      description:
        "Using history, examination, and diagnostic tools (when needed) to pin down what's wrong.",
    },
    {
      title: "Treatment & Guidance",
      description:
        "From prescriptions to minor procedures — we provide care, clear advice, and aftercare instructions.",
    },
    {
      title: "Follow-Up Options",
      description:
        "If your condition needs specialist care or longer-term attention, we help you find the right referrals.",
    },
  ];
  const conditions = [
    {
      icon: Heart,
      title: "Heart Attack or Chest Pain",
      description:
        "Severe chest pain, heart attack, or suspected cardiac arrest",
    },
    {
      icon: Brain,
      title: "Severe Head Trauma",
      description: "Serious head injuries requiring immediate emergency care",
    },
    {
      icon: Droplet,
      title: "Severe Bleeding",
      description: "Uncontrollable bleeding that won't stop",
    },
    {
      icon: Baby,
      title: "Pregnancy Complications",
      description: "Emergency complications during pregnancy",
    },
    {
      icon: AlertCircle,
      title: "Call 999 in case of emergency",
      description:
        "For life-threatening emergencies, always call 999 immediately",
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
          {/* <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&h=800&fit=crop"
            alt="Medical care background"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col min-h-[420px]">
          {/* RED BOX - Bottom Right */}
          <div className="absolute bottom-[-40px] right-20">
            <div className="bg-blue-600/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 w-[350px] md:w-[420px] shadow-xl">
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
                At Bloom Health Urgent Care Centre, we provide fast, expert medical attention for non-life-threatening but urgent illnesses and injuries. Be seen by experienced GPs, A&E consultants, senior nurses and HCAs, with on-site access to X-ray, CT, ultrasound and blood tests — all under one roof, 24/7.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto py-12 px-4 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-full lg:h-auto">
            <div className="w-full h-full lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=1000&fit=crop"
                alt="Medical professional with patient"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="badge badge-primary">
                What Sets Us Apart
              </span>
            </div>

            {/* Main description */}
            <p className="text-paragraph text-gray-800">
              With highly skilled clinicians, modern facilities, and a
              patient-first approach, our goal is to get you seen, treated,
              and on with your life. No long waits, no unnecessary hospital
              visits.
            </p>

            {/* Bullet points */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">
                    Walk-In & Same-Day Appointments
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    – Whether you walk in, call ahead, or book online, you be
                    seen quickly. Each consultation is £99.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">
                    Open 7 Days a Week, Extended Hours
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    – From early morning through to late evenings, including
                    weekends and most public holidays, we here for you when
                    others aren.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">
                    Wide Range of Urgent Care Services
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    – Covering urgent injuries and illnesses like cuts, burns,
                    sprains, infections, flu symptoms, minor fractures, and
                    more. Diagnostics, imaging, and labs available onsite.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">
                    Experienced Medical Professionals
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    – Our team includes emergency medicine physicians, nurses,
                    and first-rate support staff. All committed to accurate
                    diagnosis, compassionate treatment, and your peace of
                    mind.
                  </span>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-900 font-bold mr-2 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">
                    Modern Facilities & Patient Comfort
                  </span>
                  <span className="text-gray-700">
                    {" "}
                    – We use cutting-edge diagnostic tools, digital imaging,
                    and sterile, state-of-the-art treatment rooms. All
                    designed for quick, comfortable, high-standard care.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
                What Sets Us Apart
              </span>
            </div>

            <p className="text-paragraph text-gray-800">
              With highly skilled clinicians, modern facilities, and a
              patient-first approach, our goal is to get you seen, treated,
              and on with your life.
            </p>

            <ul className="space-y-4">{/* your bullet points */}</ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-12 px-4 mb-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="heading-large mb-4" style={{ color: 'var(--color-primary-blue)' }}>
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
                  <h3 className="heading-small mb-3" style={{ color: 'var(--color-primary-blue)' }}>
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

      <div className="w-full py-12 px-4 mb-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Image with decorative blocks */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=1000&fit=crop"
                alt="Medical professional"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="heading-large text-gray-900 mb-4">
                What We Don Treat at London Urgent Care
              </h2>

              {/* Conditions List */}
              <div className="space-y-4">
                {conditions.map((condition, index) => {
                  const Icon = condition.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1">
                          <Icon className="w-6 h-6 text-gray-900" />
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
        </div>
      </div>


      <div className="w-full bg-gray-50 py-14 px-4">
        {/* SPECIALISTS SECTION for UCC */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="heading-large text-center mb-4" style={{ color: 'var(--color-primary-blue)' }}>
            Meet Our Urgent Care Doctors
          </h2>
          <p className="text-paragraph text-center text-gray-600 mb-4">
            Our compassionate urgent care team is dedicated to your health—available every day.
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
                    <div className="w-4 h-4 bg-blue-900 rounded transition-colors duration-300 group-hover:bg-blue-500"></div>
                    <div className="w-4 h-4 bg-blue-900 rounded transition-colors duration-300 group-hover:bg-blue-500"></div>
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
    </>
  );
};

export default UrgentCareBlock;
