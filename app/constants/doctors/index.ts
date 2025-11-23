import { DoctorsDataType } from "@/app/types/doctors";

export const doctorsData: DoctorsDataType = {
  "mauro-lencioni": {
    id: "mauro-lencioni",
    name: "Dr Mauro Lencioni",
    title: "Consultant Cardiologist & Electrophysiologist",
    designation: "MBBS, MD, DM (Cardiology)",
    specialties: ["Cardiology", "Hypertension", "Catheter Ablation"],
    image: "/dd3.jpg",
    about: "Dr. Mauro Lencioni is a highly experienced consultant cardiologist and electrophysiologist with over 15 years of experience in treating complex cardiac conditions. He specializes in catheter ablation procedures and management of hypertension.",
    qualifications: [
      "MBBS from University of Medicine",
      "MD in Internal Medicine",
      "DM in Cardiology",
      "Fellowship in Cardiac Electrophysiology",
    ],
    experience: "15+ years",
    languages: ["English", "Italian", "Spanish"],
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      time: "9:00 AM - 5:00 PM",
    },
  },
  // Add more doctors here
};
