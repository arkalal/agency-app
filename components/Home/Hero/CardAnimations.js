"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./CardAnimations.module.scss";

// Delivery Speed Animation - Rocket launching with speed lines
export const DeliverySpeedAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={styles.animationContainer} style={{ height: '80px' }} />;
  }

  return (
    <div className={styles.animationContainer}>
      <motion.div
        className={styles.rocket}
        initial={{ y: 20, opacity: 0.5 }}
        animate={{ 
          y: [20, -15, -10],
          opacity: [0.5, 1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <motion.path
            d="M25 5L30 15L40 17L32 25L35 35L25 30L15 35L18 25L10 17L20 15L25 5Z"
            fill="url(#rocket-gradient)"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="rocket-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c6cff" />
              <stop offset="100%" stopColor="#4ea8ff" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      {/* Speed lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.speedLine}
          style={{ top: `${15 + i * 10}%` }}
          initial={{ x: -30, opacity: 0, width: 15 + i * 3 }}
          animate={{ 
            x: [0, 25, 25],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeOut"
          }}
        />
      ))}
      
      <motion.div
        className={styles.bolt}
        initial={{ scale: 0.8, rotate: -15 }}
        animate={{ 
          scale: [0.8, 1.1, 0.8],
          rotate: [-15, 15, -15],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⚡
      </motion.div>
    </div>
  );
};

// AI + Human Animation - Robot and human coding together
export const AIHumanAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={styles.animationContainer} style={{ height: '80px' }} />;
  }

  return (
    <div className={styles.animationContainer}>
      <div className={styles.collaborationScene}>
        {/* Human coder */}
        <motion.div
          className={styles.human}
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="30" height="35" viewBox="0 0 30 35" fill="none">
            <circle cx="15" cy="8" r="6" fill="#4ea8ff" />
            <rect x="9" y="16" width="12" height="16" rx="2" fill="#4ea8ff" />
          </svg>
        </motion.div>
        
        {/* Robot AI */}
        <motion.div
          className={styles.robot}
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          <svg width="30" height="35" viewBox="0 0 30 35" fill="none">
            <rect x="6" y="8" width="18" height="20" rx="3" fill="#7c6cff" />
            <circle cx="12" cy="15" r="2" fill="#c4ff60" />
            <circle cx="18" cy="15" r="2" fill="#c4ff60" />
            <rect x="11" y="20" width="8" height="2" rx="1" fill="#c4ff60" />
            <rect x="12" y="3" width="6" height="5" rx="1" fill="#7c6cff" />
          </svg>
        </motion.div>
        
        {/* Code particles flowing between them */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.codeParticle}
            style={{ 
              top: `${30 + Math.random() * 40}%`,
              fontSize: '10px'
            }}
            initial={{ 
              x: -20,
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: [0, 25, 50],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            {['<>', '{}', '/>', '[]'][i % 4]}
          </motion.div>
        ))}
        
        {/* Plus symbol in center */}
        <motion.div
          className={styles.plusSymbol}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          +
        </motion.div>
      </div>
    </div>
  );
};

// Engineering Talent Animation - Team collaboration with code
export const EngineeringTalentAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={styles.animationContainer} style={{ height: '80px' }} />;
  }

  return (
    <div className={styles.animationContainer}>
      <div className={styles.teamScene}>
        {/* Three engineers in formation */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={styles.engineer}
            style={{ 
              left: `${20 + i * 25}%`,
              top: i === 1 ? '25%' : '35%'
            }}
            animate={{ 
              y: [0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          >
            <svg width="25" height="28" viewBox="0 0 25 28" fill="none">
              <circle cx="12.5" cy="7" r="5" fill={`url(#eng-grad-${i})`} />
              <rect x="7.5" y="14" width="10" height="12" rx="2" fill={`url(#eng-grad-${i})`} />
              <defs>
                <linearGradient id={`eng-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={i === 1 ? "#7c6cff" : "#4ea8ff"} />
                  <stop offset="100%" stopColor={i === 1 ? "#4ea8ff" : "#7c6cff"} />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
        
        {/* Connection lines */}
        <svg className={styles.connections} width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <motion.line
            x1="30%" y1="40%" x2="45%" y2="30%"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.line
            x1="55%" y1="30%" x2="70%" y2="40%"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.3 }}
          />
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c6cff" />
              <stop offset="100%" stopColor="#4ea8ff" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Star badge */}
        <motion.div
          className={styles.badge}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          ⭐
        </motion.div>
      </div>
    </div>
  );
};

// Tech Stack Animation - Building blocks stacking up
export const TechStackAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={styles.animationContainer} style={{ height: '80px' }} />;
  }

  return (
    <div className={styles.animationContainer}>
      <div className={styles.stackScene}>
        {/* Blocks stacking */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={styles.block}
            style={{ bottom: `${i * 22 + 20}%` }}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <svg width="45" height="18" viewBox="0 0 45 18" fill="none">
              <rect 
                width="45" 
                height="18" 
                rx="4" 
                fill={`url(#block-grad-${i})`}
                opacity="0.9"
              />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">
                {['Next.js', 'AI API', 'React'][i]}
              </text>
              <defs>
                <linearGradient id={`block-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={i === 0 ? "#7c6cff" : i === 1 ? "#4ea8ff" : "#5b8def"} />
                  <stop offset="100%" stopColor={i === 0 ? "#5b8def" : i === 1 ? "#7c6cff" : "#4ea8ff"} />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
        
        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.sparkle}
            style={{ 
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 60}%`
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div>
        ))}
        
        {/* Arrow pointing up */}
        <motion.div
          className={styles.arrow}
          animate={{ 
            y: [5, -5, 5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15L10 5M10 5L5 10M10 5L15 10" stroke="#c4ff60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
