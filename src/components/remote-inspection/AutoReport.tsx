"use client";

import styles from "./RealTimeMonitoring.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AutoReport() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>데이터로 예측하는 전기안전 관리</h3>
        <h1 className={styles.mainTitle}>
          전기안전 직무고시 원격계측 / 자동 리포트 생성
        </h1>

        <div className={styles.comparisonContainerReport}>
          <div className={styles.column}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h4 className={styles.cardLabel}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitleReport}>
                  인력점검, 월점검(수작업), 열화상 수동점검
                </p>
                <div className={styles.cardContent}>
                  <ArrowForwardIcon className={styles.arrowIcon} />
                  <p className={styles.cardText}>육안 점검·사후 대응 위주</p>
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
                  <span className={styles.highlightText}>
                    AI 기반 실시간 원격 계측/
                    <br /> 검지/자동 리포트 생성
                    <span className={styles.highlightUnderlineReport1}></span>
                  </span>
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
                  핵심 지표 관리 미흡, 점검일지 수기작성
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
                    전기안전 원격검침·피크·난비전력
                  </p>
                  <span className={styles.highlightText}>
                    자동 리포트(Excel) 생성
                    <span className={styles.highlightUnderlineReport2}></span>
                  </span>
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
                <p className={styles.cardSubtitleReport}>
                  데이터 수집 및 리포트 작성에
                </p>
                <p className={styles.cardContentCenter}>과도한 시간 소요</p>
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
                <span className={styles.highlightText}>
                  차단기별 안전·점검·효율 <br /> 지표 통합 관리
                  <span className={styles.highlightUnderlineReport3}></span>
                </span>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className={styles.column}>
            <div className={styles.card3}>
              <div className={styles.cardNumber3}>4</div>
              <h4 className={styles.cardLabel3}>AS-IS</h4>
              <div className={styles.cardContentCenterMain}>
                <p className={styles.cardSubtitleReport}>
                  시설별 점검 결과 공유 부재로
                </p>
                <p className={styles.cardContentCenter}>관리 비효율 발생</p>
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
                <p className={styles.cardBottomText}>사용자/관리자는</p>
                <span className={styles.highlightText}>
                  즉시 공유·활용 가능
                  <span className={styles.highlightUnderlineReport4}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
