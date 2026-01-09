"use client";

import { useState, useEffect } from "react";
import styles from "./CareFacilities.module.css";
import CareFacilitiesSecond from "./CareFacilitiesSecond";
import { useLanguage } from "@/context/LanguageContext";

export default function CareFacilities() {
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
              ? "전력과 안전을 한눈에"
              : "Power and Safety at a Glance"}
          </span>
          <h2 className={styles.mainTitle}>
            {language === "KOR"
              ? "요양시설 · 장애인복지시설"
              : "Care Facilities"}
          </h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img
            src={
              isMobile
                ? language === "KOR"
                  ? "/assets/operation/mobile/first1.png"
                  : "/assets/operation/mobile/first1Eng.png"
                : language === "KOR"
                ? "/assets/operation/message1.png"
                : "/assets/operation/message1Eng.png"
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
                    따뜻해야 할 공간이,
                    <br className={styles.vision} /> 순식간에 위험해질 수
                    있습니다.
                  </h3>
                  <p className={styles.bottomDescription}>
                    무심코 지나친 콘센트 하나, 오래 켜둔 전열기 하나가{" "}
                    <br className={styles.vision} /> 큰 피해로 이어집니다.
                    <br className={styles.vision2} />
                    요양시설의 전기 사용, <br className={styles.vision} />{" "}
                    점식의 불상도 화재로 변질 수 있습니다.
                  </p>
                </>
              ) : (
                <>
                  <h3 className={styles.bottomTitle}>
                    A space meant to be warm
                    <br className={styles.vision} /> can become dangerous in an
                    instant.
                  </h3>
                  <p className={styles.bottomDescription}>
                    A single overlooked outlet or a single heating appliance
                    left on too long
                    <br className={styles.vision} /> can lead to major damage.
                    <br className={styles.vision2} />
                    Electricity use in nursing facilities
                    <br className={styles.vision} /> even a moment's inattention
                    can spark a fire. 
                  </p>
                </>
              )}
            </div>

            <div className={styles.emphasisText}>
              {language === "KOR" ? (
                <p className={styles.emphasisLine}>
                  <strong>
                    입소자의 안전, <br className={styles.vision} /> 시설의
                    일상을 지키기 위한 관리
                  </strong>
                  가 필요합니다.
                </p>
              ) : (
                <p className={styles.emphasisLine}>
                  <strong>
                    Careful management{" "}
                    <b style={{ fontWeight: 400 }}> is necessary to</b> protect
                    <br className={styles.vision} /> residents&apos; safety and
                    safeguard daily operations.
                  </strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <CareFacilitiesSecond />
    </>
  );
}
