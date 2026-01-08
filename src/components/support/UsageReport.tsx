"use client";

import { useState } from "react";
import styles from "./UsageReport.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function UsageReport() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"usage" | "cost">("usage");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Report</span>
          <h2 className={styles.sectionTitle}>
            {language === "KOR"
              ? "전기 사용량&요금 절감 사례보기"
              : "View Electricity Usage & Cost Reduction Case Studies"}
          </h2>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.tabHeader}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === "usage" ? styles.active : ""} ${language === "ENG" ? styles.tabEng : ""}`}
                  onClick={() => setActiveTab("usage")}
                >
                  {language === "KOR" ? "사용량 (kWh)" : "Usage (kWh)"}
                </button>
                <button
                  className={`${styles.tab} ${activeTab === "cost" ? styles.active : ""} ${language === "ENG" ? styles.tabEng : ""}`}
                  onClick={() => setActiveTab("cost")}
                >
                  {language === "KOR" ? "전기요금 (원)" : "Electricity Bill (KRW)"}
                </button>
              </div>
              <p className={`${styles.note} ${styles.noteDesktop}`}>
                {language === "KOR"
                  ? "* 연꽃마을 (2024년 대비 2025년 사용량 비교 분석 1월 ~ 9월 누계)"
                  : "* Lotus Village (Usage Comparison Analysis: January–September Cumulative, 2025 vs. 2024)"}
              </p>
            </div>

            <div className={styles.graphWrapper}>
              {activeTab === "usage" ? (
                <img
                  src={
                    language === "KOR"
                      ? "/assets/contact/graph.png"
                      : "/assets/contact/graphEng.png"
                  }
                  alt={language === "KOR" ? "사용량 그래프" : "Usage Graph"}
                  className={styles.graphImage}
                  draggable={false}
                />
              ) : (
                <img
                  src={
                    language === "KOR"
                      ? "/assets/contact/chart.png"
                      : "/assets/contact/chartEng.png"
                  }
                  alt={
                    language === "KOR" ? "전기요금 차트" : "Electricity Bill Chart"
                  }
                  className={styles.graphImage}
                  draggable={false}
                />
              )}
            </div>

            <p className={`${styles.note} ${styles.noteMobile}`}>
              {language === "KOR"
                ? "* 연꽃마을 (2024년 대비 2025년 사용량 비교 분석 1월 ~ 9월 누계)"
                : "* Lotus Village (Usage Comparison Analysis: January–September Cumulative, 2025 vs. 2024)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
