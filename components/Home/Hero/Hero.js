"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.scss";
import HeroCards from "./HeroCards";

const words = ["SaaS", "AI Agents", "MVPs", "AI Apps"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={`subtitle ${styles.trustNote}`}>
          Top 1% Engineers + AI Agents = Lightning Fast Development
        </div>
        <h1 className={styles.h1}>
          Super <span className={styles.neon}>Charge</span> Your Ideas
          <br /> into Market‑Ready{" "}
          <span className={styles.animatedWordWrapper}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className={styles.neon}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          ≤21 days
        </h1>
        <p className="subtitle">
          We combine elite engineering talent with cutting-edge AI agents to
          ship your SaaS MVP in record time — fully market-ready <br /> with AI
          workflows built-in.
        </p>

        <div className={styles.ctas}>
          <a
            href="https://calendly.com/arkalal-chakravarty/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a Call
          </a>
          <a
            href="#pricing"
            className="btn btn-outline"
            onClick={(e) => scrollToSection(e, "pricing")}
          >
            View Pricing
          </a>
        </div>

        <HeroCards />
      </div>
    </section>
  );
}
