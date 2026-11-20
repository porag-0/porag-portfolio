export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'Concept';

export type ProjectCategory =
  | 'All'
  | 'Desktop Applications'
  | 'Web Development'
  | 'AI / Experiments'
  | 'IoT / Embedded'
  | 'Concepts';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  category: Exclude<ProjectCategory, 'All'>;
  shortDescription: string;
  isFeatured: boolean;
  order: number;
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  technicalImplementation: string[];
  challengesAndLearnings: string[];
  githubUrl?: string; // Optional/placeholder
  liveDemoUrl?: string; // Optional/placeholder
  accentColor?: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    levelLabel: 'Strong foundation' | 'Working knowledge' | 'Currently exploring';
    icon?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  periodPlaceholder: string;
  cgpaPlaceholder: string;
  relevantCoursework: string[];
  notes?: string;
}

export interface ActivityItem {
  title: string;
  organization: string;
  roleOrType: string;
  description: string;
  highlights: string[];
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  heroDisplayName: string;
  professionalTitle: string;
  tagline: string;
  secondaryTagline: string;
  location: string;
  aboutIntro: string;
  aboutBio: string[];
  factualHighlights: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    cvFile: string;
  };
}
