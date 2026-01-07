"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "@/context/LanguageContext";

export default function OperationalManualReport() {
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
              ? "전기안전 직무고시 점검일지 대응, 경영진 보고, 공공기관 감사 대응"
              : "Compliance with electrical safety inspection logs, executive reporting, and public institution audits"}
          </p>

          <div className={styles.targetGridThree}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainerReport}>
                <img
                  src="/assets/remote/last.png"
                  alt={language === "KOR" ? "전기안전 직무고시 점검일지 대응" : "Compliance with electrical safety inspection log"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR"
                  ? "전기안전 직무고시 점검일지 대응"
                  : "Compliance with electrical safety inspection log"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainerReport}>
                <img
                  src="/assets/remote/last2.png"
                  alt={language === "KOR" ? "경영진 보고" : "Executive reporting"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "경영진 보고" : "Executive reporting"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainerReport}>
                <img
                  src="/assets/remote/last3.png"
                  alt={language === "KOR" ? "공공기관 감사 대응" : "Public institution audit"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "공공기관 감사 대응" : "Public institution audit"}
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
                        ? "안전·점검·효율 지표 통합"
                        : "Integrated safety, savings, and efficiency metrics"}
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
