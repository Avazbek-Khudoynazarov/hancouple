"use client";

import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Vision</h3>
        <h1 className={styles.title}>
          관리자와 기술자가 함께
          <br />
          <span className={styles.highlight}>
            스마트하게 에너지를 관리하는 시대
          </span>
          를 제공합니다.
        </h1>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            에너지를 아끼는 습관, 비용을 줄이는 기술
          </h2>

          <div className={styles.description}>
            <p>네트워크코리아는 단순한 솔루션 제공을 넘어,</p>
            <p>
              전기기술자와 시설 담당자의 효율적인 업무 수행과 전문성 강화를
              돕습니다.
            </p>
            <p>
              전기요금에 대한 감정 없이, 전기화재에 대한 두려움 없이, 과학적는
              데이터를 보고 판단하고,
            </p>
            <p>
              전기기술자는 현장 발로 없이 원격으로 분석을 파악하고 조치하는
              시대.
            </p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.footer}>
            <p className={styles.footerSubtext}>
              그 길을 네트워크코리아가 함께 열어갑니다.
            </p>
            <p className={styles.footerSubtext}>감사합니다.</p>
            <p className={styles.signature}>주식회사 네트워크코리아</p>
          </div>
        </div>
      </div>
    </div>
  );
}
