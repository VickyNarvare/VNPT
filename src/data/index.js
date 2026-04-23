// Technologies Data for Marquee - Simplified to core stack
export const technologies = [
  { name: 'MongoDB', color: '#47A248', icon: 'bx-data' },
  { name: 'Express.js', color: '#000000', icon: 'bx-code-alt' },
  { name: 'React', color: '#61DAFB', icon: 'bxl-react' },
  { name: 'Node.js', color: '#339933', icon: 'bxl-nodejs' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'bxl-javascript' },
  { name: 'Tailwind CSS', color: '#06B6D4', icon: 'bxl-tailwind-css' },
  { name: 'Git', color: '#F05032', icon: 'bxl-git' },
  { name: 'REST API', color: '#FF6B6B', icon: 'bx-code-block' },
  { name: 'MySQL', color: '#4479A1', icon: 'bx-data' },
  { name: 'GSAP', color: '#D9B310', icon: 'bx-movie-play' }
];

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "Foodie Delight",
    subtitle: "Food ordering platform with cart, checkout, and order tracking",
    description: "Built to practice full e-commerce flow including state management, form validation, and multi-step checkout. Handles menu browsing, cart operations, promo codes, and order tracking with persistent state.",
    problem: "Practice building a complete e-commerce flow with complex state management",
    solution: "Implemented cart system with Context API, multi-step checkout, and order tracking",
    features: [
      "Shopping cart with add/remove/quantity controls",
      "Promo code validation (SAVE10, SAVE20, FLAT400)",
      "Order tracking with 4-stage visual timeline",
      "Persistent state using localStorage",
      "Menu browsing with category filters",
      "Mobile-responsive design"
    ],
    learned: "Managing complex state across multiple components, form validation patterns, and building reusable component architecture",
    image: "/images/project6.webp",
    imageAlt: "Foodie Delight app screenshot",
    demoLink: "https://foodwebsite-vicky.vercel.app",
    codeLink: "https://github.com/VickyNarvare/Advance-Food-Ordering-App",
    technologies: ["React 19", "Tailwind CSS", "Context API", "React Router", "LocalStorage"],
    role: "Solo Developer",
    layout: "left"
  },
  {
    id: 2,
    title: "Coffee Cup",
    subtitle: "Coffee shop e-commerce with admin dashboard",
    description: "Full-featured coffee shop website with ordering system and admin panel. Built with React 19 and Tailwind CSS v4, featuring cart management and order processing.",
    problem: "Create a complete ordering system with both customer and admin interfaces",
    solution: "Built dual-interface system with customer ordering flow and admin dashboard for order management",
    features: [
      "Product catalog with categories",
      "Shopping cart with real-time updates",
      "Order placement and tracking",
      "Admin dashboard for order management",
      "Responsive design with Tailwind CSS",
      "State management with Context API"
    ],
    learned: "Building admin interfaces, managing different user roles, and creating scalable component structures",
    image: "/images/project5.webp",
    imageAlt: "Coffee Cup website screenshot",
    demoLink: "https://coffeeap.vercel.app/",
    codeLink: "https://github.com/VickyNarvare/coffeeapp",
    technologies: ["React 19", "Tailwind CSS", "Context API", "Vite"],
    role: "Solo Developer",
    layout: "right"
  },
  {
    id: 3,
    title: "ElectraX",
    subtitle: "Interactive website with advanced GSAP animations",
    description: "Futuristic website showcasing advanced animation techniques with GSAP. Features scroll-triggered animations, parallax effects, and custom cursor interactions.",
    problem: "Learn and implement advanced animation techniques for engaging user experiences",
    solution: "Used GSAP ScrollTrigger for scroll-based animations and created custom cursor interactions",
    features: [
      "Scroll-triggered animations with GSAP ScrollTrigger",
      "Smooth parallax effects",
      "Custom cursor animations",
      "Vibrant gradient color schemes",
      "Performance-optimized animations",
      "Fully responsive design"
    ],
    learned: "GSAP animation library, ScrollTrigger plugin, performance optimization for animations, and creating engaging interactive experiences",
    image: "/images/project2.webp",
    imageAlt: "ElectraX website screenshot",
    demoLink: "https://electraxbyvicky.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Electra-X",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger"],
    role: "Solo Developer",
    layout: "left"
  },
  {
    id: 4,
    title: "FitnessClub",
    subtitle: "Modern gym website with pricing plans and trainer showcase",
    description: "A responsive gym website featuring smooth animations, pricing comparison, and trainer profiles. Built to practice modern CSS layouts and JavaScript animations.",
    problem: "Create a professional business website with multiple content sections and smooth user experience",
    solution: "Implemented CSS Grid/Flexbox layouts, animated stats counter, and mobile-responsive navigation",
    features: [
      "Smooth scroll navigation",
      "Mobile hamburger menu",
      "Animated stats counter",
      "Pricing plans section",
      "Trainers showcase",
      "Contact form with validation"
    ],
    learned: "Advanced CSS layouts, scroll-based animations, and creating professional business websites",
    image: "/images/project7.webp",
    imageAlt: "FitnessClub Gym Website by Vicky Narvare",
    demoLink: "https://gymwebsite-vicky.vercel.app",
    codeLink: "https://github.com/VickyNarvare/GYM",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "CSS Grid"],
    role: "Solo Developer",
    layout: "right"
  },
  {
    id: 5,
    title: "JARVIS AI",
    subtitle: "Voice-controlled AI interface with Web Speech API",
    description: "Interactive AI demo platform with voice recognition and futuristic UI. Built to explore browser speech APIs and create engaging voice-controlled experiences.",
    problem: "Learn Web Speech API and create an interactive voice-controlled interface",
    solution: "Implemented voice command recognition with real-time feedback and custom audio visualizations",
    features: [
      "Voice command recognition system",
      "Interactive AI response animations",
      "Sleek dark-themed futuristic interface",
      "Real-time voice-to-text conversion",
      "Custom audio visualizations",
      "Smooth transition effects"
    ],
    learned: "Working with Web Speech API, handling audio input, and creating immersive UI experiences",
    image: "/images/project4.webp",
    imageAlt: "JARVIS AI Platform by Vicky Narvare",
    demoLink: "https://jarvisbyvicky.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Jarvis-website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
    role: "Solo Developer",
    layout: "left"
  },
  {
    id: 6,
    title: "YESH Enterprises",
    subtitle: "Business platform with pricing comparison and testimonials",
    description: "Modern business website with dark theme, featuring interactive pricing plans and testimonials. Built to practice component-based design and professional UI patterns.",
    problem: "Create a professional business platform with pricing comparison and social proof elements",
    solution: "Designed dark-themed UI with interactive pricing cards, testimonial carousel, and service showcase",
    features: [
      "Modern dark-themed responsive design",
      "Interactive pricing plans with feature comparison",
      "Testimonials and reviews section",
      "Service showcase with detailed descriptions",
      "Smooth animations and transitions",
      "Professional gradient effects and modern UI components"
    ],
    learned: "Dark theme design principles, pricing table patterns, and building trust through testimonials",
    image: "/images/project8.webp",
    imageAlt: "YESH Enterprises Business Platform by Vicky Narvare",
    demoLink: "https://yeshenterprises.vercel.app/",
    codeLink: "https://github.com/VickyNarvare/YeshEnterprises",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    role: "Solo Developer",
    layout: "right"
  },
  {
    id: 7,
    title: "Kalika Construction",
    subtitle: "Construction company website with project portfolio",
    description: "Professional business website for a construction company, featuring service listings and project galleries. Built to practice creating client-focused business websites.",
    problem: "Design a professional website for a construction business with portfolio showcase",
    solution: "Created clean, business-focused design with service descriptions, project galleries, and contact form",
    features: [
      "Professional and clean design aesthetic",
      "Services showcase with detailed descriptions",
      "Project portfolio with image galleries",
      "Contact form with validation",
      "Fully responsive across all devices",
      "SEO-optimized structure"
    ],
    learned: "Building client-focused websites, image gallery implementation, and professional business design patterns",
    image: "/images/project3.webp",
    imageAlt: "Kalika Construction Website by Vicky Narvare",
    demoLink: "https://kalikaconstruction2.netlify.app",
    codeLink: "https://github.com/VickyNarvare/Kalika-Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    role: "Solo Developer",
    layout: "left"
  },
  {
    id: 8,
    title: "Weather Application",
    subtitle: "Real-time weather app with 5-day forecast",
    description: "Weather application providing real-time weather data for any location worldwide. Built to practice API integration and handling asynchronous data.",
    problem: "Learn to work with external APIs and handle real-time data fetching",
    solution: "Integrated Weather API with location search, current conditions, and 5-day forecast display",
    features: [
      "Real-time weather data fetching using Weather API",
      "Current temperature, humidity, and wind speed display",
      "5-day weather forecast with detailed information",
      "Location search with auto-complete functionality",
      "Beautiful, responsive UI with smooth animations",
      "Dynamic weather icons based on conditions"
    ],
    learned: "API integration, async/await patterns, error handling, and working with third-party data",
    image: "/images/project1.webp",
    imageAlt: "Weather Application by Vicky Narvare",
    demoLink: "https://weatherwebsite2.vercel.app",
    codeLink: "https://github.com/VickyNarvare/Weather-webiste",
    technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
    role: "Solo Developer",
    layout: "right"
  }
];

