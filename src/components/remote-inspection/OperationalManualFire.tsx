"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "@/context/LanguageContext";

export default function OperationalManualFire() {
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
              ? "병원, 요양시설, 다중이용시설, 전통시장, 제조업 공장"
              : "Hospitals, nursing facilities, multi-use facilities, traditional markets, manufacturing plants"}
          </p>

          <div className={styles.targetGridFive}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/doctor.png"
                  alt={language === "KOR" ? "병원" : "Hospital"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "병원" : "Hospital"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/grandma.png"
                  alt={language === "KOR" ? "요양시설" : "Nursing facility"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "요양시설" : "Nursing facility"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/metro.png"
                  alt={language === "KOR" ? "다중이용시설" : "Multi-use Facility"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "다중이용시설" : "Multi-use Facility"}
              </h3>
            </div>

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
                  src="/assets/remote/factoryMan.png"
                  alt={language === "KOR" ? "제조업 공장" : "Manufacturing plant"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "제조업 공장" : "Manufacturing plant"}
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
                  alt={language === "KOR" ? "성과 리포트 자동 생성" : "Performance Report"}
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  {language === "KOR" ? "성과 리포트 자동 생성" : "Performance Report"}
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "위험 감지· 이상발생 이력"
                        : "Risk detection · Abnormal occurrence history"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "사고 예방 건수"
                        : "Accident prevention count"}
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
