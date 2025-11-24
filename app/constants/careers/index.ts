export interface Job {
  id: string;
  title: string;
  employmentType: string;
  category: string;
  location: string;
}

export const jobsData: Job[] = [
  {
    id: "senior-radiographer",
    title: "Senior Radiographer",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "housekeeping-assistant",
    title: "Housekeeping Assistant",
    employmentType: "Full time",
    category: "Non-Clinical",
    location: "Milton Keynes, UK"
  },
  {
    id: "pharmacy-technician",
    title: "Pharmacy Technician",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "senior-medical-secretary",
    title: "Senior Medical Secretary",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "gp-health-screener",
    title: "GP/Health Screener",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "staff-nurse",
    title: "Staff Nurse",
    employmentType: "Full time",
    category: "Non-Clinical",
    location: "Milton Keynes, UK"
  },
  {
    id: "picu-senior-staff-nurse",
    title: "PICU Senior Staff Nurse",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "staff-nurse-spinal-thoracic",
    title: "Staff Nurse – Spinal / Thoracic",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "resident-doctor-paediatrics",
    title: "Resident Doctor Paediatrics",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  },
  {
    id: "patient-access-leader",
    title: "Patient Access Leader",
    employmentType: "Full time",
    category: "Non-Clinical",
    location: "Milton Keynes, UK"
  },
  {
    id: "director-quality-risk",
    title: "Director of Quality & Risk",
    employmentType: "Full time",
    category: "Clinical Ex.",
    location: "Milton Keynes, UK"
  }
];
