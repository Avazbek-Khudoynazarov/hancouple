"use client";

import { useState, useEffect } from "react";
import styles from "./Medical.module.css";
import MedicalSecond from "./MedicalSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function Medical() {
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
    <>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <span className={styles.mainTitleSmall}>
            {language === "KOR"
              ? "중요 설비 전력 실시간 관리"
              : "Real-time Power Management for Key Facilities"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR" ? "병원 · 의료기관" : "Hospitals"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? language === "KOR"
                  ? "/assets/operation/mobile/second1.png"
                  : "/assets/operation/mobile/second1Eng.png"
                : language === "KOR"
                ? "/assets/operation/message2.png"
                : "/assets/operation/second1Eng.png"
            }
            alt=""
            draggable={false}
          />
        </div>

        {/* Background Image */}
        <div
          className={`${styles.backgroundImage} ${
            isMobile ? styles.backgroundImageMobile : ""
          }`}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              {language === "KOR" ? (
                <>
                  <h3 className={styles.bottomTitle}>
                    한 순간의 불씨가 병원의 하루를 바꿉니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    작은 전기적 이상 하나가 병원의 하루를 멈출 수 있습니다.
                    <br /> 의료기관 화재의 대부분은 전기적 원인에서 시작됩니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    A single spark can change a hospital&apos;s entire day.
                  </h3>
                  <p className={styles.bottomDescription}>
                    A single slight electrical anomaly can halt a hospital&apos;s
                    operations.
                    <br /> Most fires in medical institutions originate from
                    electrical causes.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  병원 곳곳의 전력 사용, <strong>놓치면 위험이 됩니다.</strong>
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  Power usage throughout the hospital,{" "}
                  <strong>overlooking it becomes a risk.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <MedicalSecond />
    </>
  );
}
