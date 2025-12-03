"use client";

import styles from "./ShoppingMall.module.css";
import ShoppingMallSecond from "./ShoppingMallSecond";

export default function ShoppingMall() {
  return (
    <>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <span className={styles.mainTitleSmall}>
            안전한 전력, 멈춤없는 쇼핑
          </span>
          <h2 className={styles.mainTitle}>대형 쇼핑몰</h2>
        </div>

        {/* Cards Section */}
        <div className={styles.cardsSection}>
          <img src="/assets/operation/message6.png" alt="" draggable={false} />
        </div>

        {/* Background Image */}
        <div className={styles.backgroundImage}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              <h3 className={styles.bottomTitle}>
                수많은 발길이 모이는 곳, 전력 안정이 곧 신뢰입니다.
              </h3>
              <p className={styles.bottomDescription}>
                대형 쇼핑몰의 에스컬레이터, 전광판, 냉난방 <br /> 모든 전력은
                고객의 안전과 직결됩니다.
              </p>
            </div>

            <div className={styles.emphasisText}>
              <p className={styles.emphasisLine}>
                쇼핑몰 전체의 전력 흐름을 <strong>안정적으로 지켜야</strong>
                합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <ShoppingMallSecond />
    </>
  );
}
