"use client";

import styles from "./RealTimeMonitoring.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
                    ? "계량기 총 적산 관리"
                    : "Managing only total meter power"}
                </p>
                <div className={styles.cardContent}>
                  <ArrowForwardIcon className={styles.arrowIcon} />
                  <p className={styles.cardText}>
                    {language === "KOR"
                      ? "회로별관부하·불균형 파악 불가"
                      : "Unable to identify circuit-specific overloads or imbalances"}
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
                    <span className={`${styles.highlightText} ${styles.highlight1}`}>
                      회로별 데이터 기반 관리 효율화
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span className={`${styles.highlightText} ${styles.highlight1}`}>
                        Real-time analysis of current
                      </span>
                      <span className={`${styles.highlightText} ${styles.highlight1}`}>
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
                <p className={styles.cardSubtitle}>
                  {language === "KOR"
                    ? "특정 회로 이상 발생 시"
                    : "Delayed cause identification"}
                </p>
                <p className={styles.cardContentCenter}>
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
                    <span className={`${styles.highlightText} ${styles.highlight2}`}>
                      비정상 부하 즉시 감지 & 원격 제어 가능
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span className={`${styles.highlightText} ${styles.highlight2}`}>
                        Immediate detection of abnormal
                      </span>
                      <span className={`${styles.highlightText} ${styles.highlight2}`}>
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
                    <p className={styles.cardSubtitle}>
                      차단기별 설비간 모니터링 및
                    </p>
                    <p className={styles.cardContentCenter}>
                      원격 제어 불가로 관리 효율 저하
                    </p>
                  </>
                ) : (
                  <>
                    <p className={styles.cardSubtitle}>
                      Inefficient management due to lack
                    </p>
                    <p className={styles.cardContentCenter}>
                      of real-time monitoring and remote control per circuit breaker
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
                  <span className={`${styles.highlightText} ${styles.highlight3}`}>
                    회로별 데이터 기반 관리 효율화
                  </span>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
                      Streamlined management
                    </span>
                    <span className={`${styles.highlightText} ${styles.highlight3}`}>
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
