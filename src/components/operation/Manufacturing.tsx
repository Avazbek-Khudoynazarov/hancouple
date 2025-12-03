"use client";

import styles from "./Manufacturing.module.css";
import ManufacturingSecond from "./ManufacturingSecond";

export default function Manufacturing() {
  return (
    <>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <span className={styles.mainTitleSmall}>
            안정된 설비, 멈춤 없는 생산
          </span>
          <h2 className={styles.mainTitle}>제조업 공장</h2>
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
                전력은 생산의 힘이자, 잠재된 위험입니다.
              </h3>
              <p className={styles.bottomDescription}>
                수많은 설비가 돌아가는 제조현장, <br /> 작은 전류 불안정이 수억
                원의 손실로 이어집니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                안정적인 전력 관리가 <strong>곧 생산 효율입니다.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ManufacturingSecond />
    </>
  );
}
