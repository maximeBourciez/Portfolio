// Centralized portfolio data - easy to modify without touching components

export interface Project {
  id: string;
  projectType?: string;
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
  category: 'frontend' | 'backend' | 'systems' | 'tools' | 'other';
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
  title: "Étudiant en Développement informatique",
  subtitle: "IUT de Bayonne et du Pays Basque",
  email: "maxime.bourciez@gmail.com",
  location: "Urrugne, France",
  telephone: "+33 7 69 62 61 95",
  bio: `Passionné par le développement informatique, je suis étudiant en informatique à l’IUT de Bayonne et du Pays Basque. Je conçois des applications web modernes en portant une attention particulière à l’expérience utilisateur, à la qualité du code et à la maintenabilité des projets.

Au fil de mes projets et de mon stage, j’ai travaillé aussi bien sur le front-end que sur le back-end, en développant des applications web complètes, des APIs et des outils orientés métier. J’ai également participé au développement de systèmes de communication avec des équipements connectés et à l’intégration de solutions autour de la plateforme Synapse.

Curieux et en apprentissage constant, j’aime découvrir de nouvelles technologies et améliorer mes compétences à travers des projets concrets. Mon objectif est de devenir un développeur full-stack capable de concevoir des applications fiables, performantes et utiles.`,
  shortBio: "Étudiant passionné par le développement informatique, je crée des interfaces modernes et intuitives.",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/profile_pic.JPEG",
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
    description: `Durant cette formation, j'ai acquis des compétences solides en développement web, en programmation orientée objet, et en gestion de bases de données. 
    J'ai également travaillé sur plusieurs projets pratiques qui m'ont permis de mettre en application mes connaissances théoriques ainsi que les méthodologies de gestion de projet.`,
    current: true,
  },
  {
    id: "2",
    title: "Baccalauréat",
    institution: "Lycée Maurice Ravel",
    location: "Saint-Jean-de-Luz, France",
    startDate: "2020",
    endDate: "2023",
    description: "Baccalauréat général avec spécialités Mathématiques et NSI (Numérique et Sciences Informatiques) qui m'ont permis de développer une solide base en logique et en programmation.",
  },
];

// ============================================
// PROJECTS - Showcase your work
// ============================================

