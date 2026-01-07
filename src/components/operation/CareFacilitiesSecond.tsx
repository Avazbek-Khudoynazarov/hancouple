"use client";

import styles from "./CareFacilitiesSecond.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function CareFacilitiesSecond() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        {language === "KOR" ? (
          <>
            <p className={styles.subtitle}>
              불빛 하나, 온기 하나에도 <br className={styles.vision} /> 책임이
              따릅니다.
            </p>
            <h2 className={styles.mainTitle}>
              작은 주의와 관리가 <br className={styles.vision} /> 모두의 평안을
              만듭니다.
            </h2>
          </>
        ) : (
          <>
            <p className={styles.subtitle}>
              Every light, every source of warmth, carries responsibility.
            </p>
            <h2 className={styles.mainTitle}>
              Small acts of care and attention
              <br className={styles.vision} /> create a safe environment for
              everyone.
            </h2>
          </>
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
                  피크 부하와 24시간 냉난방,
                  <br />
                  난방·전열기기 사용으로 전기 요금 급등
                </>
              ) : (
                <>
                  Peak loads, 24-hour heating/cooling, and heating/electric
                  appliance
                  <br />
                  usage cause electricity bills to surge.
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
                  멀티탭 과부하, 산소장치실명,
                  <br />
                  세탁실 과열 등으로 화재 위험 발생
                </>
              ) : (
                <>
                  Fire risks arising from power strip overloads, oxygen device
                  overheating,
                  <br />
                  and laundry room overheating.
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
              <b>차단기별 부하를 체한</b>하고 <br className={styles.vision} />{" "}
              <b>야간 부하를 분산</b>하며, 누전과 절연저항을
              <br />
              정기 점검하고
              <b>
                차단기 모니터링과 <br className={styles.vision} /> 야간 알람
              </b>
              으로 사고를 예방합니다.
            </p>
          ) : (
            <p className={styles.bottomDescription}>
              <b>Limit load per circuit breaker, distribute nighttime loads,</b>{" "}
              conduct regular
              <br className={styles.vision} /> leakage current and insulation
              resistance checks, and prevent accidents through
              <br />
              <b>circuit breaker monitoring and nighttime alarms.</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
