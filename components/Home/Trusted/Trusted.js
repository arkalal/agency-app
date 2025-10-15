"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiMongodb, 
  SiNodedotjs, 
  SiVercel,
  SiOpenai,
  SiAnthropoic
} from "react-icons/si";
import { 
  FaBrain, 
  FaRobot, 
  FaCog,
  FaCode,
  FaLightbulb
} from "react-icons/fa";
import styles from "./Trusted.module.scss";

export default function TechStack(){
  const technologies = [
    { name: 'Next.js', category: 'Framework', icon: SiNextdotjs, color: '#000000' },
    { name: 'React', category: 'Library', icon: SiReact, color: '#61DAFB' },
    { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47A248' },
    { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
    { name: 'Vercel', category: 'Deploy', icon: SiVercel, color: '#000000' },
    { name: 'OpenAI', category: 'AI', icon: SiOpenai, color: '#412991' },
    { name: 'Anthropic', category: 'AI', icon: FaBrain, color: '#D97706' },
    { name: 'Cursor AI', category: 'Tool', icon: FaCode, color: '#7C3AED' },
    { name: 'Lovable', category: 'Tool', icon: FaLightbulb, color: '#EC4899' },
    { name: 'ChatGPT', category: 'AI', icon: FaRobot, color: '#10B981' },
    { name: 'Claude', category: 'AI', icon: FaBrain, color: '#F59E0B' },
    { name: 'OpenRouter', category: 'AI', icon: FaCog, color: '#6366F1' }
  ];
  
  return (
    <section className={styles.wrap}>
      <div className="container">
        <motion.div 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Powered by Modern Tech Stack & AI Tools
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.marquee}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        
        <motion.div 
          className={styles.track}
          animate={{ x: [-1000, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...technologies, ...technologies].map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <div key={i} className={`glass ${styles.techCard}`}>
                <div className={styles.iconWrapper}>
                  <IconComponent 
                    size={28} 
                    style={{ color: tech.color }}
                  />
                </div>
                <div className={styles.techInfo}>
                  <div className={styles.techName}>{tech.name}</div>
                  <div className={styles.techCategory}>{tech.category}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
