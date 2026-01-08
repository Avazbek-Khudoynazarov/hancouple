"use client";

import { useState, useEffect } from "react";
import styles from "./Camping.module.css";
import CampingSecond from "./CampingSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function Camping() {
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
              ? "자동제어로 편안한 캠핑"
              : "Automatic control for comfortable camping"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR"
              ? "캠핑장 · 야영장"
              : "Campground & Camping Site Facilities"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? language === "KOR"
                  ? "/assets/operation/mobile/seventh1.png"
                  : "/assets/operation/mobile/seventh1Eng.png"
                : language === "KOR"
                ? "/assets/operation/message7.png"
                : "/assets/operation/message7Eng.png"
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
                    방심하는 순간, 캠핑의 추억을 바꿀 수 있습니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    릴선의 과열, 야외 콘센트의 누전 <br /> 작은 부주의가 큰 사고로
                    이어집니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    A moment of carelessness can change your camping memories.
                  </h3>
                  <p className={styles.bottomDescription}>
                    Overheating extension cords, electrical leaks from outdoor
                    outlets
                    <br /> minor oversights lead to major accidents.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  안전이 지켜질 때, <strong>캠핑의 즐거움도 이어집니다.</strong>
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  When safety is ensured,{" "}
                  <strong>the joy of camping continues.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <CampingSecond />
    </>
  );
}
