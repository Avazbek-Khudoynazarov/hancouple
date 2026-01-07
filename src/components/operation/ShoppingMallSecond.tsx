"use client";

import styles from "./ShoppingMallSecond.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ShoppingMallSecond() {
  const { language } = useLanguage();
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        {language === "KOR" ? (
          <p className={styles.subtitle}>
            하루 수천 명이 드나드는 <br className={styles.vision} />
            공간일수록
            <br />
            <b>
              전력의 &apos;안정&apos;은 <br className={styles.vision} />
              가장 확실한 &apos;서비스&apos;
            </b>
            입니다.
          </p>
        ) : (
          <p className={styles.subtitle}>
            In spaces frequented by thousands daily,
            <br />{" "}
            <b>
              power &apos;stability&apos; is the most reliable
              &apos;service&apos;.
            </b>
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
                  냉난방·에스컬레이터·대형 주차장 설비 등 <br /> 대규모 설비의
                  상시가동으로 <br />
                  전력 소모 급증
                </>
              ) : (
                <>
                  Constant operation of large-scale equipment such as HVAC
                  systems,
                  <br /> escalators, and ample parking facilities results in a
                  sharp increase
                  <br /> in power consumption.
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
                  에스컬레이터 과열, 전광판 분전반 화재 등 <br /> 집중 부하로
                  인한 과열·누전 사고 다수 발생
                </>
              ) : (
                <>
                  Numerous incidents of overheating and electrical leakage,
                  <br /> such as escalator overheating and fires in electronic
                  display distribution
                  <br /> panels, occur due to concentrated loads.
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
              <b>
                피크 시간대 전력 분산과 <br className={styles.vision} />
                설비 로테이션
              </b>
              으로 과부하를 줄이고 <br className={styles.vision} />
              대규모 피해를 미리 차단합니다.
            </p>
          ) : (
            <p className={styles.bottomDescription}>
              <b>Peak-time power distribution and equipment rotation</b> reduce
              overload
              <br /> and prevent large-scale damage in advance.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
