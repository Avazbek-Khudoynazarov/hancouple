"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Consulting.module.css";
import EastIcon from "@mui/icons-material/East";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "01",
    icon: "/assets/homepage/card/1.png",
    title: "차단기별 전기요금\n상승 요인 분석",
  },
  {
    id: "02",
    icon: "/assets/homepage/card/2.png",
    title: "위험전력 유형 진단 및\n사전 예방 알림",
  },
  {
    id: "03",
    icon: "/assets/homepage/card/3.png",
    title: "낭비전력∙피크전력\n동시사용 리스트 제공",
  },
  {
    id: "04",
    icon: "/assets/homepage/card/4.png",
    title: "중대재해 예방 및\n화재 예방을 위한 실시간 계측",
  },
  {
    id: "05",
    icon: "/assets/homepage/card/5.png",
    title: "시간대별 · 일별 · 월별\n전력 데이터 리포트 제공",
  },
];

export default function Consulting() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardsWrapper = cardsWrapperRef.current;

    if (!section || !cardsWrapper) return;

    // Calculate the scroll distance
    const cards = cardsWrapper.querySelectorAll(`.${styles.card}`);
    const cardWidth = 656;
    const gap = 22;
    const totalWidth = (cardWidth + gap) * cards.length - gap;
    const paddingLeft = 80;
    const marginRight = 374; // Stop with 224px margin on the right
    const scrollDistance =
      totalWidth + paddingLeft - (window.innerWidth - marginRight);

    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance * 1.5}`, // Multiply by 1.5 for smoother scroll
        scrub: 1, // Smooth scrubbing effect
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(cardsWrapper, {
      x: -scrollDistance,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="forBackImage">
      <section ref={sectionRef} className={styles.consulting}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.category}>Consulting</h3>
            <h2 className={styles.title}>
              전기요금 절감책으로 월 렌탈 하세요 !<br />
              체계적인 전기요금 컨설팅
            </h2>
            <button className={styles.moreButton}>
              자세한 보기
              <EastIcon />
            </button>
          </div>

          <div className={styles.cardsContainer}>
            <div className={styles.cardsOverflow}>
              <div ref={cardsWrapperRef} className={styles.cardsWrapper}>
                {cards.map((card) => (
                  <div key={card.id} className={styles.card}>
                    <div className={styles.cardIcon}>
                      <img src={card.icon} alt={`Card ${card.id}`} />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardNumber}>{card.id}</div>
                      <h4 className={styles.cardTitle}>
                        {card.title
                          .split("\n")
                          .map((line: string, i: number) => (
                            <span key={i}>
                              {line}
                              {i < card.title.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Outside pinned area */}
      <section className={styles.solutionSection}>
        <div className={styles.solutionContainer}>
          <div className={styles.solutionLeft}>
            <h3 className={styles.category}>Solution</h3>
            <h2 className={styles.title}>
              실시간으로 지키는 "전기안전"
              <br />
              데이터로 만드는 "에너지 효율"
            </h2>
            <p className={styles.solutionDescription}>
              성상과 한국산업안전보건공단, 초당청이 인정한 핵심기술
              <br />
              위험 요소를 조기에 발견하고, 플필요한 낭비 전력을 줄이며, 자동
              리포트를 제공합니다.
            </p>

            <div className={styles.solutionBox}>
              <div className={styles.solutionBoxHeader}>
                두 종류의 신호의 데이터를 받아서 분석, 통신하는
              </div>
              <h4 className={styles.solutionBoxTitle}>
                스마트 전기안전 모니터링 솔루션
              </h4>
              <div className={styles.systemImage}>
                <img src="/assets/homepage/system.png" alt="System Diagram" />
              </div>
            </div>
          </div>

          <div className={styles.solutionRight}>
            <img
              src="/assets/homepage/rightblock.png"
              alt="Smart Monitoring Solution"
            />
            <div className={styles.imageCaption}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
