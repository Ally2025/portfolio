import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Testimonials } from './components/sections/Testimonials';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';
import { NotFound } from './pages/NotFound';

import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="portfolio-app">
        {/* Scroll Progress Bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

        {/* ── Floating Social Sidebar ── */}
        <div className="social-sidebar">
          <a
            href="https://github.com/Ally2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-sidebar-link"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://instagram.com/al_sil_30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-sidebar-link"
          >
            <FaInstagram size={18} />
          </a>


        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main className="portfolio-main">
                  <Hero />
                  <Stats />
                  <Projects />
                  <Skills />
                  <Testimonials />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
         
        </Routes>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;