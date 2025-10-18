"use client";
import React from "react";
import styles from "./Footer.module.scss";

const Twitter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1.1 1.5-1.9-.6.4-1.4.7-2.1.8A3.3 3.3 0 0 0 12.7 9c0 .3 0 .5.1.8-2.7-.1-5.1-1.4-6.7-3.4-.3.5-.4 1.1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.2 3 2.7 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.1 2.3A6.7 6.7 0 0 1 4 17.8a9.4 9.4 0 0 0 5.1 1.5c6.1 0 9.5-5.2 9.5-9.6v-.4c.6-.4 1.1-1 1.4-1.6-.5.2-1.1.4-1.7.5Z" fill="#0b0b0b"/>
  </svg>
);

export default function Footer(){
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.links}>
          <a className={styles.link} href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a className={styles.link} href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a>
          <a className={styles.link} href="#process" onClick={(e) => scrollToSection(e, 'process')}>Process</a>
          <a className={styles.link} href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a>
        </div>
        <div className={styles.legalLinks}>
          <a className={styles.legalLink} href="/privacy-policy">Privacy Policy</a>
          <span className={styles.separator}>•</span>
          <a className={styles.legalLink} href="/terms-of-service">Terms of Service</a>
        </div>
        <div className={styles.bottom}>© {new Date().getFullYear()} Arka Labs. All rights reserved.</div>
      </div>
    </footer>
  )
}
