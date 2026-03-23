export const API_DELAY = 1000; // milliseconds

export const SECTIONS = {
  PROFILE: 'profile',
  SKILLS: 'skills',
  HIGHLIGHTS: 'highlights',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export const NAV_ITEMS = [
  { id: SECTIONS.PROFILE, label: 'Profile' },
  { id: SECTIONS.SKILLS, label: 'Skills' },
  { id: SECTIONS.HIGHLIGHTS, label: 'Highlights' },
  { id: SECTIONS.PROJECTS, label: 'Projects' },
  { id: SECTIONS.CONTACT, label: 'Contact' },
] as const;

export const SKILL_CATEGORIES = {
  BACKEND: 'Backend',
  FRONTEND: 'Frontend',
  DATABASE: 'Database',
  TOOLS: 'Tools',
  FRAMEWORKS: 'Frameworks',
} as const;
