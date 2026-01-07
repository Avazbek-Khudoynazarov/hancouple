"use client";

import { useState, useEffect } from "react";
import styles from "./AkigoMessage.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AkigoMessage() {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Akigo's Message</h3>
        <h1 className={styles.title}>
          {language === "KOR" ? (
            <>
              스마트 전력분석 솔루션
              <br />
              <span className={styles.highlight}>아끼고(Akigo)</span>가 지향하는
              메시지
            </>
          ) : (
            <>
              The Messages our Smart Power Analysis Solution,
              <br />
              <span className={styles.highlight}>Akigo,</span> Aims to Deliver
            </>
          )}
        </h1>

        <div className={styles.diagramContainer}>
          <img
            src={
              isMobile
                ? "/assets/introduction/mobImage.png"
                : language === "KOR"
                ? "/assets/introduction/akigo2.png"
                : "/assets/introduction/akigoEng.png"
            }
            alt="Akigo Message Diagram"
            className={styles.diagram}
          />
        </div>
      </div>
    </div>
  );
}
