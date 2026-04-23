import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/FAQ.module.css';

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I offer Full Stack Web Development with MERN Stack (MongoDB, Express.js, React, Node.js), Frontend Development with React and Next.js, and Backend & API Development. I handle everything from database design to deployment."
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer: "I specialize in the MERN Stack: MongoDB, Express.js, React, and Node.js. I also work with Next.js, Tailwind CSS, SCSS, GSAP for animations, Git for version control, and deploy on Vercel and Netlify."
  },
  {
    id: 3,
    question: "How can I hire you for my project?",
    answer: "You can reach me via email at vickynarvare51@gmail.com or call/WhatsApp at +91 6267607029. I typically respond within 24 hours. I'm available for freelance projects and full-time opportunities."
  },
  {
    id: 4,
    question: "What is your development process?",
    answer: "I start by understanding your requirements, then create a plan and timeline. Development happens in stages with regular updates. I test thoroughly before deployment and provide documentation for handoff."
  },
  {
    id: 5,
    question: "How long does a project typically take?",
    answer: "Timeline depends on project scope. A landing page takes 1-2 weeks, while a full-stack application with database and authentication may take 4-6 weeks. I'll provide a realistic estimate after discussing your needs."
  },
  {
    id: 6,
    question: "Do you work on existing projects or only new ones?",
    answer: "I work on both! I can build new projects from scratch or help improve, debug, or add features to existing codebases. I'm comfortable jumping into ongoing projects."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div 
      className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
    >
      <button 
        className={styles.faqQuestion}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span itemProp="name">{faq.question}</span>
        {isOpen ? <FiMinus className={styles.icon} /> : <FiPlus className={styles.icon} />}
      </button>
      <div 
        className={styles.faqAnswer}
        itemScope 
        itemProp="acceptedAnswer" 
        itemType="https://schema.org/Answer"
      >
        <p itemProp="text">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeader 
          title={<>Frequently Asked <span>Questions</span></>}
          subtitle="Common questions about my services"
          bgText="FAQ"
        />
        <div 
          className={styles.faqContainer}
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {faqData.map((faq) => (
            <FAQItem 
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onClick={() => handleClick(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
