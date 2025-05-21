export interface Blog {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  link: string;
  image: string; // URL of the blog post image
}

export const blogs: Blog[]; 