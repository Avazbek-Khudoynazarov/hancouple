"use client";

import styles from "./Report.module.css";

export default function Report() {
  const cards = [
    {
      tag: "전기요금 절감",
      title: "계약전력 · 최대수요전력 문제",
      subtitle: "진단 + 운영매뉴얼 제공",
      background: "/assets/contact/1.png",
    },
    {
      tag: "근로자 전기안전 강화",
      title: "차단기별 전력 패턴 분석 + 위험성 평가",
      subtitle: "중대재해 예방 솔루션 제공",
      background: "/assets/contact/2.png",
    },
    {
      tag: "운영 개선 가시화",
      title: "진단 전 후 비교 리포트 제공",
      subtitle: "",
      background: "/assets/contact/3.png",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Solution</span>
        <h2 className={styles.sectionTitle}>
          네트워크코리아가 제공하는 솔루션
        </h2>
      </div>

      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card}`}
            style={{ backgroundImage: `url(${card.background})` }}>
            <div className={styles.cardContent}>
              <span className={styles.tag}>{card.tag}</span>
              <div className={styles.textWrapper}>
                <p className={styles.cardTitle}>{card.title}</p>
                {card.subtitle && (
                  <p className={styles.cardSubtitle}>{card.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
