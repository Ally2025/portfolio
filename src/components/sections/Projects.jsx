import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Only your real projects. Replace the github/live links with your actual URLs.
// Leave `live` as '' if a project is not deployed yet; the demo icon shows faded and unclickable.
export const allProjects = [
  {
    title: 'VoteSphere AI',
    description:
      'VoteSphere AI is an AI-focused online voting system designed to simplify election management, support voter verification, and provide transparent election results. Built with modern web technologies, it features voter and administrator dashboards, election management tools, and security monitoring capabilities.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AI'],
    github: 'https://github.com/yourusername/votesphere-ai',
    live: '',
  },
  {
    title: 'AppointEase',
    description:
      'AppointEase is a user-friendly appointment booking platform that connects clients with service providers, making it easy to schedule appointments, manage availability, and track bookings through a professional interface.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/appointease',
    live: '',
  },
  {
    title: 'Simple Student Management System',
    description:
      'A web-based Student Management System designed to help educational institutions manage student records efficiently, organize information, and simplify student data management through a clean and user-friendly interface.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'], // adjust to the stack you actually used
    github: 'https://github.com/yourusername/student-management-system',
    live: '',
  },
  {
    title: 'Inventory  System',
    description:
      'A professional inventory management solution that helps businesses track products, monitor stock levels, manage inventory movements, and generate reports through a clean and user-friendly interface.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'], // adjust to the stack you actually used
    github: 'https://github.com/yourusername/inventory-system',
    live: '',
  },
];

// Get all unique technologies
const allTechs = ['All', ...new Set(allProjects.flatMap((p) => p.tech))];

export function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Number of projects to show per view
  const itemsPerView = 3;

  const filterProjects = (tech) => {
    setSelectedTech(tech);
    if (tech === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter((p) => p.tech.includes(tech)));
    }
    setCurrentIndex(0); // Reset to first slide when filtering
  };

  // Get visible projects based on current index
  const getVisibleProjects = () => {
    const start = currentIndex;
    const end = Math.min(start + itemsPerView, filteredProjects.length);
    return filteredProjects.slice(start, end);
  };

  // Check if we can go to next/previous
  const canGoNext = currentIndex + itemsPerView < filteredProjects.length;
  const canGoPrev = currentIndex > 0;

  // Navigation functions with smooth animation
  const goToNext = () => {
    if (!canGoNext || isAnimating) return;
    setIsAnimating(true);
    const step = Math.min(itemsPerView, filteredProjects.length - currentIndex - itemsPerView);
    setCurrentIndex((prev) => prev + step);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const goToPrev = () => {
    if (!canGoPrev || isAnimating) return;
    setIsAnimating(true);
    const step = Math.min(itemsPerView, currentIndex);
    setCurrentIndex((prev) => prev - step);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="portfolio-projects" id="projects">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-section-header"
        >
          <h2 className="portfolio-section-title">Featured Projects</h2>
          <p className="portfolio-section-subtitle">
            Full-stack systems I have built with React, Node.js and PostgreSQL
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="portfolio-filter-container">
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`portfolio-filter-btn ${selectedTech === tech ? 'active' : ''}`}
              onClick={() => filterProjects(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Slider with Arrows */}
        <div className="portfolio-slider-wrapper">
          {/* Left Arrow */}
          <button
            className={`portfolio-slider-arrow prev ${!canGoPrev ? 'disabled' : ''}`}
            onClick={goToPrev}
            disabled={!canGoPrev || isAnimating}
            aria-label="Previous projects"
          >
            <FaArrowLeft />
          </button>

          {/* Projects Grid */}
          <div className="portfolio-projects-grid">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="portfolio-project-card"
              >
                <h3 className="portfolio-project-title">{project.title}</h3>
                <p className="portfolio-project-description">{project.description}</p>

                <div className="portfolio-project-tags">
                  {[...new Set(project.tech)].map((tech, techIndex) => (
                    <span key={`${tech}-${techIndex}`} className="portfolio-project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="portfolio-project-footer">
                  {/* Fake stars/forks removed. The demo button is always shown, disabled until a URL is set. */}
                  <div className="portfolio-project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-project-link"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    <a
                      href={project.live || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-project-link"
                      aria-label={`${project.title} live demo`}
                      aria-disabled={!project.live}
                      title={project.live ? 'Live demo' : 'Demo coming soon'}
                      style={
                        project.live
                          ? undefined
                          : { opacity: 0.4, cursor: 'not-allowed', pointerEvents: 'none' }
                      }
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className={`portfolio-slider-arrow next ${!canGoNext ? 'disabled' : ''}`}
            onClick={goToNext}
            disabled={!canGoNext || isAnimating}
            aria-label="Next projects"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="portfolio-slider-progress">
          <span className="portfolio-slider-dots">
            {Array.from({ length: Math.ceil(filteredProjects.length / itemsPerView) }).map((_, idx) => (
              <span
                key={idx}
                className={`portfolio-slider-dot ${Math.floor(currentIndex / itemsPerView) === idx ? 'active' : ''}`}
                onClick={() => {
                  if (!isAnimating) {
                    setCurrentIndex(idx * itemsPerView);
                  }
                }}
              />
            ))}
          </span>
          <span className="portfolio-slider-counter">
            {filteredProjects.length === 0
              ? '0 of 0'
              : `${currentIndex + 1} - ${Math.min(currentIndex + itemsPerView, filteredProjects.length)} of ${filteredProjects.length}`}
          </span>
        </div>

        {filteredProjects.length === 0 && (
          <div className="portfolio-no-projects">
            <p>No projects found for "{selectedTech}"</p>
          </div>
        )}
      </div>
    </section>
  );
}