export interface Project {
  id: number;
  title: string;
  description?: string;
  startDate?: string | null;
  endDate?: string | null;
  url?: string | null;
  githubUrl?: string | null;
  imageUrl?: string | null;
  technologies?: string[];
  current?: boolean;
  // user?: any; // Not used on frontend
} 