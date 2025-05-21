import blogsData from '../data/blogs.json';

export interface Blog {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  link: string;
  image: string;
}

export const blogs: Blog[] = blogsData.blogs; 