"use client";

import { useState, useEffect } from "react";
import styles from "./Camping.module.css";
import CampingSecond from "./CampingSecond";

export default function Camping() {
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
          <span className={styles.mainTitleSmall}>자동제어로 편안한 캠핑</span>
          <h2 className={styles.mainTitle}>캠핑장 · 야영장</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? "/assets/operation/mobile/seventh1.png"
                : "/assets/operation/message7.png"
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
                방심하는 순간, 캠핑의 추억을 바꿀 수 있습니다.
              </h3>
              <p className={styles.bottomDescription}>
                릴선의 과열, 야외 콘센트의 누전 <br /> 작은 부주의가 큰 사고로
                이어집니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                안전이 지켜질 때, <strong>캠핑의 즐거움도 이어집니다.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <CampingSecond />
    </>
  );
}
