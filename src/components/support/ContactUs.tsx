"use client";

import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      {/* Section 1: Header */}
      <div className={styles.headerSection}>
        <h3 className={styles.pageTitle}>
          문의하기 (제품·솔루션 선택 가능, 파일첨부)
        </h3>
        <h1 className={styles.mainTitle}>
          절약금액을 운영하고,
          <br />
          초기 투자비 부담 없는 <br className={styles.important} />
          <span className={styles.highlight}>장기 렌탈(임대) 서비스</span> 제공
        </h1>
      </div>

      {/* Section 2: AI Description with Background */}
      <div className={styles.aiSection}>
        <div className={styles.aiContent}>
          <p className={styles.aiSubtitle}>
            전기요금은 오르고, 사고 위험은 늘어나는데 ⋯
          </p>
          <h2 className={styles.aiTitle}>아직도 계량기만 믿으십니까?</h2>

          <p className={styles.aiQuote}>
            "AI가 먼저 알립니다. 위험은 1초만에 차단. 낭비는 데이터로 추적.
            전기안전 · 에너지절감, 이제 AI가 관리합니다."
          </p>

          <div className={styles.aiDescription}>
            <p>보이지 않는 전기 흐름을 AI가 실시간으로 분석하고 예측합니다.</p>
            <p>잠재된 누전, 과부하, 온도 상승, 절연저항 저하 ⋯</p>
            <p>AI는 작은 변화를 놓치지 않습니다.</p>
          </div>

          <p className={styles.aiConclusion}>
            전기요금의 숨은 원인까지 AI가 자동으로 찾아내고 설명합니다.
          </p>
        </div>
      </div>

      {/* Section 3: Solution Summary */}
      <div className={styles.solutionSection}>
        <p className={styles.solutionText}>
          AI 기반 전기안전 + AI 기반 에너지 절감
        </p>
        <p className={styles.solutionHighlight}>
          두 가지를 동시에 해결하는 단 하나의 솔루션
        </p>
        <img
          src="/assets/contact/vertical.png"
          alt=""
          draggable={false}
          className={styles.verticalLine}
        />
      </div>
    </div>
  );
}
