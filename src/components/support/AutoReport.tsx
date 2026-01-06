"use client";

import styles from "./AutoReport.module.css";

export default function AutoReport() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Main Header */}
        <div className={styles.mainHeader}>
          <p className={styles.subTitle}>
            이제 현장점검은 그만 ... 원격으로 점검하세요
          </p>
          <h2 className={styles.mainTitle}>
            전기안전 직무고시 자동리포트 생성
          </h2>
          <p className={styles.description}>
            반기를게 현장에 가서 점검하실 필요 없이 자동으로 생성된{" "}
            <br className={styles.important} /> 리포트를 원격으로 확인하실 수
            있습니다.
          </p>
        </div>

        {/* Main Table */}
        <div className={styles.tableWrapper}>
          <img
            src="/assets/contact/table1.png"
            alt="전기안전 직무고시 자동리포트"
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
              전기안전 일일 보고용 자동 리포트 생성
            </h3>
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src="/assets/contact/table2.png"
              alt="일별 리포트"
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src="/assets/contact/table3.png"
              alt="월별 리포트"
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
            <h3 className={styles.checkTitle}>피크전력 자동 리포트 생성</h3>
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src="/assets/contact/table4.png"
              alt="일별 리포트"
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src="/assets/contact/table5.png"
              alt="월별 리포트"
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
              낭비전력 자동 리포트 생성 (차단기별 관리 필요)
            </h3>
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src="/assets/contact/table6.png"
              alt="일별 리포트"
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
          <div className={`${styles.tableWrapper} ${styles.scrollableTable}`}>
            <img
              src="/assets/contact/table7.png"
              alt="월별 리포트"
              className={styles.checkTableImage}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
