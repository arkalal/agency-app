"use client";
import React from "react";
import styles from "./Navbar.module.scss";

const SearchIcon = (props) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 21l-3.8-3.8" stroke="#0b0b0b" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="11" cy="11" r="7" stroke="#0b0b0b" strokeWidth="1.8" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>Arka Labs</div>

        <div className={styles.menu}>
          <a href="#services" className={styles.link} onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#process" className={styles.link} onClick={(e) => scrollToSection(e, 'process')}>Process</a>
          <a href="#pricing" className={styles.link} onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a>
          <a href="#testimonials" className={styles.link} onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a>
        </div>

        <div className={styles.ctas}>
          <a href="https://calendly.com/arkalal-chakravarty/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a Call</a>
        </div>

        <button aria-label="Open Menu" className={`btn btn-outline ${styles.hamburger}`} onClick={() => setOpen(v=>!v)}>
          Menu
        </button>
      </div>

      {open && (
        <div className={styles.drawer}>
          <div className={styles.drawerList}>
            <a className={styles.drawerLink} href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
            <a className={styles.drawerLink} href="#process" onClick={(e) => scrollToSection(e, 'process')}>Process</a>
            <a className={styles.drawerLink} href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a>
            <a className={styles.drawerLink} href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a>
            <a className="btn btn-primary" href="https://calendly.com/arkalal-chakravarty/30min" target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Book a Call</a>
          </div>
        </div>
      )}
    </nav>
  );
}
