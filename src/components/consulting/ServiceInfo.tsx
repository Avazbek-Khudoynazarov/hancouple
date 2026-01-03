"use client";

import styles from "./ServiceInfo.module.css";

export default function ServiceInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.pageTitle}>고지서 역산, 계약전력 최적화</h3>
        <h1 className={styles.mainTitle}>서비스 안내</h1>
        <p className={styles.description}>
          서비스 안내 페이지입니다. 추후 업데이트 예정입니다.
        </p>
      </div>
    </div>
  );
}
