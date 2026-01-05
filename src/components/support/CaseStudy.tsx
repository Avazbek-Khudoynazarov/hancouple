"use client";

import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>설치/적용 사례</span>
          <h2 className={styles.sectionTitle}>
            렌탈 서비스 도입으로,
            <br />
            <span className={styles.highlight}>전기요금은 줄고 안전은 강화</span>
            시켰습니다.
          </h2>
        </div>

        <div className={styles.cardsSection}>
          <div className={styles.cardsWrapper}>
            <img
              src="/assets/contact/card1.png"
              alt="사용량 절감"
              className={styles.cardImage}
              draggable={false}
            />
            <img
              src="/assets/contact/card2.png"
              alt="전기요금 절감"
              className={styles.cardImage}
              draggable={false}
            />
            <img
              src="/assets/contact/card3.png"
              alt="피크전력 관리"
              className={styles.cardImage}
              draggable={false}
            />
          </div>
          <p className={styles.note}>* 데이터 비교 [요양원 사례]</p>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.bottomText}>
            초기 투자비 부담 없이,
            <br />
            장기 렌탈 서비스만으로도 이만큼 절감할 수 있습니다.
          </p>
          <img
            src="/assets/contact/vertical.png"
            alt=""
            className={styles.verticalLine}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
