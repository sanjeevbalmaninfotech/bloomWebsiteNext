export interface TypeServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  buttonText: string;
}

export  interface TypeServicesData {
  [key: string]: TypeServiceItem;
}

export interface TypeServicePageProps {
  params: Promise<{
    id: string;
  }>;
}