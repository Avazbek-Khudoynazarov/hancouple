"use client";

import styles from "./ElectricVehicle.module.css";
import ElectricVehicleSecond from "./ElectricVehicleSecond";

export default function ElectricVehicle() {
  return (
    <>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <span className={styles.mainTitleSmall}>
            안전한 충전, 멈춤 없는 이동
          </span>
          <h2 className={styles.mainTitle}>전기차 충전시설</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img src="/assets/operation/message8.png" alt="" draggable={false} />
        </div>

        {/* Background Image */}
        <div className={styles.backgroundImage}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              <h3 className={styles.bottomTitle}>
                한 순간의 이상 전류가, 수십 대의 차를 위협합니다.
              </h3>
              <p className={styles.bottomDescription}>
                급속충전 고전류와 집중 사용으로 <br /> 화재 위험이 높아지고
                있습니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                충전의 편리함 뒤에는 언제나
                <strong>’안전 관리’가 필요합니다.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <ElectricVehicleSecond />
    </>
  );
}
