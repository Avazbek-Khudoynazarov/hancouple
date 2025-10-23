"use client";

import styles from "./AkigoMessage.module.css";

export default function AkigoMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Akigo's Message</h3>
        <h1 className={styles.title}>
          스마트 전력분석 솔루션<br />
          <span className={styles.highlight}>아끼고(Akigo)</span>가 지향하는 메시지
        </h1>

        <div className={styles.diagramContainer}>
          <img
            src="/assets/introduction/akigo.png"
            alt="Akigo Message Diagram"
            className={styles.diagram}
          />
        </div>
      </div>
    </div>
  );
}
