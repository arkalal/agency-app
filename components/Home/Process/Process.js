"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiPlay, FiPause, FiSearch, FiTrendingUp, FiUsers, FiTarget } from "react-icons/fi";
import { FaPencilRuler, FaPalette, FiLayers } from "react-icons/fa";
import { RiCodeSSlashLine, RiRobot2Line, RiDatabase2Line, RiTestTubeLine } from "react-icons/ri";
import { HiRocketLaunch, HiChartBar, HiCog } from "react-icons/hi2";
import { MdAutoGraph, MdFeedback, MdSpeed } from "react-icons/md";
import styles from "./Process.module.scss";

const processSteps = [
  {
    id: 1,
    name: 'Discover',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your vision, market research, and user needs to define a clear roadmap.',
    details: [
      'Competitor analysis & market research',
      'User persona development',
      'Feature prioritization & MVP scope',
      'Technical architecture planning'
    ],
    duration: '2-3 days',
    color: '#7c6cff'
  },
  {
    id: 2,
    name: 'Design',
    title: 'UX/UI Design & Prototyping',
    description: 'Creating intuitive, beautiful interfaces that users love and convert.',
    details: [
      'Wireframing & user flow mapping',
      'High-fidelity UI design',
      'Interactive prototypes',
      'Design system creation'
    ],
    duration: '3-4 days',
    color: '#4ea8ff'
  },
  {
    id: 3,
    name: 'Build',
    title: 'Development & AI Integration',
    description: 'Elite engineers build your MVP with modern tech stack and AI-powered features.',
    details: [
      'Frontend & backend development',
      'AI model integration',
      'Database setup & APIs',
      'Real-time testing & QA'
    ],
    duration: '10-12 days',
    color: '#00d0ff'
  },
  {
    id: 4,
    name: 'Launch',
    title: 'Deployment & Go-Live',
    description: 'Ship your product to production with monitoring, analytics, and SEO ready.',
    details: [
      'Production deployment',
      'Performance optimization',
      'Analytics & monitoring setup',
      'SEO & meta configuration'
    ],
    duration: '2-3 days',
    color: '#10b981'
  },
  {
    id: 5,
    name: 'Scale',
    title: 'Growth & Iteration',
    description: 'Continuous improvement based on user feedback and market validation.',
    details: [
      'User feedback analysis',
      'Feature iterations',
      'Performance scaling',
      'Ongoing support & updates'
    ],
    duration: 'Ongoing',
    color: '#ff6b9d'
  }
];

