"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.scss";

export default function FinalCta(){
  return (
    <section className={styles.wrap}>
      <motion.div 
        className={`glass ${styles.inner}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to Build Your SaaS?
        </motion.h2>
        <motion.a 
          className="btn btn-primary" 
          href="#book"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          Book a Call
        </motion.a>
      </motion.div>
    </section>
  )
}
