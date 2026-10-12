import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql
} from 'react-icons/si';

const skills = [
  { name: 'React.js', level: 95, icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', level: 90, icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', level: 88, icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', level: 75, icon: SiNodedotjs, color: '#339933' },
  { name: 'GraphQL', level: 70, icon: SiGraphql, color: '#E10098' },
];

export function Skills() {
  return (
    <section className="portfolio-skills" id="skills">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-section-header"
        >
          <h2 className="portfolio-section-title">Tech Stack</h2>
          <p className="portfolio-section-subtitle">
            Technologies I work with daily to build production-grade applications
          </p>
        </motion.div>

        <div className="portfolio-skills-container">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="portfolio-skill-item"
              >
                <div className="portfolio-skill-header">
                  <span className="portfolio-skill-name">
                    <Icon size={20} color={skill.color} style={{ marginRight: '8px' }} />
                    {skill.name}
                  </span>
                  <span className="portfolio-skill-percentage">{skill.level}%</span>
                </div>
                <div className="portfolio-skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="portfolio-skill-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}