export default function Process({ id }){
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const activeStepRef = useRef(0);

  // Keep refs in sync with state
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      progressRef.current += 1;
      
      if (progressRef.current >= 100) {
        // Advance to next step
        const nextStep = (activeStepRef.current + 1) % processSteps.length;
        setActiveStep(nextStep);
        progressRef.current = 0;
        setProgress(0);
      } else {
        setProgress(progressRef.current);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPlaying]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentStep = processSteps[activeStep];

  return (
    <section className={`container ${styles.wrap}`} id={id}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Our Process</h2>
        <p className={styles.subtitle}>Experience how we transform your idea into a market-ready product</p>
      </motion.div>

      <div className={styles.processSimulator}>
        {/* Step Navigator */}
        <div className={styles.stepNav}>
          {processSteps.map((step, index) => (
            <motion.button
              key={step.id}
              className={`${styles.stepButton} ${activeStep === index ? styles.active : ''} ${activeStep > index ? styles.completed : ''}`}
              onClick={() => handleStepClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.stepButtonInner}>
                <div className={styles.stepNumber}>
                  {activeStep > index ? <FiCheck /> : index + 1}
                </div>
                <div className={styles.stepName}>{step.name}</div>
              </div>
              {activeStep === index && (
                <motion.div
                  className={styles.progressBar}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content Display */}
        <div className={styles.contentArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className={styles.stepContent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.contentHeader}>
                <div>
                  <div className={styles.stepBadge} style={{ background: currentStep.color }}>
                    Step {currentStep.id}
                  </div>
                  <h3 className={styles.stepTitle}>{currentStep.title}</h3>
                  <p className={styles.stepDescription}>{currentStep.description}</p>
                </div>
                <div className={styles.duration}>
                  <div className={styles.durationLabel}>Timeline</div>
                  <div className={styles.durationValue}>{currentStep.duration}</div>
                </div>
              </div>

              <div className={styles.detailsList}>
                {currentStep.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.detailItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className={styles.checkIcon}>
                      <FiCheck />
                    </div>
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </div>

              <div className={styles.visualization}>
                {activeStep === 0 && (
                  <div className={styles.discoverViz}>
                    <motion.div
                      className={styles.iconOrbit}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div className={styles.orbitIcon} style={{ top: '0%', left: '50%' }}>
                        <FiSearch />
                      </motion.div>
                      <motion.div className={styles.orbitIcon} style={{ top: '50%', left: '100%' }}>
                        <FiUsers />
                      </motion.div>
                      <motion.div className={styles.orbitIcon} style={{ top: '100%', left: '50%' }}>
                        <FiTarget />
                      </motion.div>
                      <motion.div className={styles.orbitIcon} style={{ top: '50%', left: '0%' }}>
                        <FiTrendingUp />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className={styles.centerIcon}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiSearch size={32} />
                    </motion.div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className={styles.designViz}>
                    <div className={styles.designCanvas}>
                      {/* Canvas with drawing elements */}
                      <motion.div className={styles.canvasArea}>
                        {/* Animated artboards */}
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className={styles.artboard}
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              x: 0,
                              y: [0, -5, 0]
                            }}
                            transition={{ 
                              delay: i * 0.2,
                              y: { duration: 2, repeat: Infinity, delay: i * 0.3 }
                            }}
                            style={{
                              background: `linear-gradient(135deg, ${currentStep.color}15, ${currentStep.color}30)`,
                              left: `${i * 25}px`,
                              zIndex: 3 - i
                            }}
                          >
                            {/* Grid pattern */}
                            <div className={styles.gridPattern} />
                            {/* Elements being designed */}
                            <motion.div 
                              className={styles.designElement}
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Color palette */}
                      <div className={styles.colorPalette}>
                        {['#4ea8ff', '#7c6cff', '#00d0ff', '#ff6b9d'].map((color, i) => (
                          <motion.div
                            key={color}
                            className={styles.colorSwatch}
                            style={{ background: color }}
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>

                      {/* Drawing tool cursor */}
                      <motion.div
                        className={styles.designCursor}
                        animate={{
                          x: [0, 60, 30, 80, 0],
                          y: [0, 40, 80, 20, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaPalette size={16} />
                      </motion.div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className={styles.buildViz}>
                    <div className={styles.codeEditor}>
                      {/* Editor Window */}
                      <div className={styles.editorWindow}>
                        <div className={styles.editorHeader}>
                          <div className={styles.editorDots}>
                            <span /><span /><span />
                          </div>
                          <div className={styles.editorTitle}>App.js</div>
                        </div>
                        <div className={styles.editorBody}>
                          {/* Code lines with typing animation */}
                          {[1, 2, 3, 4, 5].map((line, i) => (
                            <motion.div
                              key={line}
                              className={styles.codeLine}
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: '100%', opacity: 1 }}
                              transition={{ delay: i * 0.3, duration: 0.5 }}
                            >
                              <span className={styles.lineNumber}>{line}</span>
                              <span className={styles.codeText}>
                                {line === 1 && <><span className={styles.keyword}>import</span> React <span className={styles.keyword}>from</span> <span className={styles.string}>&apos;react&apos;</span></>}
                                {line === 2 && <><span className={styles.keyword}>const</span> <span className={styles.function}>App</span> = () =&gt; {'{'}</>}
                                {line === 3 && <>  <span className={styles.keyword}>return</span> <span className={styles.tag}>&lt;div&gt;</span></>}
                                {line === 4 && <>    <span className={styles.tag}>&lt;h1&gt;</span>Hello AI<span className={styles.tag}>&lt;/h1&gt;</span></>}
                                {line === 5 && <>  <span className={styles.tag}>&lt;/div&gt;</span></>}
                              </span>
                              {i === 4 && (
                                <motion.span
                                  className={styles.cursor}
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                  |
                                </motion.span>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Building indicators */}
                      <div className={styles.buildingIndicators}>
                        <motion.div className={styles.buildIndicator}>
                          <RiCodeSSlashLine size={16} />
                          <motion.div 
                            className={styles.buildProgress}
                            animate={{ width: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                        <motion.div className={styles.buildIndicator}>
                          <RiRobot2Line size={16} />
                          <motion.div 
                            className={styles.buildProgress}
                            animate={{ width: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className={styles.launchViz}>
                    <div className={styles.launchSequence}>
                      {/* Countdown */}
                      <motion.div 
                        className={styles.countdown}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <HiRocketLaunch size={40} />
                      </motion.div>
                      
                      {/* Server windows deploying */}
                      <div className={styles.deploymentWindows}>
                        {['Frontend', 'Backend', 'Database'].map((item, i) => (
                          <motion.div
                            key={item}
                            className={styles.deployWindow}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.4, duration: 0.5 }}
                          >
                            <div className={styles.deployHeader}>
                              <motion.div 
                                className={styles.deployStatus}
                                animate={{ 
                                  background: ['#fbbf24', '#10b981'],
                                  scale: [1, 1.2, 1]
                                }}
                                transition={{ delay: i * 0.4 + 1, duration: 0.5 }}
                              />
                              <span>{item}</span>
                            </div>
                            <motion.div 
                              className={styles.deployProgress}
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ delay: i * 0.4 + 0.2, duration: 1.5 }}
                            />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Rocket trail */}
                      <div className={styles.rocketTrail}>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={styles.trailParticle}
                            animate={{
                              y: [0, 60],
                              opacity: [0.8, 0],
                              scale: [1, 0.3]
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              delay: i * 0.15,
                              ease: "easeOut"
                            }}
                            style={{
                              left: `${45 + (i % 2) * 10}%`,
                              background: `linear-gradient(180deg, ${currentStep.color}, transparent)`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className={styles.scaleViz}>
                    <motion.div className={styles.growthChart}>
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <motion.div
                          key={bar}
                          className={styles.chartBar}
                          initial={{ height: 0 }}
                          animate={{ height: `${bar * 20}%` }}
                          transition={{ delay: bar * 0.1, duration: 0.6 }}
                          style={{ background: `linear-gradient(180deg, ${currentStep.color}, ${currentStep.color}99)` }}
                        >
                          <MdAutoGraph className={styles.barIcon} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Play/Pause Control */}
          <button
            className={styles.playPauseButton}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
        </div>
      </div>
    </section>
  )
}
