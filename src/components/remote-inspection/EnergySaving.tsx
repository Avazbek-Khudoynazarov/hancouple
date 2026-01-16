"use client";

import styles from "./RealTimeMonitoring.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function EnergySaving() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "진단 후 절감 실행 가이드"
            : "Post-diagnosis Action Guide"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR"
            ? "에너지 절감 운영매뉴얼 제공"
            : "Energy Saving Manual"}
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
                    ? "절전 캠페인 수준 관리"
                    : "Managing the level of the energy-saving campaign"}
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
                    {language === "KOR"
                      ? "실질 절감 효과 낮음"
                      : "Low actual savings effects"}
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
                <img src="/assets/remote/table.svg" alt="Data table" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <div className={styles.cardHighlight}>
                  {language === "KOR" ? (
                    <>
                      <span
                        className={`${styles.highlightText} ${styles.highlightWithArrow} ${styles.highlight1}`}>
                        데이터 기반 맞춤
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlightWithArrow} ${styles.highlight1}`}>
                        절감 매뉴얼 자동 제공
                      </span>
                    </>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        Data-based customized savings
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        manual automatically provided
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
                <p className={styles.cardContentCenter}>
                  {language === "KOR"
                    ? "절감 실행 후 효과 검증 어려움"
                    : "Difficulty verifying effectiveness after savings implementation"}
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
                <img src="/assets/remote/note.svg" alt="Report note" />
              </div>
              <div className={styles.cardHighlight}>
                <div className={styles.cardContentCenterMain}>
                  {language === "KOR" ? (
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      절감 전/후 효과 리포트 수치화 제공
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlight2}`}>
                        Quantified pre-/post-savings
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight2}`}>
                        effect reports provided
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
                <p className={styles.cardContentCenter}>
                  {language === "KOR"
                    ? "피크 전력 관리 미흡으로 비용 증가"
                    : "Increased costs due to inadequate peak power management"}
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
                <img src="/assets/remote/line.svg" alt="Energy chart" />
              </div>
              <div className={styles.cardContentCenterMain}>
                {language === "KOR" ? (
                  <span
                    className={`${styles.highlightText} ${styles.highlight3}`}>
                    피크·대기전력·설비 최적화 실행
                  </span>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span
                      className={`${styles.highlightText} ${styles.highlight3}`}>
                      Peak, standby power, and
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight3}`}>
                      equipment optimization
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight3}`}>
                      implementation
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
