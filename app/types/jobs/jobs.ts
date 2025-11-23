export interface JobDetailsPage {
  id: string;
  title: string;
  type: string;
  experience: string;
  location: string;
  heroImage: string;
  hoursPerWeek: string;
  shiftTimes: string;
  salary: string;
  description: string;
  duties: string[];
  requirements: string[];
  benefits: string[];
}

export interface JobDetailsImageSectionProps {
  jobId: string;
}

export interface JobDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}