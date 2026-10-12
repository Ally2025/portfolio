import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Huston',
    role: 'CEO, TechCorp',
    text: 'Yizere delivered exceptional work on our voting system project. His attention to detail and problem-solving skills are outstanding.',
    image: 'JD',
  },
  {
    name: 'Angel',
    role: 'CTO, InnovateLabs',
    text: 'Working with Yizere was a pleasure. He built our entire e-commerce platform with clean code and great performance.',
    image: 'JS',
  },
  {
    name: 'Barack',
    role: 'Product Manager, CloudSoft',
    text: 'The dashboard Yizere built for us has transformed how our team collaborates. Highly recommend his services.',
    image: 'MJ',
  },
];

export function Testimonials() {
  return (
    <section className="portfolio-testimonials" id="testimonials">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-section-header"
        >
          <h2 className="portfolio-section-title">What People Say</h2>
          <p className="portfolio-section-subtitle">
            Testimonials from clients and colleagues I've worked with
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="testimonial-card"
            >
              <FaQuoteLeft className="testimonial-quote" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}