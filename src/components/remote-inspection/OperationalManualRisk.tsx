"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "@/context/LanguageContext";

export default function OperationalManualRisk() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 적용대상 Section */}
        <section className={styles.targetSection}>
          <h2 className={styles.sectionTitle}>
            {language === "KOR" ? "적용대상" : "Applicable Facilities"}
          </h2>
          <p className={styles.sectionSubtitle}>
            {language === "KOR"
              ? "전통시장, 무인 창고, 캠핑장, 상가 등"
              : "Traditional markets, unstaffed warehouses, campgrounds, and commercial complexes"}
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/market.png"
                  alt={language === "KOR" ? "전통시장" : "Traditional market"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "전통시장" : "Traditional market"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/fitting.png"
                  alt={language === "KOR" ? "무인 창고" : "Unstaffed warehouse"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "무인 창고" : "Unstaffed warehouse"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/camp.png"
                  alt={language === "KOR" ? "캠핑장" : "Campground"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "캠핑장" : "Campground"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/office.png"
                  alt={language === "KOR" ? "상가" : "Commercial complexes"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "상가" : "Commercial complexes"}
              </h3>
            </div>
          </div>
        </section>

        {/* 운영매뉴얼 & 성과지표 Section */}
        <section className={styles.manualSection}>
          <h2 className={styles.manualTitle}>
            {language === "KOR"
              ? "운영매뉴얼 & 성과지표"
              : "Operating Manual & Performance Metrics"}
          </h2>

          <div className={styles.manualGrid}>
            <div className={styles.manualCard}>
              <div className={styles.manualIconContainer}>
                <img
                  src="/assets/remote/setting.svg"
                  alt={language === "KOR" ? "운영매뉴얼 제공" : "Operating manual provided"}
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  {language === "KOR" ? "운영매뉴얼 제공" : "Operating manual provided"}
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "전기안전 운영매뉴얼"
                        : "Electrical Safety Operation Manual"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "에너지 절감 운영매뉴얼"
                        : "Energy saving operating manual"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.manualCard}>
              <div className={styles.manualIconContainer}>
                <img
                  src="/assets/remote/graph.svg"
                  alt={language === "KOR" ? "성과 리포트" : "Performance Report"}
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  {language === "KOR" ? "성과 리포트" : "Performance Report"}
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "사고 차단 횟수"
                        : "Number of accidents blocked"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "예방 효과 수치화"
                        : "Quantification of prevention effectiveness"}
                    </p>
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
