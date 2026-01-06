"use client";

import styles from "./Process.module.css";

export default function Process() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Process</span>
          <h2 className={styles.sectionTitle}>진행 절차 및 업무협의</h2>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/assets/contact/lastImg.png"
            alt="진행 절차"
            className={`${styles.processImage} ${styles.imageDesktop}`}
            draggable={false}
          />
          <img
            src="/assets/contact/mobile/lastImg.png"
            alt="진행 절차"
            className={`${styles.processImage} ${styles.imageMobile}`}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
