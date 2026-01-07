"use client";

import styles from "./RealTimeMonitoring.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLanguage } from "@/context/LanguageContext";

export default function FireSafety() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "누전, 과부하, 온도 이상 즉시 차단"
            : "Immediate Shutdown for Leakage, Overload, Temperature Abnormalities"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR"
            ? "차단기별 전기 화재 안전 모니터링"
            : "Breaker-level Electrical Fire Safety Monitoring"}
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
                    ? "정기점검 위주"
                    : "Focused on periodic inspections"}
                </p>
                <div className={styles.cardContent}>
                  <ArrowForwardIcon className={styles.arrowIcon} />
                  <p className={styles.cardText}>
                    {language === "KOR"
                      ? "점검 외 시간대 위험 방치"
                      : "Risk exposure outside inspection times"}
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
                <img src="/assets/remote/compData.svg" alt="Data monitoring" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardBottomText}>
                  {language === "KOR"
                    ? "상시 모니터링으로"
                    : "Constant monitoring enables"}
                </p>
                <div className={styles.cardHighlight}>
                  {language === "KOR" ? (
                    <span className={`${styles.highlightText} ${styles.highlight1}`}>
                      초기 위험 감지
                    </span>
                  ) : (
                    <span className={`${styles.highlightText} ${styles.highlight1}`}>
                      early risk detection
                    </span>
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
                <p className={styles.cardContentCenter}>
                  {language === "KOR"
                    ? "누전·과부하 사고 발생 후 대응"
                    : "Response after leakage/overload incidents"}
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
                <img src="/assets/remote/temperture.svg" alt="Temperature alert" />
              </div>
              <div className={styles.cardHighlight}>
                <div className={styles.cardContentCenterMain}>
                  {language === "KOR" ? (
                    <>
                      <span className={`${styles.highlightText} ${styles.highlight2}`}>
                        자동 차단 & 알림
                      </span>
                      <p className={styles.cardBottomText}>누전·온도 상승 시</p>
                    </>
                  ) : (
                    <>
                      <span className={`${styles.highlightText} ${styles.highlight2}`}>
                        Automatic shutdown & notification
                      </span>
                      <p className={styles.cardBottomText}>
                        upon leakage/temperature rise
                      </p>
                    </>
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
                <p className={styles.cardContentCenter}>
                  {language === "KOR"
                    ? "화재 예방 및 법적 대응 체계 미비"
                    : "Inadequate fire prevention and legal response systems"}
                </p>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLine3}></div>
            </div>

            <div className={styles.cardBottom3}>
              <div className={styles.dot3}></div>
              <h4 className={styles.cardLabelBottom3}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/fire.svg" alt="Fire safety" />
              </div>
              <div className={styles.cardContentCenterMain}>
                {language === "KOR" ? (
                  <span className={`${styles.highlightText} ${styles.highlight3}`}>
                    화재 예방과 중대재해처벌법 대응 가능
                  </span>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
                      Enabling fire prevention,
                    </span>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
                      and compliance with the Serious
                    </span>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
                      Accidents Punishment Act.
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