export const projects: Project[] = [
  {
    id: "1",
    projectType: "Professionnel",
    title: "GIMAO – Application de GMAO",
    description:
      "Application web de Gestion de Maintenance Assistée par Ordinateur (GMAO) destinée aux entreprises industrielles.",
    longDescription:
      "GIMAO est une application web de GMAO développée dans un contexte professionnel. Elle permet de gérer les équipements, planifier les opérations de maintenance, suivre les interventions et analyser les données de fonctionnement. L’application communique avec des équipements connectés afin de récupérer des données techniques en temps réel ou de manière planifiée. L’objectif est d’optimiser la maintenance, d’améliorer la traçabilité et de réduire les coûts d’exploitation grâce à une interface claire et des outils de suivi performants.",
    image: "/projects/gimao.png",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "API REST"],
    liveUrl: "https://example.com",
    githubUrl: "",
    featured: true,
  },
  {
    id: "2",
    projectType: "Personnel",
    title: "Application d’économie du bâtiment",
    description:
      "Application web de gestion de devis et de métrés pour les professionnels du bâtiment.",
    longDescription:
      "Cette application personnelle a pour objectif de simplifier la création de devis dans le secteur du bâtiment. Elle permet une saisie structurée des lots, postes et articles, avec des calculs automatiques des quantités et des montants. Les devis peuvent être exportés en PDF ou Excel, et les données sont sauvegardées afin de faciliter les modifications et le suivi des projets. Une attention particulière a été portée à l’ergonomie et à la clarté de l’interface.",
    image: "/projects/batiment.png",
    technologies: ["PHP", "MySQL", "Vue.js (CDN)", "Bootstrap"],
    featured: true,
  },
  {
    id: "4",
    projectType: "Universitaire",
    title: "Video Home Share",
    description:
      "Application web de partage d’avis sur les films et séries avec système de forum.",
    longDescription:
      "Projet réalisé dans un cadre universitaire visant à concevoir une application web complète. Elle permet aux utilisateurs de consulter des fiches de films et séries, de publier des avis et d’échanger via un forum développé sur mesure. Ce projet m’a permis de travailler sur la structuration d’une application MVC, la gestion des utilisateurs et l’interaction avec une base de données.",
    image: "/projects/vhs.png",
    technologies: ["PHP", "Twig", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/maximeBourciez/VideoHomeShare-Groupe5",
    featured: false,
  },
  {
    id: "5",
    projectType: "Universitaire",
    title: "BDEGoodies",
    description:
      "Application web de gestion d’événements et de stock pour une association étudiante.",
    longDescription:
      "Ce projet universitaire consistait à développer une application web pour une association étudiante, permettant de gérer les soirées organisées ainsi que le stock de goodies. L’application offre des fonctionnalités de création d’événements, de gestion des participants, et de suivi du stock avec des alertes de réapprovisionnement. Ce projet m’a permis de renforcer mes compétences en développement full-stack et en gestion de projet.",
    image: "/projects/bde-goodies.png",
    technologies: ["Laravel", "Angular"],
    githubUrl: "https://github.com/maximeBourciez/BDEGoodies",
    featured: false,
  },
  {
    id: "6",
    projectType: "Stage - Terawatt",
    title: "Carte interactive des agences",
    description:
      "Affichage dynamique d’agences sur une carte avec marqueurs personnalisés.",
    longDescription:
      "Ce projet consiste à afficher une liste d’agences sur une carte interactive centrée sur la France. Les données sont lues depuis un fichier JSON et chaque agence est représentée par un marqueur personnalisé avec tooltip au survol. Ce travail m’a permis de renforcer mes compétences en JavaScript, et d'apprendre la création de plugins WordPress.",
    image: "/projects/carte-agences.png",
    technologies: ["WordPress", "JavaScript", "Leaflet.js", "JSON", "PHP"],
    githubUrl: "https://github.com/username/map-agencies",
    featured: false,
  },

  {
    id: "7",
    projectType: "Stage - Terawatt",
    title: "Gestion de données de ventilation",
    description:
      "API back-end pour la récupération et l’analyse de données énergétiques.",
    longDescription:
      "Développement d’un module permettant de récupérer, structurer et afficher dans des graphiques des données de ventilation issues d’optimiseurs d'énergie distants. Les données sont organisées par compteur et restituées sous forme de statistiques journalières et mensuelles, avec et sans optimisation. Ce projet m’a permis de travailler sur des problématiques concrètes de données industrielles et de communication entre systèmes.",
    image: "/projects/ventilation.png",
    technologies: ["Java", "API REST", "PostgreSQL", "JSON", "Vue.js (CDN)", "Bootstrap", "Linux"],
    featured: true,
  },
  {
    id: "8",
    projectType: "Alternance - Terawatt",
    title: "Mode de communication Sortant",
    description:
      "Développement d’un mode de communication pour l’envoi de données à des systèmes distants.",
    longDescription:
      "Conception et développement d’un mode de communication sortant permettant d’envoyer des données structurées à des systèmes distants via des protocoles sécurisés. Ce projet m’a permis de travailler sur la sécurisation des échanges, la structuration des données et l’intégration avec des systèmes tiers, dans un contexte industriel exigeant.",
    image: "/projects/communication.png",
    technologies: ["Java", "C++", "bash", "JavaScript", "WebSockets", "SSH"],
    featured: true,
  }


];


// ============================================
// SKILLS - Your technical skills
// ============================================

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "html5", level: 4, category: "frontend" },
  { name: "CSS3", icon: "css3", level: 4, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 4, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 4, category: "frontend" },
  { name: "React", icon: "react", level: 2, category: "frontend" },
  { name: "Bootstrap CSS", icon: "bootstrap", level: 4, category: "frontend" },
  { name: "Vue.js", icon: "vuejs", level: 4, category: "frontend" },
  { name: "Angular", icon: "angular", level: 3, category: "frontend" },

  // Backend
  { name: "Express.js", icon: "express-js", level: 3, category: "backend" },
  { name: "Django", icon: "django", level: 3, category: "backend" },
  { name: "SQL", icon: "sql", level: 4, category: "backend" },
  { name: "PHP", icon: "php", level: 4, category: "backend" },
  { name: "Apache Tomcat", icon: "tomcat", level: 4, category: "backend" },
  { name: "Laravel", icon: "laravel", level: 3, category: "backend" },

  // Systèmes
  { name: "C", icon: "c", level: 3, category: "systems" },
  { name: "C++", icon: "cpp", level: 3, category: "systems" },
  { name: "Java", icon: "java", level: 4, category: "systems" }, // déplace depuis backend
  { name: "WebSockets", icon: "websocket", level: 3, category: "systems" },
  { name: "Socket.io", icon: "socketio", level: 3, category: "systems" },

  // Tools
  { name: "Git", icon: "git", level: 4, category: "tools" },
  { name: "Docker", icon: "docker", level: 3, category: "tools" },
  { name: "VS Code", icon: "vscode", level: 5, category: "tools" },
  { name: "Figma", icon: "figma", level: 3, category: "tools" },
  { name: "Jira", icon: "jira", level: 3, category: "tools" },
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
