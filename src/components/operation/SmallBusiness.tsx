"use client";

import { useState, useEffect } from "react";
import styles from "./SmallBusiness.module.css";
import SmallBusinessSecond from "./SmallBusinessSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function SmallBusiness() {
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
              ? "점포별 회로관리로 안심 영업"
              : "Circuit management per store ensures worry-free operations."}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR"
              ? "전통시장 · 소상공인"
              : "Traditional Markets & SMEs"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? "/assets/operation/mobile/fifth1.png"
                : language === "KOR"
                ? "/assets/operation/message5.png"
                : "/assets/operation/message5Eng.png"
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
                    작은 불씨 하나가, 점포의 일상을 멈출 수 있습니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    복잡한 배선과 오래된 전열기기,
                    <br /> 시장의 하루는 작은 불씨 하나에도 멈출 수 있습니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    A single small spark can halt a store&apos;s daily
                    operations.
                  </h3>
                  <p className={styles.bottomDescription}>
                    Complex wiring and old heating appliances mean a market day
                    <br /> can come to a halt over a single small spark.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  한 곳의 위험이 곧 <strong>전체의 위험</strong>이 됩니다.
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  A hazard in one place becomes{" "}
                  <strong>a hazard for the entire market.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <SmallBusinessSecond />
    </>
  );
}
