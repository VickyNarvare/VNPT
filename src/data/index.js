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
    title: "FitnessClub - Gym Website",
    description: "A modern, responsive gym website with smooth animations and professional design. Features multiple sections including trainers, pricing plans, and contact form with animated stats counter.",
    features: [
      "Smooth scroll navigation",
      "Mobile hamburger menu",
      "Animated stats counter",
      "Pricing plans section",
      "Trainers showcase",
      "Contact form with validation"
    ],
    image: "/images/project7.webp",
    imageAlt: "FitnessClub Gym Website by Vicky Narvare",
    demoLink: "#",
    codeLink: "https://github.com/VickyNarvare/GYM",
    technologies: ["HTML", "CSS", "JavaScript", "Flexbox", "CSS Grid"],
    layout: "left"
  },
  {
    id: 2,
    title: "Foodie Delight - Food Ordering App",
    description: "A modern, responsive food ordering web application with complete e-commerce functionality. Features cart management, order tracking, favorites, promo codes, and real-time order status updates with a beautiful UI.",
    features: [
      "Menu browsing with search & filter by category",
      "Shopping cart with localStorage persistence",
      "Order tracking with visual timeline status",
      "Promo codes system (SAVE10, SAVE20, FLAT400)",
      "Favorites & recently viewed items",
      "Form validation for delivery details"
    ],
    image: "/images/project6.webp",
    imageAlt: "Foodie Delight Food Ordering App by Vicky Narvare",
    demoLink: "#",
    codeLink: "https://github.com/VickyNarvare/Advance-Food-Ordering-App",
    technologies: ["React v19", "Vite", "Tailwind CSS v4", "React Router", "Context API"],
    layout: "right"
  },
  {
    id: 3,
    title: "Coffee Cup - Cafe Website",
    description: "A full-featured coffee shop e-commerce website with complete ordering functionality. Built with React 19 and modern technologies, this project demonstrates my full-stack development capabilities.",
    features: [
      "Complete e-commerce functionality",
      "Shopping cart with real-time updates",
      "Order tracking system",
      "Admin dashboard for management",
      "Modern UI with Tailwind CSS v4",
      "State management using Context API"
    ],
    image: "/images/project5.webp",
    imageAlt: "Coffee Cup Cafe Website by Vicky Narvare",
    demoLink: "https://coffeeap.vercel.app/",
    codeLink: "https://github.com/VickyNarvare/coffeeapp",
    technologies: ["React v19", "Vite", "Tailwind CSS v4", "Context API"],
    layout: "left"
  },
  {
    id: 4,
    title: "JARVIS AI",
    description: "An innovative AI-powered demo platform inspired by Iron Man's JARVIS. This project showcases my creativity in building interactive, futuristic interfaces with voice recognition capabilities.",
    features: [
      "Voice command recognition system",
      "Interactive AI response animations",
      "Sleek dark-themed futuristic interface",
      "Real-time voice-to-text conversion",
      "Custom audio visualizations",
      "Smooth transition effects"
    ],
    image: "/images/project4.webp",
    imageAlt: "JARVIS AI Platform by Vicky Narvare",
    demoLink: "https://jarvisbyvicky.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Jarvis-website",
    technologies: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    layout: "right"
  },
  {
    id: 5,
    title: "Kalika Construction",
    description: "A professional construction company website designed to showcase services, completed projects, and company information. This project demonstrates my ability to create clean, business-focused websites.",
    features: [
      "Professional and clean design aesthetic",
      "Services showcase with detailed descriptions",
      "Project portfolio with image galleries",
      "Contact form with validation",
      "Fully responsive across all devices",
      "SEO-optimized structure"
    ],
    image: "/images/project3.webp",
    imageAlt: "Kalika Construction Website by Vicky Narvare",
    demoLink: "https://kalikaconstruction2.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Kalika-Website",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    layout: "left"
  },
  {
    id: 6,
    title: "ElectraX Website",
    description: "A futuristic, visually stunning website showcasing advanced GSAP animations and modern web design techniques. This project highlights my expertise in creating immersive, interactive web experiences.",
    features: [
      "Scroll-triggered animations using GSAP ScrollTrigger",
      "Smooth parallax effects throughout the page",
      "Custom cursor animations and interactions",
      "Vibrant color schemes with gradient effects",
      "Responsive design for all screen sizes",
      "Performance-optimized animations"
    ],
    image: "/images/project2.webp",
    imageAlt: "ElectraX Website by Vicky Narvare",
    demoLink: "https://electraxbyvicky.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Electra-X",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
    layout: "right"
  },
  {
    id: 7,
    title: "Weather Application",
    description: "A modern Weather Application that provides real-time weather information for any location worldwide. This project demonstrates my ability to work with external APIs and create intuitive user interfaces.",
    features: [
      "Real-time weather data fetching using Weather API",
      "Current temperature, humidity, and wind speed display",
      "5-day weather forecast with detailed information",
      "Location search with auto-complete functionality",
      "Beautiful, responsive UI with smooth animations",
      "Dynamic weather icons based on conditions"
    ],
    image: "/images/project1.webp",
    imageAlt: "Weather Application by Vicky Narvare",
    demoLink: "https://weatherwebsite2.vercel.app",
    codeLink: "https://github.com/VickyNarvare/Weather-webiste",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
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
