"use client";

import styles from "./CareFacilitiesSecond.module.css";

export default function CareFacilitiesSecond() {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        <p className={styles.subtitle}>
          불빛 하나, 온기 하나에도 <br className={styles.vision} /> 책임이
          따릅니다.
        </p>
        <h2 className={styles.mainTitle}>
          작은 주의와 관리가 <br className={styles.vision} /> 모두의 평안을
          만듭니다.
        </h2>
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>전기요금 상승 요인</h3>
            <p className={styles.cardDescription}>
              피크 부하와 24시간 냉난방,
              <br />
              난방·전열기기 사용으로 전기 요금 급등
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>대표 사고 사례</h3>
            <p className={styles.cardDescription}>
              멀티탭 과부하, 산소장치실명,
              <br />
              세탁실 과열 등으로 화재 위험 발생
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>예방 및 솔루션</h3>
          <p className={styles.bottomDescription}>
            <b>차단기별 부하를 체한</b>하고 <br className={styles.vision} />{" "}
            <b>야간 부하를 분산</b>하며, 누전과 절연저항을
            <br />
            정기 점검하고
            <b>
              차단기 모니터링과 <br className={styles.vision} /> 야간 알람
            </b>
            으로 사고를 예방합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
