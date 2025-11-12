"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";

export default function OperationalManualRisk() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 적용대상 Section */}
        <section className={styles.targetSection}>
          <h2 className={styles.sectionTitle}>적용대상</h2>
          <p className={styles.sectionSubtitle}>
            전통시장, 무인 창고, 캠핑장, 상가 등
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/market.png" alt="전통시장" />
              </div>
              <h3 className={styles.targetLabel}>전통시장</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/fitting.png" alt="무인 창고" />
              </div>
              <h3 className={styles.targetLabel}>무인 창고</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/camp.png" alt="캠핑장" />
              </div>
              <h3 className={styles.targetLabel}>캠핑장</h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img src="/assets/remote/office.png" alt="상가" />
              </div>
              <h3 className={styles.targetLabel}>상가</h3>
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
                  성과 리포트
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>사고 차단 횟수</p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>예방 효과 수치화</p>
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
