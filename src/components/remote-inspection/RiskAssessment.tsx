"use client";

import styles from "./RealTimeMonitoring.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLanguage } from "@/context/LanguageContext";

export default function RiskAssessment() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "전원꺼짐으로 인한 2차 사고방지"
            : "Secondary Accidents Caused by Power Shutdown"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR"
            ? "위험성 판단 & 2차 사고 예방 모니터링"
            : "Risk Assessment & Secondary Accident Prevention"}
        </h1>

        <div className={styles.comparisonContainer}>
          {/* First Column */}
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h4 className={styles.cardLabel}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitle}>
                  {language === "KOR"
                    ? "사고 발생 후 원인 조사"
                    : "Post-accident cause investigation"}
                </p>
                <div className={styles.cardContent}>
                  <ArrowForwardIcon className={styles.arrowIcon} />
                  <p className={styles.cardText}>
                    {language === "KOR"
                      ? "2차 피해 확대"
                      : "Secondary damage expansion"}
                  </p>
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
                <p className={styles.cardBottomText}>
                  {language === "KOR"
                    ? "1차 사고 즉시 감지"
                    : "Immediate primary accident detection"}
                </p>
                <div className={styles.cardHighlight}>
                  <ArrowForwardIcon className={styles.arrowIconHighlight} />
                  {language === "KOR" ? (
                    <span className={`${styles.highlightText} ${styles.highlight1}`}>
                      2차 사고 전 단계 차단
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span className={`${styles.highlightText} ${styles.highlight1}`}>
                        Preventing secondary accidents
                      </span>
                      <span className={`${styles.highlightText} ${styles.highlight1}`}>
                        at an early stage
                      </span>
                    </div>
                  )}
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
                {language === "KOR" ? (
                  <>
                    <p className={styles.cardSubtitle}>무인 시설·숙면 시설의</p>
                    <p className={styles.cardContentCenter}>상시 감시 부재</p>
                  </>
                ) : (
                  <>
                    <p className={styles.cardSubtitle}>Absence of constant monitoring</p>
                    <p className={styles.cardContentCenter}>
                      at automated facilities and small-scale facilities
                    </p>
                  </>
                )}
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
                  {language === "KOR" ? (
                    <span className={`${styles.highlightText} ${styles.highlight2}`}>
                      원격 제어로 신속 대응
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span className={`${styles.highlightText} ${styles.highlight2}`}>
                        Rapid response via
                      </span>
                      <span className={`${styles.highlightText} ${styles.highlight2}`}>
                        remote control
                      </span>
                    </div>
                  )}
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
                {language === "KOR" ? (
                  <>
                    <p className={styles.cardSubtitle}>사고 전 단계 감지 미비로</p>
                    <p className={styles.cardContentCenter}>안전 확보 어려움</p>
                  </>
                ) : (
                  <>
                    <p className={styles.cardSubtitle}>Difficulty ensuring safety</p>
                    <p className={styles.cardContentCenter}>
                      due to inadequate pre-accident detection
                    </p>
                  </>
                )}
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
                {language === "KOR" ? (
                  <span className={`${styles.highlightText} ${styles.highlight3}`}>
                    사고 예방툴 상승, 안전성 강화
                  </span>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
                      Increased accident prevention
                    </span>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
                      rate, enhanced safety
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
