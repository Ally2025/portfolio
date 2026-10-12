import { useState, useEffect } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`portfolio-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="portfolio-navbar-inner">
        <a href="/" className="portfolio-logo">Yizere.ally</a>

        <div className="portfolio-nav-desktop">
          <a href="#projects" className="portfolio-nav-link">Projects</a>
          <a href="#skills" className="portfolio-nav-link">Skills</a>
          <a href="#testimonials" className="portfolio-nav-link">Testimonials</a>  {/* ← ADDED */}
          <a href="#contact" className="portfolio-nav-link">Contact</a>
          <div className="portfolio-nav-social">
            <a href="https://github.com/Ally2025" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://instagram.com/al_sil_30" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </div>
          <button onClick={toggleTheme} className="portfolio-theme-toggle" aria-label="Toggle theme">
            {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>
          <a href="/yas.pdf" className="portfolio-resume-btn">Resume</a>
        </div>

        <button className="portfolio-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      <div className={`portfolio-nav-mobile ${isOpen ? 'open' : ''}`}>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>  {/* ← ADDED */}
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </header>
  );
}