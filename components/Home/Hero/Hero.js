"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.scss";
import {
  DeliverySpeedAnimation,
  AIHumanAnimation,
  EngineeringTalentAnimation,
  TechStackAnimation,
} from "./CardAnimations";

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

        {isMobile ? (
          <div className={styles.cardsRow}>
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardMiniTitle}>Delivery Speed</div>
              <DeliverySpeedAnimation />
              <div className={styles.cardFoot}>≤21 days MVP delivery</div>
            </div>
            <div className={`glass ${styles.card}`}>
              <AIHumanAnimation />
              <div className={styles.stat}>
                AI + Human<span>hybrid approach</span>
              </div>
            </div>
            <div className={`glass ${styles.card}`}>
              <EngineeringTalentAnimation />
              <div className={styles.caption}>Top 1% engineering talent</div>
            </div>
            <div className={`glass ${styles.card}`}>
              <div className={styles.cardMiniTitle}>Tech Stack</div>
              <TechStackAnimation />
              <div className={styles.status}>
                <span className="badge-neon">Modern</span>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className={styles.cardsRow}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.div
              className={`glass ${styles.card}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardMiniTitle}>Delivery Speed</div>
              <DeliverySpeedAnimation />
              <motion.div
                className={styles.cardFoot}
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1, x: 2 }}
              >
                ≤21 days MVP delivery
              </motion.div>
            </motion.div>
            <motion.div
              className={`glass ${styles.card}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <AIHumanAnimation />
              <div className={styles.stat}>
                AI + Human<span>hybrid approach</span>
              </div>
            </motion.div>
            <motion.div
              className={`glass ${styles.card}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <EngineeringTalentAnimation />
              <div className={styles.caption}>Top 1% engineering talent</div>
            </motion.div>
            <motion.div
              className={`glass ${styles.card}`}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardMiniTitle}>Tech Stack</div>
              <TechStackAnimation />
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
