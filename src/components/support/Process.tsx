"use client";

import styles from "./Process.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Process</span>
          <h2 className={styles.sectionTitle}>
            {language === "KOR"
              ? "진행 절차 및 업무협의"
              : "Project Procedure and Work Consultation"}
          </h2>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={
              language === "KOR"
                ? "/assets/contact/lastImg.png"
                : "/assets/contact/lastImgEng.png"
            }
            alt={language === "KOR" ? "진행 절차" : "Project Procedure"}
            className={`${styles.processImage} ${styles.imageDesktop}`}
            draggable={false}
          />
          <img
            src={
              language === "KOR"
                ? "/assets/contact/mobile/lastImg.png"
                : "/assets/contact/mobile/lastImgEng.png"
            }
            alt={language === "KOR" ? "진행 절차" : "Project Procedure"}
            className={`${styles.processImage} ${styles.imageMobile}`}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
