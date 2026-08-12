export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  category: 'Healthcare' | 'Fintech' | 'Editorial' | 'SaaS' | 'Workspace';
  keyFeatures?: string[];
  architectureHighlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  role: string;
  location: string;
  availability: string;
  bio: string;
  shortBio: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  whatsappNumber: string;
  whatsappUrl: string;
  coreTechStack: string[];
  projects: Project[];
  skillCategories: SkillCategory[];
  metrics: Metric[];
}
