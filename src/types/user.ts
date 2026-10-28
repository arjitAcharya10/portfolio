export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
}

export interface User {
  name: string;
  role: string;
  experience: string;
  location: string;
  skills: string[];
  highlights: string[];
  projects: Project[];
  experiences: Experience[];
  contact: Contact;
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}
