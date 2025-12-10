import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import styles from '../styles/FAQ.module.css';

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I offer Full Stack Development with MERN Stack (MongoDB, Express.js, React, Node.js), Frontend Development, Backend Development, API Development & Integration, UI/UX Design with Figma, and Deployment & Hosting services."
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer: "I specialize in MongoDB, Express.js, React, Node.js (MERN Stack), Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, SCSS, GSAP animations, Git, and MySQL."
  },
  {
    id: 3,
    question: "How can I hire you for my project?",
    answer: "You can contact me via email at vickynarvare51@gmail.com, phone at +91 6267607029, or through the contact form on this website. I'm available for freelance projects and full-time opportunities."
  },
  {
    id: 4,
    question: "What is your development process?",
    answer: "My process includes: 1) Understanding requirements, 2) Planning & wireframing, 3) Design approval, 4) Development with regular updates, 5) Testing & bug fixes, 6) Deployment & handover with documentation."
  },
  {
    id: 5,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I provide post-launch support including bug fixes, minor updates, and maintenance. I also offer extended support packages for long-term projects."
  },
  {
    id: 6,
    question: "How long does it take to complete a project?",
    answer: "Project timeline depends on complexity. A simple website takes 1-2 weeks, while a full-stack web application may take 4-8 weeks. I'll provide a detailed timeline after understanding your requirements."
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
