import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/FAQ.module.css';

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I offer full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js), frontend development with React and Next.js, and backend API development. I handle the complete development cycle from database design to deployment."
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer: "I specialize in the MERN stack: MongoDB, Express.js, React, and Node.js. I also work with Next.js, JavaScript, Tailwind CSS, SCSS, Bootstrap, GSAP, MySQL, REST APIs, JWT authentication, Git, and deploy on Vercel and Netlify."
  },
  {
    id: 3,
    question: "How can I hire you for my project?",
    answer: "You can reach me via email at vickynarvare51@gmail.com or WhatsApp at +91 6267607029. I typically respond within 24 hours on weekdays. I'm available for both freelance projects and full-time positions."
  },
  {
    id: 4,
    question: "What is your development process?",
    answer: "I start by understanding your requirements and goals, then create a development plan with clear milestones. I provide regular progress updates, test thoroughly, and deliver clean, documented code ready for deployment."
  },
  {
    id: 5,
    question: "How long does a project typically take?",
    answer: "Timelines vary by scope. A landing page typically takes 1-2 weeks, while a full MERN stack application with authentication and database integration may take 4-6 weeks. I'll provide a realistic timeline after reviewing your specific requirements."
  },
  {
    id: 6,
    question: "Do you work on existing projects or only new ones?",
    answer: "Both. I can build new projects from scratch or work on existing codebases—whether that's adding features, fixing bugs, or improving performance. I'm comfortable working with established projects and teams."
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
