"use client";

import styles from "./RealTimeMonitoring.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function RiskAssessment() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>전원꺼짐으로 인한 2차 사고방지</h3>
        <h1 className={styles.mainTitle}>위험성 판단 & 2차 사고 예방 모니터링</h1>

        <div className={styles.comparisonContainer}>
          {/* First Column */}
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h4 className={styles.cardLabel}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitle}>사고 발생 후 원인 조사</p>
                <div className={styles.cardContent}>
                  <ArrowForwardIcon className={styles.arrowIcon} />
                  <p className={styles.cardText}>2차 피해 확대</p>
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
                <img src="/assets/remote/siren.svg" alt="Emergency alert" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardBottomText}>1차 사고 즉시 감지</p>
                <div className={styles.cardHighlight}>
                  <ArrowForwardIcon className={styles.arrowIconHighlight} />
                  <span className={styles.highlightText}>
                    2차 사고 전 단계 차단
                    <span className={styles.highlightUnderlineRisk1}></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className={styles.column}>
            <div className={styles.card2}>
              <div className={styles.cardNumber2}>2</div>
              <h4 className={styles.cardLabel2}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitle}>무인 시설·숙면 시설의</p>
                <p className={styles.cardContentCenter}>상시 감시 부재</p>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLine2}></div>
            </div>

            <div className={styles.cardBottom2}>
              <div className={styles.dot2}></div>
              <h4 className={styles.cardLabelBottom2}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/phone.svg" alt="Phone alert" />
              </div>
              <div className={styles.cardHighlight}>
                <div className={styles.cardContentCenterMain}>
                  <span className={styles.highlightText}>
                    원격 제어로 신속 대응
                    <span className={styles.highlightUnderlineRisk2}></span>
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
                <p className={styles.cardSubtitle}>사고 전 단계 감지 미비로</p>
                <p className={styles.cardContentCenter}>안전 확보 어려움</p>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLine3}></div>
            </div>

            <div className={styles.cardBottom3}>
              <div className={styles.dot3}></div>
              <h4 className={styles.cardLabelBottom3}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/guard.svg" alt="Safety guard" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <span className={styles.highlightText}>
                  사고 예방툴 상승, 안전성 강화
                  <span className={styles.highlightUnderlineRisk3}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
