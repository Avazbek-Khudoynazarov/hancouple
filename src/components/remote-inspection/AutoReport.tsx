"use client";

import styles from "./RealTimeMonitoring.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AutoReport() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "데이터로 예측하는 전기안전 관리"
            : "Data-driven electrical safety management"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR"
            ? "전기안전 직무고시 원격계측 / 자동 리포트 생성"
            : "Electrical Safety Regulation Remote Monitoring / Auto Reports"}
        </h1>

        <div className={styles.comparisonContainerReport}>
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h4 className={styles.cardLabel}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitleReport}>
                  {language === "KOR"
                    ? "인력점검, 월점검(수작업), 열화상 수동점검"
                    : "Manual inspections, monthly checks (manual), manual thermal imaging"}
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
                      "육안 점검·사후 대응 위주"
                    ) : (
                      <>
                        Focused on visual inspection
                        <br />
                        and post-incident response
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
                <img src="/assets/remote/last.svg" alt="AI monitoring" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <div className={styles.cardHighlight}>
                  {language === "KOR" ? (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        AI 기반 실시간 원격 계측/
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        검치/자동 리포트 생성
                      </span>
                    </div>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        based real-time remote
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        metering, inspection, and
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlight1}`}>
                        automatic report generation
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.cardReport2}>
              <div className={styles.cardNumberReport2}>2</div>
              <h4 className={styles.cardLabelReport2}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardContentCenter}>
                  {language === "KOR" ? (
                    <>
                      핵심 지표 관리 미흡,
                      <br />
                      점검일지 수기작성
                    </>
                  ) : (
                    "Inadequate core metric management, manual inspection log creation"
                  )}
                </p>
              </div>
            </div>

            <div className={styles.connector}>
              <div className={styles.verticalLineReport2}></div>
            </div>

            <div className={styles.cardBottomReport2}>
              <div className={styles.dotReport2}></div>
              <h4 className={styles.cardLabelBottomReport2}>TO-BE</h4>
              <div className={styles.imageContainer}>
                <img src="/assets/remote/last2.svg" alt="Auto report" />
              </div>
              <div className={styles.cardHighlight}>
                <div className={styles.cardContentCenterMain}>
                  <p className={styles.cardBottomText}>
                    {language === "KOR"
                      ? "전기안전 원격검침·피크·낭비전력"
                      : "Remote electrical safety inspection, peak load, and wasted power"}
                  </p>
                  {language === "KOR" ? (
                    <span
                      className={`${styles.highlightText} ${styles.highlightReport2}`}>
                      자동 리포트(Excel) 생성
                    </span>
                  ) : (
                    <div className={styles.highlightMultiLine}>
                      <span
                        className={`${styles.highlightText} ${styles.highlightReport2}`}>
                        automatic report (Excel)
                      </span>
                      <span
                        className={`${styles.highlightText} ${styles.highlightReport2}`}>
                        generation
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className={styles.column}>
            <div className={styles.card2}>
              <div className={styles.cardNumber2}>3</div>
              <h4 className={styles.cardLabel2}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                {language === "KOR" ? (
                  <>
                    <p className={styles.cardSubtitleReport}>
                      데이터 수집 및 리포트 작성에
                    </p>
                    <p className={styles.cardContentCenter}>과도한 시간 소요</p>
                  </>
                ) : (
                  <>
                    <p className={styles.cardContentCenter}>
                      Excessive time spent
                    </p>
                    <p className={styles.cardSubtitleReport}>
                      on data collection and
                      <br /> report generation
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
                <img src="/assets/remote/last3.svg" alt="Efficiency" />
              </div>
              <div className={styles.cardContentCenterMain}>
                {language === "KOR" ? (
                  <div className={styles.highlightMultiLine}>
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      차단기별 안전·절감·효율
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      지표 통합 관리
                    </span>
                  </div>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      Integrated management of
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      safety, savings, and efficiency
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight2}`}>
                      metrics per circuit breaker
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className={styles.column}>
            <div className={styles.card3}>
              <div className={styles.cardNumber3}>4</div>
              <h4 className={styles.cardLabel3}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                {language === "KOR" ? (
                  <>
                    <p className={styles.cardSubtitleReport}>
                      시설별 점검 결과 공유 부재로
                    </p>
                    <p className={styles.cardContentCenter}>관리 비효율 발생</p>
                  </>
                ) : (
                  <>
                    <p className={styles.cardContentCenter}>
                      Management inefficiencies
                    </p>
                    <p className={styles.cardSubtitleReport}>
                      due to a lack of shared inspection <br /> results per
                      facility
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
                <img src="/assets/remote/last4.svg" alt="Collaboration" />
              </div>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardBottomText}>
                  {language === "KOR"
                    ? "사용자/관리자는"
                    : "Users and managers can"}
                </p>
                {language === "KOR" ? (
                  <span
                    className={`${styles.highlightText} ${styles.highlight4}`}>
                    즉시 공유·활용 가능
                  </span>
                ) : (
                  <div className={styles.highlightMultiLine}>
                    <span
                      className={`${styles.highlightText} ${styles.highlight4}`}>
                      immediately share and
                    </span>
                    <span
                      className={`${styles.highlightText} ${styles.highlight4}`}>
                      utilize data
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
