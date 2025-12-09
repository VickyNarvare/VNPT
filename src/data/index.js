// Technologies Data for Marquee
export const technologies = [
  { name: 'MongoDB', color: '#47A248', icon: 'bx-data' },
  { name: 'Express.js', color: '#000000', icon: 'bx-code-alt' },
  { name: 'React', color: '#61DAFB', icon: 'bxl-react' },
  { name: 'Node.js', color: '#339933', icon: 'bxl-nodejs' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'bxl-javascript' },
  { name: 'Next.js', color: '#828282ff', icon: 'bx-code-alt' },
  { name: 'HTML5', color: '#E34F26', icon: 'bxl-html5' },
  { name: 'CSS3', color: '#1572B6', icon: 'bxl-css3' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'bxl-tailwind-css' },
  { name: 'SCSS', color: '#CC6699', icon: 'bxl-sass' },
  { name: 'REST API', color: '#FF6B6B', icon: 'bx-code-block' },
  { name: 'Git', color: '#F05032', icon: 'bxl-git' },
  { name: 'GitHub', color: '#6e5494', icon: 'bxl-github' },
  { name: 'MySQL', color: '#4479A1', icon: 'bx-data' },
  { name: 'GSAP', color: '#D9B310', icon: 'bx-movie-play' },
  { name: 'Postman', color: '#FF6C37', icon: 'bx-send' },
  { name: 'Figma', color: '#007AFF', icon: 'bxl-figma' },
  { name: 'VS Code', color: '#007ACC', icon: 'bxl-visual-studio' },
  { name: 'NPM', color: '#CB3837', icon: 'bxl-nodejs' },
  { name: 'Responsive Design', color: '#4CAF50', icon: 'bx-devices' }
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
    demoLink: "https://gymwebsite-vicky.vercel.app",
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
    demoLink: "https://foodwebsite-vicky.vercel.app",
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
    title: 'Full Stack Development',
    description: 'Building complete web applications with MERN Stack (MongoDB, Express.js, React, Node.js). End-to-end solutions from database to user interface.',
    services: [
      'MERN Stack application development',
      'RESTful API design & development',
      'Database design with MongoDB & MySQL',
      'User authentication & authorization',
      'Real-time features with Socket.io',
      'Scalable & maintainable code architecture'
    ]
  },
  {
    id: 2,
    icon: 'bx-server',
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js and Express.js. Building secure, scalable APIs and database solutions.',
    services: [
      'Node.js & Express.js server development',
      'MongoDB database design & optimization',
      'RESTful & GraphQL API development',
      'JWT authentication & security',
      'Third-party API integrations',
      'Server deployment & maintenance'
    ]
  },
  {
    id: 3,
    icon: 'bx-palette',
    title: 'Frontend Development',
    description: 'Building modern, responsive user interfaces with React and Next.js. Creating fast, interactive, and user-friendly web experiences.',
    services: [
      'React & Next.js application development',
      'Responsive, mobile-first design',
      'State management (Redux, Context API)',
      'Tailwind CSS & SCSS styling',
      'GSAP animations & interactions',
      'Performance optimization & SEO'
    ]
  },
  {
    id: 4,
    icon: 'bx-code-block',
    title: 'API Development & Integration',
    description: 'Designing and building RESTful APIs. Integrating third-party services and payment gateways for complete solutions.',
    services: [
      'Custom REST API development',
      'Payment gateway integration (Razorpay, Stripe)',
      'Social media API integrations',
      'Email & SMS service integration',
      'Cloud storage integration (AWS S3)',
      'API documentation & testing'
    ]
  },
  {
    id: 5,
    icon: 'bx-brush',
    title: 'UI/UX Design',
    description: 'Creating stunning visual designs and user interfaces with Figma and Canva. Designing user-centered experiences that are both beautiful and functional.',
    services: [
      'UI/UX design with Figma',
      'Social media graphics with Canva',
      'Wireframing & prototyping',
      'Logo & brand identity design',
      'Responsive design mockups',
      'Design-to-code handoff'
    ]
  },
  {
    id: 6,
    icon: 'bx-cloud-upload',
    title: 'Deployment & Hosting',
    description: 'Deploying and hosting web applications on cloud platforms. Setting up CI/CD pipelines and ensuring smooth production deployments.',
    services: [
      'Vercel & Netlify deployment',
      'Domain setup & SSL configuration',
      'CI/CD pipeline setup',
      'Performance monitoring',
      'Environment configuration',
      'Production optimization'
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
      { name: 'React', dataSkill: 'react' },
      { name: 'Next.js', dataSkill: 'nextjs' },
      { name: 'JavaScript', dataSkill: 'javascript' },
      { name: 'HTML5', dataSkill: 'html5' }
    ]
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    icon: 'bx-data',
    title: 'Database',
    skills: [
      { name: 'MongoDB', dataSkill: 'mongodb' },
      { name: 'MySQL', dataSkill: 'mysql' },
      { name: 'Mongoose', dataSkill: 'mongoose' }
    ]
  },
  {
    id: 5,
    icon: 'bx-git-branch',
    title: 'Version Control',
    skills: [
      { name: 'Git', dataSkill: 'git' },
      { name: 'GitHub', dataSkill: 'github' }
    ]
  },
  {
    id: 6,
    icon: 'bx-wrench',
    title: 'Tools & Others',
    skills: [
      { name: 'VS Code', dataSkill: 'vscode' },
      { name: 'Postman', dataSkill: 'postman' },
      { name: 'NPM', dataSkill: 'npm' },
      { name: 'Netlify', dataSkill: 'netlify' },
      { name: 'Vercel', dataSkill: 'vercel' }
    ]
  },
  {
    id: 7,
    icon: 'bx-palette',
    title: 'Design',
    skills: [
      { name: 'Figma', dataSkill: 'figma' },
      { name: 'Canva', dataSkill: 'canva' },
      { name: 'GSAP', dataSkill: 'gsap' }
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
  'MERN Stack Developer',
  'Full Stack Web Developer',
  'Building Scalable Apps'
];
