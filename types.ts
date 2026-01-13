import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export interface Certification {
  name: string;
  issuer: string; // Inferred or generic if not explicit
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}
