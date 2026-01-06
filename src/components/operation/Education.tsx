"use client";

import { useState, useEffect } from "react";
import styles from "./Education.module.css";
import EducationSecond from "./EducationSecond";

export default function Education() {
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
            안전한 전력, 안정된 학습
          </span>
          <h2 className={styles.mainTitle}>초 ·중 ·고 · 대학교</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? "/assets/operation/mobile/fourth1.png"
                : "/assets/operation/message4.png"
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
              <h3 className={styles.bottomTitle}>
                학교의 전기는 학생들의 안전한 학습 환경을 지키는 기반입니다.
              </h3>
              <p className={styles.bottomDescription}>
                실험실과 기숙사, 체육관까지 <br /> 모든 곳에서 안전은 놓칠 수
                없습니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                작은 전기적 이상 하나가,{" "}
                <strong>학교의 하루를 바꿉니다.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <EducationSecond />
    </>
  );
}
