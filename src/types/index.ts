export interface PersonalInfo {
  name: string
  profile: string
  city: string
  university: string
  semester: string
  email: string
  phone: string
  whatsapp: string
  availability: string
  modality: string
  github?: string
  linkedin?: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface Education {
  id: string
  institution: string
  program: string
  semester?: string
  date?: string
  period?: string
}

export interface Experience {
  id: string
  role: string
  company?: string
  description?: string
  startDate?: string
  endDate?: string
  period?: string
  duration?: string
  highlights: string[]
  kind: 'professional' | 'academic'
}

export interface Skill {
  id: string
  name: string
  level?: string
  icon?: string
  progress?: number
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
  tone?: 'violet' | 'pink' | 'blue' | 'indigo' | 'orange' | 'teal'
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  image?: string
  repositoryUrl?: string
  demoUrl?: string
  category?: string
  featured?: boolean
  status?: string
  date?: string
}

export interface Certificate {
  id: string
  title: string
  institution: string
  date: string
  image?: string
  document?: string
  verificationUrl?: string
}

export interface SocialLink {
  id: string
  label: string
  url: string
}
