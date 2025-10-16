"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Process.module.scss";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="#0b0b0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function Process({ id }){
  const steps = ['Discover','Design','Build','Launch','Scale'];
  return (
    <section className={`container ${styles.wrap}`} id={id}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Process
      </motion.h2>
      <motion.div 
        className={styles.steps}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {steps.map((s,i)=> (
          <motion.div 
            key={s} 
            className={`glass ${styles.step}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className={styles.index}>{i+1}</div>
            <div className={styles.name}>{s}</div>
            {i < steps.length - 1 && <Arrow/>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
