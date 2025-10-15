"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./PricingPreview.module.scss";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#0b0b0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const RocketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z" fill="currentColor"/></svg>
);

const CycleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function PricingPreview(){
  return (
    <section className={styles.wrap} id="pricing">
      <div className="container">
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pricing
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Choose the right plan for your startup journey
        </motion.p>
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className={`glass gradient-border ${styles.card} ${styles.highlight}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className={styles.icon}><RocketIcon /></div>
            <div className={`${styles.badge} ${styles.badgePrimary}`}>Launch MVP</div>
            <div className={styles.ptitle}>MVP Sprint</div>
            <div className={styles.pvalue}>$2,600</div>
            <ul className={styles.features}>
              <li><Check/>Complete SaaS MVP ready to launch</li>
              <li><Check/>AI integrations, 2–3 core features</li>
              <li><Check/>Landing page + SEO + Analytics</li>
              <li><Check/>Production deployment</li>
            </ul>
            <a href="#book" className="btn btn-primary">Book a Call</a>
          </motion.div>
          <motion.div 
            className={`glass ${styles.card}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className={styles.icon}><CycleIcon /></div>
            <div className={styles.badge}>Scale & Iterate</div>
            <div className={styles.ptitle}>Monthly Retainer</div>
            <div className={styles.pvalue}>$1,500<span>/mo</span></div>
            <ul className={styles.features}>
              <li><Check/>Ongoing engineering partnership</li>
              <li><Check/>Scaling, maintenance, new features</li>
              <li><Check/>Multiple AI/internal tools</li>
              <li><Check/>Priority support</li>
            </ul>
            <a href="/pricing" className="btn btn-outline">View Details</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
