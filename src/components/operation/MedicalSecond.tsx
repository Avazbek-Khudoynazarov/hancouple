"use client";

import styles from "./MedicalSecond.module.css";

export default function MedicalSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          중대 재해를 예방하고, <br className={styles.vision} />
          <b>의료기관의 전력·설비를 <br className={styles.vision} />안정적으로 운영</b>하세요.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              CT·MRI·멸균기 등 고전력 장비와
              <br /> 수술실 공조, 냉장·냉동 의약품 보관 설비로 인한 <br /> 전력
              사용 증가
            </p>
          </div>
        </div>

        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              UPS실 발열로 인한 화재 위험,
              <br /> 가스 누출 시 폭발로 이어질 수 있는 위험요인
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>중요 부하 회로를 분리하고 이중화</b>하여 <br className={styles.vision} />
            전력 장애를 최소화하고,{" "}
            <br />
            <b>배터리룸 환기 시스템을 강화</b>해 <br className={styles.vision} />
            발열 및 가스 축적을 방지합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