// Services Data - Improved positioning
export const servicesData = [
  {
    id: 1,
    icon: 'bx-code-alt',
    title: 'MERN Stack Applications',
    description: 'Complete web applications with React frontend, Node.js backend, and MongoDB database. From MVP to deployment, I handle the full development cycle.',
    services: [
      'Full-stack MERN development (MongoDB, Express, React, Node.js)',
      'RESTful API design & implementation',
      'Database schema design & optimization',
      'User authentication & authorization (JWT, sessions)',
      'Responsive UI with React & Tailwind CSS',
      'Deployment on Vercel, Netlify, or custom servers'
    ]
  },
  {
    id: 2,
    icon: 'bx-palette',
    title: 'Frontend Development',
    description: 'Modern, responsive user interfaces with React and Next.js. Focus on performance, accessibility, and smooth user experiences.',
    services: [
      'React & Next.js applications',
      'Mobile-first responsive design',
      'State management (Context API, Redux)',
      'CSS frameworks (Tailwind CSS, SCSS, Bootstrap)',
      'Animations & interactions (GSAP, Framer Motion)',
      'Cross-browser compatibility & optimization'
    ]
  },
  {
    id: 3,
    icon: 'bx-server',
    title: 'Backend & API Development',
    description: 'Server-side applications and RESTful APIs with Node.js and Express. Database integration, authentication, and third-party API connections.',
    services: [
      'Node.js & Express.js server development',
      'MongoDB & MySQL database integration',
      'REST API design with proper error handling',
      'Authentication systems (JWT, OAuth, sessions)',
      'Third-party API integration (payment, email, SMS)',
      'Input validation & security best practices'
    ]
  }
];

