export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}