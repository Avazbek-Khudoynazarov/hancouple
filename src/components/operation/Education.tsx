"use client";

import { useState, useEffect } from "react";
import styles from "./Education.module.css";
import EducationSecond from "./EducationSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
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
              ? "안전한 전력, 안정된 학습"
              : "Safe power, stable learning"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR"
              ? "초 ·중 ·고 · 대학교"
              : "Schools & Universities"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? "/assets/operation/mobile/fourth1.png"
                : language === "KOR"
                ? "/assets/operation/message4.png"
                : "/assets/operation/message4Eng.png"
            }
            alt=""
            draggable={false}
          />
        </div>

        <div
          className={`${styles.backgroundImage} ${
            isMobile ? styles.backgroundImageMobile : ""
          }`}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              {language === "KOR" ? (
                <>
                  <h3 className={styles.bottomTitle}>
                    학교의 전기는 학생들의 안전한 학습 환경을 지키는 기반입니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    실험실과 기숙사, 체육관까지 <br /> 모든 곳에서 안전은 놓칠
                    수 없습니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    A school&apos;s electricity is the foundation for ensuring{" "}
                    <br /> a safe learning environment for students.
                  </h3>
                  <p className={styles.bottomDescription}>
                    Safety cannot be compromised
                    <br /> anywhere from laboratories and dormitories to
                    gymnasiums.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  작은 전기적 이상 하나가,{" "}
                  <strong>학교의 하루를 바꿉니다.</strong>
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  A single slight electrical anomaly can{" "}
                  <strong>change the entire day at school.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <EducationSecond />
    </>
  );
}
