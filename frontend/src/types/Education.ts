export interface Education {
  id: number;
  school: string;
  degree: string;
  fieldOfStudy?: string | null;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
  location?: string | null;
  gpa?: number | null;
} 