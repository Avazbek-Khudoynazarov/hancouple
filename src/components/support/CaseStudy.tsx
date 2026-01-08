"use client";

import styles from "./CaseStudy.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudy() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>
            {language === "KOR" ? "설치/적용 사례" : "Case Studies"}
          </span>
          <h2 className={styles.sectionTitle}>
            {language === "KOR" ? (
              <>
                렌탈 서비스 도입으로,
                <br />
                <span className={styles.highlight}>
                  전기요금은 줄고 안전은
                  <br className={styles.important} /> 강화
                </span>
                시켰습니다.
              </>
            ) : (
              <>
                By introducing rental services,
                <br />
                we{" "}
                <span className={styles.highlight}>
                  reduced electricity costs while enhancing safety.
                </span>
              </>
            )}
          </h2>
        </div>

        <div className={styles.cardsSection}>
          <div className={`${styles.cardsWrapper} ${styles.cardsDesktop}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/card1.png"
                  : "/assets/contact/card1Eng.png"
              }
              alt={language === "KOR" ? "사용량 절감" : "Usage Reduction"}
              className={styles.cardImage}
              draggable={false}
            />
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/card2.png"
                  : "/assets/contact/card2Eng.png"
              }
              alt={
                language === "KOR"
                  ? "전기요금 절감"
                  : "Electricity Bill Reduction"
              }
              className={styles.cardImage}
              draggable={false}
            />
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/card3.png"
                  : "/assets/contact/card3Eng.png"
              }
              alt={
                language === "KOR" ? "피크전력 관리" : "Peak Power Management"
              }
              className={styles.cardImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.cardsWrapper} ${styles.cardsMobile}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/mobile/card1.png"
                  : "/assets/contact/mobile/card1Eng.png"
              }
              alt={language === "KOR" ? "사용량 절감" : "Usage Reduction"}
              className={styles.cardImage}
              draggable={false}
            />
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/mobile/card2.png"
                  : "/assets/contact/mobile/card2Eng.png"
              }
              alt={
                language === "KOR"
                  ? "전기요금 절감"
                  : "Electricity Bill Reduction"
              }
              className={styles.cardImage}
              draggable={false}
            />
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/mobile/card3.png"
                  : "/assets/contact/mobile/card3Eng.png"
              }
              alt={
                language === "KOR" ? "피크전력 관리" : "Peak Power Management"
              }
              className={styles.cardImage}
              draggable={false}
            />
          </div>
          <p className={styles.note}>
            {language === "KOR"
              ? "* 데이터 비교 [요양원 사례]"
              : "* Data comparison [Nursing home case]"}
          </p>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.bottomText}>
            {language === "KOR" ? (
              <>
                초기 투자비 부담 없이,
                <br />
                장기 렌탈 서비스만으로도 이만큼
                <br className={styles.important} /> 절감할 수 있습니다.
              </>
            ) : (
              <>
                Achieve these savings with long-term rental service alone,
                <br />
                without the burden of initial investment costs.
              </>
            )}
          </p>
          <img
            src="/assets/contact/vertical.png"
            alt=""
            className={styles.verticalLine}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
