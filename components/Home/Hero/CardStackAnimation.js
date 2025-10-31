"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CardStackAnimation.module.scss";

// Project showcase images
const cardData = [
  { id: 1, image: "/assets/images/clientWork/cawlab-app.png", name: "Cawlab" },
  { id: 2, image: "/assets/images/clientWork/copilot-app.png", name: "Copilot" },
  { id: 3, image: "/assets/images/clientWork/disco-app.png", name: "Disco" },
  { id: 4, image: "/assets/images/clientWork/quenlo-app.png", name: "Quenlo" },
  { id: 5, image: "/assets/images/clientWork/taltracker-app.png", name: "TalTracker" },
];

const CardStackAnimation = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial state (cards hidden)
    // Stage 1: First card pops up (0.3s delay)
    // Stage 2: Cards stack behind (1s delay)
    // Stage 3: Cards distribute horizontally (1.8s delay)
    // Total animation: ~3-3.5 seconds

    const timer1 = setTimeout(() => setAnimationStage(1), 300);
    const timer2 = setTimeout(() => setAnimationStage(2), 1000);
    const timer3 = setTimeout(() => setAnimationStage(3), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className={styles.animationContainer}>
      <div className={styles.cardsWrapper}>
        {cardData.map((card, index) => {
          // Calculate positions for each stage
          let animateProps = {};

          if (animationStage === 0) {
            // Hidden state
            animateProps = {
              scale: 0,
              opacity: 0,
              x: 0,
              y: 0,
              rotate: 0,
            };
          } else if (animationStage === 1) {
            // First card pops up, others hidden
            if (index === 2) {
              // Middle card (index 2) appears first
              animateProps = {
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                rotate: -5,
              };
            } else {
              animateProps = {
                scale: 0,
                opacity: 0,
                x: 0,
                y: 0,
                rotate: 0,
              };
            }
          } else if (animationStage === 2) {
            // Cards stack behind the front card
            const offset = Math.abs(index - 2);
            animateProps = {
              scale: 1 - offset * 0.05,
              opacity: 1,
              x: 0,
              y: offset * 8,
              rotate: -5,
              zIndex: cardData.length - offset,
            };
          } else {
            // Cards distribute horizontally
            const centerIndex = 2;
            const offsetFromCenter = index - centerIndex;
            animateProps = {
              scale: 1,
              opacity: 1,
              x: offsetFromCenter * 180,
              y: Math.abs(offsetFromCenter) * 15,
              rotate: offsetFromCenter * 8,
              zIndex: cardData.length - Math.abs(offsetFromCenter),
            };
          }

          return (
            <motion.div
              key={card.id}
              className={styles.card}
              initial={{
                scale: 0,
                opacity: 0,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={animateProps}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
                delay: animationStage === 3 ? index * 0.05 : 0,
              }}
            >
              {/* Project showcase image */}
              <div className={styles.cardContent}>
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 280px, (max-width: 1279px) 320px, 360px"
                  priority={index === 2}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardStackAnimation;
