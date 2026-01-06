"use client";

import { useState } from "react";
import styles from "./UsageReport.module.css";

export default function UsageReport() {
  const [activeTab, setActiveTab] = useState<"usage" | "cost">("usage");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Report</span>
          <h2 className={styles.sectionTitle}>전기 사용량&요금 절감 사례보기</h2>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.tabHeader}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === "usage" ? styles.active : ""}`}
                  onClick={() => setActiveTab("usage")}
                >
                  사용량 (kWh)
                </button>
                <button
                  className={`${styles.tab} ${activeTab === "cost" ? styles.active : ""}`}
                  onClick={() => setActiveTab("cost")}
                >
                  전기요금 (원)
                </button>
              </div>
              <p className={`${styles.note} ${styles.noteDesktop}`}>
                * 연꽃마을 (2024년 대비 2025년 사용량 비교 분석 1월 ~ 9월 누계)
              </p>
            </div>

            <div className={styles.graphWrapper}>
              {activeTab === "usage" ? (
                <img
                  src="/assets/contact/graph.png"
                  alt="사용량 그래프"
                  className={styles.graphImage}
                  draggable={false}
                />
              ) : (
                <img
                  src="/assets/contact/chart.png"
                  alt="전기요금 차트"
                  className={styles.graphImage}
                  draggable={false}
                />
              )}
            </div>

            <p className={`${styles.note} ${styles.noteMobile}`}>
              * 연꽃마을 (2024년 대비 2025년 사용량 비교 분석 1월 ~ 9월 누계)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
