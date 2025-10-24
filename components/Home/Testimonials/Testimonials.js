"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder, HealthTech Startup",
    content: "nixpexel delivered our AI-powered healthcare platform in just 18 days. The quality and speed were incredible – they combined their engineering expertise with AI tools flawlessly.",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO, FinTech Solutions",
    content: "What typically takes months, they delivered in weeks. The AI-human hybrid approach is game-changing. Our MVP was production-ready with all the bells and whistles.",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Product Manager, E-commerce",
    content: "The attention to detail and modern tech stack they used was impressive. They didn't just build software – they built a scalable, AI-integrated business solution.",
    avatar: "ET"
  },
  {
    id: 4,
    name: "David Park",
    role: "Startup Founder",
    content: "From idea to market-ready SaaS in 21 days. Their combination of top engineers and AI agents is the future of software development. Highly recommended!",
    avatar: "DP"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevTestimonial();
    } else if (info.offset.x < -swipeThreshold) {
      nextTestimonial();
    }
  };

  return (
    <section className={styles.wrap} id="testimonials">
      <div className="container">
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trusted by founders and product teams who value speed and quality
        </motion.p>

        <div className={styles.testimonialContainer}>
          <button 
            className={styles.navButton} 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.testimonialWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className={`glass ${styles.testimonialCard}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
              >
                <div className={styles.content}>
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.name}>{testimonials[currentIndex].name}</div>
                    <div className={styles.role}>{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className={styles.navButton} 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
