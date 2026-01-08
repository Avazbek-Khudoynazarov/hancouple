"use client";

import styles from "./Report.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Report() {
  const { language } = useLanguage();

  const cardsKor = [
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

  const cardsEng = [
    {
      tag: "Electricity bill reduction",
      title: "Contract power & maximum demand power problem diagnosis",
      subtitle: "+ Operational manual provision",
      background: "/assets/contact/1.png",
    },
    {
      tag: "Enhanced worker electrical safety",
      title: "Circuit breaker-specific power pattern Analysis + risk assessment",
      subtitle: "providing solutions for preventing serious accidents",
      background: "/assets/contact/2.png",
    },
    {
      tag: "Operational improvement visualization",
      title: "Pre-and post-diagnosis comparison report provision",
      subtitle: "",
      background: "/assets/contact/3.png",
    },
  ];

  const cards = language === "KOR" ? cardsKor : cardsEng;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Solution</span>
        <h2 className={styles.sectionTitle}>
          {language === "KOR"
            ? "네트워크코리아가 제공하는 솔루션"
            : "The solution provided by Network Korea"}
        </h2>
      </div>

      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card}`}
            style={{ backgroundImage: `url(${card.background})` }}>
            <div className={styles.cardContent}>
              <span
                className={`${styles.tag} ${language === "ENG" ? styles.tagEng : ""}`}>
                {card.tag}
              </span>
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
