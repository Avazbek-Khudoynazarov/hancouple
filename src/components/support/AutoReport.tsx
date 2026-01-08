"use client";

import styles from "./AutoReport.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AutoReport() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Main Header */}
        <div className={styles.mainHeader}>
          <p className={styles.subTitle}>
            {language === "KOR"
              ? "이제 현장점검은 그만 ... 원격으로 점검하세요"
              : "No more on-site inspections ... Inspect remotely"}
          </p>
          <h2 className={styles.mainTitle}>
            {language === "KOR"
              ? "전기안전 직무고시 자동리포트 생성"
              : "Automatic generation of electrical safety duty inspection reports"}
          </h2>
          <p className={styles.description}>
            {language === "KOR" ? (
              <>
                반기를게 현장에 가서 점검하실 필요 없이 자동으로 생성된{" "}
                <br className={styles.important} /> 리포트를 원격으로 확인하실 수
                있습니다.
              </>
            ) : (
              "No need for the hassle of on-site inspections; remotely review automatically generated reports."
            )}
          </p>
        </div>

        {/* Main Table */}
        <div className={styles.tableWrapper}>
          <img
            src={
              language === "KOR"
                ? "/assets/contact/table1.png"
                : "/assets/contact/table1Eng.png"
            }
            alt={
              language === "KOR"
                ? "전기안전 직무고시 자동리포트"
                : "Electrical Safety Duty Inspection Auto Report"
            }
            className={styles.tableImage}
            draggable={false}
          />
        </div>

        {/* Check 01 */}
        <div className={styles.checkSection}>
          <div className={styles.checkHeader}>
            <span className={`${styles.checkLabel} ${styles.checkLabel01}`}>
              Check 01
            </span>
            <h3 className={styles.checkTitle}>
              {language === "KOR"
                ? "전기안전 일일 보고용 자동 리포트 생성"
                : "Daily Electrical Safety Report Generation"}
            </h3>
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/table2.png"
                  : "/assets/contact/table2Eng.png"
              }
              alt={language === "KOR" ? "일별 리포트" : "Daily Report"}
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/table3.png"
                  : "/assets/contact/table3Eng.png"
              }
              alt={language === "KOR" ? "월별 리포트" : "Monthly Report"}
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
        </div>

        {/* Check 02 */}
        <div className={styles.checkSection}>
          <div className={styles.checkHeader}>
            <span className={`${styles.checkLabel} ${styles.checkLabel02}`}>
              Check 02
            </span>
            <h3 className={styles.checkTitle}>
              {language === "KOR"
                ? "피크전력 자동 리포트 생성"
                : "Automatic peak power report generation"}
            </h3>
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/table4.png"
                  : "/assets/contact/table4Eng.png"
              }
              alt={language === "KOR" ? "일별 리포트" : "Daily Report"}
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/table5.png"
                  : "/assets/contact/table5Eng.png"
              }
              alt={language === "KOR" ? "월별 리포트" : "Monthly Report"}
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
        </div>

        {/* Check 03 */}
        <div className={styles.checkSection}>
          <div className={styles.checkHeader}>
            <span className={`${styles.checkLabel} ${styles.checkLabel03}`}>
              Check 03
            </span>
            <h3 className={styles.checkTitle}>
              {language === "KOR"
                ? "낭비전력 자동 리포트 생성 (차단기별 관리 필요)"
                : "Automatic generation of wasted power reports (requires circuit breaker-specific management)"}
            </h3>
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/table6.png"
                  : "/assets/contact/table6Eng.png"
              }
              alt={language === "KOR" ? "일별 리포트" : "Daily Report"}
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src={
                language === "KOR"
                  ? "/assets/contact/table7.png"
                  : "/assets/contact/table7Eng.png"
              }
              alt={language === "KOR" ? "월별 리포트" : "Monthly Report"}
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
