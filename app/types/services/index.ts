export interface TypeServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string | string[];
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  image: string;
  specialties: string[];
  consultationFee: string;
  experience: string;
}

export interface TypeServiceItemExtended extends TypeServiceItem {
  accordionItems?: AccordionItem[];
  relatedTreatments?: string[];
  specialists?: Specialist[];
}

export interface TypeServicesData {
  [key: string]: TypeServiceItemExtended;
}

export interface TypeServicePageProps {
  params: Promise<{
    id: string;
  }>;
}