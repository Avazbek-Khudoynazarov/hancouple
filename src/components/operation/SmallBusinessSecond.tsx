"use client";

import styles from "./SmallBusinessSecond.module.css";

export default function SmallBusinessSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          점포별 회로 알람과 부하 제어로, <br className={styles.vision} />
          화재를 예방하고{" "}
          <b>안정적인 전력 사용</b>으로 <br className={styles.vision} />
          비용까지 절감하세요.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              냉장·냉동 쇼케이스, 간판 조명, 전열기기의 <br /> 장시간 사용으로
              영업시간 내내 <br /> 전력 부하가 높아지면서 전기요금 상승
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              불법 배선으로 인한 누전과
              <br /> 간판 과열로 발생하는 화재가 <br /> 주요 사고로 이어짐
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>점포별 회로제한과 센서 제어</b>로 <br className={styles.vision} />
            과부하와 화재 위험을 예방하고,{" "}
            <br />
            <b>효율적인 전력 관리</b>로 <br className={styles.vision} />
            안전과 비용 절감을 실현합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
