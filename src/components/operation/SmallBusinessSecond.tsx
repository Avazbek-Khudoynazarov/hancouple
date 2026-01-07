"use client";

import styles from "./SmallBusinessSecond.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function SmallBusinessSecond() {
  const { language } = useLanguage();
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        {language === "KOR" ? (
          <p className={styles.subtitle}>
            점포별 회로 알람과 부하 제어로, <br className={styles.vision} />
            화재를 예방하고 <br />
            <b>안정적인 전력 사용</b>으로 <br className={styles.vision} />
            비용까지 절감하세요.
          </p>
        ) : (
          <p className={styles.subtitle}>
            Prevent fires and reduce costs by stabilizing power usage
            <br /> with <b>store-specific circuit alarms and load control.</b>
          </p>
        )}
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              {language === "KOR"
                ? "전기요금 상승 요인"
                : "Factors Driving Rising Electricity Costs"}
            </h3>
            <p className={styles.cardDescription}>
              {language === "KOR" ? (
                <>
                  냉장·냉동 쇼케이스, 간판 조명, 전열기기의 <br /> 장시간
                  사용으로 영업시간 내내 <br /> 전력 부하가 높아지면서 전기요금
                  상승
                </>
              ) : (
                <>
                  Long-term use of refrigerated/frozen display cases,
                  <br /> sign lighting, and heating appliances increases power
                  load
                  <br /> throughout business hours, leading to rising
                  electricity bills.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              {language === "KOR"
                ? "대표 사고 사례"
                : "Representative Reported Cases"}
            </h3>
            <p className={styles.cardDescription}>
              {language === "KOR" ? (
                <>
                  불법 배선으로 인한 누전과
                  <br /> 간판 과열로 발생하는 화재가 <br /> 주요 사고로 이어짐
                </>
              ) : (
                <>
                  Fires caused by electrical leakage from illegal wiring
                  <br /> and sign overheating result in major accidents.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>
            {language === "KOR" ? "예방 및 솔루션" : "Prevention and Solutions"}
          </h3>
          {language === "KOR" ? (
            <p className={styles.bottomDescription}>
              <b>점포별 회로제한과 센서 제어</b>로{" "}
              <br className={styles.vision} />
              과부하와 화재 위험을 예방하고, <br />
              <b>효율적인 전력 관리</b>로 <br className={styles.vision} />
              안전과 비용 절감을 실현합니다.
            </p>
          ) : (
            <p className={styles.bottomDescription}>
              <b>Store-specific circuit limiting and sensor control</b> prevent
              overloads and fire risks,
              <br /> while <b>efficient power management</b> ensures safety and
              cost savings.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
