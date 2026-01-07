"use client";

import { useState, useEffect } from "react";
import styles from "./Manufacturing.module.css";
import ManufacturingSecond from "./ManufacturingSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function Manufacturing() {
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
              ? "안정된 설비, 멈춤 없는 생산"
              : "Stable equipment, uninterrupted production"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR" ? "제조업 공장" : "Manufacturing Plants"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? "/assets/operation/mobile/third1.png"
                : language === "KOR"
                ? "/assets/operation/message3.png"
                : "/assets/operation/message3Eng.png"
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
                    전력은 생산의 힘이자, 잠재된 위험입니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    수많은 설비가 돌아가는 제조현장, <br /> 작은 전류 불안정이
                    수억 원의 손실로 이어집니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    Power is the force of production, yet it also holds latent
                    risks.
                  </h3>
                  <p className={styles.bottomDescription}>
                    At manufacturing sites where countless pieces of equipment
                    operate,
                    <br /> even minor electrical instability can lead to losses
                    totaling hundreds of millions of won.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  안정적인 전력 관리가 <strong>곧 생산 효율입니다.</strong>
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  Stable power management <strong>is production efficiency.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <ManufacturingSecond />
    </>
  );
}
