"use client";
import React from "react";
import styles from "./Logo.module.scss";

export default function Logo({ size = "default" }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <span className={styles.logoText}>nixpexel.dev</span>
    </div>
  );
}
