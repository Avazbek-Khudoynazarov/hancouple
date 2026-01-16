"use client";

import styles from "./RealTimeMonitoring.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function PowerManagement() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "회로별 전력 상태를 한눈에 관리"
            : "Manage circuit-by-circuit power status at a glance"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR"
            ? "배전반 차단기별 전력관리 모니터링"
            : "Breaker-level Power Management Monitoring"}
        </h1>

        <div className={styles.comparisonContainer}>
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h4 className={styles.cardLabel}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitle}>
                  {language === "KOR"
                    ? "계량기 총 전력만 관리 "
                    : "Managing only total meter power"}
                </p>
                <div className={styles.cardContent}>
                  <p className={styles.cardText}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      fill="none"
                      viewBox="0 0 16 14"
                      className={styles.arrowIcon}>
                      <path
                        fill="#333"
                        d="M8.262 12.793a1.06 1.06 0 0 1-.352-.82 1.08 1.08 0 0 1 .352-.801l3.437-3.457H1.152A1.135 1.135 0 0 1 0 6.563q0-.48.332-.811.342-.332.82-.342H11.7L8.262 1.953a1 1 0 0 1-.264-.361 1.2 1.2 0 0 1-.088-.44 1.08 1.08 0 0 1 .352-.8q.156-.177.361-.264A1.2 1.2 0 0 1 9.063 0a1.08 1.08 0 0 1 .8.352l5.43 5.41a1.08 1.08 0 0 1 .352.8q0 .47-.352.82l-5.43 5.411a1.08 1.08 0 0 1-.8.352q-.225 0-.44-.088a1 1 0 0 1-.361-.264"
                      />
                    </svg>
                    {language === "KOR" ? (
                      "회로별과부하·불균형 파악 불가"
                    ) : (
                      <>
                        Unable to identify circuit-specific
                        <br />
                        overloads or imbalances
                      </>
                    )}
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
                <img src="/assets/remote/hand.svg" alt="Hand control" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <div className={styles.cardHighlight}>
                  {language === "KOR" ? (
                    <span
                      className={`${styles.highlightText} ${styles.highlight1}`}>
                      차단기별 전류·전압 실시간 분석
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        Real-time analysis of current
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        and voltage per circuit breaker
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.card2}>
              <div className={styles.cardNumber2}>2</div>
              <h4 className={styles.cardLabel2}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={language === "KOR" ? styles.cardSubtitle : styles.cardContentCenter}>
                  {language === "KOR"
                    ? "특정 회로 이상 발생 시"
                    : "Delayed cause identification"}
                </p>
                <p className={language === "KOR" ? styles.cardContentCenter : styles.cardSubtitle}>
                  {language === "KOR"
                    ? "원인 확인 지연"
                    : "when specific circuit abnormalities occur"}
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
                <img src="/assets/remote/phone.svg" alt="Phone alert" />
              </div>
              <div className={styles.cardHighlight}>
                <div className={styles.cardContentCenterMain}>
                  {language === "KOR" ? (
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      비정상 부하 즉시 감지 & 원격 제어 가능
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlight2}`}>
                        Immediate detection of abnormal
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight2}`}>
                        loads & remote control capability
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
                    <p className={styles.cardContentCenter}>
                      차단기별 실시간 모니터링 및
                    </p>
                    <p className={styles.cardContentCenter}>
                      원격 제어 불가로 관리 효율 저하
                    </p>
                  </>
                ) : (
                  <>
                    <p className={styles.cardContentCenter}>
                      Inefficient management due to lack
                    </p>
                    <p className={styles.cardContentCenter}>
                      of real-time monitoring and remote control per circuit
                      breaker
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
                <img src="/assets/remote/data.svg" alt="Data analysis" />
              </div>
              <div className={styles.cardContentCenterMain}>
                {language === "KOR" ? (
                  <span
                    className={`${styles.highlightText} ${styles.highlight3}`}>
                    차단기별 전류·전압 실시간 분석
                  </span>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span
                      className={`${styles.highlightText} ${styles.highlight3}`}>
                      Streamlined management
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight3}`}>
                      based on circuit-specific data
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
