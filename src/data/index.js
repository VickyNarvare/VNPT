// Technologies Data for Marquee
export const technologies = [
  { name: 'HTML5', color: '#E34F26', icon: 'bxl-html5' },
  { name: 'CSS3', color: '#1572B6', icon: 'bxl-css3' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'bxl-javascript' },
  { name: 'Sublime Text', color: '#FF9800', icon: 'bx-code' },
  { name: 'SCSS', color: '#CC6699', icon: 'bxl-sass' },
  { name: 'Chrome DevTools', color: '#4285F4', icon: 'bxl-chrome' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'bxl-tailwind-css' },
  { name: 'CSS Animations', color: '#9C27B0', icon: 'bx-play-circle' },
  { name: 'Git', color: '#F05032', icon: 'bxl-git' },
  { name: 'GitHub', color: '#6e5494', icon: 'bxl-github' },
  { name: 'React', color: '#61DAFB', icon: 'bxl-react' },
  { name: 'Next.js', color: '#828282ff', icon: 'bx-code-alt' },
  { name: 'MySQL', color: '#4479A1', icon: 'bx-data' },
  { name: 'Canva', color: '#00C4CC', icon: 'bx-image' },
  { name: 'GSAP', color: '#D9B310', icon: 'bx-movie-play' },
  { name: 'UI/UX Design', color: '#FF6B6B', icon: 'bx-palette' },
  { name: 'SQL', color: '#4479A1', icon: 'bx-data' },
  { name: 'Responsive Design', color: '#4CAF50', icon: 'bx-devices' },
  { name: 'Figma', color: '#007AFF', icon: 'bxl-figma' },
  { name: 'VS Code', color: '#007ACC', icon: 'bxl-visual-studio' },
  { name: 'NPM', color: '#CB3837', icon: 'bxl-nodejs' }
];

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "Weather Application",
    description: "A modern Weather Application that provides real-time weather information for any location. Features current temperature, humidity, wind speed, and 5-day forecast with beautiful UI.",
    image: "/images/project1.webp",
    imageAlt: "Weather Application by Vicky Narvare",
    demoLink: "https://weatherwebsite2.vercel.app",
    codeLink: "https://github.com/VickyNarvare/Weather-webiste",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    layout: "left"
  },
  {
    id: 2,
    title: "ElectraX Website",
    description: "A futuristic website featuring stunning GSAP animations and smooth transitions. Showcases scroll-triggered animations, parallax effects, and modern aesthetics with vibrant colors.",
    image: "/images/project2.webp",
    imageAlt: "ElectraX Website by Vicky Narvare",
    demoLink: "https://electraxbyvicky.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Electra-X",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
    layout: "right"
  },
  {
    id: 3,
    title: "Kalika Construction",
    description: "A professional construction company website showcasing services, projects, and company information. Features clean, modern design with responsive layout and portfolio sections.",
    image: "/images/project3.webp",
    imageAlt: "Kalika Construction Website by Vicky Narvare",
    demoLink: "https://kalikaconstruction2.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Kalika-Website",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    layout: "left"
  },
  {
    id: 4,
    title: "JARVIS AI",
    description: "An innovative AI-powered demo platform inspired by JARVIS. Features voice command recognition, interactive AI responses, and a sleek dark-themed interface with real-time functionality.",
    image: "/images/project4.webp",
    imageAlt: "JARVIS AI Platform by Vicky Narvare",
    demoLink: "https://jarvisbyvicky.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Jarvis-website",
    technologies: ["HTML", "CSS", "JavaScript"],
    layout: "right"
  },
  {
    id: 5,
    title: "Coffee Cup - Cafe Website",
    description: "A full-featured coffee shop website with online ordering system, shopping cart, order tracking, and admin dashboard. Built with React and Vite, featuring a modern UI with Tailwind CSS and complete e-commerce functionality.",
    image: "/images/project5.webp",
    imageAlt: "Coffee Cup Cafe Website by Vicky Narvare",
    demoLink: "https://coffeeap.vercel.app/",
    codeLink: "https://github.com/VickyNarvare/coffeeapp",
    technologies: ["React v19", "Vite", "Tailwind CSS v4", "JavaScript", "Context API"],
    layout: "left"
  }
];

