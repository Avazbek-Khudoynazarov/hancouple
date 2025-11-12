"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";

export default function OperationalManualPower() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 적용대상 Section */}
        <section className={styles.targetSection}>
          <h2 className={styles.sectionTitle}>적용대상</h2>
          <p className={styles.sectionSubtitle}>
            아파트 단지, 요양시설, 전통시장, 중소규모 공장 등 피크 시간대 전력 사용이 많은 시설
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/appartments.png" alt="아파트 단지" />
              </div>
              <h3 className={styles.targetLabel}>아파트 단지</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/grandma.png" alt="요양시설" />
              </div>
              <h3 className={styles.targetLabel}>요양시설</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/market.png" alt="전통시장" />
              </div>
              <h3 className={styles.targetLabel}>전통시장</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/factory.png" alt="중소규모 공장" />
              </div>
              <h3 className={styles.targetLabel}>중소규모 공장</h3>
            </div>
          </div>
        </section>

        {/* 운영매뉴얼 & 성과지표 Section */}
        <section className={styles.manualSection}>
          <h2 className={styles.manualTitle}>운영매뉴얼 & 성과지표</h2>

          <div className={styles.manualGrid}>
            <div className={styles.manualCard}>
              <div className={styles.manualIconContainer}>
                <img src="/assets/remote/setting.svg" alt="운영매뉴얼 제공" />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>운영매뉴얼 제공</h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>전기안전 운영매뉴얼</p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>에너지 절감 운영매뉴얼</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.manualCard}>
              <div className={styles.manualIconContainer}>
                <img
                  src="/assets/remote/graph.svg"
                  alt="성과 리포트 자동 생성"
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  성과 리포트 자동 생성
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>회로별 부하 개선율</p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>전력 절감 효과</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
