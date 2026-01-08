"use client";

import { useState, useEffect } from "react";
import styles from "./ShoppingMall.module.css";
import ShoppingMallSecond from "./ShoppingMallSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function ShoppingMall() {
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
              ? "안전한 전력, 멈춤없는 쇼핑"
              : "Safe power, uninterrupted shopping"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR"
              ? "대형 쇼핑몰"
              : "Shopping Malls & Public Facilities"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? language === "KOR"
                  ? "/assets/operation/mobile/sixth1.png"
                  : "/assets/operation/mobile/sixth1Eng.png"
                : language === "KOR"
                ? "/assets/operation/message6.png"
                : "/assets/operation/message6Eng.png"
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
                    수많은 발길이 모이는 곳, 전력 안정이 곧 신뢰입니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    대형 쇼핑몰의 에스컬레이터, 전광판, 냉난방 <br /> 모든 전력은
                    고객의 안전과 직결됩니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    Where countless footsteps gather, power stability is trust
                    itself.
                  </h3>
                  <p className={styles.bottomDescription}>
                    All power for escalators, electronic displays, and HVAC in
                    large shopping malls
                    <br /> directly impacts customer safety.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  쇼핑몰 전체의 전력 흐름을 <strong>안정적으로 지켜야</strong>
                  합니다.
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  The entire mall&apos;s power flow{" "}
                  <strong>must be maintained stably.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <ShoppingMallSecond />
    </>
  );
}
