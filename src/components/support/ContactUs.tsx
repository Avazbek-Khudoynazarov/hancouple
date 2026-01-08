"use client";

import styles from "./ContactUs.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactUs() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      {/* Section 1: Header */}
      <div className={styles.headerSection}>
        <h3 className={styles.pageTitle}>
          {language === "KOR"
            ? "문의하기 (제품·솔루션 선택 가능, 파일첨부)"
            : "Contact Us (Select products/solutions, attach files)"}
        </h3>
        <h1 className={styles.mainTitle}>
          {language === "KOR" ? (
            <>
              절약금액을 운영하고,
              <br />
              초기 투자비 부담 없는 <br className={styles.important} />
              <span className={styles.highlight}>장기 렌탈(임대) 서비스</span>{" "}
              제공
            </>
          ) : (
            <>
              Manage savings and provide
              <br />
              <span className={styles.highlight}>long-term rental services</span>{" "}
              with no initial investment costs.
            </>
          )}
        </h1>
      </div>

      {/* Section 2: AI Description with Background */}
      <div className={styles.aiSection}>
        <div className={styles.aiContent}>
          <p className={styles.aiSubtitle}>
            {language === "KOR"
              ? "전기요금은 오르고, 사고 위험은 늘어나는데 ⋯"
              : "Electricity rates are rising, accident risks are increasing ..."}
          </p>
          <h2 className={styles.aiTitle}>
            {language === "KOR"
              ? "아직도 계량기만 믿으십니까?"
              : "Do you still rely only on your meter?"}
          </h2>

          <p className={styles.aiQuote}>
            {language === "KOR"
              ? '"AI가 먼저 알립니다. 위험은 1초만에 차단. 낭비는 데이터로 추적. 전기안전 · 에너지절감, 이제 AI가 관리합니다."'
              : '"AI alerts you first. Risks are blocked within 1 second. Waste is tracked with data. Electrical safety · Energy savings, now managed by AI."'}
          </p>

          <div className={styles.aiDescription}>
            {language === "KOR" ? (
              <>
                <p>
                  보이지 않는 전기 흐름을 AI가 실시간으로 분석하고 예측합니다.
                </p>
                <p>잠재된 누전, 과부하, 온도 상승, 절연저항 저하 ⋯</p>
                <p>AI는 작은 변화를 놓치지 않습니다.</p>
              </>
            ) : (
              <>
                <p>
                  AI analyzes and predicts invisible electrical flows in real
                  time.
                </p>
                <p>
                  Hidden leakage, overloads, temperature rises, insulation
                  resistance drops......
                </p>
                <p>AI doesn&apos;t miss even the most minor changes.</p>
              </>
            )}
          </div>

          <p className={styles.aiConclusion}>
            {language === "KOR"
              ? "전기요금의 숨은 원인까지 AI가 자동으로 찾아내고 설명합니다."
              : "AI automatically finds and explains the hidden causes of your electricity bills."}
          </p>
        </div>
      </div>

      {/* Section 3: Solution Summary */}
      <div className={styles.solutionSection}>
        <p className={styles.solutionText}>
          {language === "KOR"
            ? "AI 기반 전기안전 + AI 기반 에너지 절감"
            : "AI-based electrical safety + AI-based energy savings."}
        </p>
        <p className={styles.solutionHighlight}>
          {language === "KOR"
            ? "두 가지를 동시에 해결하는 단 하나의 솔루션"
            : "The only solution that solves both simultaneously."}
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
