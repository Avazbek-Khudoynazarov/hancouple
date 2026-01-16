"use client";

import styles from "./ElectricVehicleSecond.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ElectricVehicleSecond() {
  const { language } = useLanguage();
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        {language === "KOR" ? (
          <p className={styles.subtitle}>
            한 번의 충전으로 <br className={styles.vision} />
            수많은 일상이 시작됩니다.
            <br /> <b>그 시작이 언제나 안전하도록,</b>{" "}
            <br className={styles.vision} />
            안정성과 효율을 동시에 잡으세요.
          </p>
        ) : (
          <p className={styles.subtitle}>
            Countless daily routines begin with a single charge.
            <br /> <b>Ensure that the beginning is always safe,</b>
            <br /> achieve both stability and efficiency.
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
                  급속충전으로 인한 고전류 부하와 <br /> 충전시간대 집중 사용,{" "}
                  <br /> 냉방·환기 설비가 동반되며 전력 사용량이 증가
                </>
              ) : (
                <>
                  High-current loads from rapid charging, concentrated usage
                  <br /> during peak charging times, air conditioning, and
                  ventilation
                  <br /> systems increase power consumption.
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
                  지하주차장과 같은 밀폐된 공간에서의 <br /> 고전류 충전으로
                  과열·누전이 발생하며 <br /> 대형 화재로 이어지는 사례 증가
                </>
              ) : (
                <>
                  Cases of overheating and leakage during high-current charging
                  <br /> in enclosed spaces, such as underground parking lots,
                  <br /> are on the rise, leading to large-scale fires.
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
              <b>실시간 점검</b>으로 접촉저항과 열화를
              <br className={styles.vision} /> 예방합니다. 온도와 전류를&nbsp;
              <b>실시간 모니터링</b>하여 <br />
              이상 발생 시 즉시 차단되는 안전 충전 환경을 구현하세요.
            </p>
          ) : (
            <p className={styles.bottomDescription}>
              Real-time inspection prevents contact{" "}
              <br className={styles.vision} />
              resistance and deterioration.
              <br /> Implement a safe charging environment with{" "}
              <br className={styles.vision} />
              <b>real-time monitoring</b> of temperature <br /> and current,
              ensuring immediate <br className={styles.vision} /> disconnection
              upon any anomaly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
