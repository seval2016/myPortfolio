export interface Experience {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate?: string | null;
  description?: string;
  location?: string | null;
  employmentType?: string | null;
  current?: boolean;
} 