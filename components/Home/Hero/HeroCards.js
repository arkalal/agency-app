"use client";
import React from "react";
import styles from "./HeroCards.module.scss";

// Concentric arc background - 3 soft arcs radiating from center
const ConcentricArcs = () => {
  return (
    <svg 
      className={styles.arcsBackground} 
      viewBox="0 0 1200 600" 
      fill="none" 
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(124, 108, 255, 0)" />
          <stop offset="50%" stopColor="rgba(124, 108, 255, 0.08)" />
          <stop offset="100%" stopColor="rgba(124, 108, 255, 0)" />
        </linearGradient>
        <linearGradient id="arcGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
          <stop offset="50%" stopColor="rgba(99, 102, 241, 0.06)" />
          <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
        </linearGradient>
        <linearGradient id="arcGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
          <stop offset="50%" stopColor="rgba(139, 92, 246, 0.04)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
        </linearGradient>
      </defs>
      
      {/* Inner arc */}
      <path
        d="M 200 300 Q 400 200, 600 300 T 1000 300"
        stroke="url(#arcGradient1)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      {/* Middle arc */}
      <path
        d="M 100 300 Q 400 150, 600 300 T 1100 300"
        stroke="url(#arcGradient2)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      
      {/* Outer arc */}
      <path
        d="M 0 300 Q 400 100, 600 300 T 1200 300"
        stroke="url(#arcGradient3)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
};

// Static tip tag
const TipTag = ({ side, icon, text }) => {
  return (
    <div className={`${styles.tipTagWrapper} ${styles[side]}`}>
      <div className={styles.tipTag}>
        <span className={styles.tipIcon}>{icon}</span>
        <span className={styles.tipText}>{text}</span>
      </div>
    </div>
  );
};

// Credit/Budget card (top left)
const CreditCard = () => {
  return (
    <div className={styles.creditCard}>
      <div className={styles.creditHeader}>
        <span className={styles.creditLabel}>Project Budget</span>
        <span className={styles.creditAmount}>$2,600</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: "48%" }} />
      </div>
      <div className={styles.creditPercentage}>48%</div>
    </div>
  );
};

// Success badge card (bottom left)
const SuccessCard = () => {
  return (
    <div className={styles.successCard}>
      <div className={styles.successIcon}>
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none"
        >
          <circle cx="16" cy="16" r="14" fill="white" opacity="0.2"/>
          <path 
            d="M9 16L14 21L23 11" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.successText}>Launch Ready!</div>
      <div className={styles.avatar}>
        <div className={styles.avatarInner}></div>
      </div>
    </div>
  );
};

// Main gradient card (center, tallest)
const MainCard = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.mainCardHeader}>
        <span className={styles.mainCardBadge}>MVP Package</span>
        <div className={styles.chipIcon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="20" height="20" rx="3" fill="white" opacity="0.25"/>
            <rect x="10" y="10" width="12" height="12" rx="2" fill="white" opacity="0.4"/>
            <line x1="16" y1="10" x2="16" y2="22" stroke="white" strokeWidth="1" opacity="0.3"/>
            <line x1="10" y1="16" x2="22" y2="16" stroke="white" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>
      </div>
      
      <div className={styles.mainCardFooter}>
        <div className={styles.clientDetails}>
          <span className={styles.clientName}>Your SaaS</span>
          <span className={styles.clientDate}>≤21 days</span>
        </div>
        <div className={styles.arrowIcon}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M8 14H20M20 14L15 9M20 14L15 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Balance/ROI card (right side)
const BalanceCard = () => {
  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceHeader}>
        <span className={styles.balanceTopLabel}>ROI TARGET</span>
        <span className={styles.balancePercent}>1,600%</span>
      </div>
      
      <div className={styles.balanceMain}>
        <div className={styles.balanceMainLabel}>Market Value</div>
        <div className={styles.balanceMainAmount}>$43,600</div>
      </div>
      
      <div className={styles.balanceBreakdown}>
        <div className={styles.balanceItem}>
          <div className={styles.balanceItemIcon}>↓</div>
          <div className={styles.balanceItemContent}>
            <div className={styles.balanceItemLabel}>Investment</div>
            <div className={styles.balanceItemValue}>$2,600</div>
          </div>
        </div>
        <div className={styles.balanceItem}>
          <div className={`${styles.balanceItemIcon} ${styles.expenses}`}>↑</div>
          <div className={styles.balanceItemContent}>
            <div className={styles.balanceItemLabel}>Returns</div>
            <div className={styles.balanceItemValue}>$41,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
export default function HeroCards() {
  return (
    <div className={styles.cardsCluster}>
      {/* Concentric arcs background */}
      <ConcentricArcs />
      
      {/* Static tip tags with cursor pointers */}
      <TipTag side="left" icon="⚡" text="Instant Transfers" />
      <TipTag side="right" icon="🛡️" text="Zero Fees" />
      
      {/* Cards grid */}
      <div className={styles.cardsGrid}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <CreditCard />
          <SuccessCard />
        </div>
        
        {/* Center column */}
        <div className={styles.centerColumn}>
          <MainCard />
        </div>
        
        {/* Right column */}
        <div className={styles.rightColumn}>
          <BalanceCard />
        </div>
      </div>
    </div>
  );
}
