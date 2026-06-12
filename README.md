# Vicky Narvare - Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcasing full-stack MERN development skills, projects, and services.

<img src="public/images/VickyNarvare.png" alt="Portfolio Preview" width="150" />

## 🚀 Live Demo

[https://vicky-narvare.vercel.app](https://vickynarvare.vercel.app)

## ✨ Features

- **Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- **Dark/Light Theme** - Toggle between themes with localStorage persistence
- **Smooth Animations** - CSS animations and GSAP transitions
- **Loading Screen** - Animated loading screen on initial load
- **Tech Marquee** - Auto-scrolling technology showcase
- **Typing Effect** - Dynamic typing animation in hero section
- **Toast Notifications** - React Toastify for user feedback
- **Contact Form** - Form with email validation
- **Floating Social Links** - Quick access to social profiles
- **FAQ Section** - Common questions answered
- **Resume Section** - Professional experience and education
- **Scroll-to-Top** - Easy navigation back to top

## 🛠️ Tech Stack

- **React 19** - Modern UI Library with hooks
- **Vite** - Lightning-fast build tool
- **React Icons** - Comprehensive icon library
- **React Toastify** - Toast notifications
- **CSS3 + Variables** - Styling with custom properties
- **GSAP** - Advanced animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Node.js 18+** - Backend runtime

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx           # Personal introduction
│   ├── Contact.jsx         # Contact form section
│   ├── FAQ.jsx             # Frequently asked questions
│   ├── FloatingSocial.jsx  # Floating social links
│   ├── Footer.jsx          # Footer section
│   ├── Hero.jsx            # Hero section with typing effect
│   ├── LoadingScreen.jsx   # Initial loading animation
│   ├── Navbar.jsx          # Navigation bar
│   ├── Projects.jsx        # Projects showcase
│   ├── Resume.jsx          # Resume/experience section
│   ├── ScrollToTop.jsx     # Scroll-to-top button
│   ├── SectionHeader.jsx   # Reusable section header
│   ├── Services.jsx        # Services offered
│   └── Skills.jsx          # Technical skills
├── context/
│   └── ThemeContext.jsx    # Theme management (dark/light)
├── data/
│   └── index.js            # Centralized data (projects, skills, etc.)
├── hooks/
│   ├── useInView.js        # Intersection observer hook
│   └── useTypingEffect.js  # Typing animation hook
├── styles/
│   └── index.js            # Centralized styles
├── App.jsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Reset and base styles
└── main.jsx                # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository

git clone https://github.com/VickyNarvare/portfolio.git
cd portfolio

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Update Personal Information

Edit `src/data/index.js` to customize:

- **Projects** - Add/edit portfolio projects
- **Skills** - Update technical skills by category
- **Services** - Modify services offered
- **Social Links** - Update social media profiles
- **Technologies** - Add/remove tech for marquee

### Update Styles

Edit `src/App.css` and component-specific CSS files:

- **CSS Variables** - Modify colors, fonts, spacing in `:root`
- **Animations** - Customize animation timings and effects
- **Responsive Breakpoints** - Adjust for different screen sizes
- **Theme Colors** - Update light/dark mode color schemes

### Update Content

1. **Hero Section** - Modify intro text in `Hero.jsx`
2. **About Section** - Update bio in `About.jsx`
3. **Contact Form** - Configure email settings in `Contact.jsx`
4. **Social Links** - Update in `FloatingSocial.jsx`

## 📱 Page Sections

| Section      | Description                                             |
| ------------ | ------------------------------------------------------- |
| **Home**     | Hero section with typing effect and MERN stack showcase |
| **About**    | Personal introduction with profile image                |
| **Skills**   | Technical skills categorized by expertise               |
| **Services** | Services offered with expandable cards                  |
| **Projects** | Portfolio projects with links and descriptions          |
| **FAQ**      | Common questions and answers                            |
| **Resume**   | Professional experience and education                   |
| **Contact**  | Contact form and social media links                     |

## 🖼️ Projects Preview

<p>
  <img src="public/images/project1.webp" alt="Weather App" width="200" />
  <img src="public/images/project2.webp" alt="ElectraX" width="200" />
  <img src="public/images/project3.webp" alt="Kalika Construction" width="200" />
  <img src="public/images/project4.webp" alt="JARVIS AI" width="200" />
  <img src="public/images/project5.webp" alt="Coffee Cup" width="200" />
</p>

## 🎨 Color Scheme

| Variable       | Light Mode | Dark Mode |
| -------------- | ---------- | --------- |
| `--accent`     | #4070f4    | #6ea8ff   |
| `--accent-2`   | #3056d3    | #4a6ef7   |
| `--body-color` | #e4e9f7    | #2c2c2d   |
| `--text-color` | #111       | #fff      |

## ⚙️ Performance Optimizations

- **Code Splitting** - Lazy loading of components
- **CSS Variables** - Efficient theme switching
- **Optimized Animations** - Hardware-accelerated transforms
- **Image Optimization** - WebP format for faster loading
- **Debounced Scroll Events** - Smooth scrolling performance
- **Memoization** - Preventing unnecessary re-renders

## 🔧 Available Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start development server   |
| `npm run build`   | Build for production       |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run ESLint (if configured) |

## 📦 Dependencies

Key dependencies include:

- `react` - UI library
- `react-dom` - DOM rendering
- `react-icons` - Icon components
- `react-toastify` - Toast notifications
- `gsap` - Animation library
- `vite` - Build tool

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security

- No sensitive data stored locally
- Contact form uses secure backend endpoint
- Environment variables for API keys
- Content Security Policy headers recommended

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vicky Narvare** - Full Stack MERN Developer

- **Website**: [vickynarvare.vercel.app](https://vickynarvare.vercel.app)
- **GitHub**: [@VickyNarvare](https://github.com/VickyNarvare)
- **LinkedIn**: [Vicky Narvare](https://www.linkedin.com/in/vicky-narvare-4a7712395)
- **Email**: [contact@vickynarvare.com](mailto:contact@vickynarvare.com)
- **Location**: Indore, India

## 🙏 Acknowledgments

- React community for excellent documentation
- Vite team for amazing build tool
- All contributors and users who provided feedback

## 📞 Support

Found a bug? Have a suggestion? Feel free to:

- Open an [issue](https://github.com/VickyNarvare/portfolio/issues)
- Submit a [pull request](https://github.com/VickyNarvare/portfolio/pulls)
- Contact via website

---

⭐ **If you like this portfolio, please star the repository!** ⭐
