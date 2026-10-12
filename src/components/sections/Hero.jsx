import { motion } from 'framer-motion';
import { IoArrowDown } from 'react-icons/io5';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Engineer', 'React Expert', 'Next.js Architect', 'UI/UX Enthusiast'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      cursorChar: '|',
      shuffle: false,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="portfolio-hero-badge">✦ Full-Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="portfolio-hero-title"
        >
          Hi, I'm <span className="highlight">Yizere AL Siladji</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="portfolio-hero-role"
        >
          <span ref={el} className="code-text" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="portfolio-hero-description"
        >
          Building performant, accessible, and delightful web experiences with
          React, Next.js, and modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="portfolio-hero-buttons"
        >
          <a href="#projects" className="portfolio-btn-primary">View My Work</a>
          <a href="#contact" className="portfolio-btn-secondary">Let's Talk</a>
        </motion.div>

        <div className="portfolio-hero-scroll">
          <IoArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}