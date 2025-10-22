"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiZap } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import styles from "./Hero.module.scss";

const words = ["SaaS", "MVPs", "AI Apps"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
          <a href="https://calendly.com/arkalal-chakravarty/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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

        {isMobile ? (
          <div className={styles.cardsRow}>
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardMiniTitle}>Delivery Speed</div>
              <div className={styles.iconLarge}>
                <FiZap />
              </div>
              <div className={styles.cardFoot}>≤21 days MVP delivery</div>
            </div>
            <div className={`glass ${styles.card}`}>
              <div className={styles.iconLarge}>
                <RiRobot2Line />
              </div>
              <div className={styles.stat}>
                AI + Human<span>hybrid approach</span>
              </div>
            </div>
            <div className={`glass ${styles.card}`}>
              <div className={styles.iconLarge}>
                <FaUsersCog />
              </div>
              <div className={styles.caption}>Top 1% engineering talent</div>
            </div>
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardMiniTitle}>Tech Stack</div>
              <div className={styles.balance}>Next.js + AI</div>
              <div className={styles.status}>
                <span className="badge-neon">Modern</span>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className={styles.cardsRow}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.1 }}
          >
            <motion.div
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardMiniTitle}>Delivery Speed</div>
              <div className={styles.iconLarge}>
                <FiZap />
              </div>
              <div className={styles.cardFoot}>≤21 days MVP delivery</div>
            </motion.div>
            <motion.div
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconLarge}>
                <RiRobot2Line />
              </div>
              <div className={styles.stat}>
                AI + Human<span>hybrid approach</span>
              </div>
            </motion.div>
            <motion.div
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconLarge}>
                <FaUsersCog />
              </div>
              <div className={styles.caption}>Top 1% engineering talent</div>
            </motion.div>
            <motion.div
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardMiniTitle}>Tech Stack</div>
              <div className={styles.balance}>Next.js + AI</div>
              <div className={styles.status}>
                <span className="badge-neon">Modern</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
