"use client";

import styles from "./ConsultingResults.module.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { useLanguage } from "@/context/LanguageContext";

export default function ConsultingResults() {
  const { language } = useLanguage();
  return (
    <div id="results" className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "결과 제공 (피크 원인·낭비 전력 진단 요약 리포트)"
            : "Results Provided (Summary Report Diagnosing Peak Causes & Wasted Power)"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR" ? (
            <>
              전기요금 절감은 곧 탄소 배출 감축
              <br />
              <span className={styles.highlight}>탄소중립과 ESG 경영</span>에
              앞장서도록 지원합니다.
            </>
          ) : (
            <>
              Reducing electricity bills directly translates
              <br />
              to lowering carbon emissions
              <br />
              We support your leadership in{" "}
              <span className={styles.highlight}>
                carbon neutrality
                <br />
                and ESG management.
              </span>
            </>
          )}
        </h1>

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                {language === "KOR"
                  ? "낭비전력 진단 요약 리포트"
                  : "Waste Power Diagnosis Summary Report"}
              </h2>
              <p className={styles.cardDescription}>
                {language === "KOR" ? (
                  <>
                    과부하·누전·이상전압·이상주파수·전원OFF·연결끊김·부하변동·최대온도·불평형.
                    <br />
                    회로별 실시간 트렌드와 Top5 위험 알림으로 사고를 사전에
                    차단합니다.
                  </>
                ) : (
                  <>
                    Overload·Leakage Current·Abnormal Voltage·Abnormal
                    Frequency·Power OFF·Connection Disruption·
                    <br />
                    Load Fluctuation·Maximum Temperature·Imbalance.
                    <br />
                    Prevent accidents with real-time circuit trends and Top 5
                    risk alerts.
                  </>
                )}
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>
                  {language === "KOR"
                    ? "차단기(설비) 단위 원격점검"
                    : "Remote inspection per circuit breaker (equipment)"}
                </span>
                <span className={styles.tag}>
                  {language === "KOR"
                    ? "9종 위험 상시모니터링"
                    : "24/7 monitoring of 9 risk types"}
                </span>
                <span className={styles.tag}>
                  {language === "KOR" ? "Top5 자동순환" : "Top 5 auto-rotation"}
                </span>
                <span className={styles.tag}>
                  {language === "KOR" ? "CSV 리포트" : "CSV report"}
                </span>
              </div>
            </div>
            <a
              href="/assets/electrical-safety-report.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardArrow}
            >
              <EastRoundedIcon />
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                {language === "KOR"
                  ? "피크원인 진단 요약 리포트"
                  : "Peak Cause Diagnosis Summary Report"}
              </h2>
              <p className={styles.cardDescription}>
                {language === "KOR" ? (
                  <>
                    피크가 언제, 무엇 때문에 발생하는지 모르면 절감은 우연입니다.
                    <br />
                    분전반·회로 레벨 동시 사용 패턴을 분석해 확실한 절감 전략을
                    제시합니다.
                  </>
                ) : (
                  <>
                    Without knowing when and why peaks occur, savings are
                    random.
                    <br />
                    Analyzes simultaneous usage patterns at the distribution
                    panel and circuit levels to provide concrete savings
                    strategies.
                  </>
                )}
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>
                  {language === "KOR"
                    ? "실시간 데이터 기반"
                    : "Real-time data-based"}
                </span>
                <span className={styles.tag}>
                  {language === "KOR"
                    ? "동시사용(경합) 탐지"
                    : "Simultaneous usage (overlap) detection"}
                </span>
                <span className={styles.tag}>
                  {language === "KOR"
                    ? "설비별 피크 기여도"
                    : "Peak contribution by equipment"}
                </span>
              </div>
            </div>
            <a
              href="/assets/peak-power-report.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardArrow}
            >
              <EastRoundedIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
