"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "@/context/LanguageContext";

export default function OperationalManualPower() {
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
              ? "아파트 단지, 요양시설, 전통시장, 중소규모 공장 등 피크 시간대 전력 사용이 많은 시설"
              : "Apartment complexes, nursing facilities, traditional markets, small- to medium-sized factories, etc."}
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/appartments.png"
                  alt={language === "KOR" ? "아파트 단지" : "Apartment complexes"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "아파트 단지" : "Apartment complexes"}
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
                  src="/assets/remote/factory.png"
                  alt={language === "KOR" ? "중소규모 공장" : "Small-to medium-sized factory"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "중소규모 공장" : "Small-to medium-sized factory"}
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
                        ? "회로별 부하 개선율"
                        : "Circuit-specific load improvement rate"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR" ? "전력 절감 효과" : "Power saving effects"}
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
