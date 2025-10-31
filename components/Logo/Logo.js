"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Logo.module.scss";

export default function Logo({ size = "default" }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    // If on home page, scroll to top smoothly
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on other pages, navigate to home
      router.push("/");
    }
  };

  return (
    <div 
      className={`${styles.logo} ${styles[size]}`}
      onClick={handleLogoClick}
      style={{ cursor: "pointer" }}
    >
      <span className={styles.logoText}>nixpexel.dev</span>
    </div>
  );
}
