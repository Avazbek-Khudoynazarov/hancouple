"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";

export default function OperationalManual() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 적용대상 Section */}
        <section className={styles.targetSection}>
          <h2 className={styles.sectionTitle}>적용대상</h2>
          <p className={styles.sectionSubtitle}>
            공장, 병원, 쇼핑몰, 관공서 등 피크 시간대 전력 사용이 많은 시설
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/robot.png" alt="공장" />
              </div>
              <h3 className={styles.targetLabel}>공장</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/doctor.png" alt="병원" />
              </div>
              <h3 className={styles.targetLabel}>병원</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/clothes.png" alt="쇼핑몰" />
              </div>
              <h3 className={styles.targetLabel}>쇼핑몰</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/building.png" alt="관공서" />
              </div>
              <h3 className={styles.targetLabel}>관공서</h3>
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
                    <p>피크 발생 횟수</p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>피크 절감 효과</p>
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
