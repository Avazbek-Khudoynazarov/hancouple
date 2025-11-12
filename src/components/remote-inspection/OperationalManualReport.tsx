"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";

export default function OperationalManualReport() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 적용대상 Section */}
        <section className={styles.targetSection}>
          <h2 className={styles.sectionTitle}>적용대상</h2>
          <p className={styles.sectionSubtitle}>
            전기안전 직무고시 점검일지 대응, 경영진 보고, 공공기관 감사 대응
          </p>

          <div className={styles.targetGridThree}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainerReport}>
                <img src="/assets/remote/last.png" alt="전기안전 직무고시 점검일지 대응" />
              </div>
              <h3 className={styles.targetLabel}>전기안전 직무고시 점검일지 대응</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainerReport}>
                <img src="/assets/remote/last2.png" alt="경영진 보고" />
              </div>
              <h3 className={styles.targetLabel}>경영진 보고</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainerReport}>
                <img src="/assets/remote/last3.png" alt="공공기관 감사 대응" />
              </div>
              <h3 className={styles.targetLabel}>공공기관 감사 대응</h3>
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
                    <p>안전·점검·효율 지표 통합</p>
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
