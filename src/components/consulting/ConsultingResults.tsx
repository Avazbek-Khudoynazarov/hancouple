"use client";

import styles from "./ConsultingResults.module.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

export default function ConsultingResults() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          결과 제공 (피크 원인·낭비 전력 진단 요약 리포트)
        </h3>
        <h1 className={styles.mainTitle}>
          전기요금 절감은 곧 탄소 배출 감축
          <br />
          <span className={styles.highlight}>탄소중립과 ESG 경영</span>에
          앞장서도록 지원합니다.
        </h1>

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>낭비전력 진단 요약 리포트</h2>
              <p className={styles.cardDescription}>
                과부하·누전·이상전압·이상주파수·전원OFF·연결끊김·부하변동·최대온도·불평형.
                <br />
                회로별 실시간 트렌드와 Top5 위험 알림으로 사고를 사전에
                차단합니다.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>차단기(설비) 단위 원격점검</span>
                <span className={styles.tag}>9종 위험 상시모니터링</span>
                <span className={styles.tag}>Top5 자동순환</span>
                <span className={styles.tag}>CSV 리포트</span>
              </div>
            </div>
            <div className={styles.cardArrow}>
              <EastRoundedIcon />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>피크원인 진단 요약 리포트</h2>
              <p className={styles.cardDescription}>
                피크가 언제, 무엇 때문에 발생하는지 모르면 절감은 우연입니다.
                <br />
                분전반·회로 레벨 동시 사용 패턴을 분석해 확실한 절감 전략을
                제시합니다.
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>실시간 데이터 기반</span>
                <span className={styles.tag}>동시사용(경합) 탐지</span>
                <span className={styles.tag}>설비별 피크 기여도</span>
              </div>
            </div>
            <div className={styles.cardArrow}>
              <EastRoundedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
