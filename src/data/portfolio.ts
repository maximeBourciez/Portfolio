// Centralized portfolio data - easy to modify without touching components

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  current?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ============================================
// PERSONAL INFO 
// ============================================

export const personalInfo = {
  name: "Maxime BOURCIEZ",
  firstName: "Maxime",
  lastName: "BOURCIEZ",
  title: "Étudiant en Développement Web",
  subtitle: "IUT de Bayonne et du Pays Basque",
  email: "maxime.bourciez@gmail.com",
  location: "Urrugne, France",
  bio: `Passionné par le développement web, je suis actuellement étudiant à l'IUT de Bayonne et du Pays Basque. 
  J'aime créer des interfaces utilisateur modernes et intuitives, et je m'efforce d'apprendre constamment de nouvelles technologies.
  Mon objectif est de devenir un développeur web complet, capable de concevoir et développer des applications web performantes et accessibles.`,
  shortBio: "Étudiant passionné par le développement web, je crée des interfaces modernes et intuitives.",
  resumeUrl: "#", // Link to your resume/CV
  avatarUrl: "/placeholder.svg", // Your profile picture
};

// ============================================
// SOCIAL LINKS - Add your social media links
// ============================================

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/maximeBourciez",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/maxime-bourciez",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "Mail",
  },
];

// ============================================
// EDUCATION - Your academic background
// ============================================

export const education: Education[] = [
  {
    id: "1",
    title: "BUT Informatique",
    institution: "IUT de Bayonne et du Pays Basque",
    location: "Bayonne, France",
    startDate: "2023",
    endDate: "2026",
    description: "Formation en informatique avec spécialisation en développement web. Apprentissage des technologies front-end et back-end, bases de données, et méthodologies de projet.",
    current: true,
  },
  {
    id: "2",
    title: "Baccalauréat",
    institution: "Lycée de votre ville",
    location: "Votre ville, France",
    startDate: "2020",
    endDate: "2023",
    description: "Baccalauréat général avec spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).",
  },
];

// ============================================
// PROJECTS - Showcase your work
// ============================================

export const projects: Project[] = [
  {
    id: "1",
    title: "Application E-commerce",
    description: "Une plateforme e-commerce moderne avec panier, paiement et gestion des commandes.",
    longDescription: "Application web complète permettant aux utilisateurs de parcourir un catalogue de produits, ajouter des articles au panier, et effectuer des achats en ligne de manière sécurisée.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données en temps réel.",
    image: "/placeholder.svg",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/username/project2",
    featured: true,
  },
  {
    id: "3",
    title: "Application Mobile",
    description: "Application mobile cross-platform pour la gestion de tâches quotidiennes.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Expo", "Firebase"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "4",
    title: "API REST",
    description: "API RESTful complète avec authentification JWT et documentation Swagger.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/username/api-project",
    featured: false,
  },
];

// ============================================
// SKILLS - Your technical skills
// ============================================

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "html5", level: 5, category: "frontend" },
  { name: "CSS3", icon: "css3", level: 5, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 4, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 4, category: "frontend" },
  { name: "React", icon: "react", level: 4, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", level: 4, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "nodejs", level: 3, category: "backend" },
  { name: "Python", icon: "python", level: 3, category: "backend" },
  { name: "SQL", icon: "database", level: 3, category: "backend" },
  { name: "PHP", icon: "php", level: 2, category: "backend" },
  
  // Tools
  { name: "Git", icon: "git", level: 4, category: "tools" },
  { name: "VS Code", icon: "vscode", level: 5, category: "tools" },
  { name: "Figma", icon: "figma", level: 3, category: "tools" },
  { name: "Linux", icon: "linux", level: 3, category: "tools" },
];

// ============================================
// NAVIGATION - Menu items
// ============================================

export const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Formation", href: "#education" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
