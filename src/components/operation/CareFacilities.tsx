"use client";

import styles from "./CareFacilities.module.css";
import CareFacilitiesSecond from "./CareFacilitiesSecond";

export default function CareFacilities() {
  return (
    <>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <span className={styles.mainTitleSmall}>전력과 안전을 한눈에</span>
          <h2 className={styles.mainTitle}>요양시설 · 장애인복지시설</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img src="/assets/operation/message1.png" alt="" draggable={false} />
        </div>

        {/* Background Image */}
        <div className={styles.backgroundImage}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              <h3 className={styles.bottomTitle}>
                따뜻해야 할 공간이, 순식간에 위험해질 수 있습니다.
              </h3>
              <p className={styles.bottomDescription}>
                무심코 지나친 콘센트 하나, 오래 켜둔 전열기 하나가 큰 피해로
                이어집니다.
                <br />
                요양시설의 전기 사용, 점식의 불상도 화재로 변질 수 있습니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                <strong>입소자의 안전, 시설의 일상을 지키기 위한 관리</strong>가
                필요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <CareFacilitiesSecond />
    </>
  );
}
