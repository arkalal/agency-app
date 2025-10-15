"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export default function Hero(){
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.inner}>
        <div className={`subtitle ${styles.trustNote}`}>Top 1% Engineers + AI Agents = Lightning Fast Development</div>
        <h1 className={styles.h1}>
          Super <span className={styles.neon}>Charge</span> Your Ideas
          <br/> into Market‑Ready SaaS ≤21 days
        </h1>
        <p className="subtitle">We combine elite engineering talent with cutting-edge AI agents to ship your SaaS MVP in record time — fully market-ready with AI workflows built-in.</p>

        <div className={styles.ctas}>
          <a href="#book" className="btn btn-primary">Book a Call</a>
          <a href="/pricing" className="btn btn-outline">View Pricing</a>
        </div>

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
            <div className={styles.chart}><div className={styles.line}/></div>
            <div className={styles.cardFoot}>≤21 days MVP delivery</div>
          </motion.div>
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.blob}/>
            <div className={styles.stat}>AI + Human<span>hybrid approach</span></div>
          </motion.div>
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.avatarWrap}><div className={styles.avatar}/></div>
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
            <div className={styles.status}><span className="badge-neon">Modern</span></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
