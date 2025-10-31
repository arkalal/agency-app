"use client";
import React from "react";
import styles from "./NewHeroCards.module.scss";

// Decorative curved lines background
const CurvedLines = () => {
  return (
    <svg className={styles.curvedLines} viewBox="0 0 1100 500" fill="none" preserveAspectRatio="none">
      {/* Top curved line */}
      <path
        d="M 0 150 Q 280 80, 550 120 T 1100 100"
        stroke="rgba(124, 108, 255, 0.12)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Middle curved line */}
      <path
        d="M 0 250 Q 280 180, 550 220 T 1100 200"
        stroke="rgba(124, 108, 255, 0.08)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Bottom curved line */}
      <path
        d="M 0 350 Q 280 280, 550 320 T 1100 300"
        stroke="rgba(124, 108, 255, 0.06)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

// Left cursor with tooltip
const LeftCursor = () => {
  return (
    <div className={styles.leftCursor}>
      <div className={styles.cursorTooltip}>
        <span className={styles.tooltipIcon}>⚡</span>
        <span className={styles.tooltipText}>Lightning Fast</span>
      </div>
      <div className={styles.cursorIcon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
            fill="#1F2937"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.cursorLine}></div>
    </div>
  );
};

// Right cursor with tooltip
const RightCursor = () => {
  return (
    <div className={styles.rightCursor}>
      <div className={styles.cursorTooltip}>
        <span className={styles.tooltipIcon}>🛡️</span>
        <span className={styles.tooltipText}>Zero Risk</span>
      </div>
      <div className={styles.cursorIcon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
            fill="#1F2937"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.cursorLine}></div>
    </div>
  );
};

// Credit limit style card (top left)
const CreditLimitCard = () => {
  return (
    <div className={styles.creditCard}>
      <div className={styles.creditHeader}>
        <span className={styles.creditLabel}>Project Budget</span>
        <span className={styles.creditAmount}>$2,600</span>
      </div>
      <div className={styles.creditProgress}>
        <div className={styles.creditBar}></div>
      </div>
      <div className={styles.creditPercentage}>48%</div>
    </div>
  );
};

// Transfer success card (bottom left)
const SuccessCard = () => {
  return (
    <div className={styles.successCard}>
      <div className={styles.successContent}>
        <div className={styles.successIcon}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" fill="white" opacity="0.25"/>
            <path d="M8 14L12 18L20 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.successText}>Launch Ready!</div>
      </div>
      <div className={styles.avatarCircle}>
        <div className={styles.avatarInner}></div>
      </div>
    </div>
  );
};

// Main gradient card (center - tallest)
const MainGradientCard = () => {
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

// Investment/Balance card (right side)
const BalanceCard = () => {
  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceTop}>
        <span className={styles.balanceTopLabel}>ROI Target</span>
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

// Main component that combines all cards
export default function NewHeroCards() {
  return (
    <div className={styles.cardsContainer}>
      {/* Decorative curved lines background */}
      <CurvedLines />
      
      {/* Left cursor with tooltip */}
      <LeftCursor />
      
      {/* Right cursor with tooltip */}
      <RightCursor />
      
      {/* Left column */}
      <div className={styles.leftColumn}>
        <CreditLimitCard />
        <SuccessCard />
      </div>
      
      {/* Center column - Main gradient card */}
      <div className={styles.centerColumn}>
        <MainGradientCard />
      </div>
      
      {/* Right column */}
      <div className={styles.rightColumn}>
        <BalanceCard />
      </div>
    </div>
  );
}
