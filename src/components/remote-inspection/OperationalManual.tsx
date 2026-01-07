"use client";

import styles from "./OperationalManual.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { useLanguage } from "@/context/LanguageContext";

export default function OperationalManual() {
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
              ? "공장, 병원, 쇼핑몰, 관공서 등 피크 시간대 전력 사용이 많은 시설"
              : "Factories, hospitals, shopping malls, government offices, and other facilities with high peak-time power usage"}
          </p>

          <div className={styles.targetGrid}>
            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/robot.png"
                  alt={language === "KOR" ? "공장" : "Factory"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "공장" : "Factory"}
              </h3>
            </div>

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
                  src="/assets/remote/clothes.png"
                  alt={language === "KOR" ? "쇼핑몰" : "Shopping mall"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "쇼핑몰" : "Shopping mall"}
              </h3>
            </div>

            <div className={styles.targetItem}>
              <div className={styles.targetImageContainer}>
                <img
                  src="/assets/remote/building.png"
                  alt={language === "KOR" ? "관공서" : "Government office"}
                />
              </div>
              <h3 className={styles.targetLabel}>
                {language === "KOR" ? "관공서" : "Government office"}
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
                  alt={
                    language === "KOR"
                      ? "운영매뉴얼 제공"
                      : "Operating manual provided"
                  }
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  {language === "KOR"
                    ? "운영매뉴얼 제공"
                    : "Operating manual provided"}
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "피크전력 관리 운영매뉴얼"
                        : "Electrical safety operating manual per circuit breaker"}
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
                  alt={
                    language === "KOR"
                      ? "성과 리포트 자동 생성"
                      : "Automatic generation of performance reports"
                  }
                />
              </div>
              <div className={styles.manualCardTitleMain}>
                <h3 className={styles.manualCardTitle}>
                  {language === "KOR"
                    ? "성과 리포트 자동 생성"
                    : "Automatic generation of performance reports"}
                </h3>
                <div className={styles.manualList}>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "피크 발생 횟수"
                        : "Number of peak occurrences"}
                    </p>
                  </div>
                  <div className={styles.manualListItem}>
                    <CheckIcon className={styles.checkIcon} />
                    <p>
                      {language === "KOR"
                        ? "피크 절감 효과"
                        : "Savings effectiveness metrics"}
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
