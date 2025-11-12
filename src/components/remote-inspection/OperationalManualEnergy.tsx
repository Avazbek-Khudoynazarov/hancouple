"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";

export default function OperationalManualEnergy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 적용대상 Section */}
        <section className={styles.targetSection}>
          <h2 className={styles.sectionTitle}>적용대상</h2>
          <p className={styles.sectionSubtitle}>
            공공기관, 학교, 기업, BEMS/ZEB 인증 대상 건물
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/skyscraper.png" alt="공공기관" />
              </div>
              <h3 className={styles.targetLabel}>공공기관</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/school.png" alt="학교" />
              </div>
              <h3 className={styles.targetLabel}>학교</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/skyscraper2.png" alt="기업" />
              </div>
              <h3 className={styles.targetLabel}>기업</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/house.png" alt="BEMS/ZEB 인증 대상 건물" />
              </div>
              <h3 className={styles.targetLabel}>BEMS/ZEB 인증 대상 건물</h3>
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
                    <p>피크전력 관리 운영매뉴얼</p>
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
                  alt="성과 리포트"
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  성과 리포트
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>kWh 절감량</p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>요금 절감액</p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>탄소배출 절감 수치</p>
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
