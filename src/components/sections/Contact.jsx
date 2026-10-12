import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // 🔑 YOUR 3 EMAILJS KEYS
  const SERVICE_ID = 'service_pciu41r';
  const TEMPLATE_ID = 'template_qcohf5d';   // ← Your Template ID
  const PUBLIC_KEY = 'OKlv9MWQ2AM-rJXwE';     // ← Your Public Key

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({ type: 'success', message: '✅ Message sent successfully! I will get back to you soon.' });
        formRef.current.reset();

        // ⏱️ Auto-hide message after 5 seconds
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        setStatus({ type: 'error', message: '❌ Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: '❌ Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="portfolio-contact" id="contact">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-section-header"
        >
          <h2 className="portfolio-section-title">Get in Touch</h2>
          <p className="portfolio-section-subtitle">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="portfolio-contact-grid">
          <form ref={formRef} onSubmit={handleSubmit}>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`portfolio-status ${status.type}`}
              >
                {status.message}
              </motion.div>
            )}

            <div className="portfolio-form-group">
              <label className="portfolio-form-label">Name *</label>
              <input
                type="text"
                name="from_name"
                required
                className="portfolio-form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="portfolio-form-group">
              <label className="portfolio-form-label">Email *</label>
              <input
                type="email"
                name="from_email"
                required
                className="portfolio-form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="portfolio-form-group">
              <label className="portfolio-form-label">Message *</label>
              <textarea
                name="message"
                required
                rows={4}
                className="portfolio-form-textarea"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="portfolio-form-submit">
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <IoSend size={18} />
            </button>
          </form>

          <div className="portfolio-contact-sidebar">
            <div className="portfolio-contact-card">
              <h3 className="portfolio-contact-card-title">Connect</h3>
              <div className="portfolio-contact-social">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} /> GitHub
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} /> Instagram
                </a>
              </div>
            </div>

            <div className="portfolio-contact-availability">
              <p>💡 Currently available for freelance or full-time opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}