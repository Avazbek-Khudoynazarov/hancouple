"use client";

import styles from "./CampingSecond.module.css";

export default function CampingSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          한순간의 불꽃이 <br className={styles.vision} />
          캠핑장의 밤을 바꿉니다.{" "}
          <b>안심할 수 있는 캠핑</b>을 <br className={styles.vision} />
          함께 만드세요.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              전열기, 전기그릴, 카라반 AC 사용과 <br /> 성수기 피크로 인해 전력
              부하 급증 및 <br /> 전기요금 상승
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              릴선 권취 발열 화재와 야외 콘센트 <br /> 누전·감전 사고
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>사이트별 차단기 자동제어와 <br className={styles.vision} />
            방수콘센트</b>로 과부화와 감전을 예방하고,{" "}
            <br />
            <b>전열기 사용 제한과 안전수칙 안내</b>로 <br className={styles.vision} />
            안전과 비용 절감을 동시에 실현합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
