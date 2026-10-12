import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaCode, FaProjectDiagram, FaDatabase } from 'react-icons/fa';
import { allProjects } from './Projects';

// Numbers come straight from your projects list, so they stay accurate
// whenever you add, remove or edit a project in Projects.jsx.
const stats = [
  {
    icon: FaProjectDiagram,
    value: allProjects.length,
    label: 'Projects Built',
    suffix: '',
  },
  {
    icon: FaCode,
    value: new Set(allProjects.flatMap((p) => p.tech)).size,
    label: 'Technologies Used',
    suffix: '',
  },
  {
    icon: FaDatabase,
    value: allProjects.filter((p) => p.tech.includes('PostgreSQL')).length,
    label: 'PostgreSQL-Backed Projects',
    suffix: '',
  },
];

export function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const timers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500;
            const stepTime = 20;
            const increment = end / (duration / stepTime);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.round(start);
                return next;
              });
            }, stepTime);
            timers.push(timer);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="portfolio-stats" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="stat-item"
              >
                <Icon className="stat-icon" />
                <div className="stat-number">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}