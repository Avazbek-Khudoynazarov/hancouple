"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "@/context/LanguageContext";

export default function OperationalManualEnergy() {
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
              ? "공공기관, 학교, 기업, BEMS/ZEB 인증 대상 건물"
              : "Public institutions, corporations, and BEMS/ZEB-Certified Buildings"}
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/skyscraper.png"
                  alt={language === "KOR" ? "공공기관" : "Public institution"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "공공기관" : "Public institution"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/school.png"
                  alt={language === "KOR" ? "학교" : "School"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "학교" : "School"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/skyscraper2.png"
                  alt={language === "KOR" ? "기업" : "Corporation"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "기업" : "Corporation"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/house.png"
                  alt={language === "KOR" ? "BEMS/ZEB 인증 대상 건물" : "BEMS/ZEB-Certified Building"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "BEMS/ZEB 인증 대상 건물" : "BEMS/ZEB-Certified Building"}
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
                        ? "피크전력 관리 운영매뉴얼"
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
                      {language === "KOR" ? "kWh 절감량" : "kWh savings"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR" ? "요금 절감액" : "Cost savings"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "탄소배출 절감 수치"
                        : "Carbon emission reduction figures"}
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
