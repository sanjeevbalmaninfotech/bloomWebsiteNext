export interface TypeDoctorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export interface DoctorData {
  id: string;
  name: string;
  title: string;
  designation: string;
  specialties: string[];
  image: string;
  about: string;
  qualifications: string[];
  experience: string;
  languages: string[];
  availability: {
    days: string[];
    time: string;
  };
}

export interface DoctorsDataType {
  [key: string]: DoctorData;
}