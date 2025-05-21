export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string; // ISO date string
  expiryDate?: string | null;
  credentialId?: string | null;
  credentialUrl?: string | null;
  imageUrl?: string | null;
} 