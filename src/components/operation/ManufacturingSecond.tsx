"use client";

import styles from "./ManufacturingSecond.module.css";

export default function ManufacturingSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          순차제어, 열화상 모니터링, <br className={styles.vision} />
          역률보정으로{" "}
          <b>제조업 공장의 <br className={styles.vision} />리스크를</b>
          줄이세요.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              대형 모터, 용접기, 냉동설비의 동시 가동과 <br /> 높은 기동전류로
              인해 전력 피크 부하가 발생하고, <br /> 전기요금이 급격히 상승
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              모터 과열이나 용접 불꽃으로 인한 화재,
              <br /> 배선트레이의 과열로 이어지는 전기적 사고
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>기동 순차제어로 전력 부하를 분산</b>하고,{" "}
            <br className={styles.vision} />
            <b>열화상 모니터링과 방폭설비</b>로 <br className={styles.vision} />
            과열·화재를 예방합니다.
            <br />
            또한 <b>VFD와 역률보정</b>으로 <br className={styles.vision} />
            에너지 효율과 설비 안정성을 높입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