// Services Data
export const servicesData = [
  {
    id: 1,
    icon: 'bx-code-alt',
    title: 'Frontend Development',
    description: 'Building modern, responsive web applications with React, Next.js, and JavaScript. Creating fast, scalable, and user-friendly interfaces that deliver exceptional experiences.',
    services: [
      'React & Next.js application development',
      'Responsive, mobile-first design implementation',
      'Tailwind CSS & SCSS styling solutions',
      'GSAP animations for smooth, interactive experiences',
      'Performance optimization & code splitting',
      'SEO-friendly architecture & meta tags'
    ]
  },
  {
    id: 2,
    icon: 'bx-palette',
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces with Figma. Designing user-centered experiences that are both beautiful and functional.',
    services: [
      'UI/UX design with Figma & Canva',
      'Wireframing and user flow design',
      'Interactive prototypes and mockups',
      'Responsive design for all screen sizes',
      'Design system creation & style guides',
      'Design-to-code handoff & collaboration'
    ]
  },
  {
    id: 3,
    icon: 'bx-grid-alt',
    title: 'Web Animation & Interactivity',
    description: 'Adding smooth animations and interactive elements using GSAP and CSS. Creating engaging, dynamic user experiences that captivate and delight.',
    services: [
      'GSAP animations for scroll-triggered effects',
      'CSS animations & transitions',
      'Interactive UI components & micro-interactions',
      'Page transitions & loading animations',
      'Performance-optimized animation solutions',
      'Cross-browser animation compatibility'
    ]
  },
  {
    id: 4,
    icon: 'bx-code-block',
    title: 'Web Development & Deployment',
    description: 'Complete web development solutions from code to deployment. Building scalable applications with modern tools and best practices.',
    services: [
      'Full-stack development with React & Next.js',
      'API integration & RESTful services',
      'Database integration (MySQL, SQL)',
      'Version control with Git & GitHub',
      'Cloud deployment on Vercel & Netlify',
      'Performance optimization & testing'
    ]
  }
];

// Skills Data
export const skillsData = [
  {
    id: 1,
    icon: 'bx-code-alt',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', dataSkill: 'html5' },
      { name: 'CSS3', dataSkill: 'css3' },
      { name: 'JavaScript', dataSkill: 'javascript' },
      { name: 'React', dataSkill: 'react' },
      { name: 'Next.js', dataSkill: 'nextjs' },
      { name: 'Tailwind CSS', dataSkill: 'tailwind' },
      { name: 'SCSS', dataSkill: 'scss' }
    ]
  },
  {
    id: 2,
    icon: 'bx-data',
    title: 'Database',
    skills: [
      { name: 'SQL', dataSkill: 'sql' },
      { name: 'MySQL', dataSkill: 'mysql' }
    ]
  },
  {
    id: 3,
    icon: 'bx-movie-play',
    title: 'Animation',
    skills: [
      { name: 'GSAP', dataSkill: 'gsap' },
      { name: 'CSS Animations', dataSkill: 'css-animations' }
    ]
  },
  {
    id: 4,
    icon: 'bx-git-branch',
    title: 'Version Control',
    skills: [
      { name: 'Git', dataSkill: 'git' },
      { name: 'GitHub', dataSkill: 'github' }
    ]
  },
  {
    id: 5,
    icon: 'bx-palette',
    title: 'Design & UX',
    skills: [
      { name: 'UI/UX Design', dataSkill: 'uiux' },
      { name: 'Responsive Design', dataSkill: 'responsive' },
      { name: 'Figma', dataSkill: 'figma' },
      { name: 'Canva', dataSkill: 'canva' }
    ]
  },
  {
    id: 6,
    icon: 'bx-code-curly',
    title: 'Dev Tools',
    skills: [
      { name: 'VS Code', dataSkill: 'vscode' },
      { name: 'Sublime Text', dataSkill: 'sublime' },
      { name: 'Chrome DevTools', dataSkill: 'devtools' },
      { name: 'NPM/Yarn', dataSkill: 'npm' }
    ]
  }
];

// Social Links Data
export const socialLinksData = [
  {
    name: 'GitHub',
    url: 'https://github.com/VickyNarvare',
    icon: 'bxl-github',
    tooltip: 'GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vicky-narvare-4a7712395',
    icon: 'bxl-linkedin',
    tooltip: 'LinkedIn'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/people/Vicky-Narvare/61570312627409/',
    icon: 'bxl-facebook',
    tooltip: 'Facebook'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mr_ankush_narvare_143',
    icon: 'bxl-instagram',
    tooltip: 'Instagram'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/916267607029',
    icon: 'bxl-whatsapp',
    tooltip: 'WhatsApp'
  }
];

// Navigation Links
export const navLinks = [
  { href: '#home', label: 'Home', icon: 'bx-home' },
  { href: '#about', label: 'About', icon: 'bx-user' },
  { href: '#skills', label: 'Skills', icon: 'bx-code-alt' },
  { href: '#services', label: 'Services', icon: 'bx-cog' },
  { href: '#works', label: 'Projects', icon: 'bx-briefcase' },
  { href: '#contact', label: 'Contact', icon: 'bx-envelope' }
];

// Typing texts for hero section
export const typingTexts = [
  'Crafting Clean Interfaces',
  'User Experience Designer',
  'Creating Beautiful Designs'
];
