"use client";

import styles from "./ShoppingMallSecond.module.css";

export default function ShoppingMallSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          하루 수천 명이 드나드는 공간일수록 <br />{" "}
          <b>전력의 ‘안정’은 가장 확실한 ‘서비스’</b>입니다.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              냉난방·에스컬레이터·대형 주차장 설비 등 <br /> 대규모 설비의
              상시가동으로 <br />
              전력 소모 급증
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              에스컬레이터 과열, 전광판 분전반 화재 등 <br /> 집중 부하로 인한
              과열·누전 사고 다수 발생
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>피크 시간대 전력 분산과 설비 로테이션</b>으로 <br /> 과부하를
            줄이고 대규모 피해를 미리 차단합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
