import { useState } from "react";

interface AboutSectionProps {
  doctorId: string;
}

export function AboutSection({ doctorId }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState("about");

  // This data would come from your constants/doctors.ts
  const doctorData = {
    name: "Dr Mauro Lencioni",
    personalProfile: {
      fullText: `After Dr Brown's graduation from Leeds Medical School, he obtained competitive jobs in the Yorkshire region completing his medical exams on the first attempt. Dr Brown was then awarded a prestigious British Cardiac Society fellowship to support his research degree looking at the role of genetics in premature heart disease.

His research findings were presented at national and international meetings and he was selected to represent his hospital for a visit to Downing Street recognising "excellence in the NHS". He then obtained a place as a Cardiology Registrar in the Yorkshire Deanery. The final years of his training were spent specialising in electrophysiology and culminated in a fellowship at Wythenshawe Hospital.`,
      shortText: `After Dr Brown's graduation from Leeds Medical School, he obtained competitive jobs in the Yorkshire region completing his medical exams on the first attempt. Dr Brown was then awarded a prestigious British Cardiac Society fellowship to support his research degree looking at the role of genetics in premature heart disease.`,
    },
    treatments: [
      "Abdominal Aortic Aneurysm Screening",
      "Ambulatory Blood Pressure Monitoring",
      "Ambulatory Electrocardiogram (ECG) Test",
      "Amyloid Scan (Cardiac Amyloidosis)",
      "Atrial Fibrillation Treatment",
      "Cardiac Catheterisation",
      "Cardiac Stress Test (Stress ECG)",
      "Cardiovascular Screening",
      "Cardioversion",
      "Catheter Ablation",
      "Echocardiogram Scan",
      "Electrocardiogram (ECG)",
      "Endovascular Aortic Aneurysm Repair",
      "Heart Bypass Surgery",
      "Heart Failure Treatment",
    ],
    clinicalInterests: [
      "Cardiac Ablation",
      "Arrhythmias",
      "Atrial Fibrillation",
      "Pacemakers",
      "Devices For Heart Failure",
      "Implantable Cardiac Defibrillators",
    ],
    languages: ["English"],
    gmcNumber: "4531489",
    gmcDescription:
      "A General Medical Council (GMC) Number Is A Unique ID That Shows A Specialist Is Officially Registered And Approved To Practice Medicine In The UK.",
    qualifications: ["MBChB MRCP MD"],
  };

  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                    activeTab === "about"
                      ? "bg-[#2B9DB5] text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("treatment")}
                  className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                    activeTab === "treatment"
                      ? "bg-[#2B9DB5] text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Treatment
                </button>
                <button
                  onClick={() => setActiveTab("insurer")}
                  className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                    activeTab === "insurer"
                      ? "bg-[#2B9DB5] text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Insurer
                </button>
              </div>

              {/* About Tab Content */}
              {activeTab === "about" && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    About {doctorData.name}
                  </h2>

                  <h3 className="text-xl font-semibold text-[#2B9DB5] mb-4">
                    Personal Profile
                  </h3>

                  <div className="text-gray-600 leading-relaxed space-y-4 mb-6">
                    {showFullText ? (
                      doctorData.personalProfile.fullText
                        .split("\n\n")
                        .map((para, idx) => <p key={idx}>{para}</p>)
                    ) : (
                      <p>{doctorData.personalProfile.shortText}</p>
                    )}
                  </div>

                  <div className="flex gap-4 mb-12">
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="bg-gradient-to-r from-[#2B9DB5] to-[#4DB8A8] text-white px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <span>{showFullText ? "Read Less" : "Read More"}</span>

                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={showFullText ? "M20 12H4" : "M12 4v16m8-8H4"}
                        />
                      </svg>
                    </button>

                    <button className="bg-[#2B9DB5] text-white px-6 py-3 rounded-md font-medium hover:bg-[#258a9f] transition-colors flex items-center gap-2">
                      <span>View All Availability</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full border-t border-gray-200 my-10"></div>
                  {/* Treatments Section */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Treatments Offered By Dr Benjamin Brown
                  </h2>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {doctorData.treatments.map((treatment, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-colors"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>

                  <button className="bg-[#2B9DB5] text-white px-6 py-3 rounded-md font-medium hover:bg-[#258a9f] transition-colors flex items-center gap-2">
                    <span>View All Availability</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Treatment Tab Content */}
              {activeTab === "treatment" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Treatments & Procedures
                  </h2>
                  <p className="text-gray-600">
                    Treatment information goes here...
                  </p>
                </div>
              )}

              {/* Insurer Tab Content */}
              {activeTab === "insurer" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Insurance Information
                  </h2>
                  <p className="text-gray-600">
                    Insurance information goes here...
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  More Information:
                </h3>

                {/* Clinical Interests */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#2B9DB5] mb-3">
                    Clinical Interests
                  </h4>
                  <ul className="space-y-2">
                    {doctorData.clinicalInterests.map((interest, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-sm flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-gray-200 my-6" />

                {/* Languages Spoken */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#2B9DB5] mb-3">
                    Languages Spoken
                  </h4>
                  <ul className="space-y-2">
                    {doctorData.languages.map((language, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-sm flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{language}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-gray-200 my-6" />

                {/* GMC Number */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#2B9DB5] mb-3">
                    GMC Number
                  </h4>
                  <ul className="space-y-2 mb-3">
                    <li className="text-gray-900 font-medium text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{doctorData.gmcNumber}</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctorData.gmcDescription}
                  </p>
                </div>

                <hr className="border-gray-200 my-6" />

                {/* Qualifications */}
                <div>
                  <h4 className="text-lg font-semibold text-[#2B9DB5] mb-3">
                    Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {doctorData.qualifications.map((qualification, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-sm flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
