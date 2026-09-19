import type { Skill, SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Lenguajes',
    tone: 'violet',
    skills: [
      { id: 'python', name: 'Python', icon: '🐍' },
      { id: 'java', name: 'Java', icon: '☕' },
      { id: 'javascript', name: 'JavaScript', icon: '⚡' },
      { id: 'php', name: 'PHP', icon: '⌘' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    tone: 'pink',
    skills: [
      { id: 'html', name: 'HTML5', icon: '🌐' },
      { id: 'css', name: 'CSS3', icon: '🎨' },
      { id: 'tailwind', name: 'Tailwind CSS', icon: '➜' },
      { id: 'react', name: 'React', icon: '⚛' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    tone: 'blue',
    skills: [
      { id: 'node', name: 'Node.js', icon: '●' },
      { id: 'backend-php', name: 'PHP', icon: '⌘' },
      { id: 'rest', name: 'APIs REST', icon: '🔗' },
    ],
  },
  {
    id: 'databases',
    name: 'Bases de datos',
    tone: 'indigo',
    skills: [
      { id: 'mysql', name: 'MySQL', icon: '▥' },
      { id: 'postgresql', name: 'PostgreSQL', icon: '▥' },
      { id: 'sql-server', name: 'SQL Server', icon: '▤' },
      { id: 'mongodb', name: 'MongoDB', icon: '◆' },
    ],
  },
  {
    id: 'tools',
    name: 'Herramientas',
    tone: 'orange',
    skills: [
      { id: 'git', name: 'Git', icon: '✉' },
      { id: 'github', name: 'GitHub', icon: '◉' },
      { id: 'vscode', name: 'VS Code', icon: '▱' },
      { id: 'netbeans', name: 'NetBeans', icon: '☕' },
    ],
  },
  {
    id: 'additional',
    name: 'Conocimientos adicionales',
    tone: 'teal',
    skills: [
      { id: 'frontend-additional', name: 'Frontend', icon: '🎨' },
      { id: 'backend-additional', name: 'Backend', icon: '⚙' },
      { id: 'databases-additional', name: 'Bases de datos', icon: '▥' },
      { id: 'data-analysis', name: 'Análisis de datos', icon: '📊' },
      { id: 'ai', name: 'IA', icon: '🤖' },
      { id: 'agile', name: 'Metodologías ágiles', icon: '◉' },
      { id: 'scrum', name: 'Scrum', icon: '▣' },
      { id: 'documentation', name: 'Documentación técnica', icon: '▤' },
    ],
  },
]

export const personalSkills: Skill[] = [
  { id: 'leadership', name: 'Liderazgo' },
  { id: 'teamwork', name: 'Trabajo en equipo' },
  { id: 'adaptability', name: 'Adaptabilidad' },
  { id: 'punctuality', name: 'Puntualidad' },
  { id: 'commitment', name: 'Compromiso' },
  { id: 'creativity', name: 'Creatividad' },
  { id: 'responsibility', name: 'Responsabilidad' },
  { id: 'communication', name: 'Comunicación efectiva' },
  { id: 'analytical', name: 'Pensamiento analítico' },
  { id: 'problem-solving', name: 'Resolución de problemas' },
]

export const languages: Skill[] = [
  { id: 'spanish', name: 'Español', level: 'Nativo', progress: 100 },
  {
    id: 'english-reading',
    name: 'Inglés - Lectura',
    level: '70%',
    progress: 70,
  },
  {
    id: 'english-listening',
    name: 'Inglés - Escucha',
    level: '65%',
    progress: 65,
  },
  {
    id: 'english-speaking',
    name: 'Inglés - Conversación',
    level: '60%',
    progress: 60,
  },
]
