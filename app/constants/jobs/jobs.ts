import { JobDetailsPage } from "@/app/types/jobs/jobs";


export const jobsDetailsData: Record<string, JobDetailsPage> = {
  "senior-radiographer": {
    id: "senior-radiographer",
    title: "Senior Radiographer - Outpatients",
    type: "Full time",
    experience: "Clinical Ex.",
    location: "Milton Keynes",
    heroImage: "/images/jobs/radiographer-hero.jpg",
    hoursPerWeek: "37.5 Hours Per Week",
    shiftTimes: "7.5 Hour Shifts Monday To Friday Between 9am And 8pm (Overtime Available Saturdays At Elstree On A Voluntary Basis)",
    salary: "Dependent Upon Experience + Benefits",
    description: "We're looking for a Senior Radiographer to join our team at Golders Green Outpatients, currently rated 'Outstanding' by the CQC. Our outpatients centre has been part of the community in Golders Green for 25 years. We pride ourselves on providing exceptional private healthcare locally for the whole family. We offer fast access to specialist outpatient care and rapid reporting, treating a wide range of conditions.",
    duties: [
      "Provide high level of customer-focus to patients and service users through high quality diagnostic radiography",
      "Work at Golders Green and rotate to support at Elstree which has more of an acute focus",
      "Operate diagnostic imaging equipment including CT, MRI, Dexa and Ultrasound",
      "Ensure compliance with radiation safety protocols and quality standards",
      "Work independently at times making confident clinical decisions"
    ],
    requirements: [
      "HCPC registered Radiographer",
      "Significant experience in outpatient diagnostic imaging",
      "Confident working independently",
      "Strong customer service skills",
      "Ability to work across multiple sites"
    ],
    benefits: [
      "Competitive salary dependent on experience",
      "Part of CQC Outstanding rated service",
      "Professional development opportunities",
      "Modern equipment including upcoming CT, MRI, Dexa and Ultrasound upgrades by 2026",
      "Supportive team environment"
    ]
  }
};