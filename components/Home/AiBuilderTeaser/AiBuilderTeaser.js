"use client";
import React, { useState, useEffect } from "react";
import styles from "./AiBuilderTeaser.module.scss";
import { motion } from "framer-motion";

export default function AiBuilderTeaser() {
  const [typingText, setTypingText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBlocks, setGeneratedBlocks] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  
  const fullText = "Build a CRM that auto-summarizes calls and drafts follow‑ups.";
  
  useEffect(() => {
    let interval;
    
    if (!isGenerating && !isResetting) {
      interval = setInterval(() => {
        if (currentCharIndex < fullText.length) {
          setTypingText(fullText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Hide cursor and start app generation
          clearInterval(interval);
          setShowCursor(false);
          setTimeout(() => {
            setIsGenerating(true);
            // Reset after showing generation
            setTimeout(() => {
              setIsResetting(true);
              setIsGenerating(false);
              setGeneratedBlocks([]);
              
              // Smooth reset with delay
              setTimeout(() => {
                setCurrentCharIndex(0);
                setTypingText("");
                setShowCursor(true);
                setIsResetting(false);
              }, 300);
            }, 3000);
          }, 800);
        }
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentCharIndex, fullText.length, isGenerating, isResetting]);
  
  useEffect(() => {
    if (isGenerating) {
      const blockGenerationInterval = setInterval(() => {
        setGeneratedBlocks(prev => {
          if (prev.length < 6) {
            return [...prev, prev.length];
          }
          return prev;
        });
      }, 300);
      
      return () => clearInterval(blockGenerationInterval);
    }
  }, [isGenerating]);
  
  return (
    <section className={styles.wrapper} aria-label="AI Builder Coming Soon">
      <div className="container">
        <div className={styles.card + " glass gradient-border"}>
          <div className={styles.headerRow}>
            <span className="badge-neon">Coming Soon</span>
            <div className={styles.glowDot} aria-hidden="true" />
          </div>

          <div className={styles.contentRow}>
            <div className={styles.copy}>
              <h2>Lovable-style AI App Builder</h2>
              <p className="subtitle">
                Give a prompt. We assemble a real, secure MVP — UI, backend,
                database, auth, and AI features — in minutes. Launch-ready,
                built for speed and polish.
              </p>

              <motion.div 
                className={styles.promptBox + " glass"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.promptPill}>
                  <span>
                    &ldquo;{typingText}
                    {showCursor && (
                      <motion.span
                        className={styles.cursor}
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      >
                        |
                      </motion.span>
                    )}
                    &rdquo;
                  </span>
                </div>
                <motion.div 
                  className={styles.fakeInput}
                  animate={isGenerating ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.6, repeat: isGenerating ? Infinity : 0 }}
                >
                  <motion.div 
                    className={styles.placeholderBar} 
                    animate={isGenerating ? { opacity: [0.3, 0.8, 0.3] } : {}}
                    transition={{ duration: 1, repeat: isGenerating ? Infinity : 0 }}
                  />
                  <motion.div 
                    className={styles.placeholderBar} 
                    animate={isGenerating ? { opacity: [0.3, 0.8, 0.3] } : {}}
                    transition={{ duration: 1, repeat: isGenerating ? Infinity : 0, delay: 0.2 }}
                  />
                  <motion.div 
                    className={styles.placeholderBarShort} 
                    animate={isGenerating ? { opacity: [0.3, 0.8, 0.3] } : {}}
                    transition={{ duration: 1, repeat: isGenerating ? Infinity : 0, delay: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            </div>

            <div className={styles.preview}>
              <motion.div
                className={styles.previewWindow + " glass"}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                animate={isGenerating ? { 
                  boxShadow: [
                    "0 0 20px rgba(124, 108, 255, 0.3)",
                    "0 0 40px rgba(124, 108, 255, 0.6)",
                    "0 0 20px rgba(124, 108, 255, 0.3)"
                  ]
                } : {}}
              >
                <div className={styles.windowTop}>
                  <motion.span 
                    animate={isGenerating ? { backgroundColor: ["#ff5f56", "#ffbd2e", "#ff5f56"] } : {}}
                    transition={{ duration: 0.8, repeat: isGenerating ? Infinity : 0 }}
                  />
                  <motion.span 
                    animate={isGenerating ? { backgroundColor: ["#ffbd2e", "#27ca3f", "#ffbd2e"] } : {}}
                    transition={{ duration: 0.8, repeat: isGenerating ? Infinity : 0, delay: 0.2 }}
                  />
                  <motion.span 
                    animate={isGenerating ? { backgroundColor: ["#27ca3f", "#ff5f56", "#27ca3f"] } : {}}
                    transition={{ duration: 0.8, repeat: isGenerating ? Infinity : 0, delay: 0.4 }}
                  />
                </div>

                <div className={styles.windowBody}>
                  <div className={styles.grid}>
                    <motion.div 
                      key="block-large"
                      className={styles.blockLarge}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: generatedBlocks.includes(0) ? 1 : 0.3,
                        scale: generatedBlocks.includes(0) ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    />
                    <motion.div 
                      key="block-1"
                      className={styles.block}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: generatedBlocks.includes(1) ? 1 : 0.3,
                        scale: generatedBlocks.includes(1) ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.1 }}
                    />
                    <motion.div 
                      key="block-2"
                      className={styles.block}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: generatedBlocks.includes(2) ? 1 : 0.3,
                        scale: generatedBlocks.includes(2) ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 }}
                    />
                    <motion.div 
                      key="block-wide"
                      className={styles.blockWide}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: generatedBlocks.includes(3) ? 1 : 0.3,
                        scale: generatedBlocks.includes(3) ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.3 }}
                    />
                    <motion.div 
                      key="block-4"
                      className={styles.block}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: generatedBlocks.includes(4) ? 1 : 0.3,
                        scale: generatedBlocks.includes(4) ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.4 }}
                    />
                    <motion.div 
                      key="block-5"
                      className={styles.block}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ 
                        opacity: generatedBlocks.includes(5) ? 1 : 0.3,
                        scale: generatedBlocks.includes(5) ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.5 }}
                    />
                  </div>
                </div>

                <motion.div 
                  className={styles.ribbon}
                  animate={isGenerating ? {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 4px 15px rgba(124, 108, 255, 0.3)",
                      "0 8px 25px rgba(124, 108, 255, 0.5)",
                      "0 4px 15px rgba(124, 108, 255, 0.3)"
                    ]
                  } : {}}
                  transition={{ duration: 1, repeat: isGenerating ? Infinity : 0 }}
                >
                  {isGenerating ? "Generating..." : "Preview"}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bgOrbs} aria-hidden="true">
        <div className={styles.orbA} />
        <div className={styles.orbB} />
        <div className={styles.orbC} />
      </div>
    </section>
  );
}
