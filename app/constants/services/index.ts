import { TypeServicesData } from "@/app/types/services";

export const servicesData: TypeServicesData = {
  cardiology: {
    id: "cardiology",
    name: "Cardiology",
    description:
      "Cardiology is the area of medicine that looks after your heart, helping to diagnose and treat any problems with your heart or blood vessels (your cardiovascular system).",
    image: "/temp6.jpg",
    buttonText: "Register Your Interest",
    accordionItems: [
      {
        id: "what-is",
        title: "What is cardiac care?",
        content:
          "Cardiac care involves comprehensive heart health services including diagnosis, treatment, and prevention of cardiovascular diseases. Our specialists provide expert care for all heart-related conditions.",
      },
      {
        id: "cost",
        title: "How much does heart treatment cost?",
        content:
          "Treatment costs vary depending on the specific procedure and your individual needs. We offer transparent pricing and can provide detailed quotes during your consultation.",
      },
      {
        id: "symptoms",
        title: "Common symptoms of heart problems",
        content:
          "Common symptoms include chest pain, shortness of breath, irregular heartbeat, fatigue, and swelling in legs. If you experience these symptoms, consult a cardiologist immediately.",
      },
      {
        id: "treatment",
        title: "Cardiology treatment with bloom",
        content:
          "We offer state-of-the-art cardiology treatments including ECG, echocardiograms, stress tests, and advanced interventional procedures with experienced consultants.",
      },
      {
        id: "booking",
        title: "How to book your treatment",
        content:
          "Booking is simple - use our online system, call our team, or visit us in person. We offer flexible appointment times to suit your schedule.",
      },
      {
        id: "payment",
        title: "How to pay for treatment",
        content:
          "We accept various payment methods including insurance, self-pay, and financing options. Our team can help you understand your coverage.",
      },
      {
        id: "why-us",
        title: "Why choose us",
        content:
          "We provide expert cardiology care with experienced consultants, modern facilities, and a patient-centered approach focusing on prevention and treatment.",
      },
    ],
    relatedTreatments: [
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
    specialists: [
      {
        id: "mauro-lencioni",
        name: "Dr Mauro Lencioni",
        title: "Consultant Cardiologist & Electrophysiologist",
        image: "/dd1.jpg",
        specialties: ["Cardiology", "Hypertension", "Catheter Ablatio"],
        consultationFee: "£300",
        experience: "12 Years",
      },
      {
        id: "aruna-arujuna",
        name: "Dr Aruna Arujuna",
        title: "Consultant Cardiologist",
        image: "/dd2.jpg",
        specialties: [
          "Cardiology",
          "Ambulatory Blood Pressure Monitoring",
          "Electrocardiogram (ECG)",
        ],
        consultationFee: "£300",
        experience: "8 Years",
      },
      {
        id: "benjamin-brown",
        name: "Dr Benjamin Brown",
        title: "Consultant Cardiologist/ Electrophysiologist",
        image: "/dd3.jpg",
        specialties: [
          "Cardiology",
          "Atrial Fibrillation Treatment",
          "Electrocardiogram (ECG)",
        ],
        consultationFee: "£270",
        experience: "18 Years",
      },
    ],
  },

  // Diagnostics uses the same content as cardiology (per your note)
  diagnostics: {
    id: "diagnostics",
    name: "Diagnostics",
    description:
      "Diagnostics related to cardiology - imaging and lab tests to support cardiac care.",
    image: "/Diagnostics.svg",
    buttonText: "Register Your Interest",
    accordionItems: [
      {
        id: "what-is",
        title: "What is cardiac care?",
        content:
          "Cardiac care involves comprehensive heart health services including diagnosis, treatment, and prevention of cardiovascular diseases. Our specialists provide expert care for all heart-related conditions.",
      },
      {
        id: "cost",
        title: "How much does heart treatment cost?",
        content:
          "Treatment costs vary depending on the specific procedure and your individual needs. We offer transparent pricing and can provide detailed quotes during your consultation.",
      },
      {
        id: "symptoms",
        title: "Common symptoms of heart problems",
        content:
          "Common symptoms include chest pain, shortness of breath, irregular heartbeat, fatigue, and swelling in legs. If you experience these symptoms, consult a cardiologist immediately.",
      },
      {
        id: "treatment",
        title: "Cardiology treatment with bloom",
        content:
          "We offer state-of-the-art cardiology treatments including ECG, echocardiograms, stress tests, and advanced interventional procedures with experienced consultants.",
      },
      {
        id: "booking",
        title: "How to book your treatment",
        content:
          "Booking is simple - use our online system, call our team, or visit us in person. We offer flexible appointment times to suit your schedule.",
      },
      {
        id: "payment",
        title: "How to pay for treatment",
        content:
          "We accept various payment methods including insurance, self-pay, and financing options. Our team can help you understand your coverage.",
      },
      {
        id: "why-us",
        title: "Why choose us",
        content:
          "We provide expert cardiology care with experienced consultants, modern facilities, and a patient-centered approach focusing on prevention and treatment.",
      },
    ],
    relatedTreatments: [
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
    specialists: [
      {
        id: "mauro-lencioni",
        name: "Dr Mauro Lencioni",
        title: "Consultant Cardiologist & Electrophysiologist",
        image: "/dd1.jpg",
        specialties: ["Cardiology", "Hypertension", "Catheter Ablatio"],
        consultationFee: "£300",
        experience: "12 Years",
      },
      {
        id: "aruna-arujuna",
        name: "Dr Aruna Arujuna",
        title: "Consultant Cardiologist",
        image: "/dd2.jpg",
        specialties: [
          "Cardiology",
          "Ambulatory Blood Pressure Monitoring",
          "Electrocardiogram (ECG)",
        ],
        consultationFee: "£300",
        experience: "8 Years",
      },
      {
        id: "benjamin-brown",
        name: "Dr Benjamin Brown",
        title: "Consultant Cardiologist/ Electrophysiologist",
        image: "/dd3.jpg",
        specialties: [
          "Cardiology",
          "Atrial Fibrillation Treatment",
          "Electrocardiogram (ECG)",
        ],
        consultationFee: "£270",
        experience: "18 Years",
      },
    ],
  },

  "walk-in-centre": {
    id: "walk-in-centre",
    name: "Walk-In Centre",
    description:
      "Walk-in and same-day appointments for minor injuries, sudden illnesses, and urgent health concerns.",
    image: "/Walkins.svg",
    buttonText: "Book Now",
    accordionItems: [
      {
        id: "walkin-what",
        title: "What is a Walk-In Centre?",
        content:
          "Our Walk-In Centre provides same-day access for minor injuries and urgent but non-life-threatening conditions. No prior appointment required.",
      },
      {
        id: "walkin-services",
        title: "Services available",
        content:
          "Wound care, minor fracture assessment, simple diagnostics and prescriptions for acute illnesses.",
      },
      {
        id: "walkin-hours",
        title: "Opening hours & access",
        content:
          "Open 7 days a week with extended hours. Patients can walk in or pre-book a slot online for quicker service.",
      },
      {
        id: "walkin-insurance",
        title: "Payment & insurance",
        content:
          "We accept major insurers and card payments. Self-pay options are available and prices are transparent at reception.",
      },
    ],
    relatedTreatments: [
      "Minor injury care",
      "Wound dressing",
      "Urgent GP consultation",
      "Suture and wound repair",
      "Fracture triage and splinting",
      "Simple X-ray",
      "Acute infection management",
      "Prescription service",
      "Same-day sick note",
    ],
    specialists: [
      {
        id: "anna-patel",
        name: "Dr Anna Patel",
        title: "Emergency GP",
        image: "/dd1.jpg",
        specialties: ["Urgent Care", "Minor Injuries"],
        consultationFee: "£80",
        experience: "7 Years",
      },
      {
        id: "marcus-lee",
        name: "Dr Marcus Lee",
        title: "Emergency Medicine",
        image: "/dd2.jpg",
        specialties: ["Triage", "Fracture assessment", "Wound care"],
        consultationFee: "£95",
        experience: "10 Years",
      },
      {
        id: "priya-nair",
        name: "Dr Priya Nair",
        title: "GP & Paediatrics Lead",
        image: "/dd3.jpg",
        specialties: ["Paediatrics", "Acute Illness", "Minor Procedures"],
        consultationFee: "£85",
        experience: "6 Years",
      },
      {
        id: "oliver-grant",
        name: "Dr Oliver Grant",
        title: "Orthopaedic Practitioner",
        image: "/dd4.jpg",
        specialties: ["Musculoskeletal", "Fracture triage", "Splinting"],
        consultationFee: "£120",
        experience: "12 Years",
      },
      {
        id: "sofia-martinez",
        name: "Dr Sofia Martinez",
        title: "Urgent Care Physician",
        image: "/dd5.jpg",
        specialties: ["Imaging liaison", "Wound management", "Minor surgery"],
        consultationFee: "£90",
        experience: "9 Years",
      },
      {
        id: "ethan-brooks",
        name: "Dr Ethan Brooks",
        title: "Clinical Lead - Acute Medicine",
        image: "/dd6.jpg",
        specialties: ["Acute assessment", "Infection management", "Care coordination"],
        consultationFee: "£110",
        experience: "14 Years",
      },
    ],
  },

  "planned-care": {
    id: "planned-care",
    name: "Planned Care",
    description:
      "Specialist consultations, follow-up care, chronic disease management, and health screenings.",
    image: "/Plannedcare.svg",
    buttonText: "Enquire",
    accordionItems: [
      {
        id: "planned-what",
        title: "What is Planned Care?",
        content:
          "Planned care covers specialist consultations, elective procedures, and long-term condition management.",
      },
      {
        id: "planned-process",
        title: "How to access planned care",
        content:
          "You can book via referral, GP, or our online booking portal. We'll coordinate appointments and pre-assessment.",
      },
      {
        id: "planned-wait",
        title: "Waiting times & prioritisation",
        content:
          "We triage patients based on clinical need. Planned procedures have clear pre-assessment pathways to keep waiting times minimal.",
      },
      {
        id: "planned-prep",
        title: "Pre-assessment & tests",
        content:
          "Pre-assessment includes blood tests, imaging and anaesthetic review when needed to ensure safe elective care.",
      },
    ],
    relatedTreatments: [
      "Follow-up consultations",
      "Chronic disease reviews",
      "Screening services",
      "Pre-op assessment",
      "Post-op rehabilitation",
      "Physiotherapy referrals",
      "Chronic pain management",
      "Diabetes review",
      "Cardiac rehab referral",
    ],
    specialists: [
      {
        id: "hannah-cole",
        name: "Dr Hannah Cole",
        title: "Consultant Physician",
        image: "/dd1.jpg",
        specialties: ["Long-term condition management", "Geriatrics"],
        consultationFee: "£150",
        experience: "15 Years",
      },
      {
        id: "samuel-okoye",
        name: "Dr Samuel Okoye",
        title: "Endocrinologist",
        image: "/dd2.jpg",
        specialties: ["Diabetes", "Hormonal disorders", "Metabolic health"],
        consultationFee: "£180",
        experience: "11 Years",
      },
      {
        id: "lucy-wang",
        name: "Dr Lucy Wang",
        title: "Orthopaedic Surgeon",
        image: "/dd3.jpg",
        specialties: ["Elective surgery", "Joint replacement", "Sports injuries"],
        consultationFee: "£220",
        experience: "13 Years",
      },
      {
        id: "karim-hassan",
        name: "Dr Karim Hassan",
        title: "Physiotherapist Consultant",
        image: "/dd4.jpg",
        specialties: ["Rehabilitation", "Physiotherapy", "Post-op rehab"],
        consultationFee: "£95",
        experience: "9 Years",
      },
      {
        id: "maria-rossi",
        name: "Dr Maria Rossi",
        title: "Consultant Anaesthetist",
        image: "/dd5.jpg",
        specialties: ["Pre-op assessment", "Pain management"],
        consultationFee: "£200",
        experience: "17 Years",
      },
      {
        id: "tom-edwards",
        name: "Dr Tom Edwards",
        title: "Chronic Pain Specialist",
        image: "/dd6.jpg",
        specialties: ["Chronic pain", "Multidisciplinary rehab"],
        consultationFee: "£140",
        experience: "12 Years",
      },
    ],
  },
  


 
};