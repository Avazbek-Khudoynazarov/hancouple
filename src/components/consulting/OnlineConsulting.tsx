"use client";

import styles from "./OnlineConsulting.module.css";

export default function OnlineConsulting() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>최근 3개월 전기요금고지서</h3>
        <h1 className={styles.mainTitle}>온라인 무료컨설팅</h1>
        <p className={styles.description}>
          온라인 무료컨설팅 페이지입니다. 추후 업데이트 예정입니다.
        </p>
      </div>
    </div>
  );
}
