"use client";

import styles from "./RealTimeMonitoring.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function RealTimeMonitoring() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>요금 폭탄 방지</h3>
        <h1 className={styles.mainTitle}>실시간 피크전력 모니터링</h1>

        <div className={styles.comparisonContainer}>
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h4 className={styles.cardLabel}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitle}>월별 고지서만 확인</p>
                <div className={styles.cardContent}>
                  <ArrowForwardIcon className={styles.arrowIcon} />
                  <p className={styles.cardText}>피크 발생 원인 불명확</p>
                </div>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLine}></div>
            </div>

            <div className={styles.cardBottom}>
              <div className={styles.dot}></div>
              <h4 className={styles.cardLabelBottom}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/comp.svg" alt="Computer monitoring" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardBottomText}>
                  15분 단위 실시간 모니터링
                </p>
                <div className={styles.cardHighlight}>
                  <ArrowForwardIcon className={styles.arrowIconHighlight} />
                  <span className={styles.highlightText}>
                    피크 원인 추적 가능
                    <span className={styles.highlightUnderline1}></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.card2}>
              <div className={styles.cardNumber2}>2</div>
              <h4 className={styles.cardLabel2}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardContentCenter}>
                  관리자는 사후 대응만 가능
                </p>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLine2}></div>
            </div>

            <div className={styles.cardBottom2}>
              <div className={styles.dot2}></div>
              <h4 className={styles.cardLabelBottom2}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/bell.svg" alt="Alert bell" />
              </div>
              <div className={styles.cardHighlight}>
                <div className={styles.cardContentCenterMain}>
                  <span className={styles.highlightText}>
                    자동 알림 & 절감 가이드 제공
                    <span className={styles.highlightUnderline2}></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className={styles.column}>
            <div className={styles.card3}>
              <div className={styles.cardNumber3}>3</div>
              <h4 className={styles.cardLabel3}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitle}>계약전력 초과로</p>
                <p className={styles.cardContentCenter}>불필요한 요금 지출</p>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLine3}></div>
            </div>

            <div className={styles.cardBottom3}>
              <div className={styles.dot3}></div>
              <h4 className={styles.cardLabelBottom3}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/down.svg" alt="Cost reduction" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardBottomText}>계약전력 최적화로</p>
                <span className={styles.highlightText}>
                  연간 요금 절감
                  <span className={styles.highlightUnderline3}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
