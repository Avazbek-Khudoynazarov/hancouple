"use client";

import { useState, useEffect } from "react";
import styles from "./Medical.module.css";
import MedicalSecond from "./MedicalSecond";

export default function Medical() {
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
            중요 설비 전력 실시간 관리
          </span>
          <h2 className={styles.mainTitle}>병원 · 의료기관</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? "/assets/operation/mobile/second1.png"
                : "/assets/operation/message2.png"
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
              <h3 className={styles.bottomTitle}>
                한 순간의 불씨가 병원의 하루를 바꿉니다.
              </h3>
              <p className={styles.bottomDescription}>
                작은 전기적 이상 하나가 병원의 하루를 멈출 수 있습니다.
                <br /> 의료기관 화재의 대부분은 전기적 원인에서 시작됩니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                병원 곳곳의 전력 사용, <strong>놓치면 위험이 됩니다.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <MedicalSecond />
    </>
  );
}
