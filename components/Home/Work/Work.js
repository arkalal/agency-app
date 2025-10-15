"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Work.module.scss";

const projects = [
  {
    title: "Healthcare Automation Platform",
    desc: "Built with AI Agents to streamline clinical ops",
    gradient: "radial-gradient(70% 70% at 20% 20%, #c4ff60, transparent), radial-gradient(80% 70% at 80% 70%, #00d0ff, transparent)"
  },
  {
    title: "E-commerce Intelligence Suite",
    desc: "AI-powered analytics for online retail optimization",
    gradient: "radial-gradient(70% 70% at 30% 30%, #ff6b6b, transparent), radial-gradient(80% 70% at 70% 60%, #4ecdc4, transparent)"
  },
  {
    title: "FinTech Risk Assessment Tool",
    desc: "Machine learning models for financial risk analysis", 
    gradient: "radial-gradient(70% 70% at 40% 40%, #ffd93d, transparent), radial-gradient(80% 70% at 60% 60%, #6bcf7f, transparent)"
  },
  {
    title: "Content Generation Platform",
    desc: "LLM-powered content creation for marketing teams",
    gradient: "radial-gradient(70% 70% at 25% 25%, #a8edea, transparent), radial-gradient(80% 70% at 75% 75%, #fed6e3, transparent)"
  }
];

export default function Work(){
  return (
    <section className={`container ${styles.wrap}`}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {projects.map((project, i)=> (
          <motion.a 
            key={i} 
            className={`glass ${styles.card}`} 
            href="/work"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className={styles.thumb} style={{ background: project.gradient }}/>
            <div className={styles.meta}>
              <div className={styles.wtitle}>{project.title}</div>
              <div className={styles.wtext}>{project.desc}</div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