// Skills Data - Consolidated to 5 focused categories
export const skillsData = [
  {
    id: 1,
    icon: 'bx-code-alt',
    title: 'Frontend',
    skills: [
      { name: 'React', dataSkill: 'react' },
      { name: 'Next.js', dataSkill: 'nextjs' },
      { name: 'JavaScript', dataSkill: 'javascript' },
      { name: 'HTML5', dataSkill: 'html5' },
      { name: 'GSAP', dataSkill: 'gsap' }
    ]
  },
  {
    id: 2,
    icon: 'bx-server',
    title: 'Backend',
    skills: [
      { name: 'Node.js', dataSkill: 'nodejs' },
      { name: 'Express.js', dataSkill: 'express' },
      { name: 'REST API', dataSkill: 'restapi' },
      { name: 'JWT Auth', dataSkill: 'jwt' }
    ]
  },
  {
    id: 3,
    icon: 'bx-data',
    title: 'Database',
    skills: [
      { name: 'MongoDB', dataSkill: 'mongodb' },
      { name: 'MySQL', dataSkill: 'mysql' },
      { name: 'Mongoose', dataSkill: 'mongoose' }
    ]
  },
  {
    id: 4,
    icon: 'bx-paint-roll',
    title: 'Styling',
    skills: [
      { name: 'CSS3', dataSkill: 'css3' },
      { name: 'SCSS', dataSkill: 'scss' },
      { name: 'Tailwind CSS', dataSkill: 'tailwind' },
      { name: 'Bootstrap', dataSkill: 'bootstrap' }
    ]
  },
  {
    id: 5,
    icon: 'bx-wrench',
    title: 'Tools',
    skills: [
      { name: 'Git', dataSkill: 'git' },
      { name: 'VS Code', dataSkill: 'vscode' },
      { name: 'Postman', dataSkill: 'postman' },
      { name: 'Vercel', dataSkill: 'vercel' },
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
    url: 'https://www.instagram.com/webwithvicky?igsh=Z3A0Y3lva2I2YXVo',
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
  'MERN Stack Developer',
  '8 Live Projects • 2+ Years Experience',
  'React • Node.js • MongoDB • Express'
];
