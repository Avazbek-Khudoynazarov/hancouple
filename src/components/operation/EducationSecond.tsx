"use client";

import styles from "./EducationSecond.module.css";

export default function EducationSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          부하 관리와 전열기 알람으로 <br className={styles.vision} />
          위험을 줄이고,{" "}
          <b>효율적인 전력 운영</b>으로 <br className={styles.vision} />
          쾌적한 학교를 유지하세요.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              교실·실험실의 냉난방 설비와 다수의 ICT기기,
              <br /> 체육관·강당의 전력 부하로 인해 <br /> 사용 전력이 집중되며
              요금이 상승
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              실험실 전열기 과열로 인한 화재와 <br /> 기숙사 히터의 과부하로
              인한 <br />
              전기적 사고 위험 발생
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>시간표 연동 부하제어와 전열기 관리</b>로 <br className={styles.vision} />
            전력 부하와 화재 위험을 줄이고,
            <br />
            <b>효율적인 전력 운영</b>으로 <br className={styles.vision} />
            학생 안전과 에너지 절감을 실현합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
