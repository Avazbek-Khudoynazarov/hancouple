"use client";

import styles from "./SmallBusiness.module.css";
import SmallBusinessSecond from "./SmallBusinessSecond";

export default function SmallBusiness() {
  return (
    <>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <span className={styles.mainTitleSmall}>
            점포별 회로관리로 안심 영업
          </span>
          <h2 className={styles.mainTitle}>전통시장 · 소상공인</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img src="/assets/operation/message5.png" alt="" draggable={false} />
        </div>

        {/* Background Image */}
        <div className={styles.backgroundImage}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              <h3 className={styles.bottomTitle}>
                작은 불씨 하나가, 점포의 일상을 멈출 수 있습니다.
              </h3>
              <p className={styles.bottomDescription}>
                복잡한 배선과 오래된 전열기기,
                <br /> 시장의 하루는 작은 불씨 하나에도 멈출 수 있습니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                한 곳의 위험이 곧 <strong>전체의 위험</strong>이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <SmallBusinessSecond />
    </>
  );
}
