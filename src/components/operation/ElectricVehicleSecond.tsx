"use client";

import styles from "./ElectricVehicleSecond.module.css";

export default function ElectricVehicleSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          한 번의 충전으로 <br className={styles.vision} />
          수많은 일상이 시작됩니다.{" "}
          <b>그 시작이 언제나 안전하도록,</b> <br className={styles.vision} />
          안정성과 효율을 동시에 잡으세요.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              급속충전으로 인한 고전류 부하와 <br /> 충전시간대 집중 사용,{" "}
              <br /> 냉방·환기 설비가 동반되며 전력 사용량이 증가
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              지하주차장과 같은 밀폐된 공간에서의 <br /> 고전류 충전으로
              과열·누전이 발생하며 <br /> 대형 화재로 이어지는 사례 증가
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>DC 누설 대응형 차단기(Type B RCD)와 <br className={styles.vision} />
            환기·스프링클러</b>를 통해 화재 위험을 최소화하고,
            <br className={styles.vision} />
            <b>케이블의 정기 점검</b>으로 접촉저항과 열화를 예방합니다.
            <br />
            온도와 전류를 실시간 모니터링하여 <br className={styles.vision} />
            이상 발생 시 즉시 차단되는 안전 충전 환경을 구현하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
