"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Values.module.scss";

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5Z" fill="currentColor" fillOpacity="0.8"/>
    <path d="M12 2C15.31 2 18 4.69 18 8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8C6 4.69 8.69 2 12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.5 16.5C4.5 16.5 5.5 14.9 8 14.5L9.5 16L8 17.5C7.6 20 4.5 16.5 4.5 16.5Z" fill="currentColor" fillOpacity="0.6"/>
    <path d="M12 15L9 12L15 6L18 9L12 15Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3"/>
    <path d="M16 8L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 9L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0.8"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const items = [
  { t: 'AI‑Native MVPs', s: 'Embeddable agents, LLM features and data pipelines.', icon: BrainIcon },
  { t: 'Ship in ≤21 Days', s: 'Tight sprints with weekly demos and rapid feedback.', icon: RocketIcon },
  { t: 'Founder‑Focused Process', s: 'We design for clarity, launch and traction.', icon: TargetIcon },
  { t: 'Full‑Stack + AI Expertise', s: 'Product, design, data, infra and deployment.', icon: CodeIcon },
];

export default function Values({ id }){
  return (
    <section className={styles.wrap} id={id}>
      <div className="container">
      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {items.map((v, i) => (
          <motion.div 
            key={v.t} 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className={styles.iconWrap}>
              <v.icon />
            </div>
            <div className={styles.title}>{v.t}</div>
            <div className={styles.text}>{v.s}</div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  )
}
