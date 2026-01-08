"use client";

import { useState, useEffect } from "react";
import styles from "./ElectricVehicle.module.css";
import ElectricVehicleSecond from "./ElectricVehicleSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function ElectricVehicle() {
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
              ? "안전한 충전, 멈춤 없는 이동"
              : "Safe Charging, Uninterrupted Mobility"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR" ? "전기차 충전시설" : "EV Charging Facilities"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? language === "KOR"
                  ? "/assets/operation/mobile/eighth1.png"
                  : "/assets/operation/mobile/eighth1Eng.png"
                : language === "KOR"
                ? "/assets/operation/message8.png"
                : "/assets/operation/message8Eng.png"
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
                    한 순간의 이상 전류가, 수십 대의 차를 위협합니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    급속충전 고전류와 집중 사용으로 <br /> 화재 위험이 높아지고
                    있습니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    A momentary abnormal current threatens dozens of vehicles.
                  </h3>
                  <p className={styles.bottomDescription}>
                    Rapid charging&apos;s high currents and
                    <br /> concentrated usage heighten fire risks.
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  충전의 편리함 뒤에는 언제나
                  <strong>&apos;안전 관리&apos;가 필요합니다.</strong>
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  Behind charging convenience,{" "}
                  <strong>&apos;safety management&apos; is always essential.</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <ElectricVehicleSecond />
    </>
  );
}
